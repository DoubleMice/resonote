// Load sources.yml + episodes.yml + each episode's meta.yml
// Returns structured data for landing page consumption.

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { resolve, join } from 'node:path'
import { execFileSync } from 'node:child_process'
import { parse } from 'yaml'

const PROJECT_ROOT = resolve(process.cwd(), '..')   // landing/ → Resonote repository root

export interface Source {
  id: string
  name: string
  rss_url?: string
  filter_keywords?: string[]
  include_title_patterns?: string[]
  exclude_title_patterns?: string[]
  lookback_days?: number
  color?: string
  description?: string
}

export interface EpisodeMeta {
  id: string
  source: string
  title: string
  guest?: string
  guest_role?: string
  published?: string
  published_sort?: string
  duration?: string
  url: string
  thumbnail?: string
  status: 'generated' | 'downloaded' | 'queued' | string
  tags?: string[]
  summary?: string
  core_ideas?: string[]
  base?: string
  category?: string
  article_path?: string
  generated_at?: string
  generated_sort?: number
}

export type ContentFormat = 'slides' | 'article'

export function getAvailableFormats(ep: EpisodeWithSource): ContentFormat[] {
  const formats: ContentFormat[] = []
  if (ep.status === 'generated') formats.push('slides')
  if (ep.article_path) formats.push('article')
  return formats
}

export function episodePublishedTime(ep: Pick<EpisodeMeta, 'published' | 'published_sort'>): number {
  const value = String(ep.published_sort || ep.published || '').trim()
  if (!value) return 0

  const compactDate = value.match(/^(\d{4})(\d{2})(\d{2})$/)
  if (compactDate) {
    const [, year, month, day] = compactDate
    return Date.UTC(Number(year), Number(month) - 1, Number(day))
  }

  const monthDate = value.match(/^(\d{4})-(\d{2})$/)
  if (monthDate) {
    const [, year, month] = monthDate
    return Date.UTC(Number(year), Number(month) - 1, 1)
  }

  const parsed = Date.parse(value)
  return Number.isFinite(parsed) ? parsed : 0
}

export function sortEpisodesByPublishedDesc<T extends Pick<EpisodeMeta, 'id' | 'published' | 'published_sort' | 'title'>>(episodes: T[]): T[] {
  return [...episodes].sort((a, b) => {
    const byPublished = episodePublishedTime(b) - episodePublishedTime(a)
    if (byPublished !== 0) return byPublished
    return `${b.title}:${b.id}`.localeCompare(`${a.title}:${a.id}`)
  })
}

export function sortEpisodesForLibrary<T extends Pick<EpisodeMeta, 'id' | 'published' | 'published_sort' | 'title' | 'status' | 'article_path'>>(episodes: T[]): T[] {
  return [...episodes].sort((a, b) => {
    const aReadable = a.status === 'generated' || Boolean(a.article_path)
    const bReadable = b.status === 'generated' || Boolean(b.article_path)
    if (aReadable !== bReadable) return aReadable ? -1 : 1

    const byPublished = episodePublishedTime(b) - episodePublishedTime(a)
    if (byPublished !== 0) return byPublished
    return `${b.title}:${b.id}`.localeCompare(`${a.title}:${a.id}`)
  })
}

function resolveArticlePath(meta: EpisodeMeta): string | undefined {
  const articlePath = meta.article_path || `episodes/${meta.id}/article.html`
  return existsSync(resolve(PROJECT_ROOT, articlePath)) ? articlePath : undefined
}

function resolveEpisodeStatus(id: string, status: EpisodeMeta['status']): EpisodeMeta['status'] {
  if (status !== 'generated') return status
  return existsSync(resolve(PROJECT_ROOT, 'episodes', id, 'slides.md')) ? status : 'downloaded'
}

// Category definitions with display order
export const CATEGORIES = [
  { id: 'ai-tech', label: 'AI & Tech' },
  { id: 'mind-body', label: 'Mind & Body' },
  { id: 'science', label: 'Science' },
  { id: 'business', label: 'Business & Career' },
  { id: 'culture', label: 'Culture & History' },
] as const

export type CategoryId = typeof CATEGORIES[number]['id']

export interface EpisodeWithSource extends EpisodeMeta {
  sourceRef: Source
}

let episodeCache: EpisodeWithSource[] | undefined

function readYaml<T>(path: string, fallback?: T): T {
  if (!existsSync(path)) {
    if (fallback !== undefined) return fallback
    throw new Error(`Missing ${path}`)
  }
  return parse(readFileSync(path, 'utf-8')) as T
}

