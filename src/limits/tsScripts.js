import tseslint from 'typescript-eslint'

import js from '../configs/js.js'
import { SCRIPTS_TS } from '../constants.js'

/**
 * Turn off rules not necessary for scripts
 *
 * Do not extend configs, it will alter files/ignores behavior.
 *
 * View config with `npx @eslint/config-inspector`
 */
const configs = tseslint.config({
  name: 'af-limits-ts-scripts',
  extends: [...js],
  files: SCRIPTS_TS,
  rules: {
    'no-console': 'off',
    'storybook/story-exports': 'off',
  },
  languageOptions: {
    parserOptions: {
      project: true,
      warnOnUnsupportedTypeScriptVersion: true,
      projectService: {
        // @see https://typescript-eslint.io/packages/parser#projectservice
        // allow one-off scripts project/package ts files to be linted without further config
        allowDefaultProject: SCRIPTS_TS,
      },
    },
  },
})

export default configs
