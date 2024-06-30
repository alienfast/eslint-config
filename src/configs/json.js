import json from 'eslint-plugin-json'
import tseslint from 'typescript-eslint'

import { BUILD_IGNORES, JSON_FILES } from '../constants.js'

/**
 * Configuration preset for json files
 *
 * View configuration with `npx @eslint/config-inspector`
 */
const configs = tseslint.config(
  {
    name: 'alienfast-json-ignores',
    ignores: [...BUILD_IGNORES],
  },
  {
    name: 'alienfast-json',
    files: JSON_FILES,
    ...json.configs['recommended'],
    rules: {
      'json/*': ['error', 'allowComments'],
    },
  },
)

export default configs
