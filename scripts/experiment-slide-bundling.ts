// Reproducible one-episode experiment; writes only to logs/slide-bundling/<id>/.
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { createServer } from 'node:http'
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { basename, extname, join, relative, resolve } from 'node:path'
import { gzipSync } from 'node:zlib'
import { parse } from '@slidev/parser'
import { chromium, type Browser, type Page } from 'playwright-chromium'
import { stageEpisodePresentation, resolveEpisodeDirectory } from './lib/episode-workspace.ts'
import { pruneUnusedBoilerplate } from './lib/shared-assets.ts'
import { run } from './lib/spawn.ts'

const ROOT = process.cwd()
const sharedPlayer = process.argv.includes('--shared-player')
const id = process.argv.find(arg => arg.startsWith('--id='))?.slice(5) || '6242033d-a14a-44e3-a622-cbfc7d3c3817'
const runs = Number(process.argv.find(arg => arg.startsWith('--runs='))?.slice(7) || 10)
assert.ok(Number.isInteger(runs) && runs > 0)
const source = resolveEpisodeDirectory(join(ROOT, 'episodes'), id)
const previous = resolveEpisodeDirectory(join(ROOT, 'logs/slide-bundling'), id)
const output = sharedPlayer ? join(ROOT, 'logs/shared-player/experiment', id) : previous
const workspace = join(output, 'workspace')
const externalHar = join(previous, 'external.har')
const base = `/episodes/${id}/`
const variants = sharedPlayer ? ['baseline', 'shared'] as const : ['baseline', 'merged'] as const
type Variant = typeof variants[number]

function filesIn(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const path = join(dir, entry.name)
    return entry.isDirectory() ? filesIn(path) : entry.isFile() ? [path] : []
  })
}
function stats(dir: string) {
  const files = filesIn(dir)
  return {
    files: files.length, jsFiles: files.filter(file => extname(file) === '.js').length,
    bytes: files.reduce((sum, file) => sum + readFileSync(file).length, 0),
    gzipJsBytes: files.filter(file => extname(file) === '.js').reduce((sum, file) => sum + gzipSync(readFileSync(file)).length, 0),
  }
}

async function build() {
  rmSync(workspace, { recursive: true, force: true })
  const excluded = new Set(['dist', 'node_modules', 'audit', 'audit-layout', '.cache', '.slidev', 'screenshots', 'shots'])
  cpSync(source, workspace, { recursive: true, filter: path => !excluded.has(basename(path)) })
  assert.ok(!filesIn(workspace).some(file => /vite\.config\./.test(basename(file))), 'experiment expects an episode without a custom Vite config')
  writeFileSync(join(workspace, 'vite.config.mjs'), String.raw`
import { writeFileSync } from 'node:fs'
export default {
  plugins: [{
    name: 'resonote-content-bundle-experiment',
    configResolved(config) {
      if (process.env.RESONOTE_EXPERIMENT_VARIANT !== 'merged') return
      const output = config.build.rollupOptions.output
      if (Array.isArray(output) || typeof output.manualChunks !== 'function') throw Error('Unexpected Slidev chunk configuration')
      const original = output.manualChunks
      output.manualChunks = (id, meta) => /\/@slidev\/slides\/\d+\/md(?:$|\?)/.test(id)
        ? 'slide-content' : original(id, meta)
    },
    generateBundle(options, bundle) {
      const chunks = Object.values(bundle).filter(item => item.type === 'chunk').map(chunk => ({
        file: chunk.fileName,
        bytes: Buffer.byteLength(chunk.code),
        slides: Object.keys(chunk.modules).filter(id => /\/@slidev\/slides\/\d+\/md(?:$|\?)/.test(id)),
      }))
      writeFileSync(process.env.RESONOTE_EXPERIMENT_MANIFEST, JSON.stringify(chunks, null, 2))
    },
  }],
}
`)
  const templates = join(ROOT, 'episodes/_templates')
  const originals = new Map([
    ...readdirSync(join(templates, 'public')).filter(name => name.endsWith('.excalidraw')).map(name => join(templates, 'public', name)),
    ...['presentation.jpg', 'box.svg'].map(name => join(ROOT, 'node_modules/slidev-theme-academic/public', name)),
  ].map(path => [basename(path), readFileSync(path)]))
  const cleanup = stageEpisodePresentation(workspace, templates)
  try {
    for (const variant of variants) {
      const site = join(output, variant)
      rmSync(site, { recursive: true, force: true })
      const dist = join(site, 'episodes', id)
      process.env.RESONOTE_EXPERIMENT_VARIANT = variant
      process.env.RESONOTE_EXPERIMENT_MANIFEST = join(output, `${variant}-chunks.json`)
      const result = await run('pnpm', ['exec', 'slidev', 'build', join(workspace, 'slides.md'), '--base', base, '--router-mode', 'hash', '--out', dist], {
        cwd: ROOT, reject: false,
      })
      writeFileSync(join(output, `${variant}-build.log`), result.stdout + '\n' + result.stderr)
      assert.equal(result.code, 0, `${variant} build failed; see experiment log`)
      const pruned = pruneUnusedBoilerplate(dist, originals)
      console.log(variant, stats(site), pruned)
    }
  } finally { cleanup() }
}

