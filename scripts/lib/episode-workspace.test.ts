import assert from 'node:assert/strict'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'
import {
  resolveEpisodeDirectory, scaffoldEpisodeWorkspace, stageEpisodePresentation,
} from './episode-workspace.ts'

function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'resonote-workspace-'))
  const episodes = join(root, 'episodes')
  const templates = join(episodes, '_templates')
  mkdirSync(join(templates, 'public'), { recursive: true })
  writeFileSync(join(templates, 'package.json'), '{"private":true}\n')
  writeFileSync(join(templates, 'style.css'), ':root {}\n')
  writeFileSync(join(templates, 'global-bottom.vue'), '<template>声笺</template>\n')
  writeFileSync(join(templates, 'public', 'asset.txt'), 'asset\n')
  return { root, episodes, templates }
}

test('scaffolds durable episode files without duplicating shared chrome', () => {
  const { root, episodes, templates } = fixture()
  try {
    const directory = scaffoldEpisodeWorkspace(episodes, templates, 'episode-1')
    assert.equal(JSON.parse(readFileSync(join(directory, 'package.json'), 'utf8')).name, 'episode-episode-1')
    assert.ok(existsSync(join(directory, 'style.css')))
    assert.ok(existsSync(join(directory, 'public', 'asset.txt')))
    assert.equal(existsSync(join(directory, 'global-bottom.vue')), false)
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test('stages shared chrome for a command and removes it during cleanup', () => {
  const { root, episodes, templates } = fixture()
  try {
    const directory = scaffoldEpisodeWorkspace(episodes, templates, 'episode-2')
    const cleanup = stageEpisodePresentation(directory, templates)
    assert.equal(readFileSync(join(directory, 'global-bottom.vue'), 'utf8'), '<template>声笺</template>\n')
    cleanup()
    cleanup()
    assert.equal(existsSync(join(directory, 'global-bottom.vue')), false)
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test('rejects episode ids that could escape the episode root', () => {
  assert.throws(() => resolveEpisodeDirectory('/tmp/episodes', '../outside'), /invalid episode id/)
  assert.throws(() => resolveEpisodeDirectory('/tmp/episodes', 'nested/id'), /invalid episode id/)
})
