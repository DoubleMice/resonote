You are generating a Slidev presentation deck for ONE podcast episode. **Write all content in Chinese (中文)** — titles, body text, card labels, diagram annotations, meta.yml summary and core_ideas, article HTML. English is only allowed for names, technical terms, and code/URLs.

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
- **Episode directory** (already scaffolded with reusable `public/` diagram templates; shared style and chrome are staged temporarily): `episodes/{{ID}}/`

## What to produce

1. `episodes/{{ID}}/slides.md` — the Slidev markdown
2. `episodes/{{ID}}/meta.yml` — episode metadata for the landing page
3. `episodes/{{ID}}/article.html` — standalone HTML article
4. `episodes/{{ID}}/quote-evidence.yml` — machine-verifiable quote provenance

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
- Content pages covering the themes — at least 70% of the deck total per RULE 4 (e.g. ~20 for a 28-page deck; scale with transcript length)
- At least **4 pages with Excalidraw diagrams** (two-cols layout)
- Core quotes page (`核心金句`) — 4-6 verified quotes with labels
- End page (`layout: end`) with one closing quote

Excalidraw diagrams: first check `episodes/{{ID}}/public/` for reusable templates that fit your themes. If you need a new diagram, write minimal JSON following the pattern in the existing templates.

Visual theme: the orchestrator has temporarily staged the shared `style.css` in
the episode directory. Do not edit or recreate it and do not add per-deck CSS.
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

Use the editorial-only schema from RULE 9 in the system prompt. Only write
`title`, `guest`, `guest_role`, `tags`, `summary`, and `core_ideas`. Only use tags
that exist in the root `tags.yml`. The orchestrator writes all source-derived,
path, and status fields after generation.

### Phase 3.5 — Generate `article.html`

Produce a complete semantic HTML article document at `episodes/{{ID}}/article.html`.

**Content**: Use the transcript evidence from Phase 1 and follow RULE 10, which owns the article structure. Before drafting, outline the article's central question or narrative thread, the evidence each section adds, and the connection to the next section. Choose a structure suited to this episode; do not copy the slide outline.
- Header: title, guest, source, date; footer: source episode link
- Open with a concrete detail or question from the episode and enough context to follow it.
- Let the material determine section count and paragraph length. Merge overlapping themes; preserve substantial examples, qualifications, and disagreements.
- Use prose as the default. Overview cards, comparison blocks, and lists are optional; include them only when they serve a distinct reading need.
- Put verified quotations near the relevant argument, when useful. There is no required article quote count or closing `核心金句` block.
- Attribute faithful paraphrases naturally. Mark only added editorial interpretations as `作者概括：`, as specified in RULE 10.

**Format**: Do not embed `<style>`, stylesheet links, inline `style` attributes,
JavaScript, navigation, or reader chrome. `scripts/build-all.ts` injects the
current shared theme and chrome into every article, making the built output
self-contained. Use a semantic `<article>` structure and the shared classes
listed in RULE 10. No images. Responsive behavior comes from the shared theme.

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
- nominalized or abstract-verb filler (`对……进行分析`, `赋能`, `释放潜力`) where a plain verb works
- mechanical frames and filler (`通过……从而确保……`, `不仅是……更是……`, `不是……而是……`, `值得注意的是`) — keep meaningful, supported contrasts; remove invented oppositions and repetitive framing
- inconsistent entity names — use an established Chinese name where available, otherwise the original spelling; keep it consistent across artifacts

The translationese review checklist in RULE 0.5 of the system prompt lists more cues — run through it here as well. These are review cues, not mechanical bans; check context before rewriting.

Then run a mechanical self-scan over your own output with the Grep tool (or `rg`) — hits are a review queue, not auto-replacements:

```bash
rg -n '赋能|助力|解锁|释放.{0,8}潜力|注入.{0,8}活力|扮演.{0,8}角色|铺平道路|位于.{0,8}核心|从本质上讲|值得注意的是|对于.{0,16}而言|不仅.{0,16}(而且|更是)|不是.{0,16}而是|通过.{0,24}从而|进行.{0,8}(分析|讨论|检查)|实现.{0,8}(提升|增长|优化)|完成.{0,8}(构建|部署)|标志着|新篇章|未来可期|堪称|可谓|颇具|上佳' episodes/{{ID}}/slides.md episodes/{{ID}}/article.html episodes/{{ID}}/meta.yml
```

For each hit, apply the RULE 0.5 decision steps (fixed use? common phrasing? concretize with transcript evidence? narrow or delete). Protected names, fixed terms, and grep-verified quotes stay untouched. After each rewrite, re-check subject, condition, and outcome, and confirm terminology is still consistent.

For article prose, prefer complete explanatory sentences over compressed labels. For slide cards, concise is good, but the sentence still has to be grammatical and factually anchored.

Then review the article at three levels (word searches alone cannot verify prose quality):
1. Read the opening and headings in sequence. Is there a coherent account, does every section add material, and are related points needlessly split? Merge or reorder where needed, checking transcript context again.
2. Read paragraph openings and endings together. Remove repetitive summaries, formulaic transitions, vague metaphors, and repeated editorial verdicts. Keep a supported contrast or conclusion when it actually clarifies the argument.
3. Read the full prose aloud mentally. Resolve unclear references, long translated modifier chains, unnecessary English, and unnatural collocations. Check that edits preserve who said what, time, conditions, uncertainty, and comparison metrics. Refresh quote evidence after any quote edit.

Record the main structural and language revisions in the final JSON `notes`; do not insert this editorial checklist into the published article.

Bad examples to fix:
- `AI 实验室比联合航空快一千倍`
- `OpenAI 认证：United Airlines 移动端已显示 Powered by Natomi`
- `Puneet 生来就在企业级`

Acceptable rewrites:
- `Natomi 已在 United Airlines 移动端落地；OpenAI 将它列为大规模部署生成式 AI 的案例。`
- `Puneet 的自动化交易背景，让他从一开始就按大型企业部署场景设计 Natomi。`

### Phase 3.7 — Persist quote evidence

Write `episodes/{{ID}}/quote-evidence.yml` using RULE 11. Include every quote
occurrence from both `slides.md` and `article.html`, with exact artifact and
transcript excerpts. Re-run Grep while building this file; remembered wording is
not evidence.

### Phase 4 — Build and self-audit

1. From the repo root, run `Bash: pnpm exec slidev export episodes/{{ID}}/slides.md --format png --output episodes/{{ID}}/audit` to render every slide to PNG
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
- Produce fewer slides than the RULE 4 minimum for the transcript length (e.g. fewer than 28 for a 60-150k char transcript)
- Skip the self-audit phase
- Write commentary in Chinese that sounds like an English quote translation (if you're paraphrasing, mark it as paraphrase, not as a quote)

Begin Phase 1 now.
