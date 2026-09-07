import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { once } from 'node:events'
import test from 'node:test'
import { processDeadline } from './process-deadline.ts'

test('deadline kills a child that ignores TERM', { skip: process.platform === 'win32', timeout: 5000 }, async () => {
  const child = spawn(process.execPath, ['-e', "process.on('SIGTERM',()=>{}); console.log('ready'); setInterval(()=>{},1000)"], { detached: true })
  try {
    await once(child.stdout!, 'data')
    let expired = false
    const clear = processDeadline(child, 30, () => { expired = true }, 30)
    const [, signal] = await once(child, 'close')
    clear()
    assert.equal(expired, true)
    assert.equal(signal, 'SIGKILL')
  } finally {
    try { process.kill(-child.pid!, 'SIGKILL') } catch {}
  }
})

test('normal exit cancels the deadline', { timeout: 5000 }, async () => {
  const child = spawn(process.execPath, ['-e', 'process.exit(0)'], { detached: process.platform !== 'win32' })
  let expired = false
  const clear = processDeadline(child, 2000, () => { expired = true })
  const [code] = await once(child, 'close')
  clear()
  assert.equal(code, 0)
  assert.equal(expired, false)
})
