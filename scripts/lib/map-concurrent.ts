// Preserve input order and drain in-flight work before reporting a failure, so
// callers can safely clean staged files after a subprocess has finished.
export async function mapConcurrent<T, R>(
  items: readonly T[],
  concurrency: number,
  task: (item: T, index: number) => Promise<R>,
): Promise<R[]> {
  if (!Number.isInteger(concurrency) || concurrency < 1) {
    throw new Error('concurrency must be a positive integer')
  }
  const output = new Array<R>(items.length)
  let next = 0
  let stopped = false
  const workers = Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (!stopped && next < items.length) {
      const index = next++
      try {
        output[index] = await task(items[index], index)
      } catch (error) {
        stopped = true
        throw error
      }
    }
  })
  const settled = await Promise.allSettled(workers)
  const failure = settled.find(result => result.status === 'rejected')
  if (failure?.status === 'rejected') throw failure.reason
  return output
}
