import assert from 'node:assert/strict'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import test from 'node:test'
import { pruneUnusedBoilerplate, shareEpisodeAssets } from './shared-assets.ts'

for (const base of ['/', '/resonote/']) {
  test(`shared assets preserve static and Vite preload URLs under ${base}`, () => {
    const root = mkdtempSync(join(tmpdir(), 'resonote-assets-'))
    const put = (file: string, text: string) => {
      mkdirSync(dirname(join(root, file)), { recursive: true })
      writeFileSync(join(root, file), text)
    }
    try {
      for (const id of ['one', 'two']) {
        const ep = `episodes/${id}`
        put(`${ep}/assets/font.woff2`, 'identical font')
        put(`${ep}/assets/logo.png`, 'identical logo')
        put(`${ep}/assets/style.css`, `@font-face{src:url(${base}${ep}/assets/font.woff2?v=1)}.x{color:red}`)
        put(`${ep}/assets/relative.css`, '.x{background:url(../public/local.svg)}')
        put(`${ep}/assets/import.css`, '@import "./style.css";')
        put(`${ep}/assets/unique.css`, `.x{--episode:${id}}`)
        put(`${ep}/public/keep.png`, 'identical public image')
        put(`${ep}/index.html`, `<link href="${base}${ep}/assets/style.css"><img src="./assets/logo.png#fragment"><script>const next = new URL(window.location.href)</script>`)
        put(`${ep}/assets/modules/entry.js`, `const deps=["assets/style.css"];const logo=\`${base}${ep}/assets/logo.png\`;import "../style.css";const next = new URL(window.location.href);`)
      }
      const result = shareEpisodeAssets(root, base)
      assert.equal(result.beforeFiles - result.afterFiles, 3)
      assert.equal(result.sharedFiles, 3)
      const shared = readdirSync(join(root, 'shared-assets'))
      const css = shared.find(file => file.endsWith('.css'))!
      const font = shared.find(file => file.endsWith('.woff2'))!
      const png = shared.find(file => file.endsWith('.png'))!
      assert.ok(readFileSync(join(root, 'shared-assets', css), 'utf8').includes(`${base}shared-assets/${font}?v=1`))
      for (const id of ['one', 'two']) {
        const ep = `episodes/${id}`
        const html = readFileSync(join(root, ep, 'index.html'), 'utf8')
        assert.ok(html.includes(`href="${base}shared-assets/${css}"`))
        assert.ok(html.includes(`src="${base}shared-assets/${png}#fragment"`))
        assert.ok(html.includes('new URL(window.location.href)'))
        const js = readFileSync(join(root, ep, 'assets/modules/entry.js'), 'utf8')
        assert.ok(js.includes('new URL(window.location.href)'))
        assert.ok(js.includes(`"../../shared-assets/${css}"`))
        // Model the real Slidev preload helper's base + dependency concatenation.
        assert.equal(new URL(`${base}${ep}/../../shared-assets/${css}`, 'https://example.test').pathname, `${base}shared-assets/${css}`)
        assert.ok(js.includes(`import "${base}shared-assets/${css}"`))
        assert.ok(existsSync(join(root, ep, 'assets/relative.css')))
        assert.ok(existsSync(join(root, ep, 'assets/unique.css')))
        assert.ok(existsSync(join(root, ep, 'public/keep.png')))
        assert.ok(readFileSync(join(root, ep, 'assets/import.css'), 'utf8').includes(`${base}shared-assets/${css}`))
        assert.equal(existsSync(join(root, ep, 'assets/font.woff2')), false)
      }
      const again = shareEpisodeAssets(root, base)
      assert.equal(again.beforeFiles, again.afterFiles)
      assert.equal(again.beforeBytes, again.afterBytes)
    } finally { rmSync(root, { recursive: true, force: true }) }
  })
}

