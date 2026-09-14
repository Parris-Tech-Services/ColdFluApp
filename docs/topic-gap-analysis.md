# Topic gap analysis

Three tiers, from "already flagged by the repo" to "a different product entirely".

For the much larger de-identified general-health inventory already on `main`, see [`HEALTH_TOPIC_MASTER_ROADMAP.md`](HEALTH_TOPIC_MASTER_ROADMAP.md).

---

## Tier A — gaps inside the current scope

`docs/SCOPE.md` already lists most of these under "Required expansion before claiming broad usefulness". They are the cheapest wins because they need no change to the governance model or reviewer profile.

| Gap | Why it matters |
|---|---|
| Separate pregnancy from breastfeeding | Recommendations genuinely differ; one module conflates them |
| Renal disease overlay | Changes NSAID and decongestant safety |
| Liver disease overlay | Changes paracetamol ceilings |
| Diabetes overlay | Sugar-containing syrups, lozenges, steroid effects |
| Anticoagulant use overlay | NSAID interaction — high-harm |
| Polypharmacy overlay | Duplicate paracetamol across combination products is a real poisoning route |
| COVID-19 as a maintained topic | Currently only a comparison row |
| Medicine poisoning and accidental double-dose | Jurisdictional; Poisons Information 13 11 26 |
| Health literacy, disability, carer, low-resource perspectives | Accessibility and equity |

### Additional Tier A gaps not yet in SCOPE.md

- **RSV** — now has both infant prevention programmes and older-adult vaccination options in Australia; details must be kept current.
- **Pertussis** — absent as a dedicated topic despite recurrent Australian outbreaks.
- **COVID-19 antivirals and eligibility** — needs a maintained Australian overlay.
- **Post-viral and long-symptom trajectories** — persistent cough, post-viral fatigue, long COVID. Readers frequently ask how long recovery is expected to take, and the evidence is often less precise than consumer guidance implies.
- **Croup and bronchiolitis** — common acute paediatric respiratory presentations.
- **When a respiratory illness is not the cause** — asthma, reflux, rhinitis, medication cough and other differentials, without symptom-only diagnosis.
- **Return to work, school and childcare** — exclusion periods are jurisdictional and commonly asked.
- **Antibiotic stewardship as a reader-facing topic** — when antibiotics help and when they do not.
- **Sick-day rules for chronic conditions** — safety-critical and requires condition-specific clinical governance.

---

## Tier B — adjacent expansion that the current model could absorb

These are close to the current product and could use broadly similar evidence structures, but still require the right accountable reviewers.

- Acute gastroenteritis and vomiting illness
- Sinusitis and otitis media as conditions, not just symptoms
- Hay fever and allergic rhinitis
- Tonsillitis and strep throat management
- Conjunctivitis
- Hand, foot and mouth, chickenpox and measles awareness
- Common childhood rashes — recognition and escalation, not diagnosis
- Fever in the returned traveller — escalation pointer only
- Heat illness and dehydration
- Mould, dust, bushfire smoke and indoor air quality

---

## Tier C — general health

This is what "useful for any aspect of health" actually means. Each domain needs accountable review appropriate to that domain; a single general reviewer cannot safely sign off every area.

| Domain | Reviewer / governance need | Risk if unreviewed |
|---|---|---|
| Acute illness and infection | GP / relevant clinician | Current scope |
| **First aid and resuscitation** | ANZCOR-aligned clinical/first-aid expertise | **Extreme.** Must track current authoritative guidance closely |
| Child and adolescent health | Paediatric expertise | High — small margins |
| Maternal and reproductive health | Midwifery / obstetric expertise | High |
| **Mental health** | Mental-health clinician + crisis-safety governance | **Extreme.** Crisis pathways and self-harm need dedicated controls |
| Chronic disease (diabetes, CVD, renal, liver) | Relevant specialist / GP | High — sick-day rules, medicines |
| Cancer | Oncology expertise | High |
| Musculoskeletal and injury | Physio / sports-medicine expertise | Moderate |
| Skin, wounds and burns | GP / wound clinician | Moderate–high |
| Eyes, ears, dental | Relevant clinician | Moderate |
| Gastrointestinal and nutrition | Dietitian / gastroenterology expertise | Moderate; eating-disorder content needs separate safeguards |
| Neurological | Neurology expertise | High |
| Sexual and reproductive health | Sexual-health clinician | High — privacy sensitive |
| Older person, dementia, aged care | Geriatric / aged-care expertise | High |
| Medicines and pharmacology | Pharmacist | **Extreme** — dosing and interactions |
| Immunisation | Immunisation expertise | High and time-sensitive |
| Travel health | Travel-medicine expertise | Moderate |
| Occupational and workplace health | Occupational-health / WHS expertise | Moderate |
| Preventive health and screening | GP / public-health expertise | Moderate |
| Disability and accessibility | Lived-experience + clinician | Moderate |
| Palliative and end-of-life | Palliative-care expertise | High |
| Health-system navigation | Health-service / policy expertise | Low clinical risk, high accuracy churn |

**Scale reality:** even 20 modules across roughly 22 domains is around 440 modules, versus 28 in the initial respiratory catalogue and 0 published today. General health is a major scope expansion, not merely a few extra pages.

---

## Recommendation

Finish at least one module end to end, establish accountable review, and prove the publication pipeline. Then expand deliberately.

If the practical need is broad lookup coverage now, a curated directory of authoritative Australian sources can grow in parallel without pretending that unreviewed AI-written material is clinical guidance. See [`source-register-draft.md`](source-register-draft.md).
