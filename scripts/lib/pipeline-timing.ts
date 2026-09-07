import { performance } from 'node:perf_hooks'

export class PipelineTiming {
  private started = performance.now()
  readonly samples: { phase: string; id: string; ms: number; ok: boolean }[] = []

  async measure<T>(phase: string, id: string, task: () => Promise<T>): Promise<T> {
    const start = performance.now()
    let ok = false
    try {
      const result = await task()
      ok = true
      return result
    } finally {
      this.samples.push({ phase, id, ms: performance.now() - start, ok })
    }
  }

  report() {
    return { wallMs: performance.now() - this.started, samples: this.samples }
  }
}
