// Deck chrome injection — applied to each built deck's index.html during
// dist assembly (not at slidev build time) so the chrome always reflects the
// latest episode ordering without invalidating the episode build cache.
//
// One viewport-level component owns the home and 上一篇/下一篇 links. Keeping
// every control outside Slidev's transform-scaled canvas prevents the controls
// from drifting into each other at different viewport ratios.

export interface DeckNeighbor {
  href: string
  title: string
}

export interface DeckNav {
  // 上一篇 = 上一期（更早）；下一篇 = 下一期（更新）
  prev: DeckNeighbor | null
  next: DeckNeighbor | null
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const deckChromeCss = `
/* Hide ignored legacy components that may survive in an old build cache. */
.resonote-back { display: none !important; }
.rn-deck-nav {
  --rn-slide-width: min(100vw, calc(100vh * 16 / 9));
  --rn-slide-height: min(100vh, calc(100vw * 9 / 16));
  position: fixed;
  top: calc((100vh - var(--rn-slide-height)) / 2 + 8px);
  left: calc((100vw - var(--rn-slide-width)) / 2 + 8px);
  z-index: 1000;
  display: inline-flex;
  gap: 5px;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", "PingFang SC", sans-serif;
}
.rn-deck-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 5px 9px;
  border: 1px solid rgba(38, 50, 47, 0.1);
  border-radius: 3px 10px 10px 3px;
  color: rgba(38, 50, 47, 0.72);
  background: rgba(251, 248, 241, 0.88);
  box-shadow: 0 4px 14px rgba(38, 50, 47, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  font-size: 11px;
  font-weight: 700;
  line-height: 18px;
  text-decoration: none;
  transition: color 0.18s ease, background 0.18s ease, border-color 0.18s ease;
}
.rn-deck-home { border-radius: 10px 3px 3px 10px; }
.rn-deck-wordmark { font-family: Iowan Old Style, Baskerville, "Songti SC", STSong, serif; }
.rn-deck-btn svg {
  width: 12px;
  height: 12px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.rn-deck-btn:hover { color: #355f58; background: rgba(255, 253, 248, 0.98); border-color: rgba(53, 95, 88, 0.36); }
.rn-deck-btn:focus-visible { outline: 3px solid rgba(53, 95, 88, 0.28); outline-offset: 2px; }
@media (max-width: 700px) {
  .rn-deck-label { display: none; }
  .rn-deck-btn { padding: 5px 8px; }
}
`.trim()

const chevronLeft = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m12 5-5 5 5 5" /></svg>'
const chevronRight = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m8 5 5 5-5 5" /></svg>'

export function injectDeckChrome(html: string, nav: DeckNav, homeHref = '../../'): string {
  if (!/<\/body>/i.test(html)) return html

  const buttons: string[] = [
    `<a class="rn-deck-btn rn-deck-home" href="${escapeHtml(homeHref)}" aria-label="返回声笺 Resonote 首页">${chevronLeft}<span class="rn-deck-wordmark">声笺</span></a>`,
  ]
  if (nav.prev) {
    const title = escapeHtml(nav.prev.title)
    buttons.push(
      `<a class="rn-deck-btn" href="${escapeHtml(nav.prev.href)}" title="上一篇：${title}" aria-label="上一篇：${title}">${chevronLeft}<span class="rn-deck-label">上一篇</span></a>`,
    )
  }
  if (nav.next) {
    const title = escapeHtml(nav.next.title)
    buttons.push(
      `<a class="rn-deck-btn" href="${escapeHtml(nav.next.href)}" title="下一篇：${title}" aria-label="下一篇：${title}"><span class="rn-deck-label">下一篇</span>${chevronRight}</a>`,
    )
  }

  const parts = [
    `<style data-resonote-chrome>\n${deckChromeCss}\n</style>`,
  ]
  parts.push(`<nav class="rn-deck-nav" data-resonote-nav aria-label="内容导航">${buttons.join('')}</nav>`)

  return html.replace(/<\/body>/i, `${parts.join('\n')}\n</body>`)
}
