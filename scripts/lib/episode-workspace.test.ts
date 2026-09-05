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
  writeFileSync(join(templates, 'style.css'), ':root {}\n')
  writeFileSync(join(templates, 'global-bottom.vue'), '<template>声笺</template>\n')
  writeFileSync(join(templates, 'public', 'asset.txt'), 'asset\n')
  return { root, episodes, templates }
}

test('scaffolds only durable episode assets', () => {
  const { root, episodes, templates } = fixture()
  try {
    const directory = scaffoldEpisodeWorkspace(episodes, templates, 'episode-1')
    assert.ok(existsSync(join(directory, 'public', 'asset.txt')))
    assert.equal(existsSync(join(directory, 'package.json')), false)
    assert.equal(existsSync(join(directory, 'style.css')), false)
    assert.equal(existsSync(join(directory, 'global-bottom.vue')), false)
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test('stages canonical presentation files for a command and removes them during cleanup', () => {
  const { root, episodes, templates } = fixture()
  try {
    const directory = scaffoldEpisodeWorkspace(episodes, templates, 'episode-2')
    const cleanup = stageEpisodePresentation(directory, templates)
    assert.equal(readFileSync(join(directory, 'style.css'), 'utf8'), ':root {}\n')
    assert.equal(readFileSync(join(directory, 'global-bottom.vue'), 'utf8'), '<template>声笺</template>\n')
    cleanup()
    cleanup()
    assert.equal(existsSync(join(directory, 'style.css')), false)
    assert.equal(existsSync(join(directory, 'global-bottom.vue')), false)
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test('temporarily replaces stale presentation files and restores them', () => {
  const { root, episodes, templates } = fixture()
  try {
    const directory = scaffoldEpisodeWorkspace(episodes, templates, 'episode-3')
    writeFileSync(join(directory, 'style.css'), 'stale style\n')
    writeFileSync(join(directory, 'global-bottom.vue'), '<template>stale</template>\n')
    const cleanup = stageEpisodePresentation(directory, templates)
    assert.equal(readFileSync(join(directory, 'style.css'), 'utf8'), ':root {}\n')
    assert.equal(readFileSync(join(directory, 'global-bottom.vue'), 'utf8'), '<template>声笺</template>\n')
    cleanup()
    assert.equal(readFileSync(join(directory, 'style.css'), 'utf8'), 'stale style\n')
    assert.equal(readFileSync(join(directory, 'global-bottom.vue'), 'utf8'), '<template>stale</template>\n')
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test('cleans canonical presentation files left by an interrupted command', () => {
  const { root, episodes, templates } = fixture()
  try {
    const directory = scaffoldEpisodeWorkspace(episodes, templates, 'episode-4')
    writeFileSync(join(directory, 'style.css'), ':root {}\n')
    writeFileSync(join(directory, 'global-bottom.vue'), '<template>声笺</template>\n')
    const cleanup = stageEpisodePresentation(directory, templates)
    cleanup()
    assert.equal(existsSync(join(directory, 'style.css')), false)
    assert.equal(existsSync(join(directory, 'global-bottom.vue')), false)
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test('rejects episode ids that could escape the episode root', () => {
  assert.throws(() => resolveEpisodeDirectory('/tmp/episodes', '../outside'), /invalid episode id/)
  assert.throws(() => resolveEpisodeDirectory('/tmp/episodes', 'nested/id'), /invalid episode id/)
})
