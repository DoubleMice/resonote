import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { chromium } from 'playwright-chromium'
import { readYaml } from './lib/yaml-io.ts'
import { startStaticServer } from './lib/static-server.ts'
import type { EpisodeMeta } from './lib/types.ts'

const ROOT = process.cwd()
const DIST_DIR = resolve(ROOT, 'dist')
const EPISODES_DIR = resolve(ROOT, 'episodes')

interface BuiltEpisode {
  id: string
  published: string
  siteBase: string
  slidevVersion: string
}

function inferSiteBase(episodeId: string, indexHtml: string): string {
  const bootstrap = indexHtml.match(/<script id="resonote-episode" type="application\/json">(.*?)<\/script>/)?.[1]
  if (bootstrap) {
    const episode = JSON.parse(bootstrap)
    assert.equal(episode.id, episodeId)
    assert.ok(episode.base.endsWith(`/episodes/${episodeId}/`))
    return episode.base.slice(0, -`episodes/${episodeId}/`.length)
  }
  const marker = `/episodes/${episodeId}/assets/`
  const markerIndex = indexHtml.indexOf(marker)
  if (markerIndex === -1) throw new Error(`cannot infer site base from episode ${episodeId}`)
  const quoteIndex = indexHtml.lastIndexOf('"', markerIndex)
  if (quoteIndex === -1) throw new Error(`cannot parse asset URL for episode ${episodeId}`)
  const siteBase = indexHtml.slice(quoteIndex + 1, markerIndex + 1)
  if (!siteBase.startsWith('/') || !siteBase.endsWith('/')) {
    throw new Error(`invalid site base inferred from episode ${episodeId}: ${siteBase}`)
  }
  return siteBase
}

function builtEpisodes(): BuiltEpisode[] {
  const episodesDir = join(DIST_DIR, 'episodes')
  if (!existsSync(episodesDir)) throw new Error('dist/episodes does not exist')

  const episodes: BuiltEpisode[] = []
  for (const id of readdirSync(episodesDir).sort()) {
    const indexPath = join(episodesDir, id, 'index.html')
    if (!existsSync(indexPath)) continue

    const indexHtml = readFileSync(indexPath, 'utf8')
    const slidevVersion = indexHtml.match(/<meta property="slidev:version" content="([^"]+)">/)?.[1]
    if (!slidevVersion) throw new Error(`missing Slidev version in episode ${id}`)

    const metaPath = join(EPISODES_DIR, id, 'meta.yml')
    if (!existsSync(metaPath)) throw new Error(`missing metadata for built episode ${id}`)
    const meta = readYaml<EpisodeMeta>(metaPath)
    if (!meta.published) throw new Error(`missing published date for built episode ${id}`)

    episodes.push({
      id,
      published: meta.published,
      siteBase: inferSiteBase(id, indexHtml),
      slidevVersion,
    })
  }

  if (episodes.length === 0) throw new Error('no built episode found in dist/episodes')
  return episodes
}

function verifyBuiltVersions(episodes: BuiltEpisode[]): string {
  const packageJson = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8')) as {
    dependencies?: Record<string, string>
  }
  const expectedVersion = packageJson.dependencies?.['@slidev/cli']
  if (!expectedVersion) throw new Error('package.json does not declare @slidev/cli')

  const versions = new Set(episodes.map(episode => episode.slidevVersion))
  assert.deepEqual([...versions], [expectedVersion], 'built episodes do not use the pinned Slidev version')

  const siteBases = new Set(episodes.map(episode => episode.siteBase))
  assert.equal(siteBases.size, 1, `built episodes use inconsistent site bases: ${[...siteBases].join(', ')}`)
  return episodes[0].siteBase
}

function representativeEpisodes(episodes: BuiltEpisode[]): BuiltEpisode[] {
  const sorted = [...episodes].sort((a, b) =>
    a.published.localeCompare(b.published) || a.id.localeCompare(b.id),
  )
  const representatives = [sorted[0], sorted.at(-1)!]
  return representatives.filter((episode, index) =>
    representatives.findIndex(candidate => candidate.id === episode.id) === index,
  )
}

