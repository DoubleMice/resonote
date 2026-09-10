// Isolated experiment: source decks and production build remain unchanged.
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { createServer } from 'node:http'
import { cpSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { extname, join, relative, resolve } from 'node:path'
import { gzipSync } from 'node:zlib'
import { parseSync } from '@slidev/parser'
import { chromium, type Browser, type Page } from 'playwright-chromium'
import { buildSharedPlayer } from './lib/shared-player.ts'

const id = process.argv.find(arg => arg.startsWith('--id='))?.slice(5) || '6242033d-a14a-44e3-a622-cbfc7d3c3817'
assert.match(id, /^[a-zA-Z0-9_-]+$/)
const runs = Number(process.argv.find(arg => arg.startsWith('--runs='))?.slice(7) || 6)
assert.ok(Number.isInteger(runs) && runs > 0)
const output = resolve('logs/diagram-svg', id)
const fontsHar = join(output, 'fonts.har')
const fontUrls = /^https:\/\/fonts\.(googleapis|gstatic)\.com\//
const source = readFileSync(join('episodes', id, 'slides.md'), 'utf8')
const deck = parseSync(source, join('episodes', id, 'slides.md'))
const diagrams = deck.slides.flatMap((slide, i) => [...slide.content.matchAll(/<Excalidraw\b[\s\S]*?\/>/g)].map(match => {
  const path = match[0].match(/drawFilePath="\.\/(?:public\/)?([^"/]+\.excalidraw)"/)?.[1]
  const css = match[0].match(/class="([^"]*)"/)?.[1] || ''
  assert.ok(path, 'experiment supports static, flat public diagram paths')
  assert.ok(!/:(?:darkMode|background)="true"/.test(match[0]), 'experiment currently expects light transparent diagrams')
  return { slide: i + 1, tag: match[0], path, css }
}))
assert.ok(diagrams.length)
const variants = ['runtime', 'svg'] as const
type Variant = typeof variants[number]
const filesIn = (dir: string): string[] => readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? filesIn(join(dir, entry.name)) : [join(dir, entry.name)])

async function serve(directory: string) {
  const types: Record<string, string> = { '.js': 'text/javascript', '.html': 'text/html', '.css': 'text/css', '.json': 'application/json', '.excalidraw': 'application/json', '.svg': 'image/svg+xml', '.woff2': 'font/woff2' }
  const assets = new Map(filesIn(directory).map(file => {
    const compressed = /\.(js|html|css|json|excalidraw|svg)$/.test(file)
    return ['/' + relative(directory, file), { data: compressed ? gzipSync(readFileSync(file)) : readFileSync(file), compressed, type: types[extname(file)] || 'application/octet-stream' }] as const
  }))
  const server = createServer((req, res) => {
    let path = new URL(req.url!, 'http://localhost').pathname
    if (path.endsWith('/')) path += 'index.html'
    const asset = assets.get(decodeURIComponent(path))
    if (!asset) { res.writeHead(404); res.end(); return }
    res.writeHead(200, { 'Content-Type': asset.type, 'Content-Length': asset.data.length, ...(asset.compressed ? { 'Content-Encoding': 'gzip' } : {}) })
    res.end(asset.data)
  })
  await new Promise<void>(done => server.listen(0, '127.0.0.1', done))
  const address = server.address()
  assert.ok(address && typeof address !== 'string')
  return { url: `http://127.0.0.1:${address.port}/episodes/${id}/`, close: () => new Promise<void>(done => server.close(() => done())) }
}

async function ready(page: Page, slide: number, variant: Variant) {
  const layout = page.locator(`.slidev-page[data-slidev-no="${slide}"] .slidev-layout`)
  await layout.waitFor({ state: 'visible' })
  const count = diagrams.filter(d => d.slide === slide).length
  if (count) {
    if (variant === 'runtime') await layout.locator('svg').nth(count - 1).waitFor({ state: 'visible' })
    else await page.waitForFunction(({ slide, count }) => {
      const images = [...document.querySelectorAll<HTMLImageElement>(`.slidev-page[data-slidev-no="${slide}"] img[data-prerendered-diagram]`)]
      return images.length === count && images.every(img => img.complete && img.naturalWidth > 0)
    }, { slide, count })
  }
  await page.evaluate(async () => { await document.fonts.ready; await new Promise<void>(done => requestAnimationFrame(() => requestAnimationFrame(() => done()))) })
}

