import { defineConfig } from 'eslint/config'

import af from './src/index.js'

/**
 * Project eslint configuration.
 *
 * View config with `npx @eslint/config-inspector`
 */
export default defineConfig([af.configs.recommended])
