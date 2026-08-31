You are generating a Slidev presentation deck for ONE podcast episode. **Write all content in Chinese (中文)** — titles, body text, card labels, diagram annotations, meta.yml summary and core_ideas, article HTML. English is only allowed for names, technical terms, and code/URLs.

## Input

- **Episode ID**: `{{ID}}`
- **Source**: `{{SOURCE}}`
- **Title**: `{{TITLE}}`
- **Source episode URL**: `{{URL}}`
- **Published**: `{{PUBLISHED}}` (use exactly this `YYYY-MM` value in `meta.yml`)
- **Duration**: `{{DURATION}}` (use exactly this display value in `meta.yml`)
- **Thumbnail**: `{{THUMBNAIL}}`
- **Transcript file**: `data/transcripts/{{ID}}.txt`
- **Episode directory** (already scaffolded with package.json, global-bottom.vue, public/ templates): `episodes/{{ID}}/`

## What to produce

1. `episodes/{{ID}}/slides.md` — the Slidev markdown
2. `episodes/{{ID}}/meta.yml` — episode metadata for the landing page
3. `episodes/{{ID}}/article.html` — standalone HTML article

## Workflow (follow in order)

### Phase 1 — Ground yourself in the transcript

1. `Read` the full transcript `data/transcripts/{{ID}}.txt` (use `limit` if large, read multiple chunks)
2. Identify the 6-10 most interesting themes / arguments / stories the guest discussed
3. For each theme, find the best 1-2 verbatim quotes (run `Grep` on the transcript first to confirm the exact phrase)
4. Note specific numbers, names, years — and find their exact wording in the transcript
5. Do NOT proceed to Phase 2 until you have a list of themes with grep-verified quotes

### Phase 2 — Draft `slides.md`

Follow the structure in the system prompt (RULE 4):
- Cover page (academic theme, text-center)
- "Why this episode matters" overview page (4-6 topic cards)
- 12-16 content pages covering the themes
- At least **4 pages with Excalidraw diagrams** (two-cols layout)
- Core quotes page (`核心金句`) — 4-6 verified quotes with labels
- End page (`layout: end`) with one closing quote

Excalidraw diagrams: first check `episodes/{{ID}}/public/` for reusable templates that fit your themes. If you need a new diagram, write minimal JSON following the pattern in the existing templates.

Visual theme: `episodes/{{ID}}/style.css` is already present and defines the
shared 声笺 / Resonote editorial look. Do not edit it and do not add per-deck CSS.
Use the semantic blue/green/orange/red/yellow/purple card utilities from the
system rules. Keep body copy high-contrast and do not use emoji as card icons.

Layout capacity rules:
- Treat every slide as a fixed 16:9 poster. There is no scroll area in export.
- Dense overview/card pages must use `mt-4`, `gap-3`, `p-3`, `text-sm`, and short 1-2 sentence cards.
- Split any page with 7+ cards, 7+ quotes, paragraph text inside 4/5-column grids, or two independent `#` headings.
- Keep core quotes to 4-6 quotes per page. Use a second quotes page when needed.
- Keep two-cols text concise and Excalidraw width at `w-[460px]` or `w-[480px]`.

Frontmatter:
```yaml
---
theme: academic
colorSchema: light
addons:
  - slidev-addon-excalidraw
title: '{{TITLE}}'
coverDate: ''
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
---
```

### Phase 3 — Write `meta.yml`

Use the exact schema from RULE 9 in the system prompt. Only use tags that exist in the root `tags.yml`.
Use the source episode URL, published date, duration, and thumbnail from the input block above exactly as provided. Do not infer these fields from the episode ID or transcript length.

### Phase 3.5 — Generate `article.html`

Produce a standalone, self-contained HTML article at `episodes/{{ID}}/article.html`.

**Content**: Follow the same themes and quotes you extracted in Phase 1. Write narrative prose for reading, not bullet points.
- Header: title, guest, source, date
- "Why this matters" overview with 4-6 styled topic cards (reuse the color card system from slides)
- 8-12 themed sections, each with a heading and 2-4 paragraphs
- "核心金句" block with 4-6 grep-verified quotes with context labels
- Footer with source episode link

**Format**: First read `episodes/_templates/article-theme.css`, then paste it
verbatim into `<style data-resonote-theme>`. Do not create custom CSS or inline
style attributes. Use a semantic `<article>` structure and the shared classes
listed in RULE 10. Add the `.resonote-home` link to `../../` as the first element
inside `<body>`. No external CSS, JavaScript, or images. Responsive behavior is
already included in the shared theme.

**Write to file**: `Write: episodes/{{ID}}/article.html` then `Bash: wc -c episodes/{{ID}}/article.html` to confirm (> 5KB).

### Phase 3.6 — Chinese editorial pass

Before the build/audit phase, re-read `slides.md`, `meta.yml`, and `article.html` as a Chinese editor.

Fix any sentence that has one of these problems:
- English word order copied into Chinese
- unclear subject/verb/object
- a comparison where the two sides are not comparable
- a number or "X times faster/cheaper/larger" claim without a clear metric
- company names, product names, and customer names piled into a slogan instead of a sentence
- marketing shorthand that sounds good but does not say what happened

For article prose, prefer complete explanatory sentences over compressed labels. For slide cards, concise is good, but the sentence still has to be grammatical and factually anchored.

Bad examples to fix:
- `AI 实验室比联合航空快一千倍`
- `OpenAI 认证：United Airlines 移动端已显示 Powered by Natomi`
- `Puneet 生来就在企业级`

Acceptable rewrites:
- `Natomi 已在 United Airlines 移动端落地；OpenAI 将它列为大规模部署生成式 AI 的案例。`
- `Puneet 的自动化交易背景，让他从一开始就按大型企业部署场景设计 Natomi。`

### Phase 4 — Build and self-audit

1. `cd episodes/{{ID}}` then `Bash: npx slidev export --format png --output audit` to render every slide to PNG
2. From repo root, run `Bash: pnpm run audit:layout -- --id={{ID}}`
3. For EACH slide PNG in `audit/`, `Read` the image and check:
   - Text overflow / layout breaks
   - Empty or nearly-empty slides (density too low)
   - Diagrams rendering correctly
   - Chinese characters display OK
   - Back button doesn't overlap content
4. For EACH quote you wrote, `Grep` the transcript to confirm the exact phrase exists
5. Fix every issue, then rebuild and re-audit
6. When clean, delete `audit/` directory

### Phase 5 — Report back

Output a JSON summary on stdout:

```json
{
  "id": "{{ID}}",
  "slides_count": <number>,
  "diagrams_count": <number>,
  "quotes_verified": <number>,
  "audit_passes": <number>,
  "article_written": true,
  "notes": "anything notable"
}
```

## Things you MUST NOT do

- Write any quote without grep-verifying it against the transcript
- Reference content from other podcast episodes (even if the speaker also appeared elsewhere)
- Invent specific company names, dates, or numbers
- Produce fewer than 18 slides for a 1+ hour interview
- Skip the self-audit phase
- Write commentary in Chinese that sounds like an English quote translation (if you're paraphrasing, mark it as paraphrase, not as a quote)

Begin Phase 1 now.
