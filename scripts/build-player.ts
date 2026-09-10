import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { inspect } from 'node:util'
import { buildSharedPlayer } from './lib/shared-player.ts'

const argument = (name: string) => process.argv[process.argv.indexOf(name) + 1]
const requestPath = resolve(argument('--request'))
const request = JSON.parse(readFileSync(requestPath, 'utf8')) as { ids: string[]; output: string; base: string }
buildSharedPlayer(process.cwd(), request.ids, request.output, request.base).catch(error => {
  // Only attribute compiler errors containing an actual episode source path.
  // Global errors and existing-episode regressions remain fatal in build-all.
  const details = inspect(error, { depth: 8 })
  const ids = request.ids.filter(id => details.includes(`/episodes/${id}/`))
  writeFileSync(requestPath + '.error.json', JSON.stringify({ episodeIds: ids, message: details }))
  console.error(error)
  process.exitCode = 1
})
