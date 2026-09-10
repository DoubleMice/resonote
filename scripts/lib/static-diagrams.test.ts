import assert from 'node:assert/strict'
import test from 'node:test'
import { createStaticDiagramRenderer, mermaidFences } from './static-diagrams.ts'

test('finds actual Mermaid fences without rendering fenced examples', () => {
  const example = '````markdown\n```mermaid\nA-->B\n```\n````\n'
  assert.equal(mermaidFences(example).length, 0)
  assert.equal(mermaidFences(example + '~~~mermaid\nflowchart LR\nA-->B\n~~~').length, 1)
  assert.throws(() => mermaidFences('```mermaid\nA-->B'), /unclosed/)
  assert.equal(mermaidFences('```mermaid {scale: 2}\nA-->B\n```', false).length, 1)
  assert.throws(() => mermaidFences('```mermaid {scale: 2}\nA-->B\n```'), /plain/)
})

test('static diagrams remain local and literal, with errors attributed to source lines', { timeout: 30_000 }, async () => {
  const nodeEnv = process.env.NODE_ENV
  const renderer = createStaticDiagramRenderer()
  const source = '---\ndiagramMode: static\n---\n\n```mermaid\nflowchart LR\nA["中文 {{ literal }}"]-->B["完成"]\n```\n'
  try {
    const output = await renderer.transform(source, 'episodes/example/slides.md')
    assert.equal(process.env.NODE_ENV, nodeEnv, 'renderer must not turn subsequent production builds into development builds')
    assert.doesNotMatch(output, /```mermaid/)
    assert.match(output, /data-static-diagram/)
    const svg = decodeURIComponent(output.match(/charset=utf-8,([^"]+)/)![1])
    assert.match(svg, /中文/)
    assert.match(svg, /literal/)
    assert.doesNotMatch(svg, /<foreignObject|<script|<image/)
    assert.equal(await renderer.transform(source, 'episodes/example/slides.md'), output)
    const legacy = source.replace('diagramMode: static', 'title: legacy')
    assert.equal(await renderer.transform(legacy, 'old.md'), legacy)
    await assert.rejects(renderer.transform(source.replace('flowchart LR', 'invalid-diagram-type'), 'broken.md'), /broken.md:5:/)
    await assert.rejects(renderer.transform(source.replace('flowchart LR', '%%{init: {}}%%\nflowchart LR'), 'config.md'), /configuration overrides/)
  } finally { await renderer.close() }
})
