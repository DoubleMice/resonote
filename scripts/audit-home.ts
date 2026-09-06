import assert from 'node:assert/strict'
import { mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { chromium, type Page } from 'playwright-chromium'
import { startStaticServer } from './lib/static-server.ts'

const ROOT = process.cwd()
const DIST_DIR = resolve(ROOT, 'dist')
const configuredTargetUrl = process.env.RESONOTE_AUDIT_URL
const screenshotDir = process.env.RESONOTE_AUDIT_OUTPUT
let targetUrl = configuredTargetUrl || ''

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
  const archiveItems = page.locator('.home-library-list [data-library-item]')
  assert.ok(await archiveItems.count() > 6, 'home page must retain the complete progressively loaded archive')
  assert.equal(await archiveItems.filter({ visible: true }).count(), Math.min(36, await archiveItems.count()), 'home archive must initially reveal 36 items')
  assert.equal(await page.locator('.hero-deck, .category-stack, .theme-index, .theme-card').count(), 0, 'legacy home sections must be removed')
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

  // Filtering must not detach/reinsert the archive on every keystroke.
  const mutations = await page.evaluate(() => {
    const list = document.getElementById('library-list')!
    const input = document.getElementById('library-search') as HTMLInputElement
    const observer = new MutationObserver(() => {})
    observer.observe(list, { childList: true })
    for (const query of ['AI', 'no-such-resonote-episode', '']) {
      input.value = query
      input.dispatchEvent(new Event('input', { bubbles: true }))
    }
    const count = observer.takeRecords().length
    observer.disconnect()
    return count
  })
  assert.equal(mutations, 0, 'typing must preserve archive nodes and order')

  const librarySearch = page.locator('#library-search')
  await librarySearch.fill('no-such-resonote-episode')
  assert.equal(await archiveItems.filter({ visible: true }).count(), 0)
  assert.ok(await page.locator('#library-empty').isVisible())
  await page.locator('#library-reset').click()
  await page.locator('#library-sort').selectOption('published')
  const dates = await archiveItems.evaluateAll(items => items.map(item => Number(item.getAttribute('data-published-sort'))))
  assert.deepEqual(dates, [...dates].sort((a, b) => b - a), 'publication sorting must reorder all entries')
  await page.locator('#library-reset').click()
  if (await archiveItems.count() > 36) {
    await page.locator('#library-more').click()
    assert.equal(await archiveItems.filter({ visible: true }).count(), Math.min(72, await archiveItems.count()))
  }
  const first = archiveItems.first()
  await first.locator('[data-read-toggle]').click()
  await page.locator('#library-unread').click()
  assert.ok(await first.isHidden(), 'unread filtering must respond to read-state changes')
  await page.locator('#library-reset').click()
  await first.locator('[data-read-toggle]').click()

  await assertNoHorizontalOverflow(page, 'desktop')
  assert.deepEqual(runtimeErrors, [], `home page runtime errors:\n${runtimeErrors.join('\n')}`)
  await page.evaluate(() => window.scrollTo(0, 0))
}

async function main() {
  const builtSite = configuredTargetUrl ? undefined : await startStaticServer(DIST_DIR, process.env.RESONOTE_BASE || '/')
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
