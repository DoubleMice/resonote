import assert from 'node:assert/strict'
import { createReadStream, existsSync, mkdirSync, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join, resolve, sep } from 'node:path'
import { chromium, type Page } from 'playwright-chromium'

const ROOT = process.cwd()
const DIST_DIR = resolve(ROOT, 'dist')
const configuredTargetUrl = process.env.RESONOTE_AUDIT_URL
const screenshotDir = process.env.RESONOTE_AUDIT_OUTPUT
let targetUrl = configuredTargetUrl || ''

async function startBuiltSite() {
  const rawBase = process.env.RESONOTE_BASE || process.env.PODDECK_BASE || '/'
  const siteBase = `/${rawBase.replace(/^\/+|\/+$/g, '')}${rawBase === '/' ? '' : '/'}`
  const contentTypes: Record<string, string> = {
    '.css': 'text/css; charset=utf-8',
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
  }

  const server = createServer((request, response) => {
    const pathname = decodeURIComponent(new URL(request.url || '/', 'http://localhost').pathname)
    if (!pathname.startsWith(siteBase)) {
      response.writeHead(404)
      response.end()
      return
    }

    const relativePath = pathname.slice(siteBase.length)
    let filePath = resolve(DIST_DIR, relativePath)
    if (filePath !== DIST_DIR && !filePath.startsWith(`${DIST_DIR}${sep}`)) {
      response.writeHead(403)
      response.end()
      return
    }
    if (existsSync(filePath) && statSync(filePath).isDirectory()) filePath = join(filePath, 'index.html')

    if (!existsSync(filePath) || !statSync(filePath).isFile()) {
      response.writeHead(404)
      response.end()
      return
    }

    response.writeHead(200, { 'Content-Type': contentTypes[extname(filePath)] || 'application/octet-stream' })
    createReadStream(filePath).pipe(response)
  })

  await new Promise<void>(resolveListen => server.listen(0, '127.0.0.1', resolveListen))
  const address = server.address()
  if (!address || typeof address === 'string') throw new Error('failed to start home audit server')
  return {
    server,
    url: `http://127.0.0.1:${address.port}${siteBase}`,
  }
}

async function assertNoHorizontalOverflow(page: Page, viewport: string) {
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
  assert.ok(overflow <= 1, `${viewport} layout overflows horizontally by ${overflow}px`)
}

async function auditDesktop(page: Page) {
  const runtimeErrors: string[] = []
  const targetOrigin = new URL(targetUrl).origin

  page.on('pageerror', error => runtimeErrors.push(error.message))
  page.on('console', message => {
    const text = message.text()
    // Resource responses are checked below with their URL. Chromium's generic
    // console line omits the URL and would otherwise make an external cover
    // image failure indistinguishable from a broken first-party asset.
    if (message.type() === 'error' && !text.startsWith('Failed to load resource:')) {
      runtimeErrors.push(text)
    }
  })
  page.on('response', response => {
    const responseUrl = new URL(response.url())
    if (responseUrl.origin === targetOrigin && response.status() >= 400) {
      runtimeErrors.push(`${response.status()} ${response.url()}`)
    }
  })

  await page.goto(targetUrl, { waitUntil: 'domcontentloaded' })
  await page.waitForLoadState('networkidle').catch(() => undefined)

  assert.equal(await page.locator('h1').count(), 1, 'home page must contain one h1')
  assert.equal(await page.locator('.featured-note').count(), 1, 'home page must contain one featured note')
  assert.equal(await page.locator('.episode-card').count(), 6, 'home page must contain six recent note cards')
  const themeCount = await page.locator('.theme-card').count()
  assert.ok(themeCount > 0 && themeCount <= 5, 'home page must list every non-empty theme')
  assert.equal(await page.locator('.hero-deck, .category-stack').count(), 0, 'legacy home sections must be removed')
  const skipLinkBottom = await page.locator('.skip-link').evaluate(element => element.getBoundingClientRect().bottom)
  assert.ok(skipLinkBottom <= 0, 'skip link must stay off-canvas until focused')
  assert.equal(await page.locator('.skip-link').evaluate(element => getComputedStyle(element).opacity), '0')

  const discoveryTop = await page.locator('#content-explore').evaluate(element => element.getBoundingClientRect().top + window.scrollY)
  const recentTop = await page.locator('#recent-title').evaluate(element => element.getBoundingClientRect().top + window.scrollY)
  assert.ok(discoveryTop < recentTop, 'discovery tabs must appear before recent notes')

  const sourceTab = page.locator('#discovery-tab-sources')
  await sourceTab.click()
  assert.equal(await sourceTab.getAttribute('aria-selected'), 'true')
  assert.ok(await page.locator('#discovery-panel-sources').isVisible(), 'source panel must become visible')

  const search = page.locator('#search-input')
  await search.fill('AI')
  await page.locator('#search-results').waitFor({ state: 'visible' })
  assert.ok(await page.locator('#search-results [role="option"]').count() > 0, 'search must return matching content')
  await search.press('Escape')
  assert.ok(await page.locator('#search-results').isHidden(), 'Escape must close search results')

  await assertNoHorizontalOverflow(page, 'desktop')
  assert.deepEqual(runtimeErrors, [], `home page runtime errors:\n${runtimeErrors.join('\n')}`)
  await page.evaluate(() => window.scrollTo(0, 0))
}

async function main() {
  const builtSite = configuredTargetUrl ? undefined : await startBuiltSite()
  targetUrl = configuredTargetUrl || builtSite!.url
  const browser = await chromium.launch({ headless: true })
  try {
    const desktop = await browser.newPage({ viewport: { width: 1440, height: 1000 } })
    await auditDesktop(desktop)

    const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true })
    await mobile.goto(targetUrl, { waitUntil: 'domcontentloaded' })
    await assertNoHorizontalOverflow(mobile, 'mobile')
    assert.ok(await mobile.locator('.featured-note').isVisible(), 'featured note must remain visible on mobile')

    if (screenshotDir) {
      const output = resolve(screenshotDir)
      mkdirSync(output, { recursive: true })
      await desktop.screenshot({ path: resolve(output, 'home-desktop.png'), fullPage: true })
      await mobile.screenshot({ path: resolve(output, 'home-mobile.png'), fullPage: true })
    }

    console.log(`home audit passed: ${targetUrl}`)
  } finally {
    await browser.close()
    if (builtSite) {
      await new Promise<void>(resolveClose => builtSite.server.close(() => resolveClose()))
    }
  }
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})
