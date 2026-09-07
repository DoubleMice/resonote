import { existsSync, readFileSync, statSync } from 'node:fs'
import { basename, join, resolve } from 'node:path'
import { parseSync as parseSlidev } from '@slidev/parser'
import { parse } from 'yaml'

export type ArtifactIssueLevel = 'error' | 'warning'

export interface ArtifactIssue {
  level: ArtifactIssueLevel
  code: string
  file: string
  message: string
}

export interface ValidateArtifactOptions {
  rootDir: string
  id: string
  strict?: boolean
}

const META_FIELDS = [
  'id', 'source', 'title', 'guest', 'guest_role', 'published', 'published_sort',
  'duration', 'url', 'status', 'tags', 'summary', 'core_ideas', 'base',
] as const

const STATUSES = new Set([
  'queued', 'needs_transcript', 'transcribing', 'transcribe_failed', 'downloading',
  'downloaded', 'generating', 'generated', 'audit_failed', 'failed',
])
const CHINESE_REVIEW_PATTERN = /赋能|助力|解锁|释放.{0,8}潜力|注入.{0,8}活力|扮演.{0,8}角色|铺平道路|位于.{0,8}核心|从本质上讲|值得注意的是|对于.{0,16}而言|不仅.{0,16}(?:而且|更是)|不是.{0,16}而是|通过.{0,24}从而|进行.{0,8}(?:分析|讨论|检查)|实现.{0,8}(?:提升|增长|优化)|完成.{0,8}(?:构建|部署)|标志着|新篇章|未来可期|堪称|可谓|颇具|上佳/g
const TRANSCRIPT_ARTIFACT_PATTERN = /\b(?:quad code|Lex Friman|Anthopic|O Pus|o-pus|Sonet|Sonnett|chat GPT)\b/gi

function relativeFile(id: string, name: string): string {
  return `episodes/${id}/${name}`
}

function loadAllowedValues(rootDir: string): { sources: Set<string>; tags: Set<string> } {
  const sourcesDocument = parse(readFileSync(join(rootDir, 'sources.yml'), 'utf8')) as {
    sources?: { id?: string }[]
  }
  const tagsDocument = parse(readFileSync(join(rootDir, 'tags.yml'), 'utf8')) as {
    categories?: Record<string, string[]>
  }
  return {
    sources: new Set((sourcesDocument.sources || []).map(source => source.id).filter(Boolean) as string[]),
    tags: new Set(Object.values(tagsDocument.categories || {}).flat()),
  }
}

function isMissing(value: unknown): boolean {
  return value === undefined || value === null || value === ''
    || (Array.isArray(value) && value.length === 0)
}

