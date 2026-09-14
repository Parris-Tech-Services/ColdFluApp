# Health Reference Research Base

An evidence-led, modular public health knowledge base. The project began as a cold-and-flu/respiratory self-care research base and is now expanding into a broader Australian-first health reference for households, carers, first aiders and health workers.

The **original cold/flu programme remains the first controlled collection**. Broader health topics are a roadmap, not automatically reviewed content.

> [!CAUTION]
> This repository is pre-publication work. Existing research drafts are not clinically reviewed and must not be presented as medical advice. Topic coverage, resource links and quizzes are educational planning material unless a module has passed the documented evidence, clinical, editorial and accessibility gates.

## Start here

### Programme and content

- [Vision and principles](docs/VISION.md)
- [Scope and module map](docs/SCOPE.md)
- [Health topic master roadmap](docs/HEALTH_TOPIC_MASTER_ROADMAP.md)
- [Health learning resource library](docs/HEALTH_RESOURCE_LIBRARY.md)
- [Health learning quiz bank](docs/HEALTH_LEARNING_QUIZZES.md)
- [Health app ecosystem](docs/HEALTH_APP_ECOSYSTEM.md)
- [Content model](docs/CONTENT_SCHEMA.md)
- [Research and review workflow](docs/RESEARCH_AND_REVIEW.md)
- [Product requirements](docs/PRODUCT_REQUIREMENTS.md)
- [Technical architecture](docs/ARCHITECTURE.md)
- [Roadmap](docs/ROADMAP.md)
- [Working backlog](TODO.md)

### Research governance

- [Research assignments](docs/ASSIGNMENTS.md)
- [External researcher hand-off](docs/AGENT_RESEARCH_HANDOFF.md)
- [Project decisions](docs/DECISIONS.md)
- [Governance and accountability register](docs/GOVERNANCE_AND_ACCOUNTABILITY.md)
- [External launch prerequisites](docs/EXTERNAL_LAUNCH_PREREQUISITES.md)
- [Operations runbook](docs/OPERATIONS_RUNBOOK.md)
- [Privacy-preserving success metrics](docs/SUCCESS_METRICS.md)
- [GitHub security settings](docs/GITHUB_SECURITY_SETTINGS.md)
- [Reviewer signature procedure](docs/REVIEWER_SIGNATURE_PROCEDURE.md)
- [Master evidence-gap register](docs/EVIDENCE_GAP_REGISTER.md)
- [External research runbook](docs/EXTERNAL_RESEARCH_RUNBOOK.md)
- [Research programme status](docs/RESEARCH_PROGRAMME_STATUS.md)

## Current status

The evidence pipeline is still in **foundation / vertical-slice development**, even though the planning scope is now much broader.

- The original 28-module respiratory scope has been preserved as the first collection.
- A master roadmap now records the broader programme: first aid, child/family health, medicines, heart/circulation, sleep/recovery, exercise, nutrition, mental health/neurodivergence, pregnancy/breastfeeding, neurological health/MS, skin/wounds, aged care/nursing, workplace/environmental health, prevention and digital-health literacy.
- Governance ownership and accountable reviewer roles remain prerequisites to public clinical content.
- Existing AI-produced drafts and research packages have not automatically passed evidence, editorial or clinical review gates.
- A minimal Next.js project-status scaffold reads only canonical content and exposes only modules whose status permits publication.
- The sore-throat module remains the first schema-validated unpublished vertical slice.
- Historical conversations are used only to discover **topic gaps**. Personal/family health histories are not to be copied into this public repository.

The original prompt, conversation export and imported files under `inputs/` remain source/provenance material. They are not canonical product content.

## Canonical workflow

```text
research question -> evidence search -> structured extraction -> module draft
       -> evidence review -> clinical review -> editorial/accessibility review
       -> publish -> monitor sources -> scheduled re-review
```

Only modules that satisfy the repository's publication rules may appear as reviewed health guidance. AI may assist research and drafting but cannot approve its own health claims.

## Product direction

Build a **health reference, not a diagnosis engine**.

The long-term product should make it easy to:

- look up common symptoms/conditions and understand what is known;
- find first-aid/emergency actions quickly;
- understand medicines by active ingredient and safety context;
- find child, pregnancy, older-person and chronic-condition overlays;
- listen to reputable podcasts, watch useful videos and open source guidelines/papers;
- use short source-linked quizzes for learning;
- understand when self-care is reasonable and when professional care is needed;
- jump to specialised companion tools without moving private health data into this repo.

## Companion health apps

- **HealthLens** — private health-data analysis and trends: <https://github.com/joshualparris/HealthLens> · <https://health-lens-rust.vercel.app>
- **HeartCalm** — calm/palpitation episode support and logging: <https://github.com/joshuaparris-max/HeartCalm> · <https://heart-calm-vert.vercel.app>
- **JoshHealth** — earlier/parallel personal-health analytics work: <https://github.com/joshuaparris-max/JoshHealth>

See [Health app ecosystem](docs/HEALTH_APP_ECOSYSTEM.md) for privacy and safety boundaries.

## Repository map

```text
content/     Canonical, schema-validated content and research records
docs/        Product, research, governance, roadmap, resources and learning docs
inputs/      Unverified historical prompts, conversations and imported drafts
templates/   Authoring and review templates
scripts/     Validation and maintenance tooling
archive/     Superseded canonical artefacts retained with provenance
```

See [repository conventions](docs/REPOSITORY_CONVENTIONS.md) before adding or moving files.

## Content validation

With Node.js installed:

```sh
npm ci
npm run validate:content
npm test
```

Validation checks schemas, identifiers and references, jurisdictions, research-package completeness, and mandatory publication/review/safety gates. CI also runs linting, type checks, media/internal-link checks, spelling, build and end-to-end tests.

## Private research preview

An authenticated, read-only workspace is available at `/research-preview` when explicitly enabled. It is disabled by default and does not change canonical publication requirements. Set `ENABLE_PRIVATE_RESEARCH_PREVIEW=true`, `RESEARCH_PREVIEW_USERNAME`, and a strong `RESEARCH_PREVIEW_PASSWORD` in the local or deployment environment; never commit their values. Disable it by setting the flag to `false` or removing it. Rotate access by replacing both credential values and redeploying.

HTTP Basic Authentication assumes HTTPS and provides only modest personal-workspace protection. Add Vercel Deployment Protection where available. Every private response is non-indexed and non-cacheable, but imported material remains unverified discovery content rather than canonical evidence.
