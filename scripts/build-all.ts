import { resolve, join, basename, dirname, sep, posix } from 'node:path'
import { createHash } from 'node:crypto'
import { fileURLToPath } from 'node:url'
import {
  existsSync, mkdirSync, cpSync, rmSync, readdirSync, statSync, readFileSync, writeFileSync, appendFileSync,
} from 'node:fs'
import { readYaml } from './lib/yaml-io.ts'
import { run } from './lib/spawn.ts'
import { log } from './lib/log.ts'
import { applyArticleTheme } from './lib/article-theme.ts'
import type { ArticleNav } from './lib/article-theme.ts'
import { injectDeckChrome } from './lib/deck-chrome.ts'
import { applySiteFavicon } from './lib/site-favicon.ts'
import type { DeckNav } from './lib/deck-chrome.ts'
import {
  episodeBuildFingerprint, cachedPlayerDist,
} from './lib/build-cache.ts'
import { isolateNewEpisodeBuildFailure } from './lib/episode-publication.ts'
import { pruneUnusedBoilerplate, staticAssetStats } from './lib/shared-assets.ts'
import type { EpisodeMeta } from './lib/types.ts'

const ROOT = process.cwd()
const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url))
const EPISODES_DIR = resolve(ROOT, 'episodes')
const TEMPLATES_DIR = join(EPISODES_DIR, '_templates')
const LANDING_DIR = resolve(ROOT, 'landing')
const DIST_DIR = resolve(ROOT, 'dist')
const BUILD_CACHE_DIR = resolve(ROOT, process.env.RESONOTE_BUILD_CACHE_DIR || '.cache/shared-player')
const ARTICLE_THEME_PATH = join(TEMPLATES_DIR, 'article-theme.css')
const ARTICLE_THEME = readFileSync(ARTICLE_THEME_PATH, 'utf-8')
let playerCacheHit = false

function themedArticleHtml(
  articlePath: string,
  nav: ArticleNav | undefined,
  faviconHref: string,
  homeHref: string,
): string {
  const html = readFileSync(articlePath, 'utf-8')
  return applyArticleTheme(html, ARTICLE_THEME, nav, faviconHref, homeHref)
}

// Ordering for 上一篇/下一篇 navigation — newest first, mirroring the landing
// library order (readable-first is irrelevant here: only readable episodes
// participate). Ties break exactly like landing/src/lib/data.ts.
function publishedTime(meta: { published?: string; published_sort?: string }): number {
  const value = String(meta.published_sort || meta.published || '').trim()
  if (!value) return 0
  const compact = value.match(/^(\d{4})(\d{2})(\d{2})$/)
  if (compact) return Date.UTC(Number(compact[1]), Number(compact[2]) - 1, Number(compact[3]))
  const compactMonth = value.match(/^(\d{4})(\d{2})$/)
  if (compactMonth) return Date.UTC(Number(compactMonth[1]), Number(compactMonth[2]) - 1, 1)
  const monthDate = value.match(/^(\d{4})-(\d{2})$/)
  if (monthDate) return Date.UTC(Number(monthDate[1]), Number(monthDate[2]) - 1, 1)
  const parsed = Date.parse(value)
  return Number.isFinite(parsed) ? parsed : 0
}

function newestFirst(
  a: { id: string; title: string; published?: string; published_sort?: string },
  b: { id: string; title: string; published?: string; published_sort?: string },
): number {
  const byPublished = publishedTime(b) - publishedTime(a)
  if (byPublished !== 0) return byPublished
  return `${b.title}:${b.id}`.localeCompare(`${a.title}:${a.id}`)
}

interface NavEntry {
  id: string
  title: string
  published?: string
  published_sort?: string
  articleBasename: string | null
}

