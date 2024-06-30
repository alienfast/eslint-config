export const BUILD_IGNORES = [
  'packages/*/lib',
  './lib/',
  'packages/*/dist',
  './dist/',
  '**/typings-local',
  '**/typings',
  '**/.pnp*',
  '**/.yarn',
]

export const TS_FILES = ['**/*.{ts,tsx,mts,cts}']
export const JS_FILES = ['**/*.{js,mjs,cjs}']
export const ALL_JS_FILES = [...JS_FILES, ...TS_FILES]
export const JSON_FILES = ['**/*.json']
export const MD_FILES = ['**/*.md']
