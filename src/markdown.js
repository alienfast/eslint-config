import markdown from 'eslint-plugin-markdown'
import tseslint from 'typescript-eslint'

import { BUILD_IGNORES, MD_FILES } from './constants.js'

// npx @eslint/config-inspector
const configs = tseslint.config(
  ...markdown.configs.recommended,
  {
    name: 'alienfast-markdown-ignores',
    ignores: [...BUILD_IGNORES],
  },
  {
    name: 'alienfast-markdown',
    files: MD_FILES,
  },
)

export default configs
