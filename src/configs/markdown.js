import markdown from 'eslint-plugin-markdown'
import tseslint from 'typescript-eslint'

import { BUILD_IGNORES, MD_FILES } from '../constants.js'

/**
 * Configuration preset for markdown files
 *
 * View configuration with `npx @eslint/config-inspector`
 */
const configs = tseslint.config(
  // ...markdown.configs.recommended,
  {
    name: 'alienfast-markdown-ignores',
    ignores: [...BUILD_IGNORES],
  },
  {
    name: 'alienfast-markdown',
    extends: [...markdown.configs.recommended],
    files: MD_FILES,
  },
  {
    name: 'alienfast-markdown-embedded-js',
    // don't typecheck js/ts in md files
    extends: [tseslint.configs.disableTypeChecked],
    files: ['**/*.md/**'],
  },
)

export default configs
