import storybook from 'eslint-plugin-storybook'
import tseslint from 'typescript-eslint'

import { GLOBAL_BUILD_IGNORES, NOT_JS, STORYBOOK_FILES } from '../constants.js'
import js from './js.js'
import { defineConfig } from 'eslint/config'

/**
 * Configuration preset for storybook typescript files with any js/ts extension
 *
 * View configuration with `npx @eslint/config-inspector`
 */
const configs = defineConfig([
  GLOBAL_BUILD_IGNORES,
  {
    name: 'af-storybook-files',
    files: [...STORYBOOK_FILES],
  },
  {
    name: 'af-storybook',
    ignores: NOT_JS,
    extends: [js, storybook.configs['flat/recommended']],
  },
])

export default configs
