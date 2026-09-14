# Roadmap

The project began as a 28-module cold/flu research programme. On 15 September 2026 the planning scope expanded to a broader health reference. The original phases below still govern **how content becomes safe to publish**; the new health tracks govern **what to research next**.

Detailed topic backlog: [HEALTH_TOPIC_MASTER_ROADMAP.md](HEALTH_TOPIC_MASTER_ROADMAP.md).

## Phase 0 — Foundation

Goal: establish the rules that prevent unsafe content from reaching readers.

- Approve vision, scope, terminology, evidence labels, and non-goals.
- Recruit or identify evidence, clinical, editorial, and accessibility reviewers.
- Agree on conflicts, corrections, attribution, and funding policies.
- Implement and test the versioned content schema.
- Convert one candidate module into a structured research package.
- Coordinate the module research queue and unverified external intake.
- Audit imported prototypes and test publication gates with fixtures.
- Preserve a strict boundary between public reference content and personal/family health history.

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
- Add reusable emergency/same-day/routine escalation patterns suitable for future first-aid and family-health modules.

Exit: safety patterns are clinically approved and reusable.

## Phase 3 — Initial respiratory catalogue

Goal: research and publish the first useful collection in controlled batches.

- Prioritise common respiratory symptoms and low-risk supportive care.
- Handle medications and vulnerable populations as separately reviewed workstreams.
- Add static search, filters, related content, and source reuse.
- Migrate Batch 1 only after fresh verification; do not treat it as completed work.
- Integrate verified cough research, including independent external returns, through the standard intake path.

Exit: the agreed minimum respiratory catalogue is reviewed, internally consistent, and searchable.

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

# Expanded health-reference programme

The following tracks can progress in planning/research while the publication pipeline is being proven. They must not bypass Phases 0–4.

## Track H0 — Health learning hub

Goal: make trustworthy learning resources useful immediately without labelling them reviewed clinical guidance.

- Maintain [HEALTH_RESOURCE_LIBRARY.md](HEALTH_RESOURCE_LIBRARY.md).
- Maintain [HEALTH_LEARNING_QUIZZES.md](HEALTH_LEARNING_QUIZZES.md).
- Add resource metadata: type, owner, jurisdiction, date checked and related topic.
- Build future `/learn`, `/listen`, `/watch`, `/read` and `/quiz` views from reviewed/curated metadata.
- Keep podcasts/videos out of emergency action paths.

## Track H1 — First Aid and urgent response

Goal: make the app genuinely useful to households and trained first aiders.

Order:

1. 000/112/Healthdirect/Poisons escalation.
2. DRSABCD, CPR and AED.
3. choking.
4. bleeding/shock/wounds.
5. burns/scalds.
6. asthma/anaphylaxis.
7. suspected heart attack/stroke.
8. diabetic emergency/seizures/fainting.
9. heat/cold illness.
10. poisoning/bites/stings/snake bite/water emergencies.

Every first-aid module requires direct ANZCOR/government source verification and independent clinical review.

## Track H2 — Kids and family health

Goal: answer common family illness questions safely.

Priority sequence:

- serious-illness warning signs and infant fever;
- fever/temperature/medication safety;
- cough/croup/bronchiolitis/asthma;
- vomiting/diarrhoea/dehydration;
- ear pain and sore throat;
- rashes/skin problems;
- safe sleep;
- immunisation;
- feeding during illness;
- developmental/neurodivergence resource navigation.

## Track H3 — Medicines and pharmacy

Goal: active-ingredient-first medicine literacy.

- accidental double dosing and Poisons pathways;
- paracetamol/NSAIDs/aspirin;
- antihistamines/decongestants/cough medicines;
- inhalers/nasal sprays;
- antibiotics/antivirals;
- reflux medicines;
- pregnancy/breastfeeding/children/older-person cautions;
- polypharmacy, interactions and renal/liver considerations;
- complementary/herbal products;
- TGA alerts/adverse-event reporting.

