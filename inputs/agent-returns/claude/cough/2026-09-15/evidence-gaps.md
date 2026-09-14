# Evidence gaps - `cough` (partial return)

## Gaps in the literature itself

These are genuine gaps in the evidence base, not gaps in this return. They are candidates for
`docs/EVIDENCE_GAP_REGISTER.md`.

1. **No reliable adult resolution curve for post-infectious cough.** The question "what percentage
   of adults have stopped coughing by 3, 4, 6 and 8 weeks" **cannot currently be answered from
   published evidence.** The nearest data are a small Australian primary-care series (n=131) and a
   paediatric systematic review. Any module that implies a precise adult timeline would be
   overstating the evidence. This is a high-value gap for the project to state explicitly to readers.

2. **Almost no trial evidence in the subacute window specifically.** One synthesis identified only
   six randomised trials of post-infectious cough treatments in total, none showing clear
   patient-relevant benefit, most at unclear or high risk of bias.

3. **Post-infectious cough trials systematically exclude people with asthma.** The corticosteroid
   review population was explicitly adults *without* asthma. This means the widely repeated
   statement "nothing works for post-viral cough" **has no evidential basis for the large group of
   readers who have asthma** - who are also, per one analysis, more likely to recover slowly.
   This is a significant and under-recognised gap with direct safety relevance: a reader with asthma
   could be reassured out of seeking care they need.

4. **Behavioural cough-suppression therapy has never been trialled in the subacute window.** The
   evidence is in refractory chronic cough. Whether it prevents progression from subacute to chronic
   cough is unstudied and would be a genuinely useful thing for the module to say.

5. **Adult honey evidence is thin.** The Cochrane evidence is paediatric. The one adult
   post-infectious trial is small, single-centre and single-group.

6. **Demulcent vehicle effect is unquantified.** Australian guidance raises the possibility that the
   syrup vehicle, not the active ingredient, is the effective component of cough mixtures. No trial
   was found isolating this.

7. **Environmental interventions (humidifiers, indoor humidity targets, air purifiers) have no
   direct trial evidence for cough.** Available material is mechanistic, commercial, or about
   infection transmission rather than cough. The commonly repeated 40-60% humidity target traces to
   transmission and mould-growth reasoning, not cough outcomes. The module should say so rather than
   repeat the number as if it were cough evidence.

## Gaps in this return

- CICADA full position statement not obtained (highest priority).
- No Cochrane review read in full.
- No risk-of-bias, corrections or funding assessment.
- Productive cough - roughly half the module scope - not covered at all.
- Paediatric cough not covered.

## Schema feedback for the project

Recording this here because it emerged from trying to fit real cough evidence into the schema:

- **`claim.outcome` has no cough-specific value.** The enum offers `symptom_comfort`, `pain`,
  `fever`, `hydration`, `illness_duration`, `complications`, `transmission`, `harms`,
  `care_escalation`. Every cough-frequency and cough-severity outcome in this bundle had to be
  forced into `symptom_comfort`, which loses the distinction between *cough frequency*,
  *cough severity*, *cough-related quality of life*, and *sleep disruption* - the four outcomes the
  cough literature actually reports, and the ones readers care about most. Consider adding
  `cough_frequency`, `cough_severity`, `sleep_disruption`, or a generic `symptom_severity`.
- **There is no field for `verificationStatus` on a source.** This bundle adds one as a
  non-schema property inside `source-records/*.json`, which are staging files and not
  schema-validated. If the project intends `content/sources/` to record how far a source was
  verified, the source schema needs that field. Without it, a snippet-level lead and a fully
  read document look identical once promoted.
- **There is no machine-readable way to mark a module as a *partial* return.** `status: researching`
  conveys immaturity but not incomplete scope. A `scopeCoverage` or `partial: true` field would stop
  a partial draft from being mistaken for a complete one.
