import tseslint from 'typescript-eslint'

import jsOnly from './jsOnly.js'

/**
 * Turn off rules not necessary for scripts
 *
 * View config with `npx @eslint/config-inspector`
 */
const configs = tseslint.config({
  name: 'alienfast-ruleset-js-only-scripts',
  extends: [...jsOnly],
  rules: {
    'no-console': 'off',
  },
})

export default configs
