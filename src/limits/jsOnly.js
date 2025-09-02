import tseslint from 'typescript-eslint'

import { JS_FILES } from '../constants.js'
import { defineConfig } from 'eslint/config'

/**
 * Turn off rules not necessary for js only files.
 *
 * Do not extend configs, it will alter files/ignores behavior.
 *
 * View config with `npx @eslint/config-inspector`
 */
const configs = defineConfig({
  name: 'af-limits-js-only',
  files: JS_FILES,
  extends: [tseslint.configs.disableTypeChecked],
  // rules: {
  //   '@typescript-eslint/no-unsafe-argument': 'off',
  //   '@typescript-eslint/no-unsafe-member-access': 'off',
  //   '@typescript-eslint/no-unused-vars': 'off',
  //   '@typescript-eslint/no-unsafe-assignment': 'off',
  //   '@typescript-eslint/no-unsafe-call': 'off',
  //   '@typescript-eslint/no-unsafe-return': 'off',
  //   '@typescript-eslint/no-floating-promises': 'off',
  // },
})

export default configs
