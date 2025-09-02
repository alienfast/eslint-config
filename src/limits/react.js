import { defineConfig } from 'eslint/config'

import { ALL_JS_FILES } from '../constants.js'

/**
 * Turn off rules not necessary for js only files.
 *
 * Do not extend configs, it will alter files/ignores behavior.
 *
 * View config with `npx @eslint/config-inspector`
 */
const configs = defineConfig({
  name: 'af-limits-react',
  files: ALL_JS_FILES,
  rules: {
    // this gets really messy in tsx and graphql when types are forced to any e.g. policies
    '@typescript-eslint/no-unsafe-assignment': 'off', // 57% of the time
    '@typescript-eslint/no-unsafe-member-access': 'off',
  },
})

export default configs
