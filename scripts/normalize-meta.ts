import { execFileSync } from 'node:child_process'
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { parse } from 'yaml'
import { log } from './lib/log.ts'
import {
  normalizeGeneratedAt, normalizePublishedSort, setTopLevelScalar,
} from './lib/meta-fields.ts'
import { normalizeYamlText } from './lib/yaml-repair.ts'

const ROOT = process.cwd()
const EPISODES_DIR = resolve(ROOT, 'episodes')
const PLANS_DIR = resolve(ROOT, 'data/plans')
const CACHE_DIR = resolve(ROOT, 'data/scan-cache')
const fix = process.argv.includes('--fix')

interface MetaRecord {
  id?: string
  source?: string
  title?: string
  published?: string
  published_sort?: string
  status?: string
  generated_at?: string
}

interface PublicationRecord {
  id?: string
  source?: string
  title?: string
  published?: string
  published_sort?: string
}

const publicationById = new Map<string, string>()
const publicationByTitle = new Map<string, string>()
const historicalPublication = new Map<string, string | undefined>()

function titleKey(source: unknown, title: unknown): string | undefined {
  const normalized = String(title ?? '').trim().replace(/\s+/g, ' ').toLowerCase()
  return source && normalized ? `${source}:${normalized}` : undefined
}

function indexPublication(record: PublicationRecord): void {
  const value = normalizePublishedSort(record.published_sort || record.published)
  if (!value) return
  if (record.id) publicationById.set(String(record.id), value)
  const key = titleKey(record.source, record.title)
  if (key) publicationByTitle.set(key, value)
}

function loadCurrentPublicationIndex(): void {
  if (existsSync(PLANS_DIR)) {
    for (const file of readdirSync(PLANS_DIR).filter(file => file.endsWith('.yml'))) {
      try {
        const plan = parse(readFileSync(join(PLANS_DIR, file), 'utf8')) as {
          source?: string
          episodes?: PublicationRecord[]
        }
        for (const episode of plan.episodes || []) indexPublication({ ...episode, source: plan.source })
      } catch {}
    }
  }

  if (existsSync(CACHE_DIR)) {
    for (const file of readdirSync(CACHE_DIR).filter(file => file.endsWith('.jsonl'))) {
      const source = file.replace(/\.jsonl$/, '')
      for (const line of readFileSync(join(CACHE_DIR, file), 'utf8').split('\n')) {
        if (!line.trim()) continue
        try {
          indexPublication({ ...JSON.parse(line), source })
        } catch {}
      }
    }
  }
}

function publicationFromHistoricalPlan(meta: MetaRecord): string | undefined {
  if (!meta.id || !meta.source) return undefined
  if (historicalPublication.has(meta.id)) return historicalPublication.get(meta.id)

  const planPath = `data/plans/${meta.source}.yml`
  try {
    const hashes = execFileSync('git', [
      'log', '--all', '-S', meta.id, '--format=%H', '--', planPath,
    ], {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim().split('\n').filter(Boolean)

    for (const hash of hashes) {
      try {
        const plan = parse(execFileSync('git', ['show', `${hash}:${planPath}`], {
          cwd: ROOT,
          encoding: 'utf8',
          stdio: ['ignore', 'pipe', 'ignore'],
        })) as { episodes?: PublicationRecord[] }
        const entry = (plan.episodes || []).find(item => item.id === meta.id)
        const value = normalizePublishedSort(entry?.published_sort || entry?.published)
        if (value) {
          historicalPublication.set(meta.id, value)
          return value
        }
      } catch {}
    }
  } catch {}

  historicalPublication.set(meta.id, undefined)
  return undefined
}

function resolvePublishedSort(meta: MetaRecord): string | undefined {
  const existing = normalizePublishedSort(meta.published_sort)
  if (existing) return existing
  if (meta.id && publicationById.has(meta.id)) return publicationById.get(meta.id)
  const key = titleKey(meta.source, meta.title)
  if (key && publicationByTitle.has(key)) return publicationByTitle.get(key)
  return publicationFromHistoricalPlan(meta) || normalizePublishedSort(meta.published)
}

function generatedAtFromGit(metaPath: string): string | undefined {
  const relative = metaPath.slice(ROOT.length + 1)
  try {
    const value = execFileSync('git', [
      'log', '-1', '--diff-filter=A', '--format=%cI', '--', relative,
    ], {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim()
    return normalizeGeneratedAt(value)
  } catch {
    return undefined
  }
}

function resolveGeneratedAt(metaPath: string, meta: MetaRecord): string | undefined {
  const existing = normalizeGeneratedAt(meta.generated_at)
  if (existing) return existing
  const committed = generatedAtFromGit(metaPath)
  if (committed) return committed
  if (!fix) return undefined
  const stats = statSync(metaPath)
  return new Date(stats.birthtimeMs || stats.mtimeMs).toISOString()
}

function normalizeMeta(metaPath: string): boolean {
  const original = readFileSync(metaPath, 'utf8')
  let next = normalizeYamlText(original) ?? original
  let meta = parse(next) as MetaRecord

  const publishedSort = resolvePublishedSort(meta)
  if (publishedSort) next = setTopLevelScalar(next, 'published_sort', publishedSort, 'published')

  if (meta.status === 'generated') {
    const generatedAt = resolveGeneratedAt(metaPath, meta)
    if (generatedAt) next = setTopLevelScalar(next, 'generated_at', generatedAt, 'status')
  }

  meta = parse(next) as MetaRecord
  if (meta.published && !normalizePublishedSort(meta.published_sort)) {
    throw new Error('missing a valid published_sort (expected YYYYMMDD)')
  }
  if (meta.status === 'generated' && !normalizeGeneratedAt(meta.generated_at)) {
    throw new Error('missing a valid generated_at timestamp')
  }

  if (next === original) return false
  if (fix) writeFileSync(metaPath, next, 'utf8')
  return true
}

function main(): void {
  loadCurrentPublicationIndex()
  const changed: string[] = []
  const failed: string[] = []

  for (const entry of readdirSync(EPISODES_DIR)) {
    const metaPath = join(EPISODES_DIR, entry, 'meta.yml')
    if (!existsSync(metaPath)) continue
    try {
      if (normalizeMeta(metaPath)) changed.push(metaPath)
    } catch (error: any) {
      failed.push(`${metaPath}: ${error.message}`)
    }
  }

  if (failed.length > 0) {
    for (const item of failed) log.err(item)
    process.exit(1)
  }

  if (changed.length === 0) {
    log.ok('all episode meta.yml files are normalized')
    return
  }

  for (const path of changed) log.warn(`${fix ? 'normalized' : 'needs normalization'} ${path}`)
  if (!fix) {
    log.err('run `pnpm run normalize:meta -- --fix` to rewrite metadata')
    process.exit(1)
  }
}

main()
