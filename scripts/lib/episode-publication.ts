import { existsSync, readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { archiveFailedEpisode, resolveEpisodeDirectory } from './episode-workspace.ts'
import { readYaml, writeYaml } from './yaml-io.ts'
import type { PlanFile } from './types.ts'

// Only a newly generated episode from this run can be removed from the
// publication set. An existing published episode's build failure is a site
// regression and must not silently remove previously published content.
export function isolateNewEpisodeBuildFailure(
  root: string, id: string, generatedThisRun: ReadonlySet<string>, error: unknown,
): void {
  if (!generatedThisRun.has(id)) throw error
  const plansDir = join(root, 'data/plans')
  const plans = readdirSync(plansDir).filter(file => file.endsWith('.yml')).map(file => {
    const path = join(plansDir, file)
    return { path, plan: readYaml<PlanFile>(path) }
  })
  const affected = plans.filter(({ plan }) => plan.episodes.some(entry => entry.id === id))
  if (affected.length !== 1) throw new Error(`expected one plan for failed build ${id}; found ${affected.length}`)
  const episodesDir = join(root, 'episodes')
  if (!existsSync(resolveEpisodeDirectory(episodesDir, id))) throw new Error(`missing workspace for failed build ${id}`)
  archiveFailedEpisode(episodesDir, id)
  writeFileSync(join(episodesDir, '_failed', id, 'build-error.txt'), String(error) + '\n')
  const { path, plan } = affected[0]
  plan.episodes.find(entry => entry.id === id)!.status = 'failed'
  plan.done = plan.episodes.filter(entry => entry.status === 'generated').length
  plan.pending = plan.episodes.filter(entry => entry.status === 'pending' || entry.status === 'audit_failed').length
  writeYaml(path, plan)
}