async function serve(dir: string) {
  const mime: Record<string, string> = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.excalidraw': 'application/json', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf', '.png': 'image/png', '.jpg': 'image/jpeg' }
  const assets = new Map(filesIn(dir).map(file => {
    const ext = extname(file)
    const compressed = ['.html', '.js', '.css', '.svg', '.excalidraw'].includes(ext)
    const data = readFileSync(file)
    return ['/' + relative(dir, file), { data: compressed ? gzipSync(data) : data, compressed, type: mime[ext] || 'application/octet-stream' }] as const
  }))
  const server = createServer((req, res) => {
    let path = new URL(req.url!, 'http://localhost').pathname
    if (path.endsWith('/')) path += 'index.html'
    const asset = assets.get(decodeURIComponent(path))
    if (!asset) { res.writeHead(404); res.end(); return }
    res.writeHead(200, { 'Content-Type': asset.type, 'Content-Length': asset.data.length, 'Cache-Control': 'public, max-age=3600', ...(asset.compressed ? { 'Content-Encoding': 'gzip' } : {}) })
    res.end(asset.data)
  })
  await new Promise<void>(ready => server.listen(0, '127.0.0.1', ready))
  const address = server.address()
  assert.ok(address && typeof address !== 'string')
  return { url: `http://127.0.0.1:${address.port}${base}`, close: () => new Promise<void>(done => server.close(() => done())) }
}

