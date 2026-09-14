# Health app ecosystem

**Updated:** 15 September 2026

The broader health programme already exists across several separate apps. They should be **linked, not collapsed into one codebase**, because they have different privacy and safety jobs.

## 1. ColdFluApp / Health Reference

- Repository: <https://github.com/joshualparris/ColdFluApp>
- Role: public evidence library, health education, first-aid reference, source links and learning quizzes.
- Data posture: no personal health record required for public content.
- Safety posture: reviewed claims only reach public health-content surfaces after evidence, clinical and editorial gates.
- Direction: cold/flu becomes the first mature collection inside a wider Australian-first health reference.

## 2. HealthLens

- Repository: <https://github.com/joshualparris/HealthLens>
- Live app: <https://health-lens-rust.vercel.app>
- Role: privacy-conscious analysis of a person's own health exports and health metrics.
- Existing areas include Health Connect/CSV/PDF/JSON/ZIP parsing, HR/HRV, sleep, movement, respiratory rate, oxygen saturation, weight/body composition, period comparison and AI-assisted summaries.
- Boundary: personal measurements, uploaded records and longitudinal analytics belong here rather than in the public health-reference repository.

### Future integration

ColdFluApp may link to HealthLens educationally: e.g. an HRV page can explain the science and link to HealthLens for private data exploration. Do not automatically transfer health data between projects without a separate privacy/security decision.

## 3. HeartCalm

- Repository: <https://github.com/joshuaparris-max/HeartCalm>
- Live app: <https://heart-calm-vert.vercel.app>
- Role: in-the-moment calm/palpitation support, episode logging, breathing guidance, red-flag escalation, trends and GP-ready summaries.
- Existing safety concepts include three-level escalation, structured episode timing/context, asthma-aware prompts, anti-reassurance-loop guardrails, privacy controls and export.
- Boundary: HeartCalm should not interpret ECG/rhythm, diagnose arrhythmia, declare symptoms benign/safe or replace urgent care.

### Future integration

ColdFluApp's heart/palpitations collection can link to HeartCalm as a practical logging/regulation tool. HeartCalm can link back to reviewed ColdFluApp learning pages for heart symptoms, breathing, medicines and when to seek care.

## 4. JoshHealth

- Repository: <https://github.com/joshuaparris-max/JoshHealth>
- Role: older/parallel personal-health analytics work.
- Current programme preference: treat **HealthLens as the primary maintained personal-data analysis project** unless a future project decision says otherwise; link JoshHealth as legacy/mirror/reference rather than duplicating development.

---

# Recommended cross-link architecture

```text
                      ┌─────────────────────────┐
                      │ ColdFluApp / Health Ref │
                      │ evidence + learning     │
                      └───────────┬─────────────┘
                                  │
                  learn / understand / source-check
                    ┌─────────────┴──────────────┐
                    │                            │
          ┌─────────▼─────────┐       ┌──────────▼────────┐
          │    HealthLens     │       │     HeartCalm     │
          │ private data      │       │ episode support   │
          │ trends + analysis │       │ log + calm + triage│
          └───────────────────┘       └───────────────────┘
```

## Shared vocabulary to standardise

- emergency / urgent / same-day / routine review;
- symptom vs diagnosis;
- measurement vs interpretation;
- evidence certainty;
- red flag;
- clinician-reviewed vs research draft;
- consumer device vs medical device;
- personal data vs public reference content.

## What should be shared

- authoritative external source links;
- reviewed plain-language definitions;
- consistent escalation wording;
- non-personal educational content;
- accessibility patterns;
- privacy/safety principles.

## What should **not** be shared automatically

- symptom logs;
- medication lists;
- pathology results;
- wearable exports;
- emergency-card details;
- names or family information;
- AI-generated personal interpretations.

---

# Podcast/media integration rule

A health-reference page may include a **Learn more** panel with podcasts/videos only after the urgent action and core evidence are clear. Media must never appear in a way that could delay emergency action.

HeartCalm should keep educational podcast content away from the active palpitation/emergency flow. HealthLens should keep media separate from personal analytic outputs so a podcast is not mistaken for interpretation of the user's own data.

---

# Suggested navigation from ColdFluApp

- **Reference** — reviewed health modules.
- **First Aid** — immediate response and escalation.
- **Kids & Family**.
- **Medicines**.
- **Heart & Recovery** — with HeartCalm link.
- **My Health Data** — link to HealthLens.
- **Nursing & Aged Care**.
- **Listen / Watch / Read** — curated resource library.
- **Quizzes** — source-linked knowledge checks.
- **Research status** — transparent unpublished work and evidence gaps.

No linked app should inherit a stronger clinical status simply because another project has reviewed content. Each app must make its own safety boundary visible.
