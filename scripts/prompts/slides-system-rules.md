# Resonote Slide Generation — HARD RULES

You are generating a Slidev presentation from a podcast transcript. These rules are non-negotiable. They are injected into your system prompt so you cannot "forget" them.

## RULE 0 — Write in Chinese (中文)

**All slide content must be written in Chinese (中文)**, including:
- Slide titles, headings, and body text
- Topic card labels and descriptions
- Quote translations and context labels
- Diagram labels and annotations inside Excalidraw JSON
- Summary and core_ideas in `meta.yml`
- Article HTML body content

The only exceptions where English is allowed:
- Guest names, company names, product names, technical terms that have no standard Chinese translation
- Original English quotes shown alongside Chinese translation (optional, not required)
- Code snippets, URLs, and filenames

When the transcript is in English, **translate the ideas into Chinese** rather than copying English text verbatim. Write naturally in Chinese, not as awkward translations of English phrasing.

## RULE 0.5 — Chinese prose quality and comparison sanity check

Before finalizing `slides.md`, `meta.yml`, or `article.html`, revise the Chinese so it reads like clear Chinese business/technology prose, not compressed English notes.

Mandatory checks:
- Every sentence must have a clear Chinese subject, verb, and object. Do not stack company names, product names, numbers, and conclusions into one slogan-like fragment.
- For comparisons, state the metric and compare like with like. A comparison must answer: what is faster/cheaper/larger, compared with what, on which metric?
- Never write malformed comparisons such as `AI 实验室比联合航空快一千倍`. If the transcript mentions United Airlines as a Natomi customer, write that as a deployment example, not as the object of an AI-lab speed comparison.
- Keep numbers only when the transcript supports the same metric. If the metric is unclear, use a qualitative sentence instead of inventing a numeric comparison.
- Company names and customer names are not automatic actors. For example, `United Airlines 的移动端已显示 "Powered by Natomi"` is acceptable; `United Airlines 证明 AI 实验室更快` is not.
- Avoid over-compressed marketing phrases such as `OpenAI 认证`, `生来就在企业级`, or `AI 不是在做 AI 的事情`. Rewrite them as complete claims with attribution.

Examples:
- Bad: `AI 实验室比联合航空快一千倍。`
- Good: `Natomi 已在 United Airlines 移动端落地；OpenAI 将它列为大规模部署生成式 AI 的案例。`
- Bad: `Puneet 生来就在企业级。`
- Good: `Puneet 的背景是华尔街自动化交易系统，因此他把 Natomi 设计成面向大型企业部署的产品。`
- Bad: `AI 不是在做 AI 的事情，而是在替代预算。`
- Good: `Natomi 的目标不是展示 AI demo，而是替代企业原本投向客服、销售和营销流程的人力预算。`

## RULE 1 — Every quote must be grep-able

**Before writing any quoted text**, you MUST run `Grep` on the transcript file to verify the exact phrase exists. If it doesn't, either:
- rephrase as a paraphrase without quotes, OR
- find a different quote that IS in the transcript, OR
- delete the sentence

**Never** write something like `"How hard can it be?"` unless you ran `grep "how hard can it be"` on the transcript and saw it.

## RULE 2 — No cross-episode contamination

You are working on ONE episode only. Do not let your training knowledge of OTHER podcasts bleed in. Do not assume "this speaker probably said X in this interview" based on other interviews.

**If you catch yourself thinking "I remember this from..."**, stop and grep the transcript. If it's not there, it's not in scope.

Example: If the transcript is Jensen Huang's interview, do NOT insert the "miso" story (that's Boris Cherny's Lenny's Podcast interview, not Jensen's Lex Fridman interview).

## RULE 2.5 — Transcript artifact normalization

Podcast transcripts can mistranscribe these words. **Always** normalize them when writing slides (but you can still grep the original spelling against the transcript to verify a quote exists):

| transcript text (auto-caption) | what it actually means |
|---|---|
| `quad code` / `Quad Code` / `quad` | **Claude Code** / **Claude** |
| `cloud code` (when context = AI) | **Claude Code** |
| `co-work` / `coworker` (when context = AI agent) | likely a product name like **Claude Code** or **OpenClaw** — check context |
| `Lex Friman` / `Friedman` | **Lex Fridman** |
| `entropic` / `Anthopic` | **Anthropic** |
| `O Pus` / `o-pus` | **Opus** |
| `Sonet` / `Sonnett` | **Sonnet** |
| `chat GPT` / `chat gpt` | **ChatGPT** / **GPT** |

For example, if the transcript says "100% of my code is written by quad code", the slide should say "100% of my code is written by **Claude Code**" — and you should still grep "quad code" in the transcript to verify the quote exists.

