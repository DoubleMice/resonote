const CONTENT_EFFORT_LEVELS = ['low', 'medium', 'high', 'xhigh', 'max'] as const

export function contentEffortArgs(raw = process.env.CONTENT_EFFORT): string[] {
  const effort = raw?.trim().toLowerCase()
  if (!effort) return []
  if (!CONTENT_EFFORT_LEVELS.includes(effort as typeof CONTENT_EFFORT_LEVELS[number])) {
    throw new Error(`CONTENT_EFFORT must be one of: ${CONTENT_EFFORT_LEVELS.join(', ')}`)
  }
  return ['--effort', effort]
}
