# Hand-off notes - `cough` (partial return from Claude)

## Summary

| Field | Value |
|---|---|
| Module | `cough` |
| Canonical slug | `cough` (matches `docs/ASSIGNMENTS.md`) |
| Agent / tool | Claude (Anthropic), conversational session with web search |
| Return date | 2026-09-15 |
| Schema version | 1 |
| Module status | `researching` (earlier than `draft`) |
| Reviewer fields | All null |
| Review dates | All null |
| Claims | 12 |
| Source records | 20 |
| Sources read in full | **1 of 20** |

## Read this first

**This is discovery material, not a completed research package.** It is offered to shorten the
Codex intake audit, not to be promoted. Nineteen of twenty sources were seen only as search
snippets. Per `AGENTS.md`, AI-generated citations are leads until checked against exact records -
**treat every citation here as a lead.**

## Assignment conflict, stated openly

`docs/ASSIGNMENTS.md` assigns `cough` to **ChatGPT**, with the incoming artefact path
`inputs/agent-returns/chatgpt/cough/<return-date>/`. This return is from **Claude** and is therefore
staged at `inputs/agent-returns/claude/cough/2026-09-15/`.

It does **not** claim primary ownership. Options for the maintainer:

1. Treat it as independent replication / source-verification material alongside the ChatGPT return,
   and label it as such in the `Notes` column; or
2. Discard it if a ChatGPT return already covers the same ground more completely.

Do not merge the two returns into one path. Provenance per agent should stay separate.

## Contract compliance

| Required file | Present | Note |
|---|---|---|
| `protocol.md` | Yes | Deviations stated |
| `search-log.md` | Yes | **No result counts available** |
| `screening.md` | Yes | Informal, single-pass, no counts |
| `extraction.json` | Yes | Marked `extractionCompleteness: partial` |
| `excluded-studies.md` | Yes | Categories, not a per-record log |
| `claim-source-map.json` | Yes | All mappings marked unverified |
| `module.json` | Yes | Validates against `schemas/module.schema.json` |
| `source-records/` | Yes | 20 records, each with `verificationStatus` |
| `handoff-notes.md` | Yes | This file |
| `risk-of-bias.md` | Yes | Records that **no assessment was done** |
| `corrections-retractions.md` | Yes | Records that **no check was done** |
| `funding-conflicts.md` | Yes | Records that **no systematic check was done** |
| `evidence-gaps.md` | Yes | Includes schema feedback |

## Unresolved issues - every one

1. **19 of 20 sources are unverified leads.** Only `king-2022-ajgp-viral-persistent-cough` was read
   in full.
2. **CICADA 2024, the primary Australian source, was seen at abstract level only.** Nothing in this
   bundle should be published before the full position statement is read.
3. **The Lung Foundation PDF was never opened** - only its landing-page description. Two claims and
   three red flags currently lean on that description.
4. **No result counts, no reproducible search.** Web search is non-deterministic.
5. **No risk-of-bias, corrections, or funding assessment.**
6. **Certainty ratings are provisional agent judgement, not GRADE.**
7. **Two sources are second-hand citations** (`jones-2002-afp-duration-of-cough`,
   `thompson-2013-bmj-symptom-duration`), known only via King 2022, with no URL or identifier.
   The duration figures they carry are the most quotable numbers in this bundle and the least verified.
8. **Productive cough is not covered** - roughly half the module scope is missing.
9. **Children are not covered.**
10. **Paediatric evidence has been retained for two claims and labelled indirect.** If a reviewer
    disagrees with retaining it, remove the honey-in-children claim rather than restating it as adult
    evidence.
11. **The codeine jurisdiction note cites a UK source** for an Australian scheduling fact. That is a
    citation mismatch and must be replaced with a TGA or Poisons Standard record before promotion.
12. **No dose, age threshold or triage threshold appears anywhere in this bundle**, deliberately.

## What is genuinely worth keeping here

If most of this is discarded, three things are still worth the reviewer's time:

- **`evidence-gaps.md`**, particularly the finding that post-infectious cough trials exclude people
  with asthma. That has direct safety implications for how the module addresses readers with asthma,
  and it is not something the module would discover from reading the trials' conclusions alone.
- **The absence of an adult resolution curve.** Worth telling readers explicitly rather than
  implying a timeline the evidence does not support.
- **The schema feedback** at the end of `evidence-gaps.md`.

## Provenance

Produced during a conversational session on 2026-09-15. The session also produced personalised
health material for a specific individual. **That material has been deliberately excluded from this
bundle and must never be committed to this repository**, which is public. Nothing in this bundle
contains personal health information.
