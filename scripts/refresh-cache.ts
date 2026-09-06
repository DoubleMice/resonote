// Refresh data/scan-cache/<source>.jsonl from podcast RSS feeds.
//
// Output format: one normalized RSS episode per JSONL line.
//
// Usage:
//   pnpm run cache:refresh                        # all sources, default limit
//   pnpm run cache:refresh -- --id=tbpn           # single source

import { resolve, join } from 'node:path'
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { readYaml } from './lib/yaml-io.ts'
import { log } from './lib/log.ts'
import { mapConcurrent } from './lib/map-concurrent.ts'
import { fetchText, parseRssFeed } from './lib/rss.ts'
import type { SourcesFile } from './lib/types.ts'

const ROOT = process.cwd()
const SOURCES_PATH = resolve(ROOT, 'sources.yml')
const CACHE_DIR = resolve(ROOT, 'data/scan-cache')

const onlyId = process.argv.find(a => a.startsWith('--id='))?.split('=')[1]
const limitArg = process.argv.find(a => a.startsWith('--limit='))?.split('=')[1]
const defaultLimit = Number(limitArg ?? 350)

async function fetchOne(source: { id: string; rss_url?: string }, limit: number): Promise<void> {
  const outPath = join(CACHE_DIR, `${source.id}.jsonl`)
  if (!source.rss_url) {
    log.warn(`${source.id}: missing rss_url, skipping`)
    writeFileSync(outPath, '', 'utf-8')
    return
  }

  log.info(`${source.id} → ${outPath} (limit ${limit})`)

  const xml = await fetchText(source.rss_url)
  const episodes = parseRssFeed(xml, source.id).slice(0, limit)
  if (episodes.length === 0 && existsSync(outPath)) {
    log.warn(`  ${source.id}: RSS parsed 0 entries, keeping existing cache`)
    return
  }
  const entries = episodes.map(ep => JSON.stringify(ep))

  writeFileSync(outPath, entries.join('\n') + (entries.length ? '\n' : ''), 'utf-8')
  log.ok(`  ${source.id}: ${entries.length} entries (${episodes.filter(e => e.transcripts.length > 0).length} with transcripts)`)
}

async function main() {
  log.step(`Refresh scan-cache — RSS mode`)

  mkdirSync(CACHE_DIR, { recursive: true })

  const sourcesFile = readYaml<SourcesFile>(SOURCES_PATH)
  const targets = onlyId
    ? sourcesFile.sources.filter(s => s.id === onlyId)
    : sourcesFile.sources

  if (targets.length === 0) {
    log.warn('no sources to refresh')
    return
  }

  const concurrency = Number(process.env.RESONOTE_RSS_CONCURRENCY || 3)
  log.info(`refreshing ${targets.length} source(s), concurrency=${concurrency}`)

  await mapConcurrent(targets, concurrency, async s => {
    const limit = limitArg ? defaultLimit : ((s as any).cache_limit ?? defaultLimit)
    await fetchOne(s, limit).catch(err => {
      log.err(`${s.id} failed: ${err.message}`)
    })
  })

  log.ok('\nCache refresh complete')
}

main().catch(e => {
  log.err(e.stack || e.message)
  process.exit(1)
})
