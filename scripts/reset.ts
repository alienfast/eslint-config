import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { $ } from 'execa'

export default {}
const $$ = $({ stdio: 'inherit' })
// TODO: promote this as a script to @alienfast/ci once it is stable

console.log('Resetting...')

const dir = path.dirname(fileURLToPath(import.meta.url))

await Promise.all([$$`node ${dir}/clean.js`, $$`node ${dir}/clean-yarn.js`])

console.log('Installing...')
await $$`yarn install`
