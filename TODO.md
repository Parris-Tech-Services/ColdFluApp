# Working backlog

Status key: `[ ]` not started, `[-]` in progress, `[x]` complete.

Updated 15 September 2026. The repository began as a 28-module cold/flu programme and now has a broader health-reference roadmap. This file stays high level; the detailed topic-by-topic checklist is in [docs/HEALTH_TOPIC_MASTER_ROADMAP.md](docs/HEALTH_TOPIC_MASTER_ROADMAP.md).

## Project governance

- [x] Capture governance prerequisites and review/accountability expectations in [docs/DECISIONS.md](docs/DECISIONS.md) and [docs/GOVERNANCE_AND_ACCOUNTABILITY.md](docs/GOVERNANCE_AND_ACCOUNTABILITY.md).
- [x] Draft reviewer-conflict, funding, and correction policies; accountable human approval is still pending.
- [x] Separate external appointments, reviews, testing and approvals from this actionable backlog in [docs/EXTERNAL_LAUNCH_PREREQUISITES.md](docs/EXTERNAL_LAUNCH_PREREQUISITES.md).
- [x] Record the 15 Sep 2026 decision to expand from respiratory-only planning to a broad health-reference programme while preserving publication gates.
- [ ] **UN-20261024-006-0013** Add CODEOWNERS/PR-review mechanics for safety-critical content once accountable reviewer usernames are known.
- [ ] **UN-20261024-006-0014** Choose and document content/code licensing deliberately.

## Content foundation

- [x] Adopt JSON as the canonical authoring format and implement schema version 1.
- [x] Draft controlled vocabularies for outcomes, populations, interventions, jurisdictions, and workflow states.
- [x] Create initial source, search-log, research-protocol, and review templates.
- [x] Draft a content style guide and medical glossary.
- [x] Select sore-throat supportive care as the first vertical-slice module.
- [x] Add a broad [health topic master roadmap](docs/HEALTH_TOPIC_MASTER_ROADMAP.md).
- [x] Add a curated [health learning resource library](docs/HEALTH_RESOURCE_LIBRARY.md).
- [x] Add a starter [health learning quiz bank](docs/HEALTH_LEARNING_QUIZZES.md).
- [x] Document the [health app ecosystem](docs/HEALTH_APP_ECOSYSTEM.md) linking HealthLens and HeartCalm without merging personal health data into this repo.
- [x] Add a de-identified historical topic index under `inputs/` rather than publishing personal/family health history.

## Existing research cleanup

- [x] Preserve raw imported material under [inputs/](inputs/).
- [x] Audit imported-file provenance and document preservation/disposition.
- [x] Mark imported Batch 1 material as unpublished discovery drafts rather than canonical content.
- [ ] **UN-20261024-006-0034** Verify every imported Batch 1 citation, title, date, author, jurisdiction, and applicability against current sources.
- [ ] **UN-20261024-006-0035** Replace organisation-only citations with exact source records where the research package still lacks them.
- [ ] **UN-20261024-006-0036** Reassess claim-level evidence ratings and safety thresholds against current Australian guidance.
- [ ] **UN-20261024-006-0037** Recheck doses, ages, duration limits, interactions, and triage thresholds against current Australian guidance.

## Research programme — respiratory collection

- [x] Create a sore-throat research package with a protocol, search log, screening notes, extraction data, exclusions, evidence gaps, funding/conflict notes, and review placeholders.
- [x] Create a master evidence-gap register and prioritise safety-critical gaps.
- [x] Add sore-throat research artefacts for screening, exclusions, bias, funding/conflict, corrections/retractions, and evidence gaps.
- [x] Produce a structured sore-throat research handoff package and evidence-review-ready draft.
- [-] **UN-20261024-006-0045** Expand the evidence programme beyond sore throat to the wider 28-module respiratory catalogue.
- [x] Add a dedicated post-infectious/persistent dry cough research package.
- [ ] **UN-20261024-006-0047** Intake-audit the independent Claude cough return without treating it as verified evidence.
- [x] Separate effectiveness, harms, prevention, disease duration, and comfort outcomes more explicitly in the sore-throat evidence record.
- [ ] **UN-20261024-006-0049** Complete additional overlays listed in [docs/SCOPE.md](docs/SCOPE.md).