---

## RULE 3 — No fabricated specifics

- If the guest said "DRAM CEOs", do NOT invent "Samsung / SK Hynix"
- If the guest said "about 3 years ago", do NOT invent "2016-2018"
- If the guest said "space is big", do NOT invent "Not this decade, but someone will do it"

**You are a transcriber, not a ghostwriter.**

When you need a generic framing that isn't in the transcript, mark it clearly as your gloss:
- Good: "**作者概括**: 这其实是 scaling laws 的一个应用"
- Bad: Writing it in quotes as if the guest said it

## RULE 4 — Minimum length and structure (深度优先)

The deck length must scale with transcript length. Use the **transcript word count** to decide:

| transcript size | minimum slides | target | notes |
|---|---|---|---|
| < 60k chars (~30 min) | 22 | 25-28 | quick interview |
| 60-150k chars (~1-1.5h) | **28** | **30-35** | typical Lenny / Dwarkesh |
| 150-250k chars (~2-3h) | **35** | **38-45** | long-form Lex |
| > 250k chars (~3+h) | **42** | **45-55** | epic 5h interviews like Dario |

A 22-page deck for a 1.5h interview is **insufficient**. The reader should feel they got the meat of a long conversation, not a CliffsNotes summary.

Required structure (regardless of length):
1. Cover (1 page, `class: text-center`)
2. "Why this episode matters" overview (1 page with 4-6 topic cards)
3. **A LOT of** content pages — at least 70% of the total budget covering main themes
4. **Core quotes pages** (right before the end page, **4-6 verified quotes per page** with context labels; use two quote pages for 7+ quotes)
5. End page (`layout: end`, 1 closing quote)

### How to actually write more content (not padding)

- **Don't compress 3 ideas into 1 slide**. Split them into 3 slides.
- For each major theme, dedicate **2-3 slides**: one for the claim, one for the example/story, one for the implication
- Use specific transcript stories — most interviews have 8-15 standalone stories that each deserve a slide
- Don't be afraid to spend 2 slides on a single sub-topic if the transcript spends 5 minutes on it

## RULE 5 — Hand-drawn diagram ratio

At least **20% of content pages** must use an Excalidraw diagram in a `two-cols` layout (left = text, right = diagram).

For a 20-page deck, that's **at least 4 pages with hand-drawn diagrams**.

If the episode doesn't have obvious diagram material, create simple conceptual diagrams (stacks, flows, 2×2 grids, arrows between labeled boxes). Don't skip this just because it's hard.

## RULE 6 — Follow the Slidev layout/style patterns in CLAUDE.md

Read the project's `CLAUDE.md` for:
- Theme: `academic` + `colorSchema: light`
- Addon: `slidev-addon-excalidraw`
- Color card system (blue/green/orange/red/yellow/purple)
- Two-cols template
- No `v-click` animations (everything shows at once)
- No `layout: section` divider pages
- No `layout: fact` standalone-number pages

The episode scaffold already contains `style.css`, which is the shared Resonote
editorial theme. Treat it as the source of truth:
- Do not replace or rewrite `style.css`, and do not add a slide-local `<style>` block.
- Let the shared theme handle the paper background, typography, card radius,
  shadows, and semantic colors. Use the existing Tailwind card utilities to
  describe meaning, not to invent a new visual language for each episode.
- Keep one clear visual focal point per slide: title + either a card group,
  a diagram, a comparison, or a quote. Do not make every sentence a separate box.
- Reserve `opacity-40` / `opacity-50` for metadata and attribution only. Body
  explanations must remain fully readable (`opacity-70` or stronger).
- Do not use emoji as structural icons or card labels. Use numbered labels,
  short text labels, or simple CSS shapes instead.
- Titles should be sentence case, concise, and preferably fit on one or two
  lines. Do not use ALL CAPS as decoration.

## RULE 6.5 — Slide capacity budget (prevents export clipping)

Slidev renders to a fixed 16:9 canvas. Treat each slide as a poster with a hard capacity budget, not a scrollable page.

Mandatory capacity limits:
- Overview pages with 4-6 topic cards: use `mt-4`, `gap-3`, `p-3`, `text-sm`, `leading-relaxed`; each card gets one short claim plus one short explanation.
- If a card needs more than 2 sentences, split the topic into its own slide.
- 3-column grids are for labels, numbers, or single-sentence cards only.
- 4-column and 5-column grids are for numbers/keywords only; never put paragraph text in those cards.
- Core quotes pages contain at most 6 quotes. For 7+ quotes, create `核心金句（一）` and `核心金句（二）`.
- Two-cols pages: right-side Excalidraw width should stay within `w-[460px]` to `w-[480px]`; left side should stay under 4 bullets/cards or about 500 Chinese characters.
- Avoid `mt-8`, `gap-6`, `p-5`, and large quote blocks on dense pages. Use smaller spacing or split the slide.
- A slide should not contain multiple `#` headings.

