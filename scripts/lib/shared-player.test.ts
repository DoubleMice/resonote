import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'
import { chromium } from 'playwright-chromium'
import { buildSharedPlayer } from './shared-player.ts'
import { startStaticServer } from './static-server.ts'

const repository = process.cwd()

test('shared player isolates content, local numbering and config under a deployment subpath', { timeout: 60_000 }, async () => {
  mkdirSync(join(repository, 'logs'), { recursive: true })
  const root = mkdtempSync(join(repository, 'logs/player-test-'))
  try {
    mkdirSync(join(root, 'episodes/_templates'), { recursive: true })
    writeFileSync(join(root, 'episodes/_templates/style.css'), '')
    for (const [id, ratio] of [['one', '4/3'], ['two', '16/9'], ['static', '16/9']]) {
      mkdirSync(join(root, 'episodes', id), { recursive: true })
      const diagram = ['two', 'static'].includes(id) ? ['```mermaid', 'graph LR; A-->B', '```'].join('\n') : ''
      writeFileSync(join(root, 'episodes', id, 'slides.md'), `---
theme: academic
${id === 'static' ? 'diagramMode: static' : 'addons: [slidev-addon-excalidraw]'}
title: "${id} & title"
aspectRatio: ${ratio}
transition: none
fonts:
  provider: none
---
# Cover ${id}

Local {{ $page }} / {{ $nav.total }}

---

# Second ${id}

Local {{ $page }} / {{ $nav.total }}

${diagram}

<!-- Notes for ${id} -->
`)
    }
    const output = join(root, 'build/dist')
    await buildSharedPlayer(root, ['one', 'two', 'static'], output, '/preview/')
    const manifest = JSON.parse(readFileSync(join(output, 'player/manifest.json'), 'utf8'))
    assert.deepEqual(Object.keys(manifest.episodes), ['one', 'two', 'static'])
    const { server, origin } = await startStaticServer(output, '/preview/')
    const browser = await chromium.launch({ headless: true })
    try {
      for (const id of ['one', 'two', 'static']) {
        const page = await browser.newPage()
        const errors: string[] = []
        const requested = new Set<string>()
        const mermaidRequests: string[] = []
        page.on('pageerror', error => { if (!error.message.includes('Wake Lock')) errors.push(error.message) })
        page.on('request', request => {
          const path = new URL(request.url()).pathname
          if (path.includes('/assets/episodes/') && path.endsWith('.js')) requested.add(path)
          if (path.includes('player-mermaid') && path.endsWith('.js')) mermaidRequests.push(path)
        })
        await page.goto(`${origin}/preview/episodes/${id}/#/1`)
        const first = page.locator('.slidev-page[data-slidev-no="1"] .slidev-layout')
        await first.waitFor({ state: 'visible' })
        assert.match(await first.innerText(), new RegExp(`Cover ${id}[\\s\\S]*Local 1 / 2`))
        assert.ok((await first.getAttribute('class'))?.includes('cover'), 'each episode starts with its own cover')
        assert.equal(await page.title(), `${id} & title - Slidev`)
        const box = await first.boundingBox()
        assert.ok(box && Math.abs(box.width / box.height - (id === 'one' ? 4 / 3 : 16 / 9)) < 0.01)
        await page.keyboard.press('ArrowRight')
        await page.waitForURL(url => url.hash === '#/2')
        const second = page.locator('.slidev-page[data-slidev-no="2"] .slidev-layout')
        await second.waitFor({ state: 'visible' })
        assert.match(await second.innerText(), new RegExp(`Second ${id}[\\s\\S]*Local 2 / 2`))
        if (id === 'two') await second.locator('.mermaid svg').waitFor({ state: 'visible' })
        if (id === 'static') {
          const image = second.locator('img[data-static-diagram]')
          await image.waitFor({ state: 'visible' })
          assert.ok(await image.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0))
        }
        assert.equal(mermaidRequests.length > 0, id === 'two', 'Mermaid dependencies load only for a deck using Mermaid')
        await page.reload()
        await second.waitFor({ state: 'visible' })
        await page.goto(`${origin}/preview/episodes/${id}/#/presenter/2`)
        await page.getByText(`Notes for ${id}`, { exact: true }).waitFor({ state: 'visible' })
        assert.deepEqual([...requested], [`/preview/player/${manifest.episodes[id].file}`])
        assert.deepEqual(errors, [])
        await page.close()
      }
    } finally {
      await browser.close()
      await new Promise<void>(done => server.close(() => done()))
    }
    const onePath = join(root, 'episodes/one/slides.md')
    writeFileSync(onePath, readFileSync(onePath, 'utf8').replace('Cover one', 'Updated cover one'))
    await buildSharedPlayer(root, ['one', 'two', 'static'], output, '/preview/')
    const updated = JSON.parse(readFileSync(join(output, 'player/manifest.json'), 'utf8'))
    assert.notEqual(updated.episodes.one.file, manifest.episodes.one.file)
    assert.equal(updated.episodes.two.file, manifest.episodes.two.file, 'unmodified content remains cacheable')
    assert.equal(updated.episodes.static.file, manifest.episodes.static.file, 'unchanged static diagrams remain cacheable across browser sessions')
    const runtimeFiles = (value: typeof manifest) => value.files.filter((file: string) => file.includes('player-runtime') && file.endsWith('.js'))
    assert.deepEqual(runtimeFiles(updated), runtimeFiles(manifest), 'content changes must not invalidate the shared runtime')
    // Exercise real compiler attribution, not only the orchestration's stub.
    writeFileSync(join(root, 'episodes/two/slides.md'), readFileSync(join(root, 'episodes/two/slides.md'), 'utf8') + '\n<div>\n')
    const request = join(root, 'request.json')
    writeFileSync(request, JSON.stringify({ ids: ['one', 'two', 'static'], output, base: '/preview/' }))
    const result = spawnSync(process.execPath, [join(repository, 'node_modules/tsx/dist/cli.mjs'), join(repository, 'scripts/build-player.ts'), '--request', request], { cwd: root, encoding: 'utf8', timeout: 30_000 })
    assert.equal(result.status, 1)
    assert.deepEqual(JSON.parse(readFileSync(request + '.error.json', 'utf8')).episodeIds, ['two'], result.stderr)
  } finally { rmSync(root, { recursive: true, force: true }) }
})