## Research programme — safety/first aid (P0)

See Wave 0 in the master roadmap.

- [ ] **UN-20261024-006-0055** Australian emergency-route module: 000, 112 limitations, Healthdirect and Poisons Information Centre.
- [ ] **UN-20261024-006-0056** DRSABCD / CPR / AED package using current ANZCOR sources.
- [ ] **UN-20261024-006-0057** Choking — adult, child and infant.
- [ ] **UN-20261024-006-0058** Severe bleeding/shock/wounds.
- [ ] **UN-20261024-006-0059** Burns/scalds/chemical/electrical injury.
- [ ] **UN-20261024-006-0060** Asthma first aid.
- [ ] **UN-20261024-006-0061** Anaphylaxis/adrenaline.
- [ ] **UN-20261024-006-0062** Suspected heart attack and stroke.
- [ ] **UN-20261024-006-0063** Diabetic emergency, seizures and syncope.
- [ ] **UN-20261024-006-0064** Poisoning/medicine-error pathway.
- [ ] **UN-20261024-006-0065** Heat illness and hypothermia.
- [ ] **UN-20261024-006-0066** Bites/stings/snake bite/water emergencies.
- [ ] **UN-20261024-006-0067** Child serious-illness/infant-fever emergency overlay.
- [ ] **UN-20261024-006-0068** Independent clinical review of every safety-critical module before publication.

## Research programme — family and everyday health (P1)

- [ ] **UN-20261024-006-0072** Kids/family collection: fever, medications, respiratory illness, gastro/dehydration, ears, rashes, safe sleep and immunisation.
- [ ] **UN-20261024-006-0073** Medicines/pharmacy collection organised by active ingredient and population cautions.
- [ ] **UN-20261024-006-0074** Heart/circulation collection: chest pain, palpitations, blood pressure, prevention and common tests.
- [ ] **UN-20261024-006-0075** Sleep/recovery collection: insomnia, OSA, circadian/shift work, illness sleep and wearable limitations.
- [ ] **UN-20261024-006-0076** Exercise/movement collection: cardio, strength, return after illness, injuries, recovery and HRV.
- [ ] **UN-20261024-006-0077** Nutrition/gut collection: Australian Dietary Guidelines, dairy-free adequacy, micronutrients, fibre, gut health, food safety and supplement evidence.
- [ ] **UN-20261024-006-0078** Mental-health/neurodivergence collection: anxiety, depression, stress, ADHD, autism/AuDHD, burnout, regulation and support pathways.
- [ ] **UN-20261024-006-0079** Pregnancy/breastfeeding/women's-health collection.
- [ ] **UN-20261024-006-0080** Neurology/MS collection.
- [ ] **UN-20261024-006-0081** Skin/wounds/allergy collection.
- [ ] **UN-20261024-006-0082** GI, urinary, endocrine/metabolic and musculoskeletal collections.

## Research programme — aged care, nursing and workplace health

- [ ] **UN-20261024-006-0086** Aged-care deterioration/delirium/falls foundation.
- [ ] **UN-20261024-006-0087** Aged-care infection prevention/outbreak/PPE collection.
- [ ] **UN-20261024-006-0088** Medicines/polypharmacy and antimicrobial stewardship.
- [ ] **UN-20261024-006-0089** Wound/skin/pressure-injury learning modules.
- [ ] **UN-20261024-006-0090** Nutrition/hydration/continence/pain/palliative-care modules.
- [ ] **UN-20261024-006-0091** Dementia communication/person-centred-care collection.
- [ ] **UN-20261024-006-0092** Workplace first-aid arrangement/legal-reference collection for NSW/Australia.
- [ ] **UN-20261024-006-0093** Healthcare/social-assistance WHS, sharps/blood exposure, fatigue/manual tasks and biological hazards.

## Learning library

