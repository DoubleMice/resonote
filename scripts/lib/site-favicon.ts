function isFaviconLink(tag: string): boolean {
  const rel = tag.match(/\brel\s*=\s*(["'])(.*?)\1/i)?.[2]
  return rel?.toLowerCase().split(/\s+/).includes('icon') ?? false
}

function escapeAttribute(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export function applySiteFavicon(html: string, href: string): string {
  const link = `<link rel="icon" type="image/svg+xml" href="${escapeAttribute(href)}" data-resonote-favicon>`
  let replaced = false
  const withoutOldIcons = html.replace(/<link\b[^>]*>\s*/gi, tag => {
    if (!isFaviconLink(tag)) return tag
    if (replaced) return ''
    replaced = true
    return `${link}\n`
  })

  if (replaced) return withoutOldIcons
  if (/<\/head>/i.test(withoutOldIcons)) {
    return withoutOldIcons.replace(/<\/head>/i, `${link}\n</head>`)
  }
  return `${link}\n${withoutOldIcons}`
}
