// The home page ships the first 36 rows; the full archive stays server-rendered.
let pending: Promise<void> | undefined
export function loadLibraryRows(): Promise<void> {
  const list = document.getElementById('library-list')
  const url = list?.dataset.rowsUrl
  if (!list || !url) return Promise.resolve()
  return pending ??= (async () => {
    list.setAttribute('aria-busy', 'true')
    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error(`Library rows: HTTP ${response.status}`)
      const fragment = new DOMParser().parseFromString(await response.text(), 'text/html')
      const rows = [...fragment.querySelectorAll<HTMLElement>('[data-library-item]')]
      if (rows.length !== Number(list.dataset.totalCount) - list.querySelectorAll('[data-library-item]').length)
        throw new Error('Incomplete library rows; reload the page to use the latest archive')
      const nodes = document.createDocumentFragment()
      for (const row of rows) { row.hidden = true; row.removeAttribute('data-initial-hidden'); nodes.append(row) }
      list.append(nodes)
      delete list.dataset.rowsUrl
      document.dispatchEvent(new CustomEvent('resonote:library-loaded'))
    } finally {
      list.removeAttribute('aria-busy')
    }
  })().catch(error => { pending = undefined; throw error })
}