async function trial(browser: Browser, url: string, variant: Variant) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } })
  try {
    // Replay shared page fonts only; the diagram CDN still uses real HTTPS.
    await context.routeFromHAR(fontsHar, { url: fontUrls, notFound: 'abort' })
    const page = await context.newPage()
    const errors: string[] = []
    const external = new Set<string>()
    page.on('pageerror', error => { if (!error.message.includes('Wake Lock')) errors.push(error.message) })
    page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`) })
    page.on('request', request => { if (new URL(request.url()).origin !== new URL(url).origin) external.add(request.url()) })
    const cdp = await context.newCDPSession(page)
    await cdp.send('Network.enable')
    await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 40, downloadThroughput: 1_250_000, uploadThroughput: 1_250_000 })
    await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 })
    await page.goto(url + '#/1', { waitUntil: 'domcontentloaded' })
    await ready(page, 1, variant)
    const firstMs = await page.evaluate(() => performance.now())
    const start = await page.evaluate(no => { const now = performance.now(); location.hash = `#/${no}`; return now }, diagrams[0].slide)
    await ready(page, diagrams[0].slide, variant)
    const diagramMs = await page.evaluate(() => performance.now()) - start
    const bytes = await page.evaluate(() => performance.getEntriesByType('resource').filter(r => new URL(r.name).origin === location.origin).reduce((sum, r) => sum + (r as PerformanceResourceTiming).encodedBodySize, 0))
    assert.deepEqual(errors, [])
    return { firstMs, diagramMs, sameOriginGzipBytes: bytes, externalRequests: external.size, externalUrls: [...external] }
  } finally { await context.close() }
}

async function measure(browser: Browser, sites: Record<Variant, Awaited<ReturnType<typeof serve>>>, sizes: { file: string; jsonBytes: number; svgBytes: number; svgGzipBytes: number }[], differences: number[]) {
    const samples: Record<Variant, Awaited<ReturnType<typeof trial>>[]> = { runtime: [], svg: [] }
    const failures: { run: number; variant: Variant; error: string }[] = []
    for (let i = 0; i < runs; i++) for (const variant of i % 2 ? [...variants].reverse() : variants) {
      try {
        const sample = await trial(browser, sites[variant].url, variant)
        samples[variant].push(sample)
        console.log('trial', i + 1, variant, sample.firstMs, sample.diagramMs)
      } catch (error) {
        failures.push({ run: i + 1, variant, error: String(error) })
        console.log('failed trial', i + 1, variant, String(error))
      }
      writeFileSync(join(output, 'samples.json'), JSON.stringify({ samples, failures }, null, 2))
    }
    const median = (numbers: number[]) => { if (!numbers.length) return null; const sorted = numbers.toSorted((a, b) => a - b); return (sorted[Math.floor((sorted.length - 1) / 2)] + sorted[Math.floor(sorted.length / 2)]) / 2 }
    const result = { id, runs, sourceSha256: createHash('sha256').update(source).digest('hex'), browser: browser.version(), conditions: 'Real Excalidraw HTTPS requests; shared Google fonts replayed from HAR (their latency excluded); fresh contexts; local gzip HTTP; 40ms/10Mbps and 4x CPU via CDP. HAR routing disables browser HTTP cache. CDN/OS caches may be warm. Medians include successful trials only; failures are recorded separately.', diagrams: sizes, slidesChecked: deck.slides.length, screenshotDifferences: differences, summary: Object.fromEntries(variants.map(v => [v, Object.fromEntries(['firstMs', 'diagramMs', 'sameOriginGzipBytes', 'externalRequests'].map(key => [key, median(samples[v].map(s => s[key as 'firstMs']))]))])), samples, failures }
    writeFileSync(join(output, 'results.json'), JSON.stringify(result, null, 2))
    console.log(JSON.stringify({ summary: result.summary, screenshotDifferences: differences }, null, 2))
}

