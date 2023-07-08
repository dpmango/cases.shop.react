/* eslint-disable no-console */
export const APP_VERSION = '1.2.0'

export const LOG = {
  log: (...args: any) => {
    const isDev =
      import.meta.env.NODE_ENV === 'development' || window.location.search.includes('console')

    if (isDev) console.log(...args)
  },
  info: (...args: any) => {
    console.info(...args)
  },
  warn: (...args: any) => {
    console.warn(...args)
  },
  error: (...args: any) => {
    console.error(...args)
  },
}

export const PerformanceLog = (DEV_perf: number, name: string) => {
  const DEV_perf_end = performance.now()

  LOG.log(`PERF :: ${name} :: ${(DEV_perf_end - DEV_perf).toFixed(2)} ms`)
}
