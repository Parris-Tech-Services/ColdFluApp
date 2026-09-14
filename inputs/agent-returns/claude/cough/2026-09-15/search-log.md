# Search log - `cough` (partial return)

**Read this section before reading anything else in the bundle.**

## What this search actually was

This return was produced in a conversational AI session using a **general-purpose web search tool**.
It was **not** a bibliographic database search.

| Contract requirement | Status in this return |
|---|---|
| Database named | Not applicable - general web search engine, provider not disclosed to the agent |
| Exact query recorded | Yes - see below |
| Date recorded | Yes - 2026-09-15 |
| Filters recorded | None available; the tool exposes no filters |
| Result counts recorded | **NOT AVAILABLE.** The tool returns a truncated result set with no total count |
| Deduplication | Not performed |
| Reproducibility | **Low.** Web search results are non-deterministic and change over time |

No result counts are given because none were available. They have **not** been estimated,
reconstructed or inferred. Per `AGENTS.md`, inventing metadata to satisfy a field is prohibited.

## Queries executed, 2026-09-15

1. `post-infectious cough duration resolution weeks percentage`
2. `RACGP chronic cough adults management Australia guideline`
3. `Cochrane review honey acute cough adults evidence 2025`
4. `honey plus coffee persistent post-infectious cough randomised trial Raeessi`
5. `pholcodine TGA cancelled Australia cough medicine 2023`
6. `speech pathology cough suppression therapy chronic cough randomised trial Vertigan Gibson`
7. `proton pump inhibitor chronic cough without heartburn evidence CHEST guideline reflux cough`
8. `inhaled corticosteroid post-infectious cough systematic review randomized trials benefit`
9. `gefapixant camlipixant refractory chronic cough approval status 2026`
10. `Cochrane over-the-counter cough medicines adults dextromethorphan evidence little benefit`
11. `upper airway cough syndrome post-nasal drip treatment first-generation antihistamine intranasal corticosteroid evidence`
12. `pertussis whooping cough Australia 2026 outbreak adults persistent cough testing PCR`
13. `bedroom humidifier indoor humidity 40-60% respiratory irritation mould risk evidence cough`
14. `benzonatate availability Australia registered TGA cough`
15. `Australian Asthma Handbook cough variant asthma diagnosis spirometry bronchial provocation adults`
16. `TSANZ position statement "Cough in children and adults" 2024 CICADA diagnosis assessment management`

## Documents actually retrieved in full

Only two documents were fetched rather than read as search snippets:

1. **King D. Viral infections and persistent cough. AJGP 2022;51(12):924-927.** Full PDF text
   retrieved and read. This is the only source in this bundle read end to end.
2. **Lung Foundation Australia, chronic cough adults resource page.** Landing page retrieved.
   The linked PDF fact sheet was **not** opened.

Everything else in `source-records/` is snippet-level and is marked
`verificationStatus: unverified-lead-snippet-only` or `unverified-secondary-citation`.

## Known gaps in this search

- **CICADA 2024 full position statement not obtained.** This is the single most important Australian
  source for this module and it was seen at abstract level only.
- **No Cochrane review was read.** All Cochrane references are snippet-level.
- No Embase, MEDLINE, CENTRAL or PubMed structured search.
- No hand-searching of reference lists.
- No grey-literature or trial-registry search beyond incidental results.
- No non-English sources.
- No search for productive cough, the other half of the module scope.