function validateMeta(
  options: ValidateArtifactOptions,
  issues: ArtifactIssue[],
  allowed: { sources: Set<string>; tags: Set<string> },
): Record<string, unknown> | null {
  const { rootDir, id, strict = false } = options
  const file = relativeFile(id, 'meta.yml')
  const metaPath = join(rootDir, file)
  if (!existsSync(metaPath)) {
    issues.push({ level: 'error', code: 'missing-meta', file, message: 'meta.yml is required' })
    return null
  }

  let meta: Record<string, unknown>
  try {
    const parsed = parse(readFileSync(metaPath, 'utf8'))
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('expected a mapping')
    meta = parsed as Record<string, unknown>
  } catch (error) {
    issues.push({
      level: 'error',
      code: 'invalid-meta-yaml',
      file,
      message: error instanceof Error ? error.message : String(error),
    })
    return null
  }

  for (const field of META_FIELDS) {
    if (isMissing(meta[field])) {
      issues.push({ level: 'error', code: 'missing-meta-field', file, message: `missing ${field}` })
    }
  }
  if (strict && isMissing(meta.source_title)) {
    issues.push({ level: 'error', code: 'missing-meta-field', file, message: 'missing source_title' })
  }

  if (meta.id !== id) {
    issues.push({ level: 'error', code: 'meta-id-mismatch', file, message: `id must be ${id}` })
  }
  if (!allowed.sources.has(String(meta.source || ''))) {
    issues.push({ level: 'error', code: 'unknown-source', file, message: `unknown source: ${String(meta.source)}` })
  }
  if (!/^\d{8}$/.test(String(meta.published_sort || ''))) {
    issues.push({ level: 'error', code: 'invalid-published-sort', file, message: 'published_sort must be YYYYMMDD' })
  }
  if (!STATUSES.has(String(meta.status || ''))) {
    issues.push({ level: 'error', code: 'invalid-status', file, message: `unknown status: ${String(meta.status)}` })
  }
  if (meta.status === 'generated' && Number.isNaN(Date.parse(String(meta.generated_at || '')))) {
    issues.push({ level: 'error', code: 'invalid-generated-at', file, message: 'generated status requires generated_at' })
  }

  if (!Array.isArray(meta.tags)) {
    issues.push({ level: 'error', code: 'invalid-tags', file, message: 'tags must be a non-empty list' })
  } else {
    for (const tag of meta.tags) {
      if (!allowed.tags.has(String(tag))) {
        issues.push({ level: 'error', code: 'unknown-tag', file, message: `unknown tag: ${String(tag)}` })
      }
    }
  }
  if (!Array.isArray(meta.core_ideas)) {
    issues.push({ level: 'error', code: 'invalid-core-ideas', file, message: 'core_ideas must be a non-empty list' })
  }

  const expectedBase = `/episodes/${id}/`
  if (meta.base !== expectedBase) {
    issues.push({ level: 'error', code: 'meta-base-mismatch', file, message: `base must be ${expectedBase}` })
  }

  const expectedArticlePath = `episodes/${id}/article.html`
  const articleExists = existsSync(join(rootDir, expectedArticlePath))
  if (strict || articleExists) {
    if (meta.article_path !== expectedArticlePath) {
      issues.push({
        level: 'error',
        code: 'meta-article-path-mismatch',
        file,
        message: `article_path must be ${expectedArticlePath}`,
      })
    }
  }

  return meta
}

function parseDeckFrontmatter(text: string): Record<string, unknown> | null {
  if (!/^---\s*\r?\n/.test(text)) return null
  const closing = /^---\s*$/gm
  closing.lastIndex = text.indexOf('\n') + 1
  const match = closing.exec(text)
  if (!match) return null
  const parsed = parse(text.slice(text.indexOf('\n') + 1, match.index))
  return parsed && typeof parsed === 'object' && !Array.isArray(parsed)
    ? parsed as Record<string, unknown>
    : null
}

