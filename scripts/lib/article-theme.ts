import { applySiteFavicon } from './site-favicon.ts'

export const articleHomeLink = `<a class="resonote-home" href="../../" aria-label="返回声笺 Resonote 首页">
  <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M11.75 4.75 6.5 10l5.25 5.25M7 10h7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
  <span class="resonote-home-lockup"><strong>声笺</strong><small>RESONOTE</small></span>
</a>`

export const articleReaderChrome = `<div class="resonote-reading-progress" aria-hidden="true"><span></span></div>
<button class="resonote-to-top" type="button" aria-label="返回文章顶部" title="返回顶部">
  <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5.5 11.5 4.5-4.5 4.5 4.5M10 7v8"/></svg>
</button>`

export const articleReaderScript = `<script data-resonote-reader>
(() => {
  if (window.__resonoteReaderReady) return
  window.__resonoteReaderReady = true

  const progress = document.querySelector('.resonote-reading-progress span')
  const topButton = document.querySelector('.resonote-to-top')
  const article = document.querySelector('.resonote-article')

  const updateProgress = () => {
    const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
    const ratio = Math.min(Math.max(window.scrollY / scrollable, 0), 1)
    if (progress) progress.style.transform = 'scaleX(' + ratio + ')'
    if (topButton) topButton.classList.toggle('is-visible', window.scrollY > 640)
  }

  window.addEventListener('scroll', updateProgress, { passive: true })
  window.addEventListener('resize', updateProgress)
  updateProgress()

  topButton?.addEventListener('click', () => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
  })

  if (!article) return
  const headings = [...article.querySelectorAll('h2')]
  if (headings.length < 3) return

  const toc = document.createElement('nav')
  toc.className = 'resonote-toc'
  toc.setAttribute('aria-label', '文章目录')
  const title = document.createElement('div')
  title.className = 'resonote-toc-title'
  title.textContent = '文章目录'
  const list = document.createElement('ol')

  const links = headings.map((heading, index) => {
    if (!heading.id) heading.id = 'section-' + (index + 1)
    const item = document.createElement('li')
    const link = document.createElement('a')
    link.href = '#' + heading.id
    link.textContent = heading.textContent?.trim() || ('第 ' + (index + 1) + ' 节')
    item.append(link)
    list.append(item)
    return link
  })

  toc.append(title, list)
  document.body.append(toc)

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
      if (!visible) return
      links.forEach(link => link.removeAttribute('aria-current'))
      const active = links[headings.indexOf(visible.target)]
      active?.setAttribute('aria-current', 'location')
      active?.scrollIntoView({ block: 'nearest' })
    }, { rootMargin: '-18% 0px -70% 0px', threshold: 0 })
    headings.forEach(heading => observer.observe(heading))
  }
})()
</script>`

export interface ArticleNavNeighbor {
  href: string
  title: string
}