async function main() {
  mkdirSync(output, { recursive: true })
  if (process.argv.includes('--measure-only')) {
    const previous = JSON.parse(readFileSync(join(output, 'results.json'), 'utf8'))
    assert.equal(previous.sourceSha256, createHash('sha256').update(source).digest('hex'), 'source changed; rebuild the experiment')
    const runtime = await serve(join(output, 'runtime/dist'))
    const svg = await serve(join(output, 'svg/dist'))
    const browser = await chromium.launch()
    try { await measure(browser, { runtime, svg }, previous.diagrams, previous.screenshotDifferences) }
    finally { await browser.close(); await runtime.close(); await svg.close() }
    return
  }
  const root = join(output, 'source')
  rmSync(root, { recursive: true, force: true })
  mkdirSync(join(root, 'episodes', id), { recursive: true })
  mkdirSync(join(root, 'episodes/_templates'), { recursive: true })
  cpSync('episodes/_templates/style.css', join(root, 'episodes/_templates/style.css'))
  cpSync(join('episodes', id, 'public'), join(root, 'episodes', id, 'public'), { recursive: true })
  writeFileSync(join(root, 'episodes', id, 'slides.md'), source)
  const dirs = Object.fromEntries(variants.map(v => [v, join(output, v, 'dist')])) as Record<Variant, string>
  await buildSharedPlayer(root, [id], dirs.runtime)
  const runtime = await serve(dirs.runtime)
  const browser = await chromium.launch()
  let svgSite: Awaited<ReturnType<typeof serve>> | undefined
  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, recordHar: { path: fontsHar, urlFilter: fontUrls, mode: 'minimal', content: 'embed' } })
    const page = await context.newPage()
    let transformed = source
    const sizes = []
    // Export with the actual addon so its rendering options and embedded fonts match.
    for (const [index, diagram] of diagrams.entries()) {
      await page.goto(runtime.url + `#/${diagram.slide}`, { waitUntil: 'networkidle' })
      await ready(page, diagram.slide, 'runtime')
      const samePage = diagrams.filter(d => d.slide === diagram.slide)
      const svg = await page.locator(`.slidev-page[data-slidev-no="${diagram.slide}"] .slidev-layout svg`).nth(samePage.indexOf(diagram)).evaluate(el => el.outerHTML)
      assert.ok(!/(?:href|url\()\s*["']?https?:/.test(svg), 'SVG must embed its font and image dependencies')
      const name = `diagram-${index}.svg`
      writeFileSync(join(root, 'episodes', id, 'public', name), svg)
      sizes.push({ file: diagram.path, jsonBytes: readFileSync(join(root, 'episodes', id, 'public', diagram.path)).length, svgBytes: Buffer.byteLength(svg), svgGzipBytes: gzipSync(svg).length })
      transformed = transformed.replace(diagram.tag, `<div class="${diagram.css}"><img data-prerendered-diagram :src="'./${name}'" alt="" style="max-width:100%;height:auto" /></div>`)
    }
    await context.close()
    writeFileSync(join(root, 'episodes', id, 'slides.md'), transformed)
    for (const path of new Set(diagrams.map(d => d.path))) rmSync(join(root, 'episodes', id, 'public', path))
    await buildSharedPlayer(root, [id], dirs.svg)
    svgSite = await serve(dirs.svg)
    const sites = { runtime, svg: svgSite }
    const differences: number[] = []
    const shots = new Map<number, Buffer>()
    for (const variant of variants) {
      const check = await browser.newContext({ viewport: { width: 1440, height: 1000 } })
      await check.routeFromHAR(fontsHar, { url: fontUrls, notFound: 'abort' })
      const page = await check.newPage()
      if (variant === 'svg') await check.route('https://esm.sh/**', route => route.abort())
      await page.goto(sites[variant].url, { waitUntil: 'networkidle' })
      for (let no = 1; no <= deck.slides.length; no++) {
        await page.evaluate(no => { location.hash = `#/${no}` }, no)
        await ready(page, no, variant)
        await page.waitForLoadState('networkidle')
        await page.waitForTimeout(400)
        const shot = await page.screenshot({ path: join(output, `${variant}-${no}.png`), animations: 'disabled' })
        if (variant === 'runtime') shots.set(no, shot)
        else if (!shot.equals(shots.get(no)!)) differences.push(no)
      }
      await check.close()
    }
    writeFileSync(join(output, 'validation.json'), JSON.stringify({ slidesChecked: deck.slides.length, screenshotDifferences: differences }))
    await measure(browser, sites, sizes, differences)
  } finally { await browser.close(); await runtime.close(); await svgSite?.close() }
}
main().catch(error => { console.error(error); process.exitCode = 1 })
