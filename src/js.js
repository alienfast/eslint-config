import path from 'node:path'
import { fileURLToPath } from 'node:url'

// import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
// import simpleImportSort from 'eslint-plugin-simple-import-sort'
// import unicorn from 'eslint-plugin-unicorn'
// import unusedImports from 'eslint-plugin-unused-imports'
// import tsParser from '@typescript-eslint/parser'
// import eslintComments from 'eslint-plugin-eslint-comments'
// import n from 'eslint-plugin-n'

import { FlatCompat } from '@eslint/eslintrc'
import eslint from '@eslint/js'
import _import from 'eslint-plugin-import'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import { BUILD_IGNORES, JS_FILES, TS_FILES } from './constants.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  allConfig: eslint.configs.all,
})

// npx @eslint/config-inspector
const configs = tseslint.config(
  {
    name: 'alienfast-js-files',
    files: [...JS_FILES, ...TS_FILES],
  },
  {
    name: 'alienfast-js-ignores',
    ignores: [
      ...BUILD_IGNORES,
      // ...JSON_FILES,
      // ...MD_FILES
    ],
  },
  {
    name: 'alienfast-js',
    extends: [
      {
        name: 'eslint.configs.recommended', // name is missing and this helps with inspector
        ...eslint.configs.recommended,
      }, // Recommended config applied to all files
      ...tseslint.configs.recommendedTypeChecked,
      // { name: 'import.errors', ...fixupConfigRules(compat.extends('plugin:import/errors'))[0] },
      // { name: 'import.warnings', ...fixupConfigRules(compat.extends('plugin:import/warnings'))[0] },
      // { name: 'import.react', ...fixupConfigRules(compat.extends('plugin:import/react'))[0] },
      // {
      //   name: 'import.typescript',
      //   ...fixupConfigRules(compat.extends('plugin:import/typescript'))[0],
      // },
      // {
      //   name: 'react-hooks.recommended',
      //   ...fixupConfigRules(compat.extends('plugin:react-hooks/recommended'))[0],
      // },
      // {
      //   name: 'storybook.recommended',
      //   ...fixupConfigRules(compat.extends('plugin:storybook/recommended'))[0],
      // },
    ],
    // plugins: {
    //   'eslint-comments': eslintComments,
    //   'simple-import-sort': simpleImportSort,
    //   import: fixupPluginRules(_import),
    //   'unused-imports': unusedImports,
    //   n,
    //   unicorn,
    // },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      // parser: tsParser,
      // ecmaVersion: 'latest',
      // sourceType: 'module',

      parserOptions: {
        project: true, // find the closest tsconfig file. ['./tsconfig*.json', './packages/*/tsconfig.json'],
      },
    },

    // settings: {
    //   'import/parsers': {
    //     '@typescript-eslint/parser': TS_FILES,
    //   },

    //   'import/resolver': {
    //     typescript: {
    //       project: ['packages/*/tsconfig.json'],
    //     },
    //   },
    // },

    // rules: {
    //   'guard-for-in': 'error',
    //   'no-bitwise': 'error',
    //   'no-caller': 'error',
    //   'no-console': 'error',
    //   'no-eval': 'error',
    //   'no-new-wrappers': 'error',
    //   'no-throw-literal': 'error',
    //   'object-shorthand': 'error',
    //   'one-var': ['error', 'never'],
    //   'require-await': 'off',
    //   'sort-keys': 'off',
    //   'sort-imports': 'off',
    //   '@typescript-eslint/restrict-template-expressions': 'off',

    //   '@typescript-eslint/array-type': [
    //     'error',
    //     {
    //       default: 'array-simple',
    //     },
    //   ],

    //   '@typescript-eslint/camelcase': 'off',
    //   '@typescript-eslint/explicit-function-return-type': 'off',

    //   '@typescript-eslint/explicit-member-accessibility': [
    //     'error',
    //     {
    //       overrides: {
    //         constructors: 'no-public',
    //       },
    //     },
    //   ],

    //   '@typescript-eslint/member-ordering': 'error',
    //   '@typescript-eslint/no-empty-function': 'off',
    //   '@typescript-eslint/no-empty-interface': 'off',
    //   '@typescript-eslint/no-explicit-any': 'off',
    //   '@typescript-eslint/no-misused-promises': 'off',
    //   '@typescript-eslint/no-non-null-assertion': 'off',
    //   '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    //   '@typescript-eslint/no-unused-vars': 'off',
    //   '@typescript-eslint/no-use-before-define': 'off',
    //   '@typescript-eslint/no-var-requires': 'off',
    //   '@typescript-eslint/prefer-for-of': 'error',
    //   '@typescript-eslint/prefer-function-type': 'off',
    //   '@typescript-eslint/require-await': 'off',
    //   '@typescript-eslint/unbound-method': 'off',
    //   '@typescript-eslint/unified-signatures': 'error',
    //   'simple-import-sort/imports': 'error',
    //   'simple-import-sort/exports': 'error',
    //   'import/no-unresolved': 'error',
    //   'import/first': 'error',
    //   'import/no-duplicates': 'error',
    //   'import/extensions': 'error',
    //   'import/no-useless-path-segments': 'error',
    //   'import/no-commonjs': 'error',
    //   'import/newline-after-import': 'error',
    //   'import/no-absolute-path': 'error',
    //   'import/no-amd': 'error',
    //   'import/no-default-export': 'off',

    //   'import/no-extraneous-dependencies': [
    //     'error',
    //     {
    //       devDependencies: true,
    //       peerDependencies: true,
    //       optionalDependencies: false,
    //     },
    //   ],

    //   'import/no-mutable-exports': 'error',
    //   'import/named': 'off',
    //   'import/no-named-default': 'off',
    //   'import/no-named-export': 'off',
    //   'import/no-self-import': 'error',
    //   'import/order': 'off',
    //   'import/prefer-default-export': 'off',
    //   'unused-imports/no-unused-imports': 'error',
    //   'n/no-missing-import': 'off',
    //   'n/no-extraneous-import': 'error',
    //   'n/file-extension-in-import': 'off',
    //   'unicorn/prefer-module': 'error',
    //   'unicorn/prefer-node-protocol': 'error',
    //   'unicorn/prefer-top-level-await': 'error',

    //   'eslint-comments/disable-enable-pair': [
    //     'error',
    //     {
    //       allowWholeFile: true,
    //     },
    //   ],

    //   'eslint-comments/no-aggregating-enable': 'error',
    //   'eslint-comments/no-duplicate-disable': 'error',
    //   'eslint-comments/no-unlimited-disable': 'off',
    //   'eslint-comments/no-unused-disable': 'error',
    //   'eslint-comments/no-unused-enable': 'error',

    //   'eslint-comments/no-use': [
    //     'error',
    //     {
    //       allow: [
    //         'eslint-disable',
    //         'eslint-disable-line',
    //         'eslint-disable-next-line',
    //         'eslint-enable',
    //       ],
    //     },
    //   ],
    // },
  },
  // always last so it disables rules incompatible with prettier during the process execution
  eslintPluginPrettierRecommended,
)

export default configs
