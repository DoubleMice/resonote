import { resolve, join, basename, dirname, sep } from 'node:path'
import {
  existsSync, mkdirSync, cpSync, rmSync, readdirSync, statSync, readFileSync, writeFileSync,
} from 'node:fs'
import { readYaml } from './lib/yaml-io.ts'
import { run } from './lib/spawn.ts'
import { log } from './lib/log.ts'
import { applyArticleTheme } from './lib/article-theme.ts'
import {
  cachedEpisodeDist, episodeBuildFingerprint, storeEpisodeDist,
} from './lib/build-cache.ts'
import { stageEpisodePresentation } from './lib/episode-workspace.ts'
import type { EpisodeMeta } from './lib/types.ts'

const ROOT = process.cwd()
const EPISODES_DIR = resolve(ROOT, 'episodes')
const TEMPLATES_DIR = join(EPISODES_DIR, '_templates')
const LANDING_DIR = resolve(ROOT, 'landing')
const DIST_DIR = resolve(ROOT, 'dist')
const BUILD_CACHE_DIR = resolve(ROOT, process.env.RESONOTE_BUILD_CACHE_DIR || '.cache/episode-builds')
const ARTICLE_THEME_PATH = join(TEMPLATES_DIR, 'article-theme.css')
let episodeCacheHits = 0
let episodeCacheMisses = 0

function themedArticleHtml(articlePath: string): string {
  const html = readFileSync(articlePath, 'utf-8')
  const css = readFileSync(ARTICLE_THEME_PATH, 'utf-8')
  return applyArticleTheme(html, css)
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

function articleArtifacts(): { sourcePath: string; outputRelative: string }[] {
  if (!existsSync(EPISODES_DIR)) return []
  const artifacts: { sourcePath: string; outputRelative: string }[] = []

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
    })
  }

  return artifacts.sort((a, b) => a.outputRelative.localeCompare(b.outputRelative))
}

async function buildEpisode(id: string, base: string): Promise<string | null> {
  const dir = join(EPISODES_DIR, id)
  const metaPath = join(dir, 'meta.yml')
  if (!existsSync(metaPath)) {
    log.warn(`  skip ${id} — no meta.yml`)
    return null
  }
  const meta = readYaml<EpisodeMeta>(metaPath)

  const fingerprint = episodeBuildFingerprint({
    rootDir: ROOT,
    episodeDir: dir,
    templatesDir: TEMPLATES_DIR,
    base,
  })
  const cachedDist = cachedEpisodeDist(BUILD_CACHE_DIR, id, fingerprint)
  if (cachedDist) {
    episodeCacheHits++
    log.info(`building ${id} — cache hit`)
    return cachedDist
  }
  episodeCacheMisses++

  log.info(`building ${id}`)

  // Shared presentation chrome is staged for the command and removed again so
  // every deck uses one canonical implementation without copying it per episode.
  const cleanupPresentation = stageEpisodePresentation(dir, TEMPLATES_DIR)

  try {
    rmSync(join(dir, 'dist'), { recursive: true, force: true })
    // slidev build needs the base path for correct asset URLs in final bundle
    const { code, stderr } = await run('pnpm', [
      'exec', 'slidev', 'build',
      '--base', base,
      '--router-mode', 'hash',
      '--out', 'dist',
    ], { cwd: dir, reject: false })

    if (code !== 0) {
      throw new Error(`${id} build failed: ${stderr.slice(0, 800)}`)
    }
  } finally {
    cleanupPresentation()
  }
  log.ok(`  ${id} built`)
  return storeEpisodeDist(BUILD_CACHE_DIR, id, fingerprint, join(dir, 'dist'))
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
  log.step('Build all — assembling dist/')

  // Site base path — matches landing/astro.config.mjs `base`.
  // Local:    RESONOTE_BASE unset → /
  // CI/prod:  RESONOTE_BASE=/resonote/ → https://doublemice.github.io/resonote/
  const SITE_BASE = process.env.RESONOTE_BASE || '/'

  // Collect generated episodes from durable per-episode artifacts. Plan files
  // are an execution queue and can be refreshed independently.
  const episodes: { id: string; base: string; articlePath: string | null }[] = []
  for (const id of generatedEpisodeIds()) {
    const metaPath = join(EPISODES_DIR, id, 'meta.yml')
    if (!existsSync(metaPath)) {
      log.warn(`  skip ${id} — no meta.yml`)
      continue
    }
    const meta = readYaml<EpisodeMeta>(metaPath)
    episodes.push({
      id,
      base: `${SITE_BASE}episodes/${id}/`,
      articlePath: resolveEpisodeArticlePath(id, meta),
    })
  }
  log.info(`found ${episodes.length} generated episodes (base=${SITE_BASE})`)
  const articles = articleArtifacts()
  log.info(`found ${articles.length} readable articles`)

  // Clean dist
  if (existsSync(DIST_DIR)) rmSync(DIST_DIR, { recursive: true, force: true })
  mkdirSync(DIST_DIR, { recursive: true })

  // Build all episodes
  log.step('Building episodes')
  const episodeDists: { id: string; path: string; articlePath: string | null }[] = []
  for (const ep of episodes) {
    const distPath = await buildEpisode(ep.id, ep.base)
    if (distPath) episodeDists.push({ id: ep.id, path: distPath, articlePath: ep.articlePath })
  }
  if (episodeDists.length !== episodes.length) {
    throw new Error(`only built ${episodeDists.length}/${episodes.length} generated episodes`)
  }
  log.info(`episode build cache: ${episodeCacheHits} hit, ${episodeCacheMisses} rebuilt`)

  // Build landing
  log.step('Building landing')
  const landingDist = await buildLanding()

  // Assemble
  log.step('Assembling final dist/')
  log.raw(`copying ${landingDist} → ${DIST_DIR}`)
  cpSync(landingDist, DIST_DIR, { recursive: true })

  const epOut = join(DIST_DIR, 'episodes')
  mkdirSync(epOut, { recursive: true })
  for (const ep of episodeDists) {
    const dst = join(epOut, ep.id)
    log.raw(`copying ${ep.path} → ${dst}`)
    cpSync(ep.path, dst, { recursive: true })
    if (ep.articlePath) {
      const articleDst = join(dst, basename(ep.articlePath))
      log.raw(`theming ${ep.articlePath} → ${articleDst}`)
      writeFileSync(articleDst, themedArticleHtml(ep.articlePath), 'utf-8')
    }
  }

  for (const article of articles) {
    const articleDst = resolve(DIST_DIR, article.outputRelative)
    if (!articleDst.startsWith(`${DIST_DIR}${sep}`)) {
      throw new Error(`article output escapes dist: ${article.outputRelative}`)
    }
    if (existsSync(articleDst)) continue
    mkdirSync(dirname(articleDst), { recursive: true })
    log.raw(`theming ${article.sourcePath} → ${articleDst}`)
    writeFileSync(articleDst, themedArticleHtml(article.sourcePath), 'utf-8')
  }

  log.ok(`\nFinal dist assembled at ${DIST_DIR}`)
  log.info('serve locally with:  npx serve dist')
}

main().catch(e => {
  log.err(e.stack || e.message)
  process.exit(1)
})
