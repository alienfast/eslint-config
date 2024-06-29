import markdown from 'eslint-plugin-markdown'
import tseslint from 'typescript-eslint'

import { BUILD_IGNORES } from './constants.js'

// npx @eslint/config-inspector
const configs = tseslint.config(
  ...markdown.configs.recommended,
  {
    name: 'alienfast-markdown-ignores',
    ignores: [
      ...BUILD_IGNORES,
      // ...JS_FILES,
      // ...JSON_FILES
    ],
  },
  {
    name: 'alienfast-markdown',
    // files: ["**/*.md"],
  },
)

export default configs