async function main() {
  const episodes = builtEpisodes()
  const siteBase = verifyBuiltVersions(episodes)
  const manifest = JSON.parse(readFileSync(join(DIST_DIR, 'player/manifest.json'), 'utf8'))
  assert.deepEqual(Object.keys(manifest.episodes).sort(), episodes.map(ep => ep.id).sort())
  const entries = new Set<string>()
  const contentFiles = new Set<string>()
  for (const episode of episodes) {
    const html = readFileSync(join(DIST_DIR, 'episodes', episode.id, 'index.html'), 'utf8')
    const entry = html.match(/<script type="module"[^>]*src="([^"]+)"/)?.[1]
    assert.ok(entry?.startsWith(`${siteBase}player/assets/`), `missing shared player entry: ${episode.id}`)
    entries.add(entry!)
    const content = manifest.episodes[episode.id]
    const preloaded = [...html.matchAll(/href="([^"]*\/assets\/episodes\/[^" ]+\.js)"/g)].map(match => match[1])
    assert.deepEqual(preloaded, [`${siteBase}player/${content.file}`], 'only the selected content bundle should preload')
    assert.ok(content.slides > 0)
    assert.ok(existsSync(join(DIST_DIR, 'player', content.file)))
    contentFiles.add(content.file)
  }
  assert.equal(entries.size, 1, 'all episodes must use one player entry')
  assert.equal(contentFiles.size, episodes.length, 'each episode must have one independent content bundle')
  const representatives = representativeEpisodes(episodes)
  const fallback = readFileSync(join(DIST_DIR, '404.html'))
  const { server, origin } = await startStaticServer(DIST_DIR, siteBase, fallback)

  const browser = await chromium.launch({ headless: true })
  try {
    console.log(`slide artifacts verified: ${episodes.length} episodes use Slidev ${episodes[0].slidevVersion}`)
    for (const episode of representatives) {
      const page = await browser.newPage()
      const episodePath = `${siteBase}episodes/${episode.id}/`
      const episodeUrl = `${origin}${episodePath}`
      const runtimeErrors: string[] = []
      const requestedContent = new Set<string>()
      page.on('request', request => {
        const path = new URL(request.url()).pathname
        if (path.includes('/assets/episodes/') && path.endsWith('.js')) requestedContent.add(path)
      })
      page.on('pageerror', error => {
        if (!error.message.includes('Wake Lock')) runtimeErrors.push(error.message)
      })
      page.on('response', response => {
        const url = new URL(response.url())
        if (url.origin === new URL(episodeUrl).origin && response.status() >= 400 && !response.request().isNavigationRequest()) {
          runtimeErrors.push(`${response.status()} ${response.url()}`)
        }
      })

      await page.goto(episodeUrl, { waitUntil: 'domcontentloaded' })
      await page.waitForURL(url => url.hash === '#/1')
      await page.locator('.slidev-page[data-slidev-no="1"] .slidev-layout').waitFor({ state: 'visible' })

      const nav = page.locator('[data-resonote-nav]')
      assert.equal(await nav.count(), 1, 'deck must contain exactly one canonical navigation')
      assert.equal(await page.locator('a.resonote-back').count(), 0, 'legacy scaled home link must be absent')
      const homeHref = await nav.locator('.rn-deck-home').getAttribute('href')
      assert.ok(homeHref, 'deck navigation must link to the site home')
      assert.equal(new URL(homeHref, episodeUrl).pathname, siteBase)
      const navBoxes = await nav.locator('.rn-deck-btn').evaluateAll(elements => elements.map(element => {
        const box = element.getBoundingClientRect()
        return { left: box.left, right: box.right }
      }))
      navBoxes.slice(1).forEach((box, index) => {
        assert.ok(navBoxes[index].right <= box.left, 'deck navigation controls must not overlap')
      })

      await page.keyboard.press('ArrowRight')
      await page.waitForURL(url => url.hash === '#/2')
      assert.equal(new URL(page.url()).pathname, episodePath)

      const secondSlideUrl = page.url()
      await page.reload({ waitUntil: 'domcontentloaded' })
      assert.equal(page.url(), secondSlideUrl)

      await page.goto(`${episodeUrl}2?source=legacy`, { waitUntil: 'domcontentloaded' })
      await page.waitForURL(url => url.pathname === episodePath && url.hash === '#/2?source=legacy')

      await page.goto(`${episodeUrl}${siteBase.replace(/^\//, '')}episodes/${episode.id}/2`, {
        waitUntil: 'domcontentloaded',
      })
      await page.waitForURL(url => url.pathname === episodePath && url.hash === '#/2')

      const body = await page.locator('body').innerText()
      assert.ok(body.trim().length > 0)
      assert.doesNotMatch(body, /Page .* not found/)
      await page.locator('.slidev-page[data-slidev-no="2"] .slidev-layout').waitFor({ state: 'visible' })
      await page.goto(`${episodeUrl}#/presenter/2`)
      await page.locator('.slidev-page[data-slidev-no="2"] .slidev-layout').first().waitFor({ state: 'visible' })
      await page.goto(`${episodeUrl}#/overview`)
      await page.locator('.slidev-layout').first().waitFor({ state: 'visible' })
      assert.deepEqual([...requestedContent], [`${siteBase}player/${manifest.episodes[episode.id].file}`], 'only the selected episode content may load, including overview/presenter')
      assert.deepEqual(runtimeErrors, [])
      console.log(`slide routing verified: ${episodePath}#/2 (${episode.published})`)
      await page.close()
    }

    const fallbackPage = await browser.newPage()
    const fallbackUrl = `${origin}${siteBase}missing/nested/path`
    await fallbackPage.goto(fallbackUrl, { waitUntil: 'domcontentloaded' })
    const fallbackHome = await fallbackPage.locator('[data-resonote-home]').getAttribute('href')
    assert.ok(fallbackHome, '404 page must contain a canonical home link')
    assert.equal(new URL(fallbackHome, fallbackUrl).pathname, siteBase)
    await fallbackPage.close()
  }
  finally {
    await browser.close()
    await new Promise<void>(resolveClose => server.close(() => resolveClose()))
  }
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})
