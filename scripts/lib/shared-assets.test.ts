import assert from 'node:assert/strict'
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import test from 'node:test'
import { pruneUnusedBoilerplate } from './shared-assets.ts'

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
