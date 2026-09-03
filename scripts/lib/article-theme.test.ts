import assert from 'node:assert/strict'
import test from 'node:test'
import { applyArticleTheme } from './article-theme.ts'

const css = ':root { --ink: #182631; }'

test('adds the shared theme and home link to a semantic article', () => {
  const html = '<!doctype html><html><head></head><body><article><h1>标题</h1></article></body></html>'
  const result = applyArticleTheme(html, css)

  assert.match(result, /<style data-resonote-theme>/)
  assert.match(result, /class="resonote-home"/)
  assert.match(result, /声笺/)
  assert.match(result, /RESONOTE/)
  assert.match(result, /<article class="resonote-article">/)
  assert.match(result, /class="resonote-reading-progress"/)
  assert.match(result, /data-resonote-reader/)
  assert.match(result, /href="\.\.\/\.\.\/favicon\.svg" data-resonote-favicon/)
  assert.equal(result.match(/<article\b/g)?.length, 1)
})

test('wraps unstructured body content in an article', () => {
  const html = '<html><head></head><body><header><h1>标题</h1></header><p>正文</p></body></html>'
  const result = applyArticleTheme(html, css)

  assert.match(result, /class="resonote-home"[\s\S]*<article class="resonote-article">/)
  assert.match(result, /<article class="resonote-article">[\s\S]*<header>/)
  assert.match(result, /<\/article>[\s\S]*<\/body>/)
})

test('does not duplicate an existing theme or home link', () => {
  const html = '<html><head><style data-resonote-theme>old</style></head><body><a class="resonote-home" href="../../">声笺 Resonote</a><article><div>正文</div><h1>标题</h1></article></body></html>'
  const result = applyArticleTheme(html, css)
  const twice = applyArticleTheme(result, css)

  assert.equal(twice.match(/data-resonote-theme/g)?.length, 1)
  assert.equal(twice.match(/class="resonote-home"/g)?.length, 1)
  assert.equal(twice.match(/data-resonote-reader/g)?.length, 1)
  assert.equal(twice.match(/class="resonote-reading-progress"/g)?.length, 1)
  assert.equal(twice.match(/data-resonote-favicon/g)?.length, 1)
  assert.equal(twice.match(/class="[^"]*\bresonote-article\b[^"]*"/g)?.length, 1)
  assert.match(twice, /声笺/)
  assert.match(twice, /RESONOTE/)
})

test('marks an existing container as the single reading surface', () => {
  const html = '<html><head></head><body><div class="container existing"><h1>标题</h1></div></body></html>'
  const result = applyArticleTheme(html, css)

  assert.match(result, /class="container existing resonote-article"/)
  assert.doesNotMatch(result, /<article class="resonote-article">/)
})
