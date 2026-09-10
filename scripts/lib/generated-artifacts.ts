import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { parse, stringify } from 'yaml'
import { normalizeGeneratedAt } from './meta-fields.ts'
import { writeYaml } from './yaml-io.ts'
import { normalizeYamlText } from './yaml-repair.ts'

export interface CanonicalMetaInput {
  id: string
  source: string
  sourceTitle: string
  published: string
  publishedSort: string
  duration: string
  url: string
  thumbnail?: string
  category?: string
  status: string
}

function parseGeneratedMeta(metaPath: string): Record<string, unknown> {
  if (!existsSync(metaPath)) throw new Error(`meta.yml not found: ${metaPath}`)
  const original = readFileSync(metaPath, 'utf8')
  const normalized = normalizeYamlText(original)
  const parsed = parse(normalized ?? original)
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error(`meta.yml must contain a mapping: ${metaPath}`)
  }
  return parsed as Record<string, unknown>
}

export function canonicalizeGeneratedMeta(metaPath: string, input: CanonicalMetaInput): void {
  const current = parseGeneratedMeta(metaPath)
  const next: Record<string, unknown> = {
    ...current,
    id: input.id,
    source: input.source,
    source_title: input.sourceTitle,
    title: String(current.title || input.sourceTitle),
    published: input.published,
    published_sort: input.publishedSort,
    duration: input.duration,
    url: input.url,
    status: input.status,
    article_path: `episodes/${input.id}/article.html`,
    base: `/episodes/${input.id}/`,
  }

  if (input.thumbnail) next.thumbnail = input.thumbnail
  else delete next.thumbnail

  if (input.category) next.category = input.category

  if (input.status === 'generated') {
    next.generated_at = normalizeGeneratedAt(current.generated_at)
      ?? new Date().toISOString()
  } else {
    delete next.generated_at
  }

  writeYaml(metaPath, next)
}

function slideBody(text: string): string {
  const normalized = text.replace(/^\uFEFF/, '')
  const delimiter = /^---\s*$/gm

  if (normalized.startsWith('---\n') || normalized.startsWith('---\r\n')) {
    delimiter.lastIndex = normalized.indexOf('\n') + 1
    const closing = delimiter.exec(normalized)
    if (!closing) throw new Error('slides.md frontmatter is missing its closing delimiter')
    return normalized.slice(closing.index + closing[0].length).replace(/^\r?\n/, '')
  }

  const first = delimiter.exec(normalized)
  if (!first) return normalized

  const prefix = normalized.slice(0, first.index)
  try {
    const candidate = parse(prefix)
    if (candidate && typeof candidate === 'object' && !Array.isArray(candidate)
      && ('theme' in candidate || 'colorSchema' in candidate || 'addons' in candidate)) {
      return normalized.slice(first.index + first[0].length).replace(/^\r?\n/, '')
    }
  } catch {}

  return normalized
}

export function canonicalSlideFrontmatter(title: string, legacyExcalidraw = false): string {
  return stringify({
    theme: 'academic',
    colorSchema: 'light',
    ...(legacyExcalidraw ? { addons: ['slidev-addon-excalidraw'] } : { diagramMode: 'static' }),
    title,
    coverDate: '',
    class: 'text-center',
    transition: 'slide-left',
    mdc: true,
    drawings: { persist: false },
  }, { lineWidth: 0 }).trimEnd()
}

export function canonicalizeSlidesFrontmatter(slidesPath: string, title: string): void {
  if (!existsSync(slidesPath)) throw new Error(`slides.md not found: ${slidesPath}`)
  const body = slideBody(readFileSync(slidesPath, 'utf8')).trimStart()
  writeFileSync(
    slidesPath,
    `---\n${canonicalSlideFrontmatter(title, /<Excalidraw\b/.test(body))}\n---\n\n${body.replace(/\s*$/, '')}\n`,
    'utf8',
  )
}
