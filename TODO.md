# Working backlog

Status key: `[ ]` not started, `[-]` in progress, `[x]` complete.

Updated 15 September 2026. The repository began as a 28-module cold/flu programme and now has a broader health-reference roadmap. This file stays high level; the detailed topic-by-topic checklist is in [docs/HEALTH_TOPIC_MASTER_ROADMAP.md](docs/HEALTH_TOPIC_MASTER_ROADMAP.md).

## Project governance

- [x] Capture governance prerequisites and review/accountability expectations in [docs/DECISIONS.md](docs/DECISIONS.md) and [docs/GOVERNANCE_AND_ACCOUNTABILITY.md](docs/GOVERNANCE_AND_ACCOUNTABILITY.md).
- [x] Draft reviewer-conflict, funding, and correction policies; accountable human approval is still pending.
- [x] Separate external appointments, reviews, testing and approvals from this actionable backlog in [docs/EXTERNAL_LAUNCH_PREREQUISITES.md](docs/EXTERNAL_LAUNCH_PREREQUISITES.md).
- [x] Record the 15 Sep 2026 decision to expand from respiratory-only planning to a broad health-reference programme while preserving publication gates.
- [ ] Add CODEOWNERS/PR-review mechanics for safety-critical content once accountable reviewer usernames are known.
- [ ] Choose and document content/code licensing deliberately.

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
- [ ] Verify every imported Batch 1 citation, title, date, author, jurisdiction, and applicability against current sources.
- [ ] Replace organisation-only citations with exact source records where the research package still lacks them.
- [ ] Reassess claim-level evidence ratings and safety thresholds against current Australian guidance.
- [ ] Recheck doses, ages, duration limits, interactions, and triage thresholds against current Australian guidance.

## Research programme — respiratory collection

- [x] Create a sore-throat research package with a protocol, search log, screening notes, extraction data, exclusions, evidence gaps, funding/conflict notes, and review placeholders.
- [x] Create a master evidence-gap register and prioritise safety-critical gaps.
- [x] Add sore-throat research artefacts for screening, exclusions, bias, funding/conflict, corrections/retractions, and evidence gaps.
- [x] Produce a structured sore-throat research handoff package and evidence-review-ready draft.
- [-] Expand the evidence programme beyond sore throat to the wider 28-module respiratory catalogue.
- [x] Add a dedicated post-infectious/persistent dry cough research package.
- [ ] Intake-audit the independent Claude cough return without treating it as verified evidence.
- [x] Separate effectiveness, harms, prevention, disease duration, and comfort outcomes more explicitly in the sore-throat evidence record.
- [ ] Complete additional overlays listed in [docs/SCOPE.md](docs/SCOPE.md).

## Research programme — safety/first aid (P0)

See Wave 0 in the master roadmap.

- [ ] Australian emergency-route module: 000, 112 limitations, Healthdirect and Poisons Information Centre.
- [ ] DRSABCD / CPR / AED package using current ANZCOR sources.
- [ ] Choking — adult, child and infant.
- [ ] Severe bleeding/shock/wounds.
- [ ] Burns/scalds/chemical/electrical injury.
- [ ] Asthma first aid.
- [ ] Anaphylaxis/adrenaline.
- [ ] Suspected heart attack and stroke.
- [ ] Diabetic emergency, seizures and syncope.
- [ ] Poisoning/medicine-error pathway.
- [ ] Heat illness and hypothermia.
- [ ] Bites/stings/snake bite/water emergencies.
- [ ] Child serious-illness/infant-fever emergency overlay.
- [ ] Independent clinical review of every safety-critical module before publication.

## Research programme — family and everyday health (P1)

- [ ] Kids/family collection: fever, medications, respiratory illness, gastro/dehydration, ears, rashes, safe sleep and immunisation.
- [ ] Medicines/pharmacy collection organised by active ingredient and population cautions.
- [ ] Heart/circulation collection: chest pain, palpitations, blood pressure, prevention and common tests.
- [ ] Sleep/recovery collection: insomnia, OSA, circadian/shift work, illness sleep and wearable limitations.
- [ ] Exercise/movement collection: cardio, strength, return after illness, injuries, recovery and HRV.
- [ ] Nutrition/gut collection: Australian Dietary Guidelines, dairy-free adequacy, micronutrients, fibre, gut health, food safety and supplement evidence.
- [ ] Mental-health/neurodivergence collection: anxiety, depression, stress, ADHD, autism/AuDHD, burnout, regulation and support pathways.
- [ ] Pregnancy/breastfeeding/women's-health collection.
- [ ] Neurology/MS collection.
- [ ] Skin/wounds/allergy collection.
- [ ] GI, urinary, endocrine/metabolic and musculoskeletal collections.

## Research programme — aged care, nursing and workplace health

