function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function normalizePublishedSort(value: unknown): string | undefined {
  const raw = String(value ?? '').trim()
  if (!raw) return undefined

  const compact = raw.match(/^(\d{4})(\d{2})(\d{2})$/)
  if (compact) return `${compact[1]}${compact[2]}${compact[3]}`

  const calendar = raw.match(/^(\d{4})-(\d{2})(?:-(\d{2}))?$/)
  if (calendar) return `${calendar[1]}${calendar[2]}${calendar[3] || '01'}`

  const parsed = Date.parse(raw)
  if (!Number.isFinite(parsed)) return undefined
  const date = new Date(parsed)
  return `${date.getUTCFullYear()}${String(date.getUTCMonth() + 1).padStart(2, '0')}${String(date.getUTCDate()).padStart(2, '0')}`
}

export function normalizeGeneratedAt(value: unknown): string | undefined {
  const raw = String(value ?? '').trim()
  if (!raw) return undefined
  const parsed = Date.parse(raw)
  return Number.isFinite(parsed) ? new Date(parsed).toISOString() : undefined
}

export function setTopLevelScalar(
  text: string,
  field: string,
  value: string,
  afterField?: string,
): string {
  const line = `${field}: ${JSON.stringify(value)}`
  const existing = new RegExp(`^${escapeRegExp(field)}:.*$`, 'm')
  if (existing.test(text)) return text.replace(existing, line)

  if (afterField) {
    const anchor = new RegExp(`^${escapeRegExp(afterField)}:.*$`, 'm')
    const match = anchor.exec(text)
    if (match) {
      const insertAt = match.index + match[0].length
      return `${text.slice(0, insertAt)}\n${line}${text.slice(insertAt)}`
    }
  }

  return `${text.trimEnd()}\n${line}\n`
}
