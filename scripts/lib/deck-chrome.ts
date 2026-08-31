// Deck chrome injection — applied to each built deck's index.html during
// dist assembly (not at slidev build time) so the chrome always reflects the
// latest episode ordering without invalidating the episode build cache.
//
// Two jobs:
//  1. Compact the shared `.resonote-back` button (from global-bottom.vue) so it
//     no longer overlaps slide H1 titles. Desktop titles start at y=59px; the
//     compact chrome must end above that line.
//  2. Add 上一篇/下一篇 links next to it, resolved from the site-wide episode
//     ordering (published desc, same as the library page).

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
/* NOTE: Slidev renders global-bottom inside a transform-scaled slide wrapper,
   so these px values are in unscaled slide units (slide canvas ≈ 980×551).
   Content h1 titles start at ≈ 40px in the same units, so the whole chrome
   row must end above that line on every viewport. */
.resonote-back.resonote-back { top: 5px; left: 8px; min-height: 0; padding: 5px 9px 5px 7px; }
.resonote-back.resonote-back .brand-lockup small { display: none; }
.resonote-back.resonote-back .brand-lockup strong { font-size: 11px; }
.resonote-back.resonote-back svg { width: 12px; height: 12px; }
.rn-deck-nav {
  position: fixed;
  top: 5px;
  left: 72px;
  z-index: 100;
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
  .rn-deck-nav { left: 8px; top: 40px; }
  .rn-deck-label { display: none; }
  .rn-deck-btn { padding: 5px 8px; }
}
`.trim()

const chevronLeft = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m12 5-5 5 5 5" /></svg>'
const chevronRight = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m8 5 5 5-5 5" /></svg>'

export function injectDeckChrome(html: string, nav: DeckNav): string {
  if (!/<\/body>/i.test(html)) return html

  const buttons: string[] = []
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
  if (buttons.length) {
    parts.push(`<div class="rn-deck-nav" data-resonote-nav>${buttons.join('')}</div>`)
  }

  return html.replace(/<\/body>/i, `${parts.join('\n')}\n</body>`)
}
