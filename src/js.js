import eslint from '@eslint/js'
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import importX from 'eslint-plugin-import-x'
// import tsParser from '@typescript-eslint/parser'
import n from 'eslint-plugin-n'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import reactHooks from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import storybook from 'eslint-plugin-storybook'
// import unicorn from 'eslint-plugin-unicorn'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import { ALL_JS_FILES, BUILD_IGNORES, JS_FILES, TS_FILES } from './constants.js'
import { compat } from './legacy.js'

// console.log('fixup')
// console.log(fixupConfigRules(compat.extends('plugin:import/typescript')))
// console.log('straight compat')
// console.log(compat.extends('plugin:import/typescript'))
// process.exit(0)

// npx @eslint/config-inspector
const configs = tseslint.config(
  {
    name: 'alienfast-js-files',
    files: [...JS_FILES, ...TS_FILES],
  },
  {
    name: 'alienfast-js-ignores',
    ignores: [...BUILD_IGNORES],
  },
  {
    name: 'alienfast-js',
    extends: [
      // Recommended config applied to all files
      eslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...compat.config(importX.configs.errors), // still has plugins: []
      ...compat.config(importX.configs.warnings), // https://github.com/un-ts/eslint-plugin-import-x/issues/29#issuecomment-2148843214
      ...compat.config(importX.configs.react),
      importX.configs.typescript, // no need of wrapping in compat.config() since there's no pluginImportX.configs.typescript.plugins
      ...compat.config(reactHooks.configs.recommended),
      ...compat.config(storybook.configs.recommended),
      //   ...fixupConfigRules(compat.extends('plugin:storybook/recommended'))[0],
      comments.recommended,
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      // parser: tsParser,
      parserOptions: {
        // project: true, // find the closest tsconfig file. ['./tsconfig*.json', './packages/*/tsconfig.json'],
        project: ['./tsconfig*.json', './packages/*/tsconfig.json'],
      },
    },

    settings: {
      // add extensions to settings from importX.configs.typescript
      'import-x/extensions': ALL_JS_FILES,
      'import-x/parsers': {
        '@typescript-eslint/parser': ALL_JS_FILES,
      },
      'import-x/resolver': {
        typescript: {
          // alwaysTryTypes: true,
          project: ['packages/*/tsconfig.json'],
        },
        node: {
          extensions: ALL_JS_FILES,
        },
      },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
      n,
      //   unicorn,
    },

    rules: {
      'guard-for-in': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-console': 'error',
      'no-eval': 'error',
      'no-new-wrappers': 'error',
      'no-throw-literal': 'error',
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      'require-await': 'off',
      'sort-keys': 'off',
      'sort-imports': 'off',

      //
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'array-simple',
        },
      ],
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          overrides: {
            constructors: 'no-public',
          },
        },
      ],
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-function-type': 'off',
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/unified-signatures': 'error',

      //
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      //
      'import-x/no-unresolved': 'error',
      'import-x/first': 'error',
      'import-x/no-duplicates': 'error',

      // off for now, because new stuff wants extensions, old stuff doesn't have it
      //'import-x/extensions': 'error',
      'import-x/no-useless-path-segments': 'error',
      'import-x/no-commonjs': 'error',
      'import-x/newline-after-import': 'error',
      'import-x/no-absolute-path': 'error',
      'import-x/no-amd': 'error',
      'import-x/no-default-export': 'off',
      'import-x/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
          peerDependencies: true,
          optionalDependencies: false,
        },
      ],
      'import-x/no-mutable-exports': 'error',
      'import-x/named': 'off',
      'import-x/no-named-default': 'off',
      'import-x/no-named-export': 'off',
      'import-x/no-self-import': 'error',
      'import-x/order': 'off',
      'import-x/prefer-default-export': 'off',

      //
      'unused-imports/no-unused-imports': 'error',

      //---------------------------------------------
      // eslint-plugin-node (use this to setup for esm transition)
      //
      'n/no-missing-import': 'off',
      'n/no-extraneous-import': 'error',
      'n/file-extension-in-import': 'off',

      //---------------------------------------------
      // eslint-plugin-unicornd (setup for esm transition) https://gist.github.com/Jaid/164668c0151ae09d2bc81be78a203dd5
      //
      // 'unicorn/prefer-module': 'error', // Prefer JavaScript modules (ESM) over CommonJS. (autofix)
      // 'unicorn/prefer-node-protocol': 'error', // Prefer using the node: protocol when importing Node.js builtin modules.
      // 'unicorn/prefer-top-level-await': 'error', // Prefer top-level await over top-level promises and async function calls.

      //
      '@eslint-community/eslint-comments/disable-enable-pair': [
        'error',
        {
          allowWholeFile: true,
        },
      ],
      '@eslint-community/eslint-comments/no-aggregating-enable': 'error',
      '@eslint-community/eslint-comments/no-duplicate-disable': 'error',
      '@eslint-community/eslint-comments/no-unlimited-disable': 'off',
      '@eslint-community/eslint-comments/no-unused-disable': 'error',
      '@eslint-community/eslint-comments/no-unused-enable': 'error',
      '@eslint-community/eslint-comments/no-use': [
        'error',
        {
          allow: [
            'eslint-disable',
            'eslint-disable-line',
            'eslint-disable-next-line',
            'eslint-enable',
          ],
        },
      ],
    },
  },
  // always last so it disables rules incompatible with prettier during the process execution
  eslintPluginPrettierRecommended,
)

export default configs
