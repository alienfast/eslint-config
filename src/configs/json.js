import json from '@eslint/json'

import { GLOBAL_BUILD_IGNORES, JSON_FILES } from '../constants.js'

import { defineConfig } from 'eslint/config'

/**
 * Configuration preset for json files
 *
 * View configuration with `npx @eslint/config-inspector`
 */
const configs = defineConfig(GLOBAL_BUILD_IGNORES, {
  name: 'af-json',
  files: JSON_FILES,
  plugins: {
    json,
  },
  extends: [json.configs.recommended],
  rules: {
    'json/*': ['error', 'allowComments'],
  },
  languageOptions: {
    parserOptions: {
      extraFileExtensions: ['.json'],
      projectService: {
        // @see https://typescript-eslint.io/packages/parser#projectservice
        // allow files to be linted without further config
        allowDefaultProject: ['*.json', 'packgages/*.json', 'packages/*/*.json', '.vscode/*.json'],
      },
    },
  },
})

export default configs