- [x] Curate an initial cross-domain resource library with Australian-first podcasts, videos, guidelines and deeper-reading links.
- [x] Add starter quizzes across the major health domains previously explored.
- [ ] **UN-20261024-006-0099** Add metadata/schema for learning resources: media type, topic, owner, jurisdiction, date checked, audience, transcript/caption availability.
- [ ] **UN-20261024-006-0100** Build `/learn`, `/listen`, `/watch`, `/read` and `/quiz` UI from resource metadata.
- [ ] **UN-20261024-006-0101** Add at least one source-linked quiz per reviewed collection.
- [ ] **UN-20261024-006-0102** Add captions/transcript/accessibility checks for embedded media.
- [ ] **UN-20261024-006-0103** Add automated link freshness checks for external resources without treating a live link as clinical approval.

## Companion apps and cross-links

- [x] Link HealthLens and HeartCalm in documentation.
- [ ] **UN-20261024-006-0108** Add visible app navigation cards once the main health-reference UI is ready.
- [ ] **UN-20261024-006-0109** Add reciprocal links in HealthLens/HeartCalm to reviewed health-reference pages where useful.
- [ ] **UN-20261024-006-0110** Define shared vocabulary for escalation, evidence status, measurements and consumer-device limitations.
- [ ] **UN-20261024-006-0111** Keep all cross-app personal-data transfer disabled by default; require a separate privacy/security design before any interoperability.
- [ ] **UN-20261024-006-0112** Decide whether JoshHealth should remain a legacy mirror or be formally archived in favour of HealthLens.

## Evidence and health-literacy programme

- [ ] **UN-20261024-006-0116** How to read a guideline/systematic review/RCT.
- [ ] **UN-20261024-006-0117** Absolute vs relative risk and meaningful effect size.
- [ ] **UN-20261024-006-0118** Screening, false positives/negatives and incidental findings.
- [ ] **UN-20261024-006-0119** Correlation vs causation.
- [ ] **UN-20261024-006-0120** Mechanism vs clinical evidence.
- [ ] **UN-20261024-006-0121** Conflicts of interest, funding and publication bias.
- [ ] **UN-20261024-006-0122** Supplement/wellness marketing and misinformation.
- [ ] **UN-20261024-006-0123** AI health literacy: hallucinations, citations, privacy and when not to rely on AI.
- [ ] **UN-20261024-006-0124** Wearable/device measurement literacy.

## Vertical-slice application

- [x] Implement a disabled-by-default, authenticated private research workspace without changing public publication gates.
- [ ] **UN-20261024-006-0129** Document and verify deployment protection and credential-rotation evidence without recording secret values.
- [x] Initialise Next.js and TypeScript.
- [x] Implement content validation and build-failing publication gates.
- [x] Implement public and private module, source, and research-preview routes.
- [x] Implement methodology, policy, accessibility, privacy, and corrections pages.
- [x] Implement visibly labelled previews for non-published content.
- [x] Implement print styling and no-JavaScript safety behaviour.
- [ ] **UN-20261024-006-0136** Design future navigation around health collections without exposing unreviewed roadmap items as medical guidance.

## Quality engineering

- [x] Add schema, reference, jurisdiction, review-expiry, and publication-gate tests.
- [x] Add route/component tests covering accessibility, search, private preview, and supporting workflows.
- [x] Add a CI workflow for lint, typecheck, test, and build.
- [x] Add automated accessibility, internal-link, media-link and spelling checks to CI.
- [x] Complete repository-executable keyboard, narrow reflow/zoom proxy, reduced-motion, mobile, failed-image, JavaScript-disabled and print checks.
- [x] Add a security review checklist and review-signoff templates to support the independent security review workflow.
- [ ] **UN-20261024-006-0146** Extend content schemas/vocabularies where broad-health modules need outcomes beyond the respiratory prototype (for example function, sleep, diagnostic accuracy, quality of life, disease activity and mortality).
- [ ] **UN-20261024-006-0147** Add source-verification status to source records so snippet-only leads cannot look equivalent to fully read sources.

## Launch readiness

