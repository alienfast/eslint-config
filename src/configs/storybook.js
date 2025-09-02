import { defineConfig } from 'eslint/config'

import { GLOBAL_BUILD_IGNORES, NOT_JS, STORYBOOK_FILES } from '../constants.js'
import js from './js.js'

/**
 * Configuration preset for storybook typescript files with any js/ts extension
 *
 * View configuration with `npx @eslint/config-inspector`
 */

let storybookIfPresent = [
  GLOBAL_BUILD_IGNORES,
  {
    name: 'af-storybook-files',
    files: [...STORYBOOK_FILES],
  },
]
try {
  // eslint-disable-next-line import-x/no-unresolved
  const csf = await import('storybook/internal/csf')
  if (csf?.isStory !== undefined) {
    const mod = await import('eslint-plugin-storybook')
    const storybook = mod?.default ?? mod

    storybookIfPresent.push({
      name: 'af-storybook',
      ignores: NOT_JS,
      extends: [js, storybook?.configs?.['flat/recommended']],
    })
  }
} catch {
  // Plugin not installed; continue without Storybook rules
  // eslint-disable-next-line no-console
  console.info('Storybook not found, eslint plugin will not be used.')
}

const configs = defineConfig(...storybookIfPresent)
export default configs