// Measure actual slide DOM + fonts + two animation frames, not just hash changes.
async function rendered(page: Page, slide: number) {
  return page.evaluate(async no => {
    const start = performance.now()
    while (true) {
      const el = document.querySelector<HTMLElement>(`.slidev-page[data-slidev-no="${no}"]`)
      if (el && getComputedStyle(el).display !== 'none' && el.querySelector('.slidev-layout') && el.innerText.trim().length > 20) break
      if (performance.now() - start > 20000) throw Error(`slide ${no} failed to render`)
      await new Promise<void>(done => requestAnimationFrame(() => done()))
    }
    await document.fonts.ready
    await new Promise<void>(done => requestAnimationFrame(() => requestAnimationFrame(() => done())))
    return performance.now()
  }, slide)
}
async function turn(page: Page, target: number) {
  const start = await page.evaluate(no => { const time = performance.now(); location.hash = `#/${no}`; return time }, target)
  return (await rendered(page, target)) - start
}
function errorsOn(page: Page) {
  const errors: string[] = []
  page.on('pageerror', error => { if (!error.message.includes('Wake Lock')) errors.push(error.message) })
  page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`) })
  page.on('requestfailed', request => { if (request.failure()?.errorText !== 'net::ERR_ABORTED') errors.push(`${request.failure()?.errorText} ${request.url()}`) })
  return errors
}
async function trial(browser: Browser, url: string) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 })
  try {
    // Replay only third-party HTTPS dependencies. First-party HTTP assets still
    // pass through the real gzip server and CDP network throttling.
    await context.routeFromHAR(externalHar, { url: /^https:\/\//, notFound: 'abort' })
    const page = await context.newPage()
    const errors = errorsOn(page)
    const cdp = await context.newCDPSession(page)
    await cdp.send('Network.enable')
    await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 40, downloadThroughput: 1_250_000, uploadThroughput: 1_250_000 })
    await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 })
    await page.goto(url, { waitUntil: 'domcontentloaded' })
    const firstSlideMs = await rendered(page, 1)
    const first = await page.evaluate(() => ({
      fcpMs: performance.getEntriesByName('first-contentful-paint')[0]?.startTime ?? null,
      jsRequests: performance.getEntriesByType('resource').filter(entry => new URL(entry.name).pathname.endsWith('.js')).length,
      encodedBytes: performance.getEntriesByType('resource').filter(entry => new URL(entry.name).origin === location.origin).reduce((sum, entry) => sum + (entry as PerformanceResourceTiming).encodedBodySize, 0),
    }))
    const nextMs = await turn(page, 2)
    const jumpMs = await turn(page, 20)
    // Slidev preloads all slide modules after 3 s; measure steady-state turns too.
    await page.waitForTimeout(4500)
    const warmBackMs = await turn(page, 19)
    const warmForwardMs = await turn(page, 20)
    assert.deepEqual(errors, [])
    return { firstSlideMs, ...first, nextMs, jumpMs, warmBackMs, warmForwardMs }
  } finally { await context.close() }
}

async function validate(browser: Browser, urls: Record<Variant, string>, slideCount: number) {
  const screenshots = new Map<number, Buffer>()
  const different: number[] = []
  for (const variant of variants) {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 })
    try {
      await context.routeFromHAR(externalHar, { url: /^https:\/\//, notFound: 'abort' })
      const page = await context.newPage()
      const errors = errorsOn(page)
      await page.goto(urls[variant], { waitUntil: 'networkidle' })
      for (let slide = 1; slide <= slideCount; slide++) {
        await turn(page, slide)
        await page.waitForLoadState('networkidle')
        await page.waitForTimeout(400)
        const shot = await page.screenshot({ path: join(output, `${variant}-${slide}.png`), animations: 'disabled', caret: 'hide' })
        if (variant === 'baseline') screenshots.set(slide, shot)
        else if (!screenshots.get(slide)!.equals(shot)) different.push(slide)
      }
      assert.deepEqual(errors, [])
      console.log(`${variant}: ${slideCount} slides rendered without request/runtime errors`)
    } finally { await context.close() }
  }
  return { slidesChecked: slideCount, screenshotDifferences: different }
}

async function main() {
  mkdirSync(output, { recursive: true })
  if (!sharedPlayer && !process.argv.includes('--skip-build')) await build()
  const slideCount = (await parse(readFileSync(join(source, 'slides.md'), 'utf8'), join(source, 'slides.md'))).slides.length
  assert.ok(slideCount >= 20, 'experiment uses page 20 as the distant-jump target')
  const siteDirs = Object.fromEntries(variants.map(variant => [variant, sharedPlayer
    ? variant === 'baseline' ? join(ROOT, 'logs/shared-player/before') : join(ROOT, 'dist')
    : join(output, variant)])) as Record<Variant, string>
  const contentChunks: Partial<Record<Variant, number>> = {}
  if (sharedPlayer) {
    const manifest = JSON.parse(readFileSync(join(ROOT, 'dist/player/manifest.json'), 'utf8'))
    assert.equal(manifest.episodes[id].slides, slideCount)
    contentChunks.baseline = slideCount
    contentChunks.shared = 1
  } else {
    const manifests = Object.fromEntries(variants.map(variant => [variant, JSON.parse(readFileSync(join(output, `${variant}-chunks.json`), 'utf8'))]))
    for (const variant of variants) contentChunks[variant] = manifests[variant].filter((chunk: { slides: string[] }) => chunk.slides.length).length
    assert.equal(contentChunks.baseline, slideCount)
    assert.equal(contentChunks.merged, 1)
  }
  const sites = Object.fromEntries(await Promise.all(variants.map(async variant => [variant, await serve(siteDirs[variant])])) ) as Record<Variant, Awaited<ReturnType<typeof serve>>>
  const browser = await chromium.launch({ headless: true })
  try {
    if (!existsSync(externalHar)) {
      const context = await browser.newContext({ recordHar: { path: externalHar, urlFilter: /^https:\/\//, mode: 'minimal', content: 'embed' } })
      try {
        const page = await context.newPage()
        const errors = errorsOn(page)
        await page.goto(sites.baseline.url, { waitUntil: 'networkidle' })
        await page.waitForTimeout(4500)
        for (let no = 1; no <= slideCount; no++) await turn(page, no)
        await page.waitForLoadState('networkidle')
        assert.deepEqual(errors, [])
      } finally { await context.close() }
      console.log('Captured external dependencies for identical replay in both variants')
    }
    const samples: Record<Variant, Awaited<ReturnType<typeof trial>>[]> = { baseline: [], merged: [], shared: [] }
    // One unrecorded warm-up per variant; recorded trials always use fresh contexts.
    for (const variant of variants) await trial(browser, sites[variant].url)
    for (let i = 0; i < runs; i++) {
      for (const variant of i % 2 ? [...variants].reverse() : variants) {
        samples[variant].push(await trial(browser, sites[variant].url))
        console.log(`trial ${i + 1}/${runs} ${variant}`, samples[variant].at(-1))
        writeFileSync(join(output, 'samples.json'), JSON.stringify(samples, null, 2))
      }
    }
    const validation = await validate(browser, Object.fromEntries(variants.map(variant => [variant, sites[variant].url])) as Record<Variant, string>, slideCount)
    const summary = Object.fromEntries(variants.map(variant => [variant, Object.fromEntries(Object.keys(samples[variant][0]).map(key => {
      const values = samples[variant].map(sample => sample[key as keyof typeof sample]).filter((value): value is number => typeof value === 'number').sort((a, b) => a - b)
      const middle = Math.floor(values.length / 2)
      return [key, { median: values.length % 2 ? values[middle] : (values[middle - 1] + values[middle]) / 2, min: values[0], max: values.at(-1) }]
    }))]))
    const result = { architecture: sharedPlayer ? 'shared-player' : 'single-deck', id, slideCount, runs, browser: browser.version(), platform: `${process.platform}/${process.arch}`, sourceSha256: createHash('sha256').update(readFileSync(join(source, 'slides.md'))).digest('hex'), conditions: { latencyMs: 40, bandwidthMbps: 10, cpuSlowdown: 4, compression: 'gzip', cache: 'fresh context per trial; HAR routing disables HTTP cache; loaded module/DOM state retained for warm turns', externalDependencies: 'HTTPS dependencies replayed from one HAR, excluding their network latency from comparison', firstSlide: 'slide DOM + fonts + two animation frames; transition completion excluded' }, artifacts: Object.fromEntries(variants.map(variant => [variant, { ...stats(siteDirs[variant]), contentChunks: contentChunks[variant] }])), summary, validation }
    writeFileSync(join(output, 'results.json'), JSON.stringify(result, null, 2) + '\n')
    console.log(JSON.stringify(result, null, 2))
  } finally { await browser.close(); await Promise.all(variants.map(variant => sites[variant].close())) }
}
main().catch(error => { console.error(error); process.exitCode = 1 })
