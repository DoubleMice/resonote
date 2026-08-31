<template>
  <a href="../../" class="resonote-back" title="返回声笺" aria-label="返回声笺 Resonote 首页">
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M11.75 4.75 6.5 10l5.25 5.25M7 10h7" />
    </svg>
    <span class="brand-lockup"><strong>声笺</strong><small>RESONOTE</small></span>
  </a>
</template>

<style scoped>
.resonote-back {
  position: fixed;
  top: 12px;
  left: 12px;
  z-index: 100;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  min-height: 44px;
  font-size: 11px;
  font-weight: 700;
  color: rgba(38, 50, 47, 0.72);
  text-decoration: none;
  padding: 7px 12px 7px 9px;
  border-radius: 3px 12px 12px 3px;
  background: rgba(251, 248, 241, 0.88);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(38, 50, 47, 0.1);
  box-shadow: 0 5px 18px rgba(38, 50, 47, 0.08);
  font-family: ui-sans-serif, system-ui, sans-serif;
  transition: color 0.18s ease, background 0.18s ease, border-color 0.18s ease;
}
.resonote-back svg {
  width: 14px;
  height: 14px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.brand-lockup {
  display: inline-flex;
  align-items: baseline;
  gap: 5px;
}
.brand-lockup strong {
  color: inherit;
  font-family: Iowan Old Style, Baskerville, "Songti SC", STSong, serif;
  font-size: 13px;
}
.brand-lockup small {
  color: rgba(38, 50, 47, 0.52);
  font-size: 7px;
  font-weight: 750;
  letter-spacing: 0.13em;
}
.resonote-back:hover {
  color: #355f58;
  background: rgba(255, 253, 248, 0.98);
  border-color: rgba(53, 95, 88, 0.36);
}
.resonote-back:focus-visible {
  outline: 3px solid rgba(53, 95, 88, 0.28);
  outline-offset: 2px;
}
</style>
