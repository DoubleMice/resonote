// One-episode, isolated visual-notes pilot. Production sources are read-only.
// pnpm exec tsx scripts/experiment-visual-notes.ts [--runs=6] [--measure-only]
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { createServer } from 'node:http'
import { createRequire } from 'node:module'
import { cpSync, mkdirSync, readFileSync, readdirSync, realpathSync, rmSync, writeFileSync } from 'node:fs'
import { extname, join, relative, resolve } from 'node:path'
import { gzipSync } from 'node:zlib'
import { parseSync } from '@slidev/parser'
import { chromium, type Browser, type Page } from 'playwright-chromium'
import { buildSharedPlayer } from './lib/shared-player.ts'
import { pruneUnusedBoilerplate, staticAssetStats } from './lib/shared-assets.ts'

const id = '6a9edb82f03e74ee6b06a8a9' // Latest published deck on 2026-09-10: 20260908.
const referenceId = '6242033d-a14a-44e3-a622-cbfc7d3c3817' // Unchanged legacy deck keeps the shared Excalidraw adapter present.
const runs = Number(process.argv.find(arg => arg.startsWith('--runs='))?.slice(7) || 6)
assert.ok(Number.isInteger(runs) && runs > 0)
const output = resolve('logs/visual-notes', id)
const preview = join(output, 'preview')
const source = readFileSync(join('episodes', id, 'slides.md'), 'utf8')
const experimentHash = createHash('sha256').update(readFileSync(resolve('scripts/experiment-visual-notes.ts'))).update(readFileSync('episodes/_templates/style.css')).update(readFileSync(join('episodes', referenceId, 'slides.md'))).digest('hex')
const sourceHash = createHash('sha256').update(source).digest('hex')
const deck = parseSync(source, join('episodes', id, 'slides.md'))
const variants = ['baseline', 'candidate'] as const
type Variant = typeof variants[number]
const diagrams = deck.slides.flatMap((slide, i) => [...slide.content.matchAll(/<Excalidraw\b[\s\S]*?\/>/g)].map(match => ({
  slide: i + 1, tag: match[0], name: match[0].match(/drawFilePath="\.\/([^"/]+)\.excalidraw"/)![1],
})))
assert.equal(diagrams.length, 7)
const filesIn = (dir: string): string[] => readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? filesIn(join(dir, e.name)) : [join(dir, e.name)])
const note = (text: string) => `<p class="rn-note-caption">${text}</p>`
const cards = (rows: [string, string][], kind = 'cards') => `<div class="rn-note-${kind}">${rows.map(([label, desc], i) => `<div class="rn-note-card"><span class="rn-note-index">0${i + 1}</span><div><strong>${label}</strong><p>${desc}</p></div></div>`).join('')}</div>`
const html: Record<string, string> = {
  'capital-demand': cards([['融资与担保', '支撑建设投入'], ['数据中心', '形成基础设施'], ['算力供给', '转为可用服务'], ['链外真实用户付费', '检验扩张是否有真实需求']], 'steps') + note('供给扩张能否穿透到真实需求？'),
  'a100-ladder-cn': cards([['顶级训练与高难推理', '追求性能与吞吐'], ['延迟敏感推理', '按服务速度分层定价'], ['成本敏感任务', '旧卡也可能继续被使用']], 'tiers') + note('一代算力可以服务不同任务；仍需观察周期风险。'),
  'robot-wedge': cards([['特定任务先做稳定', '从一个具体使用场景开始'], ['效果可以被用户感知', '检验交付的实际价值'], ['再扩展到更多任务', '由相邻场景支撑能力泛化']], 'steps') + note('机器人从单点任务走向更多能力。'),
  'model-iteration': cards([['架构优化', '改变模型如何计算'], ['数据优化', '决定模型看见和学到什么'], ['蒸馏优化', '把能力迁移到更轻的模型']]) + note('模型迭代的三个方向；蒸馏是其中一类方法。'),
  'office-stages': cards([['辅助 · 人完成工作', '当前主要阶段'], ['替代 · 部分流程', '重新界定审核与结果责任'], ['数字员工 · 承担角色', '购买决策涉及组织和预算']], 'steps') + note('这是阶段推演，不代表后两阶段已经普遍实现。'),
}
const mermaid: Record<string, string> = {
  'task-routing': `flowchart TB
    task["任务与约束"] --> small["快速小模型"]
    task --> large["顶级大模型"]
    small --> cost["芯片、网络与电费成本"]
    large --> cost
    classDef choice fill:#edf3ef,stroke:#557461,color:#26322f
    class small,large choice`,
  'rates-scenarios': `flowchart TB
    success["AI 高度成功<br/>生产力与通缩压力"] --> rates["嘉宾推演<br/>长端利率可能下行"]
    bubble["AI 泡沫破裂<br/>资金转向国债"] --> rates
    classDef good fill:#edf3ef,stroke:#557461,color:#26322f
    classDef risk fill:#faeee8,stroke:#aa5143,color:#26322f
    class success good
    class bubble risk`,
}
const captions: Record<string, string> = {
  'task-routing': '应用公司关心的是任务效果与总拥有成本。',
  'rates-scenarios': '财政与通胀压力，是访谈所说的短期反向力量。',
}
// A single shared stylesheet for all five HTML diagrams, not seven Vue components.
const css = `
.rn-note{width:100%;max-width:440px;color:var(--resonote-ink);font-size:17px;line-height:1.45}
.rn-note p{margin:4px 0 0}.rn-note strong{font-size:18px;font-weight:650}
.rn-note-card{display:flex;align-items:center;gap:14px;padding:12px 16px;border:1px solid var(--resonote-line);border-radius:10px;background:#fffdf8}
.rn-note-card p{font-size:15px;color:var(--resonote-muted)}
.rn-note-index{font-size:13px;letter-spacing:.08em;color:var(--resonote-blue);font-weight:700}
.rn-note-cards,.rn-note-tiers{display:grid;gap:12px}
.rn-note-cards .rn-note-card{border-left:4px solid var(--resonote-blue)}
.rn-note-tiers .rn-note-card:nth-child(2){margin-left:18px;background:#f1f5f0}
.rn-note-tiers .rn-note-card:nth-child(3){margin-left:36px;background:#e5eee5}
.rn-note-steps{display:grid;gap:17px}.rn-note-steps .rn-note-card{position:relative}
.rn-note-steps .rn-note-card:not(:last-child)::after{content:'↓';position:absolute;bottom:-18px;left:24px;color:var(--resonote-blue);font-size:16px;line-height:17px}
.rn-note .rn-note-caption{font-size:14px;line-height:1.5;color:var(--resonote-muted);padding:10px 0 0;margin-top:12px;border-top:1px solid var(--resonote-line)}
.rn-note svg{display:block;width:100%;height:auto;max-height:300px}
`

