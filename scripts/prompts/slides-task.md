You are producing visual notes and an accompanying article for ONE podcast episode. Apply the editorial and production requirements in `slides-system-rules.md`; this prompt specifies the execution order. Write reader-facing content in Chinese, with the exceptions defined in RULE 0.

## Input

- **Episode ID**: `{{ID}}`
- **Source**: `{{SOURCE}}`
- **Title**: `{{TITLE}}`
- **Source episode URL**: `{{URL}}`
- **Published**: `{{PUBLISHED}}`
- **Published sort key**: `{{PUBLISHED_SORT}}`
- **Duration**: `{{DURATION}}`
- **Thumbnail**: `{{THUMBNAIL}}`
- **Transcript file**: `data/transcripts/{{ID}}.txt`
- **Episode directory** (already scaffolded; shared style and chrome are staged temporarily): `episodes/{{ID}}/`

## What to produce

1. `episodes/{{ID}}/slides.md` — the Slidev markdown
2. `episodes/{{ID}}/meta.yml` — episode metadata for the landing page
3. `episodes/{{ID}}/article.html` — standalone HTML article
4. `episodes/{{ID}}/quote-evidence.yml` — machine-verifiable quote provenance

## Workflow

### Phase 1 — Read and establish evidence

1. Read the full transcript `data/transcripts/{{ID}}.txt`, in chunks if necessary. Do not infer unread portions from the title or a partial excerpt.
2. Identify the substantive questions and discussion segments without a target number of themes. Note repeated passages, changes of view and unresolved disagreements.
3. For each major question, locate the speaker's claim, supporting passages/examples and relevant conditions. Keep exact searchable excerpts or line references in working notes so you can return to the source. No new intermediate file format is required.
4. Verify names, numbers, dates and comparison metrics in context. Handle transcription uncertainty under RULE 2.5; do not guess missing entities or timestamps.
5. Select a direct quote only if its wording contributes to understanding. Verify the original with `rg`/Grep and keep its source for Phase 6. No quotes are required.

Proceed only after the full transcript has been read and the main questions have supporting passages. If the transcript is incomplete or unreadable, report the limitation rather than inventing coverage.

### Phase 2 — Plan the reading structure

Before writing markup, prepare a brief outline in working notes:
- Select a reading order that suits the episode under RULE 4. Preserve chronology where it matters; group repeated discussion where it helps.
- For each explanation unit, identify its reader question, supported answer, useful evidence/example, any important limitation, and preferred presentation form. Include only elements the material needs.
- Decide which units fit on one page and which require a meaningful continuation. Do not separate claim, example and implication by default.
- Check coverage against Phase 1. Merge repetitions and retain disagreement. Record any substantive omission and its reason for the final report.

Do not assign pages from transcript length, create a fixed number of themes, or reserve slots for diagrams and quotes. A shorter outline must still explain the episode's major arguments.

### Phase 3 — Write `slides.md`

Use the cover, optional topic overview, explanation units and final `layout: end` page described in RULE 4. Do not create standalone quote chapters or a closing-quote page.

Choose prose, tables, shared HTML or Mermaid according to RULE 5. A diagram-led page may use `layout: default`; use `two-cols-header` when the text and diagram contribute different information. Use specific Chinese titles, one `#` heading per page. Keep claims and their evidence or conditions close together.

Use the shared style and capacity rules in RULES 6 and 6.5. Do not edit staged `style.css`, create local styles/components, or implement site navigation. Set `diagramMode: static`; use plain Mermaid fences in `rn-note` containers. Do not create Excalidraw assets or manually embed generated SVG.

Frontmatter (escape the title as a valid YAML scalar):
```yaml
---
theme: academic
colorSchema: light
diagramMode: static
title: '{{TITLE}}'
coverDate: ''
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---
```

Keep slide metadata directly after the opening separator, with no intervening blank line:
```markdown
---
layout: default
---

# 页面标题
```

### Phase 4 — Write metadata and article

Write `meta.yml` using only the editorial fields in RULE 9: `title`, `guest`, `guest_role`, `tags`, `summary`, `core_ideas`. Choose existing tags from root `tags.yml`; do not invent missing guest details. The orchestrator supplies source, path and status fields.

Write `article.html` under RULE 10, using the same verified evidence but an independently planned prose structure. Do not expand slides page by page. Include the required header and source footer, use shared semantic classes, and omit styles, scripts, images and navigation. Check the artifact size contract without padding the article.

### Phase 5 — Review structure and language

1. Run the structural review in RULE 8 against the source passages and outline. Read slide titles in order, then each complete topic. Check lost context, omitted counterexamples, duplicated explanations and unsupported visual relationships.
2. Read the article continuously as a reader who has not heard the episode. Fix unexplained jumps and overloaded paragraphs while preserving attribution and conditions.
3. Apply RULE 0.5 to all three artifacts. Use the following scan as a review queue, not an automatic replacement list:

```bash
rg -n '赋能|助力|释放.{0,8}潜力|值得注意的是|不仅.{0,16}(而且|更是)|不是.{0,40}而是|通过.{0,24}从而|进行.{0,8}(分析|讨论)|先把.{0,24}(说清楚|讲清楚)|先别|别急着|真正的问题是|不应被读作|节目要说明的不是|更准确地说|标志着|新篇章|未来可期' episodes/{{ID}}/slides.md episodes/{{ID}}/article.html episodes/{{ID}}/meta.yml
```

No matches is a normal result. Review each hit in context; preserve exact quotations and fixed terms. Prefer clear, ordinary Chinese over compressed slogans. Do not rewrite fluent text just to evade a search pattern. After substantive changes, verify source support again.

### Phase 6 — Persist evidence and validate

Write `quote-evidence.yml` under RULE 11 with one entry per direct-quote occurrence in either artifact. Preserve exact artifact and transcript substrings, including source-language text for translations. If neither artifact has direct quotes, write:

```yaml
episode_id: '{{ID}}'
quotes: []
```

Run from the repository root:

```bash
pnpm run audit:layout -- --id={{ID}} --png --keep
```

Parse `meta.yml` to check YAML syntax under RULE 9. Full artifact validation runs in the orchestrator after it adds source-derived metadata; do not add those fields yourself or run the final validator against editorial-only metadata.

Inspect every PNG in `episodes/{{ID}}/audit-layout/png` under RULE 8. Use this shared audit path so Mermaid rendering matches publication; do not substitute a separate raw Slidev export. Fix audit errors, review warnings, regenerate affected output and inspect it again. Do not edit repository tooling or other episodes to make this episode pass. Leave audit outputs available for review.

### Phase 7 — Report

Output a JSON summary on stdout using actual results:

```json
{
  "id": "{{ID}}",
  "slides_count": 0,
  "diagrams_count": 0,
  "quotes_verified": 0,
  "audit_passes": 0,
  "article_written": false,
  "notes": "Reading order and rationale; coverage and important omissions; structural revisions; unresolved source or validation issues, if any."
}
```

Replace the example values with measured counts and status. Counts report the output; they are not generation targets. Keep working outlines and review checklists out of published artifacts. Do not claim completion if required evidence or visual checks remain unresolved.

Begin Phase 1 now.
