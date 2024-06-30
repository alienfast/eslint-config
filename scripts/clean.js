import { rimraf as r } from 'rimraf'

// TODO: promote this as a script to @alienfast/ci once it is stable

export default {}
console.log('Cleaning...')

// await $`yarn tsc -b --clean`

// packages/*/dist cloud/*/dist .eslintcache ./packages/*/*.log *.log
await Promise.all([r('.eslintcache'), r('node_modules/.cache'), r('*.log', { glob: true })])