// prev = 上一篇（更早一期，列表中 index+1），next = 下一篇（更新一期，index-1）
function buildNavMaps(entries: NavEntry[]): {
  deckNav: Map<string, DeckNav>
  articleNav: Map<string, ArticleNav>
} {
  const deckOrder = entries
  const deckSorted = [...deckOrder].sort(newestFirst)
  const articleSorted = entries.filter(entry => entry.articleBasename).sort(newestFirst)

  const deckNav = new Map<string, DeckNav>()
  deckSorted.forEach((entry, index) => {
    const prev = deckSorted[index + 1]
      ? { href: `../${deckSorted[index + 1].id}/`, title: deckSorted[index + 1].title }
      : null
    const next = deckSorted[index - 1]
      ? { href: `../${deckSorted[index - 1].id}/`, title: deckSorted[index - 1].title }
      : null
    deckNav.set(entry.id, { prev, next })
  })

  const articleNav = new Map<string, ArticleNav>()
  articleSorted.forEach((entry, index) => {
    // Store dist-relative targets; articleNavForRelative() converts them to
    // per-page relative hrefs at injection time.
    const neighbor = (offset: number): { href: string; title: string } | null => {
      const target = articleSorted[index + offset]
      if (!target?.articleBasename) return null
      return { href: `episodes/${target.id}/${target.articleBasename}`, title: target.title }
    }
    articleNav.set(entry.id, { prev: neighbor(1), next: neighbor(-1) })
  })

  return { deckNav, articleNav }
}

