import tseslint from 'typescript-eslint'

import { SCRIPTS } from '../constants.js'
import jsOnly from './jsOnly.js'

/**
 * Turn off rules not necessary for scripts
 *
 * Do not extend configs, it will alter files/ignores behavior.
 *
 * View config with `npx @eslint/config-inspector`
 */
const configs = tseslint.config({
  name: 'alienfast-js-only-scripts',
  extends: [...jsOnly],
  files: SCRIPTS,
  rules: {
    'no-console': 'off',
  },
})

export default configs
