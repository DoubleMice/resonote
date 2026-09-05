import { existsSync, readdirSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { validateEpisodeArtifacts } from './lib/artifact-validator.ts'
import { log } from './lib/log.ts'

const ROOT = process.cwd()
const EPISODES_DIR = resolve(ROOT, 'episodes')

function generatedEpisodeIds(): string[] {
  if (!existsSync(EPISODES_DIR)) return []
  return readdirSync(EPISODES_DIR)
    .filter(id => !id.startsWith('_'))
    .filter(id => statSync(join(EPISODES_DIR, id)).isDirectory())
    .filter(id => existsSync(join(EPISODES_DIR, id, 'meta.yml')))
    .sort()
}

function main(): void {
  const id = process.argv.find(argument => argument.startsWith('--id='))?.slice('--id='.length)
  const strict = process.argv.includes('--strict')
  const ids = id ? [id] : generatedEpisodeIds()
  if (ids.length === 0) throw new Error('no episode artifacts found')

  const issues = ids.flatMap(episodeId => validateEpisodeArtifacts({
    rootDir: ROOT,
    id: episodeId,
    strict,
  }))

  for (const issue of issues) {
    const message = `${issue.file}: [${issue.code}] ${issue.message}`
    if (issue.level === 'error') log.err(message)
    else log.warn(message)
  }

  const errors = issues.filter(issue => issue.level === 'error')
  if (errors.length > 0) {
    throw new Error(`artifact validation failed: ${errors.length} error(s) across ${ids.length} episode(s)`)
  }
  log.ok(`artifact validation passed: ${ids.length} episode(s)`)
}

main()
