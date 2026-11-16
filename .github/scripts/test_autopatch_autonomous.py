"""Deterministic tests for the self-running AutoPatch safety gate (no network)."""
import os
import sys
import unittest
from pathlib import Path
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parent))
import autopatch_autonomous as m

REPO = "Parris-Tech-Services/ColdFluApp"
OLD = "a" * 40
NEW = "b" * 40


def candidate():
    return {
        "number": 16, "state": "open", "draft": False,
        "title": "build(deps): bump postcss from 8.5.18 to 8.5.19",
        "user": {"login": "dependabot[bot]"},
        "base": {"ref": "main", "sha": OLD},
        "head": {"ref": "dependabot/npm_and_yarn/postcss-8.5.19", "sha": NEW,
                 "repo": {"full_name": REPO}},
        "mergeable": True, "changed_files": 1,
    }


class PolicyTests(unittest.TestCase):
    def test_only_patch_updates_with_one_package(self):
        self.assertEqual(m.parse_patch_title(
            "build(deps): bump postcss from 8.5.18 to 8.5.19")["to"], "8.5.19")
        for title in (
            "build(deps): bump postcss from 8.5.18 to 9.0.0",
            "build(deps): bump postcss from 8.5.18 to 8.6.0",
            "build(deps): bump postcss from 8.5.18 to 8.5.18",
            "build(deps): bump the npm group across 1 directory with 4 updates",
            "build(deps): bump actions/checkout from 4 to 7",
            "build(deps): bump postcss from 8.5.18 to 8.5.19-rc.1",
            "build(deps): bump postcss from 8.5.18 to 8.5.19 and vite",
        ):
            with self.subTest(title=title):
                self.assertIsNone(m.parse_patch_title(title))

    def test_safely_rejects_nonbot_forks_workflow_edits_and_majors(self):
        pr = candidate()
        file = [{"filename": "package-lock.json", "status": "modified"}]
        self.assertTrue(m.allowed_pr(pr, REPO, file)[0])
        self.assertTrue(m.allowed_pr(pr, REPO.swapcase(), file)[0])
        for change in (
            {"user": {"login": "any-human"}},
            {"head": {"ref": "dependabot/patch", "repo": {"full_name": "other/fork"}}},
            {"draft": True},
            {"base": {"ref": "develop", "sha": OLD}},
            {"title": "bump postcss from 8.5.18 to 9.1.0"},
            {"mergeable": None},
        ):
            with self.subTest(change=change):
                self.assertFalse(m.allowed_pr({**pr, **change}, REPO, file)[0])
        for bad in (".github/workflows/ci.yml", "src/app.ts", ".npmrc"):
            self.assertFalse(m.allowed_pr(pr, REPO, file +
                                         [{"filename": bad, "status": "modified"}])[0])

    def test_ci_requires_successful_named_job_and_no_unknown(self):
        good = {"total_count": 2, "check_runs": [
            {"name": "verify", "status": "completed", "conclusion": "success"},
            {"name": "lint", "status": "completed", "conclusion": "success"},
        ]}
        self.assertTrue(m.ci_green(good, {"statuses": []}, "verify"))
        self.assertFalse(m.ci_green(good, {"statuses": [{"state": "pending"}]}, "verify"))
        self.assertFalse(m.ci_green(good, {"statuses": []}, "build"))
        for state in ("failure", "cancelled", None):
            broken = {"total_count": 2, "check_runs": [
                good["check_runs"][0], {"name": "lint", "status": "completed",
                                        "conclusion": state}]}
            self.assertFalse(m.ci_green(broken, {"statuses": []}, "verify"))

    def test_every_locked_copy_must_reach_target(self):
        import json
        old = json.dumps({"packages": {
            "node_modules/postcss": {"version": "8.5.18"},
            "node_modules/vite/node_modules/postcss": {"version": "8.5.17"}
        }})
        self.assertEqual(m.locked_versions(old, "postcss"), ["8.5.17", "8.5.18"])
        result = {"results": [{"packages": [
            {"package": {"name": "postcss"}, "vulnerabilities": [{"id": "GHSA-1"}],
             "groups": [{"ids": ["GHSA-1", "CVE-1"]}]}
        ]}]}
        self.assertEqual(m.advisories_for(result, "postcss"), {"GHSA-1", "CVE-1"})

    def test_unverified_or_failed_ci_never_calls_merge_api(self):
        pr = candidate()
        checks = {"total_count": 1, "check_runs": [
            {"name": "verify", "status": "completed", "conclusion": "success"}]}
        def fake_api(repo, path, token, method="GET", body=None):
            if path.startswith("pulls?"):
                return [pr]
            if path.startswith("pulls/16/files"):
                return [{"filename": "package-lock.json", "status": "modified"}]
            if path.startswith("pulls/16/merge"):
                raise AssertionError("unverified changes must never merge")
            if path.startswith("pulls/16"):
                return pr
            if "check-runs" in path:
                return checks
            if path.endswith("/status"):
                return {"statuses": []}
            if path.startswith("git/ref"):
                return {"object": {"sha": OLD}}
            raise AssertionError(path)
        with patch.dict(os.environ, {"GITHUB_REPOSITORY": REPO}), \
             patch.object(m, "api", side_effect=fake_api), \
             patch.object(m, "public_db"), \
             patch.object(m, "git_blob", return_value=b"{}"), \
             patch.object(m, "independently_verified", return_value=(False, "unresolved")):
            outcome = m.process(REPO, "fake-token", "verify", dry_run=False)
        self.assertEqual(outcome[0]["status"], "BLOCKED")
        self.assertEqual(outcome[0]["reason"], "offline_vulnerability_check:ValueError")

    def test_clean_verified_patch_can_use_dry_run_without_merging(self):
        pr = candidate()
        calls = []
        def fake_api(repo, path, token, method="GET", body=None):
            calls.append(path)
            if path.startswith("pulls?"):
                return [pr]
            if path.startswith("pulls/16/files"):
                return [{"filename": "package-lock.json", "status": "modified"}]
            if path.startswith("pulls/16/merge"):
                raise AssertionError("dry run must never merge")
            if path.startswith("pulls/16"):
                return pr
            if "check-runs" in path:
                return {"total_count": 1, "check_runs": [
                    {"name": "verify", "status": "completed", "conclusion": "success"}]}
            if path.endswith("/status"):
                return {"statuses": []}
            if path.startswith("git/ref"):
                return {"object": {"sha": OLD}}
            raise AssertionError(path)
        with patch.dict(os.environ, {"GITHUB_REPOSITORY": REPO}), \
             patch.object(m, "api", side_effect=fake_api), \
             patch.object(m, "public_db"), \
             patch.object(m, "git_blob", return_value=b"{}"), \
             patch.object(m, "independently_verified", return_value=(True, "clean")):
            outcome = m.process(REPO, "fake-token", "verify", dry_run=True)
        self.assertEqual(outcome[0]["status"], "ELIGIBLE_DRY_RUN")
        self.assertFalse(any(x.startswith("pulls/16/merge") for x in calls))


    def test_stale_pr_refreshes_only_with_sha_guard_and_explicit_readonly_qa(self):
        pr = candidate()
        fresh = {**pr,
                 "head": {**pr["head"], "sha": "c" * 40},
                 "base": {"ref": "main", "sha": "d" * 40}}
        calls = []
        def fake_api(repo, path, token, method="GET", body=None):
            calls.append((path, method, body))
            if path.endswith("update-branch"):
                self.assertEqual(method, "PUT")
                self.assertEqual(body, {"expected_head_sha": NEW})
                return {"message": "Updating"}
            if path == "pulls/16":
                return fresh
            if path == "git/ref/heads/main":
                return {"object": {"sha": "d" * 40}}
            if path.endswith("/dispatches"):
                self.assertEqual(method, "POST")
                self.assertEqual(body, {"ref": "dependabot/npm_and_yarn/postcss-8.5.19"})
                return {}
            raise AssertionError(path)
        status = m.refresh_stale_pr(REPO, pr, "fake-token",
                                    "quality-gates.yml", api_call=fake_api,
                                    pause=lambda delay: self.fail("should not wait"))
        self.assertEqual(status, "REBASED_CI_DISPATCHED")
        self.assertEqual([c[0] for c in calls],
                         ["pulls/16/update-branch", "pulls/16",
                          "git/ref/heads/main",
                          "actions/workflows/quality-gates.yml/dispatches"])
        self.assertFalse(any("/merge" in c[0] for c in calls))

    def test_stale_pr_with_dry_run_does_not_write_or_download_private_packages(self):
        pr = candidate()
        paths = []
        def fake_api(repo, path, token, method="GET", body=None):
            paths.append((path, method))
            if path.startswith("pulls?"):
                return [pr]
            if path == "pulls/16":
                return pr
            if path == "pulls/16/files?per_page=100":
                return [{"filename": "package-lock.json", "status": "modified"}]
            if path == "git/ref/heads/main":
                return {"object": {"sha": "d" * 40}}
            raise AssertionError(path)
        with patch.dict(os.environ, {"GITHUB_REPOSITORY": REPO}), \
             patch.object(m, "api", side_effect=fake_api), \
             patch.object(m, "public_db", side_effect=AssertionError("DB read blocked")), \
             patch.object(m, "git_blob", side_effect=AssertionError("lockfile read blocked")):
            out = m.process(REPO, "fake-token", "quality", dry_run=True,
                            verification_workflow="quality-gates.yml")
        self.assertEqual(out[0]["status"], "STALE_BRANCH_DRY_RUN")
        self.assertFalse(any(method != "GET" for _, method in paths))

    def test_refresh_rejects_unapproved_workflow_and_rebase_race(self):
        pr = candidate()
        with self.assertRaises(ValueError):
            m.refresh_stale_pr(REPO, pr, "fake-token", "../not-allowed.yml",
                                api_call=lambda *a, **kw: self.fail("unexpected network"))
        def fake_api(repo, path, token, method="GET", body=None):
            if path.endswith("update-branch"):
                raise ValueError("SHA changed")
            raise AssertionError(path)
        with self.assertRaises(ValueError):
            m.refresh_stale_pr(REPO, pr, "fake-token",
                                "quality-gates.yml", api_call=fake_api)


    def test_merge_denial_exposes_only_http_status_never_response(self):
        import io
        import urllib.error
        pr = candidate()
        calls = []
        def fake_api(repo, path, token, method="GET", body=None):
            calls.append((path, method))
            if path.startswith("pulls?"):
                return [pr]
            if path == "pulls/16":
                return pr
            if path == "pulls/16/files?per_page=100":
                return [{"filename": "package-lock.json", "status": "modified"}]
            if path == "git/ref/heads/main":
                return {"object": {"sha": OLD}}
            if "check-runs" in path:
                return {"total_count": 1, "check_runs": [
                    {"name": "quality", "status": "completed", "conclusion": "success"}]}
            if path.endswith("/status"):
                return {"statuses": []}
            if path.endswith("/merge"):
                raise urllib.error.HTTPError(
                    "https://api.github.com", 405,
                    "Never log private failure details", {}, io.BytesIO(b"secret"))
            raise AssertionError(path)
        with patch.dict(os.environ, {"GITHUB_REPOSITORY": REPO}), \
             patch.object(m, "api", side_effect=fake_api), \
             patch.object(m, "public_db"), \
             patch.object(m, "git_blob", return_value=b"{}"), \
             patch.object(m, "independently_verified", return_value=(True, "clean")):
            outcome = m.process(REPO, "fake-token", "quality", dry_run=False)
        self.assertEqual(outcome[0]["status"], "BLOCKED")
        self.assertEqual(outcome[0]["reason"], "merge_request:HTTP_405")
        self.assertNotIn("secret", str(outcome))
        self.assertEqual(sum(p.endswith("/merge") for p, _ in calls), 1)


if __name__ == "__main__":
    unittest.main()
