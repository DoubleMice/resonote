import assert from 'node:assert/strict'
import test from 'node:test'
import { applySiteFavicon } from './site-favicon.ts'

test('replaces the Slidev favicon with the Resonote site icon', () => {
  const html = '<html><head><link rel="icon" href="https://cdn.example/slidev.png"></head><body></body></html>'
  const result = applySiteFavicon(html, '/resonote/favicon.svg')

  assert.match(result, /href="\/resonote\/favicon\.svg" data-resonote-favicon/)
  assert.doesNotMatch(result, /slidev\.png/)
})

test('adds the site favicon to an article without an icon', () => {
  const html = '<html><head><title>文章</title></head><body></body></html>'
  const result = applySiteFavicon(html, '/resonote/favicon.svg')

  assert.match(result, /<title>文章<\/title>[\s\S]*data-resonote-favicon[\s\S]*<\/head>/)
})

test('keeps one favicon when applied repeatedly', () => {
  const html = '<html><head></head><body></body></html>'
  const once = applySiteFavicon(html, '/favicon.svg')
  const twice = applySiteFavicon(once, '/favicon.svg')

  assert.equal(twice.match(/data-resonote-favicon/g)?.length, 1)
})
