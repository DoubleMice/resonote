import type { ChildProcess } from 'node:child_process'

// On POSIX callers must spawn with detached:true so descendants share a group.
// Keep the kill deadline even if the parent exits on TERM: grandchildren may not.
export function processDeadline(child: ChildProcess, timeoutMs: number, onTimeout: () => void, graceMs = 5000): () => void {
  let expired = false
  const signal = (name: NodeJS.Signals) => {
    if (!child.pid) return
    try {
      if (process.platform === 'win32') child.kill(name)
      else process.kill(-child.pid, name)
    } catch (error: any) {
      if (error.code !== 'ESRCH') throw error
    }
  }
  const timer = setTimeout(() => {
    expired = true
    onTimeout()
    signal('SIGTERM')
    setTimeout(() => signal('SIGKILL'), graceMs)
  }, timeoutMs)
  return () => { if (!expired) clearTimeout(timer) }
}
