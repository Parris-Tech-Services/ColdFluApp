# Coverage map — what the repo covers today

Compiled 2026-09-15 from `docs/SCOPE.md` and `docs/ASSIGNMENTS.md` on `main`.

## Headline

| Measure | Count |
|---|---|
| Modules in catalogue | 28 |
| Modules **published** | **0** |
| Modules with a completed clinical review | **0** |
| Modules with a completed evidence review | **0** |
| Modules with a draft ready for evidence review | 1 (`sore-throat`) |
| Modules actively being researched | 2 (`sore-throat`, `babies-and-young-children`) |
| Modules assigned but not started | 25 |

Every one of the 28 modules is a *planned* topic. None is finished content. The repo's own README states this plainly: Phase 0, foundation and evidence governance.

## Symptoms (8)

| Topic | Slug | Owner | Status |
|---|---|---|---|
| Cough: dry and productive | `cough` | ChatGPT | assigned (+ unverified Claude discovery return staged separately) |
| Sore throat | `sore-throat` | Codex | **researching — evidence-review-ready draft** |
| Runny or blocked nose | `runny-or-blocked-nose` | ChatGPT | assigned |
| Fever | `fever` | Claude | assigned |
| Fatigue and body aches | `fatigue-and-body-aches` | ChatGPT | assigned |
| Sinus pressure and headache | `sinus-pressure-and-headache` | ChatGPT | assigned |
| Loss of taste or smell | `loss-of-taste-or-smell` | ChatGPT | assigned |
| Ear pressure or blockage | `ear-pressure-or-blockage` | ChatGPT | assigned |

## Interventions (10)

| Topic | Slug | Owner | Status |
|---|---|---|---|
| Hydration | `hydration` | Claude | assigned |
| Humidity and steam | `humidity-and-steam` | Claude | assigned |
| Rest, sleep and positioning | `rest-sleep-and-positioning` | Claude | assigned |
| Nutrition during illness | `nutrition-during-illness` | Claude | assigned |
| OTC medicines by active ingredient | `otc-medicines-by-active-ingredient` | Claude | assigned — safety-critical |
| Complementary and traditional remedies | `complementary-and-traditional-remedies` | Claude | assigned |
| Gargles, saline sprays and nasal irrigation | `gargles-saline-sprays-and-nasal-irrigation` | Claude | assigned |
| Lozenges and throat sprays | `lozenges-and-throat-sprays` | Claude | assigned |
| Warm compresses | `warm-compresses` | Claude | assigned |
| Prescription antivirals and timing | `prescription-antivirals-and-timing` | Claude | assigned — AU prescribing context |

## Populations (5)

| Topic | Slug | Owner | Status |
|---|---|---|---|
| Babies and young children | `babies-and-young-children` | Codex | **researching** — queue 1 |
| Pregnancy and breastfeeding | `pregnancy-and-breastfeeding` | Codex | assigned — queue 2 |
| Older and immunocompromised people | `older-and-immunocompromised-people` | Codex | assigned — queue 3 |
| Asthma, COPD and chronic respiratory conditions | `asthma-copd-and-chronic-respiratory-conditions` | Codex | assigned — queue 4 |
| Cardiovascular disease and high blood pressure | `cardiovascular-disease-and-high-blood-pressure` | Codex | assigned — queue 5 |

## Prevention (3)

| Topic | Slug | Owner | Status |
|---|---|---|---|
| Hand hygiene, surfaces, ventilation, household precautions | `household-precautions` | Claude session | assigned |
| Sleep, activity, stress and general health | `sleep-activity-stress-and-general-health` | Claude session | assigned |
| Influenza vaccination | `influenza-vaccination` | Claude session | assigned — time-sensitive AU overlay |

## Triage (2)

| Topic | Slug | Owner | Status |
|---|---|---|---|
| Self-care → pharmacist → GP → urgent care → emergency | `when-to-seek-care` | Claude session | assigned — safety-critical |
| Cold / influenza / COVID-19 / strep / allergy comparison | `cold-flu-covid-strep-allergies` | Claude session | assigned — must not diagnose |

## What this means

Seven AI-produced module drafts exist. None has passed evidence, editorial or clinical review. The bottleneck is **not** research volume. More AI research does not move a module to `published` without accountable human review.

For the broader expansion inventory, see [`health-topic-master-roadmap.md`](HEALTH_TOPIC_MASTER_ROADMAP.md) and [`topic-gap-analysis.md`](topic-gap-analysis.md).
