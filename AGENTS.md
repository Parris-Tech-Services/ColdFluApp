# Project instructions for coding agents

## Mission

Build a safe, evidence-led, broadly useful public health reference. Australia is the first supported jurisdiction. The original cold-and-flu programme remains the first controlled content collection; expansion into first aid, family health, medicines, heart, sleep, nutrition, mental health, aged care and other domains must use the same evidence and review discipline.

Read `README.md`, `docs/VISION.md`, `docs/HEALTH_TOPIC_MASTER_ROADMAP.md`, and `docs/RESEARCH_AND_REVIEW.md` before substantial work.

## Safety and content rules

- Treat everything under `inputs/` as unverified historical material.
- Do not promote imported prose into `content/` without completing the documented research and review workflow.
- AI-generated text and citations are never evidence by themselves.
- Never invent, repair from memory, or silently substitute a citation.
- Do not describe a module as reviewed, approved, or published without recorded accountable reviewers.
- Do not implement diagnosis, personalisation, dosing calculators, or health-data collection without a new approved project decision.
- Keep global evidence distinct from jurisdiction-specific medicine rules, emergency routes, vaccination advice, workplace rules and care pathways.
- Surface uncertainty and distinguish comfort, symptom relief, illness duration, prevention, disease modification, diagnostic accuracy and harms.
- Health-learning media (podcasts/videos/quizzes) must not delay emergency instructions or be presented as equivalent to clinical guidance.
- Public content must not contain personal/family health history recovered from conversations, uploads, private app data or health records. Historical material may be used only to identify de-identified topic gaps unless explicit privacy-reviewed approval says otherwise.

## Repository rules

- Follow `docs/REPOSITORY_CONVENTIONS.md`.
- Keep source records independently reusable and connect claims to source IDs.
- Use lowercase kebab-case for content and research filenames.
- Preserve provenance when importing or archiving material.
- Do not modify raw files in `inputs/`; derive a new tracked artefact instead.
- Use schema validation and publication gates when they become available.
- Keep changes focused and update relevant documentation and decisions with structural changes.
- Use `docs/HEALTH_TOPIC_MASTER_ROADMAP.md` as the broad topic backlog; do not create hundreds of empty canonical modules simply because the topic appears in the roadmap.
- Use `docs/HEALTH_RESOURCE_LIBRARY.md` for curated learning links and keep canonical evidence records under `content/sources/`.
- Keep personal-data analysis in companion tools such as HealthLens rather than adding health records to this public repository.

## Development rules

- Do not add Supabase, authentication, analytics, a CMS, personal health profiles or other deferred infrastructure without an accepted decision record.
- Prefer static rendering and progressive enhancement.
- Safety information must work without client-side JavaScript.
- Target WCAG 2.2 AA and do not communicate urgency or evidence by colour alone.
- Add proportionate tests for all code, especially content validation, publication gates, localisation and safety UI.
- Cross-links to HealthLens, HeartCalm or other companion apps must be explicit navigation links, not automatic transfer of personal health data.

