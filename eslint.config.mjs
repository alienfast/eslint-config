import tseslint from 'typescript-eslint'

import af from './src/index.js'

/**
 * Project eslint configuration.
 * 
 * View config with `npx @eslint/config-inspector`
 */
export default tseslint.config(
  {
    name: 'project',
    extends: [...af.configs.recommended, ...af.limits.jsOnly],
  },
)