## Track H4 — Heart, sleep, exercise and recovery

Goal: connect common health questions with good measurement literacy.

- chest pain/heart attack and stroke first;
- palpitations/tachycardia/syncope;
- blood pressure/lipids/prevention;
- sleep/insomnia/apnoea/shift work;
- physical-activity/strength/running/recovery;
- HRV/resting-HR/wearable limitations;
- safe return to exercise after illness.

Cross-link to **HeartCalm** for episode logging/regulation and **HealthLens** for private data analysis.

## Track H5 — Nutrition, gut and healthy eating

Goal: establish an Australian evidence baseline before evaluating popular diets and supplements.

- Australian Dietary Guidelines;
- hydration;
- nutrient adequacy including dairy-free/vegetarian patterns;
- food safety;
- fibre/bowel health;
- reflux/coeliac/food allergy-intolerance;
- microbiome/probiotics/prebiotics;
- supplement safety;
- popular diets/longevity protocols — evidence vs marketing.

## Track H6 — Mental health and neurodivergence

Goal: practical, non-stigmatising evidence/resource collection.

- anxiety/panic/depression/stress;
- crisis and family-violence pathways;
- counselling/psychology access;
- ADHD guideline and treatment literacy;
- autism/AuDHD/neurodiversity-affirming support;
- burnout/overwhelm/emotional regulation/sensory needs;
- sleep and neurodivergence;
- parenting and workplace/school supports;
- evidence for breathing/mindfulness/somatic/spiritual wellbeing practices without cure claims.

## Track H7 — Pregnancy, breastfeeding and women's health

- pregnancy warning signs and maternal health;
- medicines/vaccines/nutrition;
- postpartum recovery and mental health;
- breastfeeding/infant feeding;
- contraception;
- periods/PCOS/endometriosis;
- cervical/breast screening;
- perimenopause/menopause.

## Track H8 — Brain, chronic illness and MS

- stroke/seizure/headache/migraine;
- concussion/dizziness;
- multiple sclerosis treatment/lifestyle/rehabilitation/carer support;
- dementia/delirium;
- neuropathy/Parkinson disease;
- post-viral fatigue/long COVID/ME-CFS evidence boundaries.

## Track H9 — Older people, aged care and nursing

Goal: a high-value learning reference for carers and health workers without pretending to replace local clinical governance.

- deterioration/delirium/falls;
- infection prevention/outbreaks/PPE;
- medicines/polypharmacy;
- wounds/skin/pressure injuries;
- nutrition/hydration/continence;
- dementia communication;
- pain and palliative care;
- antimicrobial stewardship;
- documentation, escalation and clinical governance.

## Track H10 — Workplace and environmental health

- first-aid arrangements and kit governance;
- healthcare/social-assistance WHS;
- sharps/blood-body-fluid exposure;
- biological hazards and infection control;
- mould/damp/humidity/air quality;
- heat/cold/UV;
- noise/hearing;
- ergonomics/RSI/manual tasks;
- shift-work fatigue;
- chemical exposure and SDS/Poison pathways.

## Track H11 — Prevention, screening and evidence literacy

- vaccination;
- cardiovascular/metabolic prevention;
- cancer screening;
- smoking/vaping/alcohol/substance health;
- sun/oral/hearing/vision health;
- healthy ageing/social connection;
- interpreting tests and screening;
- absolute vs relative risk;
- reading studies/systematic reviews;
- misinformation/conflicts/marketing;
- AI-health and wearable literacy.

---

# Companion-app roadmap

See [HEALTH_APP_ECOSYSTEM.md](HEALTH_APP_ECOSYSTEM.md).

- **ColdFluApp / Health Reference:** public evidence and learning.
- **HealthLens:** private health-data analysis.
- **HeartCalm:** palpitation/calm support and structured episode logs.

Do not merge personal data across these apps by default. Future interoperability requires a separate privacy/security decision and explicit consent model.
