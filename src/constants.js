export default {}
export const BUILD_IGNORES = [
  'packages/*/lib',
  'lib',
  'packages/*/dist',
  'dist',
  '**/typings-local',
  '**/typings',
  '**/.pnp*',
  '**/.yarn',
  'storybook-static',
]

export const SCRIPTS = ['scripts/**/*.js']

export const TS_FILES = ['**/*.{ts,tsx,mts,cts}']
export const JS_FILES = ['**/*.{js,mjs,cjs}']
export const ALL_JS_FILES = [...JS_FILES, ...TS_FILES]

export const JSON_FILES = ['**/*.json']
export const MD_FILES = ['**/*.md']

export const NOT_JSON = [...ALL_JS_FILES, ...MD_FILES]
export const NOT_MD = [...ALL_JS_FILES, ...JSON_FILES]
export const NOT_JS = [...JSON_FILES, ...MD_FILES]