- [x] Draft launch-assurance and operational requirements in [docs/LAUNCH_ASSURANCE_PLAN.md](docs/LAUNCH_ASSURANCE_PLAN.md).
- [x] Add launch-readiness review templates and security checklist documentation to support the remaining sign-offs.
- [x] Add monitoring, backup/restore, incident-response and corrections-intake implementation runbooks and configuration templates.
- [x] Enable repository security controls that are available for the GitHub plan and record the resulting settings.
- [x] Define supported jurisdictions, known limitations, methodology, reviewers, funding, and change-history structures.
- [x] Define success metrics that do not require collecting sensitive health data.
- [ ] **UN-20261024-006-0157** Re-run launch-readiness assessment after the scope expansion; do not assume respiratory launch controls automatically cover first aid, nursing, mental health or other new risk classes.

## Greptile review and agent-ready remediation — GRT series (24 October 2026)

**Scope / source of truth:** This is the canonical [ColdFluApp TODO](TODO.md); preserve all existing `UN-20261024-006-...` task numbers and checkbox states. New distinct IDs `GRT-001`–`GRT-012` do not replace the detailed [health-topic master roadmap](docs/HEALTH_TOPIC_MASTER_ROADMAP.md). Health-related public content remains pre-publication and requires independent clinical review and the established evidence/publication gates. Read `AGENTS.md`, `README.md`, `codingprinciples.md`, `docs/RESEARCH_AND_REVIEW.md`, then the [cross-repository agent handoff standard](https://github.com/Parris-Tech-Services/RepoClean/blob/antigravity-push/docs/GREPTILE_AGENT_REVIEW_HANDOFF_STANDARD.md) before editing. **Do not merge/deploy dependency changes on the basis of Greptile's score alone.**

**Verified review evidence:** [Production-dependencies PR #18](https://github.com/Parris-Tech-Services/ColdFluApp/pull/18), Greptile run `35000660`, reviewed head `931c53bc1d2f77746875b36c1e0090c4dfcacad4`, completed **2026-10-24T09:49:27Z**, confidence **5/5**, *zero actionable findings reported*. This is a successful **PR-diff** review, **not** a full codebase audit, a security certification, clinical approval or evidence of passing CI. Active project-specific Greptile instruction ID `b3255db9-9ef1-4611-a00e-7f8475928797`; learned architecture pattern `dab474fe-e194-4790-8e07-5517ff362b24`.

### Agent starting order
Start with **GRT-002 → GRT-003 → GRT-004 → GRT-005 → GRT-006**, then re-review and release readiness in **GRT-007–012**. GRT-001 is a documented completed *review*, not a fix. Do not concurrently merge overlapping Dependabot branches. If a clinical/personal-data/privacy/publication safety issue is discovered, stop that affected release, elevate the verified defect to P0/P1 according to actual impact, and create a new unique subtask with evidence before proceeding.

- [x] **GRT-001** [REVIEW] Trigger and verify one Greptile review against a real ColdFluApp PR. **Evidence:** PR #18 and completed run `35000660` at commit `931c53b`, confidence 5/5, zero reported actionable findings. **Boundary:** Does not verify tests, deployment, full-repository audit, or other PRs.
- [ ] **GRT-002** [P1 — START HERE] Triage **overlapping production dependency PRs** [#18](https://github.com/Parris-Tech-Services/ColdFluApp/pull/18), [#37](https://github.com/Parris-Tech-Services/ColdFluApp/pull/37), and [#39](https://github.com/Parris-Tech-Services/ColdFluApp/pull/39). **Start:** Inspect current `main`, each PR head/lockfile/diff and CI before changes. **Finding:** #18 updates Next to 15.5.28 plus React 19.3.1, #37 updates Next to 15.5.28, while #39 targets the older Next 15.5.27; these changes overlap, but no conflict outcome is yet verified. **Fix:** Choose one compatible, reproducible update strategy rather than merging multiple stale versions. **Accept:** document selected PR/commit, skipped/superseded branches, lockfile consistency, passing `npm ci`, `npm run typecheck` and `npm run build` on chosen code; no merge until verified.
- [ ] **GRT-003** [P1 verification] Ensure dependency changes do not weaken **authenticated private research preview** and public/private route isolation. **Start:** Read `src/` route/auth code, security tests and `docs/REPOSITORY_CONVENTIONS.md`, compare changed Next/React behaviour. **Accept:** negative tests showing an unauthenticated user cannot access private previews; no personal health data or unreviewed research leaks; keep credentials out of evidence.
- [ ] **GRT-004** [P1 verification] Preserve **medical publication gates, citation/provenance checks and jurisdiction-specific safety notices** across any framework update. **Start:** Run existing `npm run validate:content` and relevant content/publication tests; inspect SSR and no-JavaScript routes. **Accept:** unreviewed content never appears approved/published, emergency text remains accessible without JS, and human clinical-review gates are unchanged. Human approval is required for clinical content changes.
- [ ] **GRT-005** [P2] Run all affected **CI and user-facing regression tests** after selecting a coherent dependency version. **Start:** `npm ci`, `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`, `npm run test:e2e`; check actual package scripts, supported runner and Playwright environment. **Accept:** report exact pass/fail, branch SHA, desktop/mobile accessibility and keyboard checks, network/security behaviours; distinguish runner limits from product defects.
- [ ] **GRT-006** [P2] Systematically triage the remaining **open Dependabot PRs** (#38, #36, #35, #32, #31, #29, #28, #26, #24 plus selected #18/#37/#39) by distinct dependency and changed package root. **Start:** List current PRs and check for obsolete heads, grouped updates and independent imported-research lockfiles. **Accept:** one explicit disposition per PR (keep/rebase/review/supersede/close after verification); do not bulk merge untested or unrelated changes.
- [ ] **GRT-007** [P2] Request Greptile **follow-up review** on the actual selected/reconciled dependency PR after changes, and any materially different high-impact PR. **Accept:** COMPLETED run ID, exact new SHA, GitHub inline links and triaged comments; create new unique numbered findings only for actual defects, with reproduction and severity. Review credit use must be deliberate.
- [ ] **GRT-008** [P2] Verify saved **Greptile standards and architecture** remain ACTIVE, correctly scoped and consistent with repository `AGENTS.md`; inspect updated codebase knowledge after dependency reconciliation. **Start:** query contexts `b3255db9-9ef1-4611-a00e-7f8475928797` and `dab474fe-e194-4790-8e07-5517ff362b24`. **Accept:** source-grounded, retrievable instructions/patterns; correct outdated details.
- [ ] **GRT-009** [P2] Check **native Greptile codebase knowledge indexing** for this repo separately from stored context rules. **Start:** list published knowledge-base documents and try a real code search query. **Accept:** cite indexed document paths and query evidence; if unavailable, mark provider-indexing BLOCKED and keep source-reading fallback without claiming native indexing.
- [ ] **GRT-010** [P2] Verify **automatic PR review** genuinely runs on a newly opened/updated ColdFluApp PR; manually triggered PR #18 does not establish this. **Accept:** bot review/run and SHA linked to real SCM event, provider settings checked; no duplicate charged reviews.
- [ ] **GRT-011** [P2] Record ColdFluApp-specific **Greptile analytics** (review count, severity, security and addressed/unaddressed comments) before/after the consolidated PR review. **Accept:** dated metrics with repository filter and explanation of why zero findings on PR #18 is not a whole-repo health/safety result.
- [ ] **GRT-012** [P2 / closeout] Update this TODO, the [central portfolio queue](https://github.com/Parris-Tech-Services/RepoClean/blob/antigravity-push/docs/GREPTILE_PORTFOLIO_REVIEW_QUEUE_2026-10-24.md), relevant existing security/release issues and checkpoints with exact commits, CI/PR links and unresolved items. Close only after required evidence; no automatic clinical publication or auto-merge.


## Deliberately deferred

- [x] Defer a CMS/database until editor workflow testing justifies it.
- [x] Defer user accounts and personalised features until a documented need and privacy assessment exists.
- [x] Defer diagnostic tools, dose calculators, and related high-risk personalisation features as separate products.
- [x] Keep personal health-data analysis in HealthLens rather than adding records/profiles to the public reference.