function gitCommitTime(paths: string[]): number | undefined {
  try {
    const output = execFileSync('git', ['log', '-1', '--format=%ct', '--', ...paths], {
      cwd: PROJECT_ROOT,
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim()
    const seconds = Number(output)
    return Number.isFinite(seconds) && seconds > 0 ? seconds * 1000 : undefined
  } catch {
    return undefined
  }
}

function fileMtime(paths: string[]): number | undefined {
  const times = paths
    .filter(path => existsSync(path))
    .map(path => statSync(path).mtimeMs)
  return times.length > 0 ? Math.max(...times) : undefined
}

function episodeGeneratedTime(id: string): number | undefined {
  const relPaths = [
    `episodes/${id}/slides.md`,
    `episodes/${id}/meta.yml`,
    `episodes/${id}/article.html`,
  ]
  const absPaths = relPaths.map(path => resolve(PROJECT_ROOT, path))
  return gitCommitTime(relPaths) ?? fileMtime(absPaths)
}

export function loadSources(): Source[] {
  const { sources } = readYaml<{ sources: Source[] }>(
    resolve(PROJECT_ROOT, 'sources.yml'),
  )
  return sources
}

export function fallbackSource(id: string): Source {
  return {
    id,
    name: id.split('-').map(part => part ? part[0].toUpperCase() + part.slice(1) : part).join(' '),
    color: '#525252',
  }
}

// Build maps of episode id → derived plan metadata from data/plans/*.yml.
// Plans are queue state; per-episode meta.yml remains authoritative for
// generated episodes that already exist on disk.
function loadPlanMaps(): {
  categoryMap: Record<string, string>
} {
  const plansDir = resolve(PROJECT_ROOT, 'data/plans')
  const categoryMap: Record<string, string> = {}
  if (!existsSync(plansDir)) return { categoryMap }
  for (const f of readdirSync(plansDir).filter(f => f.endsWith('.yml'))) {
    const plan = readYaml<{ episodes?: { id: string; category?: string }[] }>(join(plansDir, f))
    for (const ep of plan.episodes || []) {
      if (ep.category) categoryMap[ep.id] = ep.category
    }
  }
  return { categoryMap }
}

function titleKey(source: string | undefined, title: string | undefined): string | undefined {
  const normalized = String(title ?? '').trim().replace(/\s+/g, ' ').toLowerCase()
  return source && normalized ? `${source}:${normalized}` : undefined
}

function loadScanCacheMaps(): {
  publishedMap: Record<string, { published?: string; published_sort?: string }>
  publishedTitleMap: Record<string, { published?: string; published_sort?: string }>
} {
  const cacheDir = resolve(PROJECT_ROOT, 'data/scan-cache')
  const publishedMap: Record<string, { published?: string; published_sort?: string }> = {}
  const publishedTitleMap: Record<string, { published?: string; published_sort?: string }> = {}
  if (!existsSync(cacheDir)) return { publishedMap, publishedTitleMap }

  for (const f of readdirSync(cacheDir).filter(f => f.endsWith('.jsonl'))) {
    const source = f.replace(/\.jsonl$/, '')
    const path = join(cacheDir, f)
    for (const line of readFileSync(path, 'utf-8').split('\n')) {
      if (!line.trim()) continue
      try {
        const ep = JSON.parse(line) as { id?: string; title?: string; published?: string; published_sort?: string }
        if (ep.id && (ep.published_sort || ep.published)) {
          publishedMap[ep.id] = {
            published: ep.published,
            published_sort: ep.published_sort,
          }
        }
        const key = titleKey(source, ep.title)
        if (key && (ep.published_sort || ep.published)) {
          publishedTitleMap[key] = {
            published: ep.published,
            published_sort: ep.published_sort,
          }
        }
      } catch {
        // Keep landing builds tolerant of a stale or partially written cache line.
      }
    }
  }

  return { publishedMap, publishedTitleMap }
}

export function loadEpisodes(): EpisodeWithSource[] {
  if (episodeCache) return episodeCache

  const sources = loadSources()
  const sourceMap = Object.fromEntries(sources.map(s => [s.id, s]))
  const { categoryMap } = loadPlanMaps()
  const { publishedMap, publishedTitleMap } = loadScanCacheMaps()

  // Prefer per-episode meta.yml (has richest info). Fall back to episodes.yml.
  const episodesDir = resolve(PROJECT_ROOT, 'episodes')
  const results: EpisodeWithSource[] = []

  // Collect metas from episodes/<id>/meta.yml
  const seenIds = new Set<string>()
  if (existsSync(episodesDir)) {
    for (const entry of readdirSync(episodesDir)) {
      const epDir = join(episodesDir, entry)
      if (!statSync(epDir).isDirectory()) continue
      const metaPath = join(epDir, 'meta.yml')
      if (!existsSync(metaPath)) continue
      const meta = readYaml<EpisodeMeta>(metaPath)
      const cacheMeta = publishedMap[meta.id] || publishedTitleMap[titleKey(meta.source, meta.title) || '']
      meta.base = meta.base || `/episodes/${meta.id}/`
      meta.category = meta.category || categoryMap[meta.id]
      meta.published_sort = meta.published_sort || cacheMeta?.published_sort
      meta.published = meta.published || cacheMeta?.published
      meta.article_path = resolveArticlePath(meta)
      meta.status = resolveEpisodeStatus(meta.id, meta.status)
      if (meta.status === 'generated') {
        meta.generated_sort = episodeGeneratedTime(meta.id)
        meta.generated_at = meta.generated_sort ? new Date(meta.generated_sort).toISOString() : undefined
      }
      const sourceRef = sourceMap[meta.source] || fallbackSource(meta.source)
      results.push({ ...meta, sourceRef })
      seenIds.add(meta.id)
    }
  }

  const plansDir = resolve(PROJECT_ROOT, 'data/plans')
  if (existsSync(plansDir)) {
    for (const f of readdirSync(plansDir).filter(f => f.endsWith('.yml'))) {
      const plan = readYaml<{ source: string; episodes?: Array<{
        id: string
        title: string
        status: string
        url: string
        published?: string
        published_sort?: string
        duration?: number
        image?: string
        summary?: string
        category?: string
      }> }>(join(plansDir, f))
      const sourceRef = sourceMap[plan.source] || fallbackSource(plan.source)
      for (const ep of plan.episodes || []) {
        if (seenIds.has(ep.id)) continue
        results.push({
          id: ep.id,
          source: plan.source,
          title: ep.title,
          published: ep.published_sort || ep.published,
          published_sort: ep.published_sort,
          duration: ep.duration ? `${Math.round(ep.duration / 60)}m` : undefined,
          url: ep.url,
          thumbnail: ep.image,
          status: resolveEpisodeStatus(ep.id, ep.status),
          summary: ep.summary,
          category: ep.category,
          base: `/episodes/${ep.id}/`,
          sourceRef,
        })
        seenIds.add(ep.id)
      }
    }
  }

  // Also include entries from episodes.yml that don't have per-episode meta (status: downloaded etc)
  const { episodes } = readYaml<{ episodes: EpisodeMeta[] }>(
    resolve(PROJECT_ROOT, 'episodes.yml'),
    { episodes: [] },
  )
  for (const ep of episodes) {
    if (seenIds.has(ep.id)) continue
    const sourceRef = sourceMap[ep.source] || fallbackSource(ep.source)
    results.push({
      ...ep,
      status: resolveEpisodeStatus(ep.id, ep.status),
      base: ep.base || `/episodes/${ep.id}/`,
      article_path: resolveArticlePath(ep),
      sourceRef,
      thumbnail: ep.thumbnail,
    })
  }

  // Sort: generated first, then by category priority, then by title.
  const statusOrder: Record<string, number> = {
    generated: 0,
    downloaded: 1,
    pending: 2,
    queued: 3,
    needs_transcript: 4,
    failed: 5,
  }
  const catOrder: Record<string, number> = {
    'ai-tech': 0, 'mind-body': 1, 'science': 2, 'business': 3, 'culture': 4,
  }
  results.sort((a, b) => {
    const sa = statusOrder[a.status] ?? 99
    const sb = statusOrder[b.status] ?? 99
    if (sa !== sb) return sa - sb
    const ca = catOrder[a.category ?? ''] ?? 99
    const cb = catOrder[b.category ?? ''] ?? 99
    if (ca !== cb) return ca - cb
    // Within same category, sort by published date descending (newest first)
    return (b.published ?? '').localeCompare(a.published ?? '')
  })

  episodeCache = results
  return episodeCache
}

export function loadSourcesWithFallbacks(episodes?: EpisodeWithSource[]): Source[] {
  const sources = loadSources()
  const seen = new Set(sources.map(s => s.id))
  const allEpisodes = episodes ?? loadEpisodes()
  for (const ep of allEpisodes) {
    if (seen.has(ep.source)) continue
    sources.push(ep.sourceRef || fallbackSource(ep.source))
    seen.add(ep.source)
  }
  return sources
}

export function collectTags(episodes: EpisodeWithSource[]): { tag: string; count: number }[] {
  const counts: Record<string, number> = {}
  for (const ep of episodes) {
    for (const tag of ep.tags || []) {
      counts[tag] = (counts[tag] || 0) + 1
    }
  }
  return Object.entries(counts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
}