function validateSlides(options: ValidateArtifactOptions, issues: ArtifactIssue[]): void {
  const { rootDir, id, strict = false } = options
  const file = relativeFile(id, 'slides.md')
  const slidesPath = join(rootDir, file)
  if (!existsSync(slidesPath)) {
    issues.push({ level: 'error', code: 'missing-slides', file, message: 'slides.md is required' })
    return
  }

  const text = readFileSync(slidesPath, 'utf8')
  let frontmatter: Record<string, unknown> | null = null
  try {
    frontmatter = parseDeckFrontmatter(text)
  } catch (error) {
    issues.push({
      level: 'error',
      code: 'invalid-frontmatter',
      file,
      message: error instanceof Error ? error.message : String(error),
    })
  }
  if (!frontmatter) {
    issues.push({ level: 'error', code: 'missing-frontmatter', file, message: 'deck must start with YAML frontmatter' })
  } else {
    if (frontmatter.theme !== 'academic') {
      issues.push({ level: 'error', code: 'invalid-theme', file, message: 'theme must be academic' })
    }
    if (frontmatter.colorSchema !== 'light') {
      issues.push({ level: 'error', code: 'invalid-color-schema', file, message: 'colorSchema must be light' })
    }
    if (frontmatter.class !== 'text-center') {
      issues.push({ level: 'error', code: 'invalid-cover-class', file, message: 'class must be text-center' })
    }
    if (frontmatter.mdc !== true) {
      issues.push({ level: 'error', code: 'invalid-mdc', file, message: 'mdc must be true' })
    }
    if (frontmatter.transition !== 'slide-left') {
      issues.push({ level: 'error', code: 'invalid-transition', file, message: 'transition must be slide-left' })
    }
    const drawings = frontmatter.drawings
    if (!drawings || typeof drawings !== 'object' || Array.isArray(drawings)
      || (drawings as Record<string, unknown>).persist !== false) {
      issues.push({ level: 'error', code: 'invalid-drawings', file, message: 'drawings.persist must be false' })
    }
    if (!Array.isArray(frontmatter.addons) || !frontmatter.addons.includes('slidev-addon-excalidraw')) {
      issues.push({ level: 'error', code: 'missing-excalidraw-addon', file, message: 'Excalidraw addon is required' })
    }
  }

  const forbidden = [
    { pattern: /<v-clicks?\b|\bv-clicks?\b/i, code: 'forbidden-v-click', message: 'v-click is not export-safe' },
    { pattern: /^layout:\s*section\s*$/m, code: 'forbidden-section-layout', message: 'layout: section is not allowed' },
    { pattern: /^layout:\s*fact\s*$/m, code: 'forbidden-fact-layout', message: 'layout: fact is not allowed' },
    { pattern: /<style(?:\s|>)/i, code: 'slide-local-style', message: 'slide-local style blocks are not allowed' },
  ]
  for (const rule of forbidden) {
    if (rule.pattern.test(text)) {
      issues.push({ level: 'error', code: rule.code, file, message: rule.message })
    }
  }

  for (const match of text.matchAll(/drawFilePath\s*=\s*["']([^"']+)["']/g)) {
    const reference = match[1].split(/[?#]/, 1)[0].replace(/^\.\//, '').replace(/^\//, '')
    const candidates = [
      join(rootDir, 'episodes', id, 'public', reference),
      join(rootDir, 'episodes', id, reference),
    ]
    if (!candidates.some(existsSync)) {
      issues.push({
        level: 'error',
        code: 'missing-excalidraw-file',
        file,
        message: `missing Excalidraw file: ${match[1]}`,
      })
    }
  }

  if (!strict) return

  try {
    const deck = parseSlidev(text, slidesPath)
    const contentSlides = deck.slides.filter(slide => slide.content.trim())
    const emptySlides = deck.slides.filter(slide => !slide.content.trim())
    for (const slide of emptySlides) {
      issues.push({
        level: 'error',
        code: 'empty-slide',
        file,
        message: `slide ${slide.index + 1} is empty`,
      })
    }

    const transcriptPath = join(rootDir, 'data', 'transcripts', `${id}.txt`)
    if (!existsSync(transcriptPath)) {
      issues.push({ level: 'error', code: 'missing-transcript', file, message: `missing data/transcripts/${id}.txt` })
    } else {
      const transcriptSize = readFileSync(transcriptPath, 'utf8').length
      const minimumSlides = transcriptSize < 60_000 ? 22
        : transcriptSize < 150_000 ? 28
          : transcriptSize < 250_000 ? 35
            : 42
      if (contentSlides.length < minimumSlides) {
        issues.push({
          level: 'error',
          code: 'too-few-slides',
          file,
          message: `${contentSlides.length} content slides; transcript size requires at least ${minimumSlides}`,
        })
      }
    }

    for (const slide of contentSlides) {
      const headings = slide.content.match(/^#\s+.+$/gm) || []
      if (headings.length > 1) {
        issues.push({
          level: 'error',
          code: 'multiple-slide-headings',
          file,
          message: `slide ${slide.index + 1} contains ${headings.length} level-one headings`,
        })
      }
    }

    const diagramSlides = contentSlides.filter(slide => /<Excalidraw\b/.test(slide.content))
    const expectedDiagrams = Math.ceil(Math.max(0, contentSlides.length - 4) * 0.2)
    if (diagramSlides.length < expectedDiagrams) {
      issues.push({
        level: 'error',
        code: 'too-few-diagrams',
        file,
        message: `${diagramSlides.length} diagram slides; ${contentSlides.length} slides require at least ${expectedDiagrams}`,
      })
    }
    for (const slide of diagramSlides) {
      if (!['two-cols', 'two-cols-header'].includes(slide.frontmatter.layout)) {
        issues.push({
          level: 'error',
          code: 'diagram-layout',
          file,
          message: `diagram slide ${slide.index + 1} must use layout: two-cols-header or two-cols`,
        })
      }
    }

    const lastSlide = contentSlides.at(-1)
    if (lastSlide?.frontmatter.layout !== 'end') {
      issues.push({ level: 'error', code: 'missing-end-layout', file, message: 'last content slide must use layout: end' })
    }
  } catch (error) {
    issues.push({
      level: 'error',
      code: 'slidev-parse-error',
      file,
      message: error instanceof Error ? error.message : String(error),
    })
  }
}

function validateArticle(options: ValidateArtifactOptions, issues: ArtifactIssue[]): void {
  const { rootDir, id, strict = false } = options
  const file = relativeFile(id, 'article.html')
  const articlePath = join(rootDir, file)
  if (!existsSync(articlePath)) {
    if (strict) issues.push({ level: 'error', code: 'missing-article', file, message: 'article.html is required' })
    return
  }

  const size = statSync(articlePath).size
  if (size < 5 * 1024 || size > 500 * 1024) {
    issues.push({ level: 'error', code: 'article-size', file, message: `article size ${size} is outside 5-500KB` })
  }

  const text = readFileSync(articlePath, 'utf8')
  if (!strict) return

  for (const tag of ['article', 'header', 'footer']) {
    if (!new RegExp(`<${tag}\\b`, 'i').test(text)) {
      issues.push({ level: 'error', code: 'article-structure', file, message: `missing <${tag}>` })
    }
  }

  const forbidden = [
    { pattern: /<style(?:\s|>)/i, message: 'source article must not embed styles' },
    { pattern: /\sstyle\s*=/i, message: 'source article must not use inline styles' },
    { pattern: /<script(?:\s|>)/i, message: 'source article must not embed scripts' },
    { pattern: /<nav(?:\s|>)/i, message: 'source article must not provide generated navigation' },
    { pattern: /<link\b[^>]*rel=["']?stylesheet/i, message: 'source article must not link stylesheets' },
  ]
  for (const rule of forbidden) {
    if (rule.pattern.test(text)) {
      issues.push({ level: 'error', code: 'article-owned-chrome', file, message: rule.message })
    }
  }
}

function validateQuoteEvidence(options: ValidateArtifactOptions, issues: ArtifactIssue[]): void {
  const { rootDir, id, strict = false } = options
  const file = relativeFile(id, 'quote-evidence.yml')
  const evidencePath = join(rootDir, file)
  if (!existsSync(evidencePath)) {
    if (strict) {
      issues.push({ level: 'error', code: 'missing-quote-evidence', file, message: 'quote-evidence.yml is required' })
    }
    return
  }

  let evidence: Record<string, unknown>
  try {
    const parsed = parse(readFileSync(evidencePath, 'utf8'))
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('expected a mapping')
    evidence = parsed as Record<string, unknown>
  } catch (error) {
    issues.push({
      level: 'error',
      code: 'invalid-quote-evidence',
      file,
      message: error instanceof Error ? error.message : String(error),
    })
    return
  }

  if (evidence.episode_id !== id) {
    issues.push({ level: 'error', code: 'quote-evidence-id', file, message: `episode_id must be ${id}` })
  }
  if (!Array.isArray(evidence.quotes) || evidence.quotes.length === 0) {
    issues.push({ level: 'error', code: 'empty-quote-evidence', file, message: 'quotes must be a non-empty list' })
    return
  }

  const transcriptPath = join(rootDir, 'data', 'transcripts', `${id}.txt`)
  const transcript = existsSync(transcriptPath) ? readFileSync(transcriptPath, 'utf8') : ''
  for (const [index, rawEntry] of evidence.quotes.entries()) {
    if (!rawEntry || typeof rawEntry !== 'object' || Array.isArray(rawEntry)) {
      issues.push({ level: 'error', code: 'invalid-quote-entry', file, message: `quote ${index + 1} must be a mapping` })
      continue
    }
    const entry = rawEntry as Record<string, unknown>
    const artifact = String(entry.artifact || '')
    const artifactExcerpt = String(entry.artifact_excerpt || '')
    const transcriptExcerpt = String(entry.transcript_excerpt || '')
    if (artifact !== 'slides.md' && artifact !== 'article.html') {
      issues.push({ level: 'error', code: 'invalid-quote-artifact', file, message: `quote ${index + 1} has invalid artifact` })
      continue
    }
    if (!artifactExcerpt || !transcriptExcerpt) {
      issues.push({ level: 'error', code: 'invalid-quote-entry', file, message: `quote ${index + 1} requires both excerpts` })
      continue
    }
    const artifactPath = join(rootDir, 'episodes', id, artifact)
    const artifactText = existsSync(artifactPath) ? readFileSync(artifactPath, 'utf8') : ''
    if (!artifactText.includes(artifactExcerpt)) {
      issues.push({ level: 'error', code: 'quote-artifact-mismatch', file, message: `quote ${index + 1} excerpt is absent from ${artifact}` })
    }
    if (!transcript.includes(transcriptExcerpt)) {
      issues.push({ level: 'error', code: 'quote-transcript-mismatch', file, message: `quote ${index + 1} source is absent from the transcript` })
    }
  }
}

function lintEditorialContent(options: ValidateArtifactOptions, issues: ArtifactIssue[]): void {
  if (!options.strict) return
  for (const name of ['slides.md', 'article.html', 'meta.yml']) {
    const file = relativeFile(options.id, name)
    const path = join(options.rootDir, file)
    if (!existsSync(path)) continue
    const lines = readFileSync(path, 'utf8').split(/\r?\n/)
    let reported = 0
    for (const [index, line] of lines.entries()) {
      CHINESE_REVIEW_PATTERN.lastIndex = 0
      const match = CHINESE_REVIEW_PATTERN.exec(line)
      if (!match) continue
      issues.push({
        level: 'warning',
        code: 'chinese-editorial-review',
        file,
        message: `line ${index + 1} contains review cue: ${match[0]}`,
      })
      reported += 1
      if (reported >= 20) break
    }
    for (const [index, line] of lines.entries()) {
      TRANSCRIPT_ARTIFACT_PATTERN.lastIndex = 0
      const match = TRANSCRIPT_ARTIFACT_PATTERN.exec(line)
      if (!match) continue
      issues.push({
        level: 'warning',
        code: 'transcript-artifact-review',
        file,
        message: `line ${index + 1} contains likely transcript artifact: ${match[0]}`,
      })
    }
  }
}

export function validateEpisodeArtifacts(options: ValidateArtifactOptions): ArtifactIssue[] {
  const rootDir = resolve(options.rootDir)
  const issues: ArtifactIssue[] = []
  let allowed: { sources: Set<string>; tags: Set<string> }
  try {
    allowed = loadAllowedValues(rootDir)
  } catch (error) {
    return [{
      level: 'error',
      code: 'invalid-project-taxonomy',
      file: basename(rootDir),
      message: error instanceof Error ? error.message : String(error),
    }]
  }

  validateMeta({ ...options, rootDir }, issues, allowed)
  validateSlides({ ...options, rootDir }, issues)
  validateArticle({ ...options, rootDir }, issues)
  validateQuoteEvidence({ ...options, rootDir }, issues)
  lintEditorialContent({ ...options, rootDir }, issues)

  for (const name of ['package.json', 'style.css', 'global-bottom.vue']) {
    if (existsSync(join(rootDir, 'episodes', options.id, name))) {
      issues.push({
        level: 'error',
        code: 'copied-shared-config',
        file: relativeFile(options.id, name),
        message: `${name} is centrally owned and must not persist in an episode`,
      })
    }
  }

  return issues
}
