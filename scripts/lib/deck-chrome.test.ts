import assert from 'node:assert/strict'
import test from 'node:test'
import { injectDeckChrome } from './deck-chrome.ts'

test('injects one viewport-level home and adjacent-episode navigation', () => {
  const html = '<!doctype html><html><head></head><body><main>slides</main></body></html>'
  const result = injectDeckChrome(html, {
    prev: { href: '../older/', title: '更早一期' },
    next: { href: '../newer/', title: '更新一期' },
  }, '/')

  assert.match(result, /<nav class="rn-deck-nav"/)
  assert.match(result, /class="rn-deck-btn rn-deck-home" href="\/"/)
  assert.match(result, /href="\.\.\/older\/"[^>]*aria-label="上一篇：更早一期"/)
  assert.match(result, /href="\.\.\/newer\/"[^>]*aria-label="下一篇：更新一期"/)
  assert.equal(result.match(/data-resonote-nav/g)?.length, 1)
})

test('keeps the canonical home link when an episode has no neighbors', () => {
  const result = injectDeckChrome('<body></body>', { prev: null, next: null }, '/resonote/')

  assert.match(result, /href="\/resonote\/"/)
  assert.doesNotMatch(result, /上一篇：|下一篇：/)
})

test('does not inject chrome into incomplete HTML', () => {
  assert.equal(injectDeckChrome('<main>slides</main>', { prev: null, next: null }), '<main>slides</main>')
})