function articleNavForRelative(
  nav: ArticleNav | undefined,
  currentDir: string,
): ArticleNav | undefined {
  if (!nav) return undefined
  const shift = (neighbor: { href: string; title: string } | null) => {
    if (!neighbor) return null
    const target = neighbor.href.replace(/^\.\//, '')
    const relative = posix.relative(currentDir || '.', target)
    return { href: relative || basename(target), title: neighbor.title }
  }
  return { prev: shift(nav.prev), next: shift(nav.next) }
}

function resolveEpisodeArticlePath(id: string, meta: EpisodeMeta): string | null {
  const declared = meta.article_path ? resolve(ROOT, meta.article_path) : null
  if (declared && existsSync(declared)) return declared

  const fallback = join(EPISODES_DIR, id, 'article.html')
  if (existsSync(fallback)) return fallback

  return null
}

function generatedEpisodeIds(): string[] {
  if (!existsSync(EPISODES_DIR)) return []
  const ids: string[] = []
  for (const entry of readdirSync(EPISODES_DIR)) {
    if (entry.startsWith('_')) continue
    const dir = join(EPISODES_DIR, entry)
    if (!statSync(dir).isDirectory()) continue
    const metaPath = join(dir, 'meta.yml')
    if (!existsSync(metaPath)) continue
    const meta = readYaml<EpisodeMeta>(metaPath)
    if (meta.status !== 'generated') continue
    if (!existsSync(join(dir, 'slides.md'))) {
      log.warn(`  skip ${entry} — generated meta.yml but no slides.md`)
      continue
    }
    ids.push(entry)
  }
  return ids.sort()
}

function articleArtifacts(): { sourcePath: string; outputRelative: string; episodeId: string }[] {
  if (!existsSync(EPISODES_DIR)) return []
  const artifacts: { sourcePath: string; outputRelative: string; episodeId: string }[] = []

  for (const entry of readdirSync(EPISODES_DIR)) {
    if (entry.startsWith('_')) continue
    const dir = join(EPISODES_DIR, entry)
    if (!statSync(dir).isDirectory()) continue
    const metaPath = join(dir, 'meta.yml')
    if (!existsSync(metaPath)) continue

    const meta = readYaml<EpisodeMeta>(metaPath)
    const sourcePath = resolveEpisodeArticlePath(entry, meta)
    if (!sourcePath) continue
    artifacts.push({
      sourcePath,
      outputRelative: (meta.article_path || `episodes/${entry}/${basename(sourcePath)}`).replace(/^[/\\]+/, ''),
      episodeId: entry,
    })
  }

  return artifacts.sort((a, b) => a.outputRelative.localeCompare(b.outputRelative))
}

function playerFingerprint(ids: string[], base: string): string {
  const hash = createHash('sha256').update('resonote-shared-player-v1\0' + base)
  for (const id of ids) hash.update(id + '\0' + episodeBuildFingerprint({
    rootDir: ROOT, episodeDir: join(EPISODES_DIR, id), templatesDir: TEMPLATES_DIR, base,
  }))
  for (const name of ['scripts/build-player.ts', 'scripts/lib/shared-player.ts', 'scripts/lib/static-diagrams.ts', 'scripts/lib/build-cache.ts'])
    hash.update(readFileSync(resolve(SCRIPT_DIR, '..', name)))
  return hash.digest('hex')
}

async function buildPlayer(ids: string[], base: string): Promise<string> {
  const fingerprint = playerFingerprint(ids, base)
  const output = join(BUILD_CACHE_DIR, 'dist')
  const manifestPath = join(BUILD_CACHE_DIR, 'manifest.json')
  const cached = cachedPlayerDist(BUILD_CACHE_DIR, fingerprint, ids)
  if (cached) {
    playerCacheHit = true
    return cached
  }
  mkdirSync(BUILD_CACHE_DIR, { recursive: true })
  rmSync(manifestPath, { force: true })
  rmSync(output, { recursive: true, force: true })
  const request = join(BUILD_CACHE_DIR, 'request.json')
  writeFileSync(request, JSON.stringify({ ids, output, base }))
  rmSync(request + '.error.json', { force: true })
  const result = await run('pnpm', ['exec', 'tsx', resolve(SCRIPT_DIR, 'build-player.ts'), '--request', request], {
    cwd: ROOT, reject: false,
    env: { ...process.env, NODE_OPTIONS: process.env.NODE_OPTIONS || '--max-old-space-size=2048' },
  })
  if (result.code !== 0) {
    const detail = existsSync(request + '.error.json') ? JSON.parse(readFileSync(request + '.error.json', 'utf8')) : {}
    throw Object.assign(new Error(detail.message || result.stderr || 'Shared player build failed'), { episodeIds: detail.episodeIds })
  }
  if (!existsSync(join(output, 'player/manifest.json')) || !ids.every(id => existsSync(join(output, 'episodes', id, 'index.html'))))
    throw new Error('Incomplete shared player build')
  writeFileSync(manifestPath, JSON.stringify({ fingerprint }))
  return output
}

async function buildLanding(): Promise<string> {
  log.info('building landing')
  const { code, stderr } = await run('pnpm', ['exec', 'astro', 'build'], {
    cwd: LANDING_DIR,
    reject: false,
  })
  if (code !== 0) {
    throw new Error(`landing build failed: ${stderr.slice(0, 400)}`)
  }
  log.ok('  landing built')
  return join(LANDING_DIR, 'dist')
}

async function main() {
  // Site base path — matches landing/astro.config.mjs `base`.
  // Local:    RESONOTE_BASE unset → /
  // CI/prod:  RESONOTE_BASE=/ → https://resonote.doublemice.top/
  const SITE_BASE = process.env.RESONOTE_BASE || '/'
  const SITE_FAVICON = `${SITE_BASE.replace(/\/?$/, '/')}favicon.svg`

  // Actions keys use the same inputs as the shared player cache. Metadata,
  // articles and temporary audit outputs must not cause another cache upload.
  if (process.argv.includes('--cache-key')) {
    const key = playerFingerprint(generatedEpisodeIds(), SITE_BASE)
    if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `key=${key}\n`)
    else console.log(key)
    return
  }
  const startedAt = performance.now()
  log.step('Build all — assembling dist/')

  // Collect generated episodes from durable per-episode artifacts. Plan files
  // are an execution queue and can be refreshed independently.
  const episodes: { id: string; base: string; articlePath: string | null }[] = []
  const navEntries: NavEntry[] = []
  for (const id of generatedEpisodeIds()) {
    const metaPath = join(EPISODES_DIR, id, 'meta.yml')
    if (!existsSync(metaPath)) {
      log.warn(`  skip ${id} — no meta.yml`)
      continue
    }
    const meta = readYaml<EpisodeMeta>(metaPath)
    const articlePath = resolveEpisodeArticlePath(id, meta)
    episodes.push({
      id,
      base: `${SITE_BASE}episodes/${id}/`,
      articlePath,
    })
    navEntries.push({
      id,
      title: meta.title || id,
      published: meta.published,
      published_sort: meta.published_sort,
      articleBasename: articlePath ? basename(articlePath) : null,
    })
  }
  log.info(`found ${episodes.length} generated episodes (base=${SITE_BASE})`)
  const allowEpisodeFailures = process.argv.includes('--allow-episode-failures')
  const generatedThisRun = new Set<string>(allowEpisodeFailures
    ? JSON.parse(readFileSync(join(ROOT, 'logs/pipeline-timing.json'), 'utf8')).generatedEpisodes ?? []
    : [])
  const buildFailures: string[] = []

  // Clean dist
  if (existsSync(DIST_DIR)) rmSync(DIST_DIR, { recursive: true, force: true })
  mkdirSync(DIST_DIR, { recursive: true })

  log.step('Building shared player and episode content')
  let included = [...episodes]
  let playerDist: string
  while (true) {
    try {
      playerDist = await buildPlayer(included.map(ep => ep.id), SITE_BASE)
      break
    } catch (error) {
      const ids = (error as Error & { episodeIds?: string[] }).episodeIds
      if (!allowEpisodeFailures || !ids?.length || ids.some(id => !generatedThisRun.has(id) || !included.some(ep => ep.id === id))) throw error
      for (const id of ids) {
        isolateNewEpisodeBuildFailure(ROOT, id, generatedThisRun, error)
        buildFailures.push(id)
        included = included.filter(ep => ep.id !== id)
        log.warn(`  ${id}: build failed; draft preserved and excluded from publication`)
        if (process.env.GITHUB_ACTIONS === 'true') console.log(`::warning::Episode ${id} could not be built; other episodes will continue.`)
      }
    }
  }
  const episodeDists = included.map(ep => ({ ...ep, path: join(playerDist, 'episodes', ep.id) }))
  log.info(`shared player cache: ${playerCacheHit ? 'hit' : 'rebuilt'}`)
  const builtIds = new Set(episodeDists.map(episode => episode.id))
  const { deckNav, articleNav } = buildNavMaps(navEntries.filter(entry => builtIds.has(entry.id)))
  // Re-read articles after isolating failures so neither the landing page nor
  // article assembly can publish a failed episode's draft or link to it.
  const articles = articleArtifacts()
  log.info(`found ${articles.length} readable articles`)

  // Build landing
  log.step('Building landing')
  const landingDist = await buildLanding()

  // Assemble
  log.step('Assembling final dist/')
  log.raw(`copying ${landingDist} → ${DIST_DIR}`)
  cpSync(landingDist, DIST_DIR, { recursive: true })
  const fallbackPath = join(DIST_DIR, '404.html')
  if (existsSync(fallbackPath)) {
    const fallbackHtml = applySiteFavicon(readFileSync(fallbackPath, 'utf-8'), SITE_FAVICON)
      .replace(/href="[^"]*" data-resonote-home/, `href="${SITE_BASE}" data-resonote-home`)
    writeFileSync(fallbackPath, fallbackHtml, 'utf-8')
  }

  cpSync(join(playerDist, 'player'), join(DIST_DIR, 'player'), { recursive: true })
  const epOut = join(DIST_DIR, 'episodes')
  mkdirSync(epOut, { recursive: true })
  const templatePublic = join(TEMPLATES_DIR, 'public')
  const boilerplate = new Map([
    ...(existsSync(templatePublic) ? readdirSync(templatePublic) : []).filter(name => name.endsWith('.excalidraw')).map(name => join(templatePublic, name)),
    ...['presentation.jpg', 'box.svg'].map(name => join(ROOT, 'node_modules/slidev-theme-academic/public', name)),
  ].filter(path => existsSync(path)).map(path => [basename(path), readFileSync(path)]))
  let prunedFiles = 0
  let prunedBytes = 0
  for (const ep of episodeDists) {
    const dst = join(epOut, ep.id)
    log.raw(`copying ${ep.path} → ${dst}`)
    cpSync(ep.path, dst, { recursive: true })

    // Chrome + 上一篇/下一篇 are injected after copying so even cache-hit
    // episodes get fresh navigation without rebuilding the deck itself.
    const deckIndex = join(dst, 'index.html')
    if (existsSync(deckIndex)) {
      writeFileSync(
        deckIndex,
        applySiteFavicon(
          injectDeckChrome(
            readFileSync(deckIndex, 'utf-8'),
            deckNav.get(ep.id) || { prev: null, next: null },
            SITE_BASE,
          ),
          SITE_FAVICON,
        ),
        'utf-8',
      )
    }

    if (ep.articlePath) {
      const articleDst = join(dst, basename(ep.articlePath))
      log.raw(`theming ${ep.articlePath} → ${articleDst}`)
      writeFileSync(
        articleDst,
        themedArticleHtml(
          ep.articlePath,
          articleNavForRelative(articleNav.get(ep.id), `episodes/${ep.id}`),
          SITE_FAVICON,
          SITE_BASE,
        ),
        'utf-8',
      )
    }
    const pruned = pruneUnusedBoilerplate(dst, boilerplate, readFileSync(join(EPISODES_DIR, ep.id, 'slides.md'), 'utf8'))
    prunedFiles += pruned.removedFiles
    prunedBytes += pruned.removedBytes
  }

  const playerPruned = pruneUnusedBoilerplate(join(DIST_DIR, 'player'), boilerplate)
  prunedFiles += playerPruned.removedFiles
  prunedBytes += playerPruned.removedBytes

  for (const article of articles) {
    const articleDst = resolve(DIST_DIR, article.outputRelative)
    if (!articleDst.startsWith(`${DIST_DIR}${sep}`)) {
      throw new Error(`article output escapes dist: ${article.outputRelative}`)
    }
    if (existsSync(articleDst)) continue
    mkdirSync(dirname(articleDst), { recursive: true })
    log.raw(`theming ${article.sourcePath} → ${articleDst}`)
    const outputDir = posix.dirname(article.outputRelative.split(sep).join('/'))
    writeFileSync(
      articleDst,
      themedArticleHtml(
        article.sourcePath,
        articleNavForRelative(articleNav.get(article.episodeId), outputDir),
        SITE_FAVICON,
        SITE_BASE,
      ),
      'utf-8',
    )
  }

  const assets = staticAssetStats(DIST_DIR)
  const assetSummary = `Static files: ${assets.files + prunedFiles} → ${assets.files}; `
    + `${((assets.bytes + prunedBytes) / 1024 ** 2).toFixed(1)} → ${(assets.bytes / 1024 ** 2).toFixed(1)} MiB `
    + `(${prunedFiles} unused boilerplate files removed)`
  log.info(assetSummary)
  log.ok(`\nFinal dist assembled at ${DIST_DIR}`)
  log.info('serve locally with:  npx serve dist')
  if (process.env.GITHUB_STEP_SUMMARY) {
    appendFileSync(process.env.GITHUB_STEP_SUMMARY, [
      '## Static build', '',
      `- Episodes: ${episodeDists.length}; articles: ${articles.length}`,
      `- New episode build failures (drafts preserved): ${buildFailures.length}`,
      ...buildFailures.sort().map(id => `  - ${id}`),
      `- Shared player cache: ${playerCacheHit ? 'hit' : 'rebuilt'}`,
      `- ${assetSummary}`,
      `- Build and assembly: ${((performance.now() - startedAt) / 1000).toFixed(1)} seconds`, '',
    ].join('\n'))
  }
}

main().catch(e => {
  log.err(e.stack || e.message)
  process.exit(1)
})