async function renderMermaid(browser: Browser) {
  const { createServer: createViteServer } = await import('vite')
  const fromCli = createRequire(realpathSync('node_modules/@slidev/cli/package.json'))
  const fromSlidev = createRequire(fromCli.resolve('@slidev/client/package.json'))
  const modulePath = fromSlidev.resolve('mermaid/dist/mermaid.esm.min.mjs')
  const server = await createViteServer({ configFile: false, logLevel: 'error', server: { host: '127.0.0.1', port: 0 } })
  await server.listen()
  const page = await browser.newPage()
  try {
    await page.goto(server.resolvedUrls!.local[0])
    const result: Record<string, string> = {}
    for (const [name, text] of Object.entries(mermaid)) {
      result[name] = await page.evaluate(async ({ text, name, modulePath }) => {
        const { default: renderer } = await import(/* @vite-ignore */ '/@fs/' + modulePath)
        renderer.initialize({ startOnLoad: false, htmlLabels: false, theme: 'base', themeVariables: {
          fontFamily: 'PingFang SC, Microsoft YaHei, sans-serif', fontSize: '20px', primaryColor: '#fffdf8', primaryTextColor: '#26322f', primaryBorderColor: '#557461', lineColor: '#68736f',
        }, flowchart: { curve: 'linear', nodeSpacing: 22, rankSpacing: 30, padding: 16 } })
        return (await renderer.render('rn-' + name, text)).svg
      }, { text, name, modulePath })
      assert.ok(!/<foreignObject|<script|(?:href|url\()\s*["']?https?:/.test(result[name]))
      writeFileSync(join(output, name + '.mmd'), text + '\n')
      writeFileSync(join(output, name + '.svg'), result[name])
    }
    return result
  } finally { await page.close(); await server.close() }
}

async function build(browser: Browser) {
  const svgs = await renderMermaid(browser)
  let candidate = source
  for (const diagram of diagrams) {
    const content = html[diagram.name] || svgs[diagram.name] + note(captions[diagram.name])
    const replacement = `<div class="rn-note" data-note-diagram="${diagram.name}" role="group" aria-label="${deck.slides[diagram.slide - 1].content.match(/^# (.+)/m)![1]}">${content}</div>`
    candidate = candidate.replace(diagram.tag, replacement)
  }
  const next = parseSync(candidate, join('episodes', id, 'slides.md'))
  assert.equal(next.slides.length, deck.slides.length)
  for (let i = 0; i < deck.slides.length; i++) {
    assert.deepEqual(next.slides[i].frontmatter, deck.slides[i].frontmatter)
    if (!diagrams.some(d => d.slide === i + 1)) assert.equal(next.slides[i].content, deck.slides[i].content)
    else assert.equal(next.slides[i].content.split('::right::')[0], deck.slides[i].content.split('::right::')[0])
  }
  const originals = new Map(filesIn('episodes/_templates/public').map(file => [file.split('/').at(-1)!, readFileSync(file)]))
  const statistics: Record<string, unknown> = {}
  for (const variant of variants) {
    const root = join(output, variant, 'source')
    rmSync(root, { recursive: true, force: true })
    mkdirSync(join(root, 'episodes/_templates'), { recursive: true })
    cpSync(join('episodes', id), join(root, 'episodes', id), { recursive: true })
    cpSync(join('episodes', referenceId), join(root, 'episodes', referenceId), { recursive: true })
    writeFileSync(join(root, 'episodes', id, 'slides.md'), variant === 'baseline' ? source : candidate)
    writeFileSync(join(root, 'episodes/_templates/style.css'), readFileSync('episodes/_templates/style.css', 'utf8') + (variant === 'candidate' ? css : ''))
    if (variant === 'candidate') for (const d of diagrams) rmSync(join(root, 'episodes', id, 'public', d.name + '.excalidraw'))
    const dist = join(preview, variant)
    await buildSharedPlayer(root, [id, referenceId], dist, `/${variant}/`)
    const manifest = JSON.parse(readFileSync(join(dist, 'player/manifest.json'), 'utf8'))
    const content = readFileSync(join(dist, 'player', manifest.episodes[id].file))
    const pruning = pruneUnusedBoilerplate(join(dist, 'episodes', id), originals, content.toString())
    const referenceContent = readFileSync(join(dist, 'player', manifest.episodes[referenceId].file))
    pruneUnusedBoilerplate(join(dist, 'episodes', referenceId), originals, referenceContent.toString())
    const chunks = JSON.parse(readFileSync(join(preview, 'chunks.json'), 'utf8'))
    if (variant === 'candidate') {
      const contentChunk = chunks.find((c: any) => c.file === manifest.episodes[id].file)
      assert.ok(!contentChunk.modules.some((m: string) => /node_modules\/(?:mermaid|slidev-addon-excalidraw)\//.test(m)))
      assert.ok(!chunks.some((c: any) => c.modules.some((m: string) => /node_modules\/mermaid\//.test(m))), 'Mermaid stays build-time only')
    }
    cpSync(join(preview, 'chunks.json'), join(output, variant, 'chunks.json'))
    statistics[variant] = { ...staticAssetStats(dist), jsFiles: filesIn(dist).filter(f => f.endsWith('.js')).length,
      episodeDiagramFiles: filesIn(join(dist, 'episodes', id)).filter(f => f.endsWith('.excalidraw')).length,
      episodeOwnedFiles: filesIn(join(dist, 'episodes', id)).length + 1 + manifest.episodes[id].css.length,
      contentBytes: content.length, contentGzipBytes: gzipSync(content).length, slides: manifest.episodes[id].slides, pruning }
  }
  rmSync(join(preview, 'workspace'), { recursive: true, force: true })
  rmSync(join(preview, 'chunks.json'))
  // Build working files are not part of either publication.
  writeFileSync(join(output, 'build.json'), JSON.stringify({ sourceHash, experimentHash, referenceId, diagrams, statistics }, null, 2))
  writeFileSync(join(preview, 'index.html'), `<!doctype html><meta charset="utf-8"><title>最新一集图示试验</title><style>body{font:18px system-ui;max-width:900px;margin:50px auto;line-height:1.8;background:#fbf8f1;color:#26322f}a{color:#355f58}table{width:100%;border-collapse:collapse}td,th{padding:10px;border-bottom:1px solid #d7cec0;text-align:left}</style><h1>最新一集：视觉笔记试验</h1><p>2026-09-08 · 闲聊8月：AI 和机器人改变世界，这钱你出？<br>相同的 ${deck.slides.length} 页与正文，替换 7 张图。</p><p><a href="/baseline/episodes/${id}/#/1">打开原版</a>　<a href="/candidate/episodes/${id}/#/1">打开试验版</a></p><table><tr><th>图示</th><th>原版</th><th>试验版</th></tr>${diagrams.map(d => `<tr><td>${deck.slides[d.slide - 1].content.match(/^# (.+)/m)![1]}</td><td><a href="/baseline/episodes/${id}/#/${d.slide}">第 ${d.slide} 页</a></td><td><a href="/candidate/episodes/${id}/#/${d.slide}">${html[d.name] ? 'HTML' : '静态 Mermaid'}</a></td></tr>`).join('')}</table>`)
}

async function serve() {
  const types: Record<string, string> = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.excalidraw': 'application/json', '.svg': 'image/svg+xml' }
  const assets = new Map(filesIn(preview).map(file => ['/' + relative(preview, file), { data: gzipSync(readFileSync(file)), type: types[extname(file)] || 'application/octet-stream' }]))
  const server = createServer((req, res) => {
    let path = new URL(req.url!, 'http://localhost').pathname
    if (path.endsWith('/')) path += 'index.html'
    const asset = assets.get(decodeURIComponent(path))
    if (!asset) { res.writeHead(404); res.end(); return }
    res.writeHead(200, { 'Content-Type': asset.type, 'Content-Encoding': 'gzip', 'Content-Length': asset.data.length }); res.end(asset.data)
  })
  await new Promise<void>(done => server.listen(0, '127.0.0.1', done))
  const address = server.address(); assert.ok(address && typeof address !== 'string')
  return { origin: `http://127.0.0.1:${address.port}`, close: () => new Promise<void>(done => server.close(() => done())) }
}
const fontUrls = /^https:\/\/fonts\.(googleapis|gstatic)\.com\//
const fontsHar = join(output, 'fonts.har')
async function ready(page: Page, slide: number, variant: Variant) {
  const layout = page.locator(`.slidev-page[data-slidev-no="${slide}"] .slidev-layout`)
  await layout.waitFor({ state: 'visible' })
  if (diagrams.some(d => d.slide === slide)) await layout.locator(variant === 'baseline' ? 'svg' : '[data-note-diagram]').waitFor({ state: 'visible' })
  await page.evaluate(async () => { await document.fonts.ready; await new Promise<void>(done => requestAnimationFrame(() => requestAnimationFrame(() => done()))) })
  return layout
}
async function jump(page: Page, slide: number, variant: Variant) {
  const start = await page.evaluate(n => { const now = performance.now(); location.hash = `#/${n}`; return now }, slide)
  await ready(page, slide, variant)
  return await page.evaluate(() => performance.now()) - start
}
const median = (a: number[]) => { const b = a.toSorted((a, b) => a - b); return b.length ? (b[Math.floor((b.length - 1) / 2)] + b[Math.floor(b.length / 2)]) / 2 : null }
async function measure(browser: Browser, origin: string) {
  const samples: Record<Variant, any[]> = { baseline: [], candidate: [] }
  const failures: any[] = []
  for (let i = 0; i < runs; i++) for (const variant of i % 2 ? [...variants].reverse() : variants) {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } })
    try {
      await context.routeFromHAR(fontsHar, { url: fontUrls, notFound: 'abort' })
      const page = await context.newPage()
      const errors: string[] = [], external = new Set<string>()
      page.on('pageerror', e => { if (!e.message.includes('Wake Lock')) errors.push(e.message) })
      page.on('request', r => { if (new URL(r.url()).origin !== origin) external.add(r.url()) })
      const cdp = await context.newCDPSession(page)
      await cdp.send('Network.enable')
      await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 40, downloadThroughput: 1_250_000, uploadThroughput: 1_250_000 })
      await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 })
      await page.goto(`${origin}/${variant}/episodes/${id}/#/1`, { waitUntil: 'domcontentloaded' })
      await ready(page, 1, variant)
      const firstMs = await page.evaluate(() => performance.now())
      const plainFlipMs = await jump(page, 2, variant)
      const firstDiagramMs = await jump(page, diagrams[0].slide, variant)
      const later = []
      for (const d of diagrams.slice(1)) later.push(await jump(page, d.slide, variant))
      const revisitMs = await jump(page, diagrams[0].slide, variant)
      const sameOriginGzipBytes = await page.evaluate(() => performance.getEntriesByType('resource').filter(r => new URL(r.name).origin === location.origin).reduce((n, r) => n + (r as PerformanceResourceTiming).encodedBodySize, 0))
      assert.deepEqual(errors, [])
      const sample = { firstMs, plainFlipMs, firstDiagramMs, laterDiagramMs: median(later), later, revisitMs, sameOriginGzipBytes, externalRequests: external.size, externalUrls: [...external] }
      samples[variant].push(sample)
      console.log('trial', i + 1, variant, JSON.stringify(sample))
    } catch (error) { failures.push({ run: i + 1, variant, error: String(error) }); console.log('failed trial', i + 1, variant, String(error)) }
    finally { await context.close() }
    writeFileSync(join(output, 'samples.json'), JSON.stringify({ samples, failures }, null, 2))
  }
  const summary = Object.fromEntries(variants.map(v => [v, Object.fromEntries(['firstMs', 'plainFlipMs', 'firstDiagramMs', 'laterDiagramMs', 'revisitMs', 'sameOriginGzipBytes', 'externalRequests'].map(key => [key, median(samples[v].map(s => s[key]))]))]))
  return { runs, browser: browser.version(), conditions: 'Alternating pairs; fresh contexts; local gzip HTTP, 40ms/10Mbps, CPU4x. Shared Google fonts replayed from HAR (font network latency excluded); real Excalidraw CDN HTTPS. HAR routing disables browser HTTP cache. Successful-run medians; local connection only, not a population estimate. Ready includes two animation frames, not completion of slide transition animation.', samples, failures, summary }
}

async function audit(browser: Browser, origin: string) {
  const screenshots: Record<string, Buffer> = {}, changed: number[] = [], overflow: any[] = []
  for (const variant of variants) {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, ...(variant === 'baseline' ? { recordHar: { path: fontsHar, urlFilter: fontUrls, mode: 'minimal' as const, content: 'embed' as const } } : {}) })
    if (variant === 'candidate') {
      await context.route(/^https?:/, route => new URL(route.request().url()).origin === origin ? route.continue() : route.abort())
      await context.routeFromHAR(fontsHar, { url: fontUrls, notFound: 'abort' })
    }
    const page = await context.newPage()
    const errors: string[] = [], external = new Set<string>()
    page.on('pageerror', e => { if (!e.message.includes('Wake Lock')) errors.push(e.message) })
    page.on('request', r => { if (new URL(r.url()).origin !== origin) external.add(r.url()) })
    try {
      await page.goto(`${origin}/${variant}/episodes/${id}/#/1`)
      for (let slide = 1; slide <= deck.slides.length; slide++) {
        await page.evaluate(n => { location.hash = `#/${n}` }, slide)
        const layout = await ready(page, slide, variant)
        await page.waitForTimeout(350) // Screenshot after Slidev's transition.
        const shot = await layout.screenshot()
        if (variant === 'baseline') screenshots[String(slide)] = shot
        else if (!shot.equals(screenshots[String(slide)])) changed.push(slide)
        if (diagrams.some(d => d.slide === slide)) writeFileSync(join(output, `${variant}-${slide}.png`), shot)
        if (variant === 'candidate') {
          const issues = await layout.evaluate(el => {
            const box = el.getBoundingClientRect()
            return [...el.querySelectorAll('h1, .rn-note-card, .rn-note-caption, .rn-note svg, .rn-note svg text')].flatMap(child => {
              const r = child.getBoundingClientRect()
              return r.right > box.right + 2 || r.bottom > box.bottom + 2 || r.left < box.left - 2 || r.top < box.top - 2 ? [{ text: child.textContent, rect: r.toJSON() }] : []
            })
          })
          if (issues.length) overflow.push({ slide, issues })
        }
      }
      const resources = await page.evaluate(() => performance.getEntriesByType('resource').map(r => r.name))
      assert.ok(!resources.some(url => url.includes('/assets/episodes/' + referenceId)), 'opening the pilot must not fetch the legacy episode content')
      if (variant === 'candidate') {
        assert.ok(![...external].some(url => /esm\.sh|antv|mermaid/i.test(url)))
        await page.setViewportSize({ width: 390, height: 844 })
        for (const d of diagrams) { await jump(page, d.slide, variant); await page.waitForTimeout(350); await page.screenshot({ path: join(output, `mobile-${d.slide}.png`) }) }
        await page.reload(); await ready(page, diagrams.at(-1)!.slide, variant)
        await page.goto(`${origin}/candidate/episodes/${id}/#/presenter/5`)
        await page.locator('.slidev-presenter').waitFor({ state: 'visible' })
      }
      assert.deepEqual(errors, [])
    } finally { await context.close() }
  }
  assert.deepEqual(overflow, [])
  assert.deepEqual(changed.filter(n => !diagrams.some(d => d.slide === n)), [], 'non-diagram slides must remain visually identical')
  return { slides: deck.slides.length, changed, overflow }
}

async function main() {
  mkdirSync(output, { recursive: true })
  const browser = await chromium.launch()
  try {
    if (!process.argv.includes('--measure-only')) await build(browser)
    const built = JSON.parse(readFileSync(join(output, 'build.json'), 'utf8'))
    assert.equal(built.sourceHash, sourceHash)
    assert.equal(built.experimentHash, experimentHash, 'experiment or stylesheet changed; rebuild before measuring')
    const server = await serve()
    try {
      let validation
      if (!process.argv.includes('--measure-only')) { validation = await audit(browser, server.origin); writeFileSync(join(output, 'audit.json'), JSON.stringify(validation, null, 2)) }
      else validation = JSON.parse(readFileSync(join(output, 'audit.json'), 'utf8'))
      const result = { ...JSON.parse(readFileSync(join(output, 'build.json'), 'utf8')), validation, ...await measure(browser, server.origin) }
      writeFileSync(join(output, 'results.json'), JSON.stringify(result, null, 2))
      console.log(JSON.stringify({ statistics: result.statistics, validation, summary: result.summary, failures: result.failures }, null, 2))
    } finally { await server.close() }
  } finally { await browser.close() }

}
main().catch(error => { console.error(error); process.exitCode = 1 })
