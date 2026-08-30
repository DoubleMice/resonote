import assert from 'node:assert/strict'
import test from 'node:test'
import { applyArticleTheme } from './article-theme.ts'

const css = ':root { --ink: #182631; }'

test('adds the shared theme and home link to a semantic article', () => {
  const html = '<!doctype html><html><head></head><body><article><h1>标题</h1></article></body></html>'
  const result = applyArticleTheme(html, css)

  assert.match(result, /<style data-poddeck-theme>/)
  assert.match(result, /class="poddeck-home"/)
  assert.match(result, /声笺/)
  assert.match(result, /RESONOTE/)
  assert.match(result, /<article class="poddeck-article">/)
  assert.match(result, /class="poddeck-reading-progress"/)
  assert.match(result, /data-poddeck-reader/)
  assert.equal(result.match(/<article\b/g)?.length, 1)
})

test('wraps legacy body content in an article', () => {
  const html = '<html><head></head><body><header><h1>标题</h1></header><p>正文</p></body></html>'
  const result = applyArticleTheme(html, css)

  assert.match(result, /class="poddeck-home"[\s\S]*<article class="poddeck-article">/)
  assert.match(result, /<article class="poddeck-article">[\s\S]*<header>/)
  assert.match(result, /<\/article>[\s\S]*<\/body>/)
})

test('does not duplicate an existing theme or home link', () => {
  const html = '<html><head><style data-poddeck-theme>old</style></head><body><a class="poddeck-home" href="../../">PodDeck</a><article><div>PODDECK</div><h1>标题</h1></article></body></html>'
  const result = applyArticleTheme(html, css)
  const twice = applyArticleTheme(result, css)

  assert.equal(twice.match(/data-poddeck-theme/g)?.length, 1)
  assert.equal(twice.match(/class="poddeck-home"/g)?.length, 1)
  assert.equal(twice.match(/data-poddeck-reader/g)?.length, 1)
  assert.equal(twice.match(/class="poddeck-reading-progress"/g)?.length, 1)
  assert.equal(twice.match(/class="[^"]*\bpoddeck-article\b[^"]*"/g)?.length, 1)
  assert.doesNotMatch(twice, />PodDeck</)
  assert.doesNotMatch(twice, />PODDECK</)
  assert.match(twice, /声笺/)
})

test('marks a legacy container as the single reading surface', () => {
  const html = '<html><head></head><body><div class="container legacy"><h1>标题</h1></div></body></html>'
  const result = applyArticleTheme(html, css)

  assert.match(result, /class="container legacy poddeck-article"/)
  assert.doesNotMatch(result, /<article class="poddeck-article">/)
})
