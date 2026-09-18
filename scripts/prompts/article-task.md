You are producing a Chinese article for ONE podcast episode. Visual note generation is paused. Apply the article-only scope in `slides-system-rules.md`: produce the article, editorial metadata and quote evidence; do not generate, repair or modify `slides.md`, diagrams, images, presentation styles or components. Do not invoke Slidev or `audit:layout`.

## Input

- Episode ID: `{{ID}}`
- Source: `{{SOURCE}}`
- Title: `{{TITLE}}`
- Source episode URL: `{{URL}}`
- Published: `{{PUBLISHED}}`
- Published sort key: `{{PUBLISHED_SORT}}`
- Duration: `{{DURATION}}`
- Thumbnail: `{{THUMBNAIL}}`
- Transcript file: `data/transcripts/{{ID}}.txt`
- Episode directory: `episodes/{{ID}}/`

## Workflow

1. Read the full transcript, in chunks if necessary. Identify the substantive questions, speakers, supporting facts and examples, disagreements, and relevant conditions. Verify names, dates, numbers and comparison metrics in context under RULES 1–3. Do not infer unread content or invent missing details. Verify every direct quote against an exact searchable passage; quotes are optional.
2. Plan the article's reading order in working notes. Preserve chronology where it matters and group repeated discussion where it helps. Cover the main questions with their reasoning and evidence, retaining important counterexamples and uncertainty. Do not impose section or paragraph quotas, expand slides, or pad the article to meet its size contract.
3. Write `episodes/{{ID}}/article.html` under RULE 10 with one semantic article wrapper, a header and source footer. Use shared semantic classes without styles, scripts, navigation or presentation assets. Follow the Chinese prose and attribution requirements in RULES 0–3 and 10.
4. Write `episodes/{{ID}}/meta.yml` using only the editorial fields in RULE 9: `title`, `guest`, `guest_role`, `tags`, `summary`, `core_ideas`. Choose tags from root `tags.yml`. The orchestrator supplies source, path, generation mode and status fields.
5. Review the article against the full transcript and outline for missing context, omitted counterexamples, repeated explanations and unsupported claims. Read it continuously as a reader who has not heard the episode. Then read paragraph openings in sequence, checking the following sentences for repeated verdict-then-explanation structures under RULE 10. Keep useful topic sentences and short sentences; do not merely change punctuation or move every verdict to the paragraph ending. Apply the language review in RULE 0.5 in context, preserving verified quotes and fixed terms. After substantive revisions, verify source support again.
6. Write `episodes/{{ID}}/quote-evidence.yml` under RULE 11 with one entry per direct-quote occurrence in the article. Preserve exact artifact and transcript substrings, including markup. Use `quotes: []` when the article contains no direct quotes. Do not carry over evidence for unrequested slide artifacts.
7. Parse `meta.yml` and `quote-evidence.yml` and fix YAML errors. Check the article's semantic structure and 5–500KB size contract. The orchestrator adds deterministic metadata and runs full artifact validation afterward; do not run the final validator against editorial-only metadata. No slide layout audit or screenshots are required in this mode.

Example evidence structure (replace values with actual excerpts):

```yaml
episode_id: '{{ID}}'
quotes:
  - artifact: article.html
    artifact_excerpt: '<exact substring from article.html>'
    transcript_excerpt: '<exact substring from transcript>'
```

## Report

Output a JSON summary on stdout with actual results:

```json
{
  "article_written": false,
  "quotes_verified": 0,
  "notes": "Reading order, coverage, substantive revisions and unresolved evidence or validation issues."
}
```

Keep working notes and review checklists out of published artifacts. Do not claim completion when evidence or required checks remain unresolved.