export interface ArticleNav {
  // 上一篇 = 上一期（更早）；下一篇 = 下一期（更新）
  prev: ArticleNavNeighbor | null
  next: ArticleNavNeighbor | null
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function articlePagerHtml(nav: ArticleNav): string | null {
  const sides: string[] = []
  if (nav.prev) {
    const title = escapeHtml(nav.prev.title)
    sides.push(
      `<a class="resonote-pager-link is-prev" href="${escapeHtml(nav.prev.href)}" aria-label="上一篇：${title}">` +
      `<span class="resonote-pager-dir">← 上一篇</span>` +
      `<span class="resonote-pager-title">${title}</span></a>`,
    )
  }
  if (nav.next) {
    const title = escapeHtml(nav.next.title)
    sides.push(
      `<a class="resonote-pager-link is-next" href="${escapeHtml(nav.next.href)}" aria-label="下一篇：${title}">` +
      `<span class="resonote-pager-dir">下一篇 →</span>` +
      `<span class="resonote-pager-title">${title}</span></a>`,
    )
  }
  if (!sides.length) return null
  return `<nav class="resonote-pager" aria-label="相邻文章">${sides.join('')}</nav>`
}

const homeLinkPattern = /<a\b(?=[^>]*class=["'][^"']*\bresonote-home\b[^"']*["'])[^>]*>[\s\S]*?<\/a>/i

function addClass(openingTag: string, className: string): string {
  if (new RegExp(`\\b${className}\\b`).test(openingTag)) return openingTag
  if (/\bclass\s*=\s*(["'])/i.test(openingTag)) {
    return openingTag.replace(/\bclass\s*=\s*(["'])([^"']*)\1/i, (_match, quote: string, classes: string) => (
      `class=${quote}${classes} ${className}${quote}`
    ))
  }
  return openingTag.replace(/\s*\/?\s*>$/, match => ` class="${className}"${match}`)
}

function markReadingWrapper(sourceHtml: string): string {
  let html = sourceHtml
  const semantic = html.match(/<(?:article|main)\b[^>]*>/i)?.[0]
  if (semantic) return html.replace(semantic, addClass(semantic, 'resonote-article'))

  const classWrapper = html.match(/<[a-z][\w:-]*\b(?=[^>]*class=["'][^"']*\b(?:container|wrap)\b[^"']*["'])[^>]*>/i)?.[0]
  if (classWrapper) return html.replace(classWrapper, addClass(classWrapper, 'resonote-article'))
  return html
}

export function applyArticleTheme(
  sourceHtml: string,
  themeCss: string,
  nav?: ArticleNav,
  faviconHref = '../../favicon.svg',
): string {
  let html = applySiteFavicon(sourceHtml, faviconHref)
  const hasReadingWrapper = /<(?:article|main)\b/i.test(html)
    || /class=["'][^"']*\b(?:container|wrap)\b[^"']*["']/i.test(html)
  const existingHomeLink = html.match(homeLinkPattern)?.[0]

  if (!html.includes('data-resonote-theme')) {
    const theme = `<style data-resonote-theme>\n${themeCss}\n</style>`
    html = /<\/head>/i.test(html)
      ? html.replace(/<\/head>/i, `${theme}\n</head>`)
      : `${theme}\n${html}`
  }

  if (!hasReadingWrapper && /<body(?:\s[^>]*)?>/i.test(html) && /<\/body>/i.test(html)) {
    if (existingHomeLink) html = html.replace(existingHomeLink, '')
    html = html
      .replace(
        /<body(?:\s[^>]*)?>/i,
        (match: string) => `${match}\n<article class="resonote-article">`,
      )
      .replace(/<\/body>/i, '</article>\n</body>')
  } else {
    html = markReadingWrapper(html)
  }

  const currentHomeLink = html.match(homeLinkPattern)?.[0]
  if (currentHomeLink) {
    html = html.replace(currentHomeLink, articleHomeLink)
  } else {
    html = /<body(?:\s[^>]*)?>/i.test(html)
      ? html.replace(/<body(?:\s[^>]*)?>/i, (match: string) => `${match}\n${articleHomeLink}`)
      : `${articleHomeLink}\n${html}`
  }

  if (!html.includes('resonote-reading-progress')) {
    html = /<body(?:\s[^>]*)?>/i.test(html)
      ? html.replace(/<body(?:\s[^>]*)?>/i, (match: string) => `${match}\n${articleReaderChrome}`)
      : `${articleReaderChrome}\n${html}`
  }

  if (!html.includes('data-resonote-reader')) {
    html = /<\/body>/i.test(html)
      ? html.replace(/<\/body>/i, `${articleReaderScript}\n</body>`)
      : `${html}\n${articleReaderScript}`
  }

  if (nav) {
    const pager = articlePagerHtml(nav)
    if (pager) {
      if (/<\/article>/i.test(html)) html = html.replace(/<\/article>/i, `${pager}\n</article>`)
      else if (/<\/body>/i.test(html)) html = html.replace(/<\/body>/i, `${pager}\n</body>`)
    }
  }

  return html
}
