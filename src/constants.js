import { globalIgnores } from 'eslint/config'

export default {}
export const GLOBAL_BUILD_IGNORES = globalIgnores([
  'packages/*/lib',
  'lib',
  'packages/*/dist',
  'dist',
  '**/typings-local',
  '**/typings',
  '**/.pnp*',
  '**/.yarn',
  'storybook-static',
])

export const SCRIPTS_JS = ['scripts/*.js']
// used in allowProjectDefault, must be complete and once, as this appears to overwrite/last one wins
export const ALLOW_DEFAULT_PROJECT_TS = ['*.ts', 'packages/*/*.ts', 'scripts/*.ts']

export const TS_FILES = ['**/*.{ts,tsx,mts,cts}']
export const JS_FILES = ['**/*.{js,jsx,mjs,cjs}']
export const ALL_JS_FILES = [...JS_FILES, ...TS_FILES]
export const STORYBOOK_FILES = ['**/*.stories.{ts,tsx,mts,cts}', '**/*.stories.{js,jsx,mjs,cjs}']

export const JSON_FILES = ['**/*.json']
export const MD_FILES = ['**/*.md']

export const NOT_JSON = [...ALL_JS_FILES, ...MD_FILES]
export const NOT_MD = [...ALL_JS_FILES, ...JSON_FILES]
export const NOT_JS = [...JSON_FILES, ...MD_FILES]