- [ ] Aged-care deterioration/delirium/falls foundation.
- [ ] Aged-care infection prevention/outbreak/PPE collection.
- [ ] Medicines/polypharmacy and antimicrobial stewardship.
- [ ] Wound/skin/pressure-injury learning modules.
- [ ] Nutrition/hydration/continence/pain/palliative-care modules.
- [ ] Dementia communication/person-centred-care collection.
- [ ] Workplace first-aid arrangement/legal-reference collection for NSW/Australia.
- [ ] Healthcare/social-assistance WHS, sharps/blood exposure, fatigue/manual tasks and biological hazards.

## Learning library

- [x] Curate an initial cross-domain resource library with Australian-first podcasts, videos, guidelines and deeper-reading links.
- [x] Add starter quizzes across the major health domains previously explored.
- [ ] Add metadata/schema for learning resources: media type, topic, owner, jurisdiction, date checked, audience, transcript/caption availability.
- [ ] Build `/learn`, `/listen`, `/watch`, `/read` and `/quiz` UI from resource metadata.
- [ ] Add at least one source-linked quiz per reviewed collection.
- [ ] Add captions/transcript/accessibility checks for embedded media.
- [ ] Add automated link freshness checks for external resources without treating a live link as clinical approval.

## Companion apps and cross-links

- [x] Link HealthLens and HeartCalm in documentation.
- [ ] Add visible app navigation cards once the main health-reference UI is ready.
- [ ] Add reciprocal links in HealthLens/HeartCalm to reviewed health-reference pages where useful.
- [ ] Define shared vocabulary for escalation, evidence status, measurements and consumer-device limitations.
- [ ] Keep all cross-app personal-data transfer disabled by default; require a separate privacy/security design before any interoperability.
- [ ] Decide whether JoshHealth should remain a legacy mirror or be formally archived in favour of HealthLens.

## Evidence and health-literacy programme

- [ ] How to read a guideline/systematic review/RCT.
- [ ] Absolute vs relative risk and meaningful effect size.
- [ ] Screening, false positives/negatives and incidental findings.
- [ ] Correlation vs causation.
- [ ] Mechanism vs clinical evidence.
- [ ] Conflicts of interest, funding and publication bias.
- [ ] Supplement/wellness marketing and misinformation.
- [ ] AI health literacy: hallucinations, citations, privacy and when not to rely on AI.
- [ ] Wearable/device measurement literacy.

## Vertical-slice application

- [x] Implement a disabled-by-default, authenticated private research workspace without changing public publication gates.
- [ ] Document and verify deployment protection and credential-rotation evidence without recording secret values.
- [x] Initialise Next.js and TypeScript.
- [x] Implement content validation and build-failing publication gates.
- [x] Implement public and private module, source, and research-preview routes.
- [x] Implement methodology, policy, accessibility, privacy, and corrections pages.
- [x] Implement visibly labelled previews for non-published content.
- [x] Implement print styling and no-JavaScript safety behaviour.
- [ ] Design future navigation around health collections without exposing unreviewed roadmap items as medical guidance.

## Quality engineering

- [x] Add schema, reference, jurisdiction, review-expiry, and publication-gate tests.
- [x] Add route/component tests covering accessibility, search, private preview, and supporting workflows.
- [x] Add a CI workflow for lint, typecheck, test, and build.
- [x] Add automated accessibility, internal-link, media-link and spelling checks to CI.
- [x] Complete repository-executable keyboard, narrow reflow/zoom proxy, reduced-motion, mobile, failed-image, JavaScript-disabled and print checks.
- [x] Add a security review checklist and review-signoff templates to support the independent security review workflow.
- [ ] Extend content schemas/vocabularies where broad-health modules need outcomes beyond the respiratory prototype (for example function, sleep, diagnostic accuracy, quality of life, disease activity and mortality).
- [ ] Add source-verification status to source records so snippet-only leads cannot look equivalent to fully read sources.

## Launch readiness

- [x] Draft launch-assurance and operational requirements in [docs/LAUNCH_ASSURANCE_PLAN.md](docs/LAUNCH_ASSURANCE_PLAN.md).
- [x] Add launch-readiness review templates and security checklist documentation to support the remaining sign-offs.
- [x] Add monitoring, backup/restore, incident-response and corrections-intake implementation runbooks and configuration templates.
- [x] Enable repository security controls that are available for the GitHub plan and record the resulting settings.
- [x] Define supported jurisdictions, known limitations, methodology, reviewers, funding, and change-history structures.
- [x] Define success metrics that do not require collecting sensitive health data.
- [ ] Re-run launch-readiness assessment after the scope expansion; do not assume respiratory launch controls automatically cover first aid, nursing, mental health or other new risk classes.

## Deliberately deferred

- [x] Defer a CMS/database until editor workflow testing justifies it.
- [x] Defer user accounts and personalised features until a documented need and privacy assessment exists.
- [x] Defer diagnostic tools, dose calculators, and related high-risk personalisation features as separate products.
- [x] Keep personal health-data analysis in HealthLens rather than adding records/profiles to the public reference.