test('only identical bytes of the same asset type are shared', () => {
  const root = mkdtempSync(join(tmpdir(), 'resonote-assets-'))
  try {
    for (const id of ['one', 'two']) {
      const dir = join(root, 'episodes', id, 'assets')
      mkdirSync(dir, { recursive: true })
      writeFileSync(join(dir, 'same-name.woff2'), id)
      writeFileSync(join(dir, `different-name-${id}.png`), 'same bytes')
      writeFileSync(join(dir, 'module.js'), 'export const relative = import.meta.url')
      writeFileSync(join(dir, 'fragment.css'), '.x{filter:url(#filter)}')
      writeFileSync(join(dir, 'mapped.css'), '.x{}/*# sourceMappingURL=style.css.map */')
      writeFileSync(join(dir, 'image-set.css'), '.x{background:image-set("local.png" 1x)}')
    }
    const stats = shareEpisodeAssets(root)
    assert.equal(stats.sharedFiles, 1)
    assert.equal(stats.beforeFiles - stats.afterFiles, 1)
    for (const id of ['one', 'two']) {
      for (const file of ['same-name.woff2', 'module.js', 'fragment.css', 'mapped.css', 'image-set.css']) {
        assert.ok(existsSync(join(root, 'episodes', id, 'assets', file)))
      }
    }
  } finally { rmSync(root, { recursive: true, force: true }) }
})

test('assets with unresolved dynamic references stay local', () => {
  const root = mkdtempSync(join(tmpdir(), 'resonote-assets-'))
  try {
    for (const id of ['one', 'two']) {
      const dir = join(root, 'episodes', id, 'assets')
      mkdirSync(dir, { recursive: true })
      writeFileSync(join(dir, 'font.woff2'), 'same bytes')
      writeFileSync(join(dir, 'module.js'), 'const url = `${base}/assets/font.woff2`')
    }
    const stats = shareEpisodeAssets(root)
    assert.equal(stats.sharedFiles, 0)
    assert.equal(stats.beforeFiles, stats.afterFiles)
  } finally { rmSync(root, { recursive: true, force: true }) }
})

test('boilerplate cleanup preserves referenced, customized and unrelated resources', () => {
  const root = mkdtempSync(join(tmpdir(), 'resonote-prune-'))
  const put = (file: string, text: string) => {
    mkdirSync(dirname(join(root, file)), { recursive: true })
    writeFileSync(join(root, file), text)
  }
  try {
    const originals = new Map(['unused.excalidraw', 'used.excalidraw', 'composed.excalidraw', 'custom.excalidraw', 'presentation.jpg', 'box.svg']
      .map(name => [name, Buffer.from('original')]))
    for (const name of ['unused.excalidraw', 'used.excalidraw', 'composed.excalidraw']) put(name, 'original')
    put('custom.excalidraw', 'user changes')
    put('other.excalidraw', 'original')
    put('assets/unused.excalidraw', 'original')
    put('theme/nested/presentation.jpg', 'original')
    put('theme/nested/box.svg', 'original')
    put('index.html', '<img src="theme/nested/box.svg">')
    put('assets/entry.js', 'const name = "composed" + ".excalidraw"; fetch("./used.excalidraw")')
    assert.deepEqual(pruneUnusedBoilerplate(root, originals), { removedFiles: 2, removedBytes: 16 })
    for (const file of ['used.excalidraw', 'composed.excalidraw', 'custom.excalidraw', 'other.excalidraw', 'assets/unused.excalidraw', 'theme/nested/box.svg']) {
      assert.ok(existsSync(join(root, file)), file)
    }
    assert.equal(existsSync(join(root, 'unused.excalidraw')), false)
    assert.equal(existsSync(join(root, 'theme/nested/presentation.jpg')), false)
    assert.equal(pruneUnusedBoilerplate(root, originals).removedFiles, 0)
  } finally { rmSync(root, { recursive: true, force: true }) }
})

test('shared-player cleanup keeps diagrams referenced by content outside the episode directory', () => {
  const root = mkdtempSync(join(tmpdir(), 'resonote-prune-'))
  try {
    writeFileSync(join(root, 'diagram.excalidraw'), 'original')
    const originals = new Map([['diagram.excalidraw', Buffer.from('original')]])
    assert.equal(pruneUnusedBoilerplate(root, originals, '<Excalidraw drawFilePath="./diagram.excalidraw" />').removedFiles, 0)
    assert.ok(existsSync(join(root, 'diagram.excalidraw')))
  } finally { rmSync(root, { recursive: true, force: true }) }
})
