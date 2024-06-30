import tseslint from 'typescript-eslint'

import af from './src/index.js'

// npx @eslint/config-inspector
export default tseslint.config(
  {
    name: 'project',
    extends: [...af.configs.recommended, ...af.rulesets.jsOnly],
  },
  {
    files: ['./scripts/**/*.js'],
    extends: [...af.rulesets.jsOnlyScripts],
  },
)
