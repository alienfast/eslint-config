import { defineConfig } from 'eslint/config'

import js from '../configs/js.js'
import { ALLOW_DEFAULT_PROJECT_TS } from '../constants.js'

/**
 * Turn off rules not necessary for scripts and configs.
 *
 * NOTE: this needs to be the single entry that specifies allowDefaultProject.
 *
 * Do not extend configs, it will alter files/ignores behavior.
 *
 * View config with `npx @eslint/config-inspector`
 */
const configs = defineConfig({
  name: 'af-limits-ts-scripts-and-config',
  extends: [js],
  files: ALLOW_DEFAULT_PROJECT_TS,
  rules: {
    'no-console': 'off',
  },
  languageOptions: {
    parserOptions: {
      // only
      projectService: {
        // @see https://typescript-eslint.io/packages/parser#projectservice
        // allow one-off scripts project/package ts files to be linted without further config
        allowDefaultProject: ALLOW_DEFAULT_PROJECT_TS,
        maximumDefaultProjectFileMatchCount_THIS_WILL_SLOW_DOWN_LINTING: 12, // for bigger monorepos
      },
    },
  },
})

export default configs