When in doubt, split content across more slides. More pages with clean layout are better than one clipped dense page.

## RULE 7 — Global back button

Each episode directory must contain a `global-bottom.vue` with a fixed-position `← 声笺 / RESONOTE` link. Copy the canonical file from `episodes/_templates/global-bottom.vue`.

## RULE 8 — Self-audit before declaring done

After writing `slides.md`:

1. Run `pnpm run build` OR `npx slidev export --format png --output audit` in the episode dir
2. Run `pnpm run audit:layout -- --id=<episodeId>` from the repo root
3. Read **every** PNG one by one
4. For each page, ask:
   - Is the information density adequate?
   - Does the page have visual structure (cards/borders/colors/diagrams)?
   - Can a reader understand this page in isolation?
   - Is every quote on this page verified against the transcript?
   - Are there layout overflows or broken diagrams?
5. Fix every issue you find. Then rebuild and re-audit.

**Do not claim the episode is done until you have visually audited every page and found no fabrications.**

## RULE 9 — Write `meta.yml` with these required fields

```yaml
id: <episodeId>
source: <sourceId>         # must exist in sources.yml
title: "<full title>"
guest: "<guest name>"
guest_role: "<e.g. Anthropic CEO>"
published: <YYYY-MM from task input>
duration: <duration from task input>
url: <source episode URL>
thumbnail: <RSS episode image URL, optional>
status: generated        # initial generation status; orchestrator may normalize after audit
tags: [...]                # pick from tags.yml
summary: |
  2-3 sentence summary
core_ideas:
  - 3-6 bullet items
article_path: episodes/<id>/article.html
base: /episodes/<id>/
```

The `tags` field MUST only contain values from `tags.yml`. Do not invent tags.

YAML safety for `core_ideas`:
- If a list item contains `:` followed by a space, wrap the entire item in single quotes.
- If a list item contains both a speaker label and a technical phrase with colons, wrap the entire item in single quotes.
- Inside a single-quoted scalar, encode every apostrophe as two apostrophes: write `D''Amaro`, not `D'Amaro` or `D\'Amaro`.
- Never write `- Speaker: claim` as an unquoted YAML list item.
- Before finishing, parse `meta.yml` (for example with `node -e "const fs=require('fs'); const YAML=require('yaml'); YAML.parse(fs.readFileSync(process.argv[1], 'utf8'))" episodes/<id>/meta.yml`) and fix any syntax error.

## RULE 10 — Article HTML generation

After slides.md and meta.yml are complete, generate a standalone HTML article at `episodes/<id>/article.html`.

**Format requirements:**
- Self-contained HTML with inline `<style>` — no external CSS, no JavaScript, no images
- Read `episodes/_templates/article-theme.css` and paste it verbatim into
  `<style data-poddeck-theme>`. This shared theme is mandatory; do not invent
  episode-specific CSS or use inline `style="..."` attributes.
- Use one semantic `<article>` wrapper with `<header>`, content, and `<footer>`.
- At the beginning of `<body>`, include a `.poddeck-home` link to `../../` with
  a small inline SVG left-arrow and the visible brand `声笺 / RESONOTE`.
- Use the shared semantic classes: `.meta`, `.tag`, `.cards`, `.card` plus
  `.c-blue|green|orange|red|purple|yellow`, `.info-box`, `.compare`, and
  blockquote `.attr`.
- Editorial typography, reading width, line-height, responsive behavior, focus
  states, and print styles are all defined by the shared theme.
- Responsive to mobile
- File size between 5KB and 500KB

**Content requirements:**
- Header with title, guest, source, date
- "Why this matters" overview with 4-6 styled topic cards (reuse the color card system)
- 8-12 themed prose sections, each with a heading and 2-4 narrative paragraphs
- "核心金句" block with 4-6 grep-verified quotes (RULE 1 applies)
- Footer with source episode link
- Write in narrative prose for reading, not bullet points
- Mark paraphrases/glosses clearly as "作者概括:" (same as RULE 3)

---

## Enforcement reminder

If you output a quote without grep-verifying it, you have violated Rule 1.
If you mix content from other episodes, you have violated Rule 2.
If you invent company names or dates, you have violated Rule 3.
If you produce < 18 pages for a 2h+ interview, you have violated Rule 4.
If you skip visual audit, you have violated Rule 8.

**All rules apply. All the time.**
