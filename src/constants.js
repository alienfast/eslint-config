import { globalIgnores } from 'eslint/config'

export default {}
export const GLOBAL_BUILD_IGNORES = globalIgnores([
  'cloud/*/dist',
  'packages/*/dist',
  'dist',
  'package-lock.json',
  '**/typings-local',
  '**/typings',
  '**/.pnp*',
  '**/.yarn',
  'storybook-static',
  '**/CHANGELOG.md', // because this is a generated file from auto (typically)
])

export const SCRIPTS_JS = ['scripts/*.js']
// used in allowProjectDefault, must be complete and once, as this appears to overwrite/last one wins
export const ALLOW_DEFAULT_PROJECT_TS = [
  '*.ts',
  'packages/*/*.ts',
  'scripts/*.ts', // ** is disallowed
  'scripts/*/*.ts',
  // '.storybook/*.{ts,tsx,mts,cts}', too hard...
]

export const TS_FILES = ['**/*.{ts,tsx,mts,cts}']
export const JS_FILES = ['**/*.{js,jsx,mjs,cjs}']
export const ALL_JS_FILES = [...JS_FILES, ...TS_FILES]
export const STORYBOOK_FILES = ['**/*.stories.{ts,tsx,mts,cts}', '**/*.stories.{js,jsx,mjs,cjs}']

export const JSON_FILES = ['**/*.json']
export const MD_FILES = ['**/*.md']

export const NOT_JSON = [...ALL_JS_FILES, ...MD_FILES]
export const NOT_MD = [...ALL_JS_FILES, ...JSON_FILES]
export const NOT_JS = [...JSON_FILES, ...MD_FILES]
