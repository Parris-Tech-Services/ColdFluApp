# Repository hardening follow-ups

**Status:** engineering/governance backlog  
**Updated:** 15 September 2026

This file captures repository-level gaps raised during the independent Claude cough hand-off review and checks performed during the broader health-scope audit. These are not medical claims.

## Verified during this audit

- [x] A real CI quality workflow exists at `.github/workflows/quality-gates.yml`.
- [x] Lint, TypeScript checks, unit tests, media-link checks, internal-link checks and spelling checks run in CI; build and browser E2E follow them when earlier gates pass.
- [x] The two dead Cochrane podcast URLs that were causing the media-link gate to fail were replaced with current ABC health-programme links.
- [x] The spelling dictionary was expanded for legitimate health-programme terminology rather than weakening the spelling gate.

## Governance

- [ ] Add `CODEOWNERS` once the actual accountable clinical/evidence/editorial reviewer GitHub identities are known. Do not invent reviewer ownership merely to satisfy a repository control.
- [ ] Add or tighten a pull-request template for health-content changes: content status, source verification, population/jurisdiction, safety/triage impact, reviewer status and whether personal information is present.
- [ ] Choose licensing deliberately. Consider whether code and public educational content should use different licences; do not assume public repository visibility grants reuse rights.

## Evidence schema

- [ ] Add source-verification depth/status so a search-snippet lead cannot look equivalent to a source that has been opened, read and checked in full.
- [ ] Extend claim outcomes beyond the early respiratory prototype. At minimum consider symptom frequency, symptom severity, sleep disruption, function, quality of life, diagnostic accuracy, disease activity/progression, hospitalisation and mortality where relevant.
- [ ] Keep source verification status separate from evidence certainty: a high-quality study can still be only partially verified during intake.

## Imported/unverified material

- [ ] Review Dependabot/security-update behaviour for lockfiles nested inside `inputs/` and other deliberately unverified imported packages. Avoid spending maintenance effort on archived prototypes unless those dependencies are actually built or shipped.
- [ ] If a nested lockfile is removed from an unverified import to prevent automated dependency churn, preserve enough provenance to reconstruct what was received and document the decision.
- [ ] Keep Claude/ChatGPT external returns unchanged under `inputs/agent-returns/...` and promote only source-checked claims into canonical content.

## Dependency/security hygiene

- [ ] Investigate the dependency vulnerabilities reported by `npm ci`/`npm audit` in CI and determine which are runtime, development-only or inherited from tooling before applying updates. Do not use an indiscriminate major-version `npm audit fix` on a health-information app.
- [ ] Re-run the full quality and E2E suite after dependency remediations.

## Broader-scope consequence

The project now plans first aid, medicines, mental health, child health, aged care/nursing and other higher-risk domains. Before any of these become public clinical content, re-assess whether the original respiratory-era schema, review gates, correction workflow and UI safety patterns are sufficient for each new risk class.
