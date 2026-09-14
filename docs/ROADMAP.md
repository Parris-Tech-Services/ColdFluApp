# Roadmap

## Phase 0 — Foundation

Goal: establish the rules that prevent unsafe content from reaching readers.

- Approve vision, scope, terminology, evidence labels, and non-goals.
- Recruit or identify evidence, clinical, editorial, and accessibility reviewers.
- Agree on conflicts, corrections, attribution, and funding policies.
- Implement and test the versioned content schema.
- Convert one candidate module into a structured research package.
- Coordinate the module research queue and unverified external intake.
- Audit imported prototypes and test publication gates with fixtures.

Exit: reviewers approve the workflow and schema using real content.

## Phase 1 — One vertical slice

Goal: prove research-to-publication end to end.

- Select a bounded module; avoid the broad OTC or triage modules as the first slice.
- Re-research it under the protocol.
- Complete all review gates.
- Build the module page, evidence UI, source list, Australian overlay, and publication checks.
- Test comprehension, accessibility, mobile layout, print, and correction handling.

Exit: one reviewed module can safely publish and update without code changes.

## Phase 2 — Safety-critical foundation

Goal: create consistent global components and reviewed Australian safety content.

- Build triage and emergency-warning components.
- Complete Australian escalation, poison, and medicine-rule references.
- Implement jurisdiction selection and unsupported-region behaviour.
- Add methodology, evidence-label, editorial, privacy, and corrections pages.

Exit: safety patterns are clinically approved and reusable.

## Phase 3 — Initial catalogue

Goal: research and publish the first useful collection in controlled batches.

- Prioritise common symptoms and low-risk supportive care.
- Handle medications and vulnerable populations as separately reviewed workstreams.
- Add static search, filters, related content, and source reuse.
- Migrate Batch 1 only after fresh verification; do not treat it as completed work.

Exit: the agreed minimum catalogue is reviewed, internally consistent, and searchable.

## Phase 4 — Australian public beta

Goal: validate usefulness and trust with real readers.

- Conduct moderated usability and comprehension testing.
- Run external clinical, accessibility, privacy, and security reviews.
- Establish monitoring, incident response, backups, and correction service levels.
- Publish transparent limitations and supported use cases.

Exit: launch risks are accepted by accountable project owners.

## Phase 5 — International expansion

Goal: add countries without weakening local accuracy.

- Define a jurisdiction-pack template and local-review requirements.
- Partner with qualified local reviewers.
- Add locale-specific terminology, units, emergency routes, medicines, and vaccination guidance.
- Test translated content with native speakers and target users.

Exit per country: the local pack has ownership, complete safety paths, and a funded maintenance plan.

---

## 2026-09-15 sequencing note — expansion without bypassing the bottleneck

The broader health-topic inventory in [`HEALTH_TOPIC_MASTER_ROADMAP.md`](HEALTH_TOPIC_MASTER_ROADMAP.md) is intentionally larger than the initial respiratory catalogue. It does **not** replace the phases above or make unreviewed material publishable.

The practical sequencing is:

1. **Prove one module end to end.** Take the closest bounded module through evidence, clinical, editorial and accessibility review and publish it through the existing gates.
2. **Build the safety spine next.** Prioritise `when-to-seek-care`, respiratory differentiation boundaries, fever, cough and paediatric respiratory content before lower-risk breadth.
3. **Treat medicines as a separate high-risk workstream.** OTC active ingredients, accidental double-dosing and population-specific medicine safety need pharmacy/clinical review appropriate to the claim.
4. **Expand populations and overlays deliberately.** Pregnancy and breastfeeding should be separable where recommendations differ; renal, liver, diabetes, anticoagulant and polypharmacy overlays need dedicated evidence work.
5. **Use curated authoritative links for breadth while original content catches up.** A maintained source directory can be useful sooner than hundreds of unreviewed modules.
6. **Make general-health scope an explicit governance decision.** See proposed D-014 in `DECISIONS.md`, plus [`topic-gap-analysis.md`](topic-gap-analysis.md).

Parallel work that does not require publishing new health claims can continue at any time: reviewer recruitment, source-verification tooling, schema improvements, evidence-gap tracking, link checking, accessibility work and de-identified topic planning.
