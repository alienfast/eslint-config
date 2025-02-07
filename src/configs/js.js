import eslint from '@eslint/js'
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import importX from 'eslint-plugin-import-x'
import n from 'eslint-plugin-n'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import reactHooks from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import storybook from 'eslint-plugin-storybook'
import unicorn from 'eslint-plugin-unicorn'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import { ALL_JS_FILES, BUILD_IGNORES, NOT_JS } from '../constants.js'
import { compat } from '../legacy.js'

/**
 * Configuration preset for typescript files with any js/ts extension
 *
 * View configuration with `npx @eslint/config-inspector`
 */
const configs = tseslint.config(
  {
    name: 'af-js-ignores',
    ignores: [...BUILD_IGNORES],
  },
  {
    name: 'af-js-files',
    files: [...ALL_JS_FILES],
  },
  {
    name: 'af-js',
    ignores: NOT_JS,

    extends: [
      // Recommended config applied to all files
      eslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      importX.flatConfigs.errors,
      importX.flatConfigs.warnings,
      importX.flatConfigs.react,
      importX.flatConfigs.typescript, // no need of wrapping in compat.config() since there's no pluginImportX.configs.typescript.plugins
      ...compat.config(reactHooks.configs.recommended),
      ...storybook.configs['flat/recommended'],
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
        // project: ['./tsconfig*.json', './packages/*/tsconfig.json'],
        // project: ['./tsconfig*.json'],
        project: true,
        warnOnUnsupportedTypeScriptVersion: true,
        projectService: {
          // @see https://typescript-eslint.io/packages/parser#projectservice
          // allow one-off root project/package ts files to be linted without further config
          allowDefaultProject: ['*.ts', 'packages/*/*.ts'],
        },
      },
    },

    settings: {
      // add extensions to settings from importX.configs.typescript
      'import-x/extensions': ALL_JS_FILES,
      'import-x/parsers': {
        '@typescript-eslint/parser': ALL_JS_FILES,
      },
      'import-x/resolver': {
        typescript: true,
        node: true,
        // typescript: {
        //   alwaysTryTypes: true,
        //   project: ['packages/*/tsconfig.json'],
        // },
        // node: {
        //   extensions: ALL_JS_FILES,
        // },
      },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
      n,
      unicorn,
    },

    rules: {
      //---------------------------------------------
      // eslint
      //
      'guard-for-in': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-console': 'error',
      'no-eval': 'error',
      'no-new-wrappers': 'error',
      'no-throw-literal': 'error',
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      // note you must disable the base rule as it can report incorrect errors
      'require-await': 'off',
      'sort-keys': 'off', // just too painful with css class ordering to have to ignore most files
      'sort-imports': 'off', // use simple-import-sort instead

      //---------------------------------------------
      // typescript-eslint
      //
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'array-simple',
        },
      ],
      '@typescript-eslint/camelcase': 'off', // apollo generated files
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
      '@typescript-eslint/no-base-to-string': 'off', // annoying about stringifying objects
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-misused-promises': 'off', // costly in terms of time and not used much, even ignored where used.
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-function-type': 'off',
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/unbound-method': 'off', // takes 73s on js!  63% of the timing!
      '@typescript-eslint/unified-signatures': 'error',
      // https://typescript-eslint.io/rules/no-unused-expressions/
      'no-unused-expressions': 'off', // Note: you must disable the base rule as it can report incorrect errors
      '@typescript-eslint/no-unused-expressions': [
        'error',
        { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true },
      ],
      // https://typescript-eslint.io/rules/no-empty-object-type/
      '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'always' }],

      //---------------------------------------------
      // simple-import-sort
      //
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      //---------------------------------------------
      // eslint-plugin-import-x
      //
      'import-x/no-unresolved': 'error', // does not work with file extensions as of 6/8/2022
      'import-x/first': 'error', // disallow non-import statements appearing before import statements
      'import-x/no-duplicates': 'error', // auto-fix merge into single line
      // off for now, because new stuff wants extensions, old stuff doesn't have it
      // 'import-x/extensions': 'error', // Use n/file-extension-in-import instead
      'import-x/no-useless-path-segments': 'error', // Prevent unnecessary path segments in import and require statements. (autofix)
      'import-x/no-commonjs': 'error', // Report CommonJS require calls and module.exports or exports.*.
      'import-x/newline-after-import': 'error', // Require a newline after the last import/require in a group
      'import-x/no-absolute-path': 'error', // Forbid import of modules using absolute paths
      'import-x/no-amd': 'error', // disallow AMD require/define
      'import-x/no-default-export': 'off', // forbid default exports (more difficult to import, rename, etc), but onerous on the whole with stories, routes etc
      // Forbid the use of extraneous packages
      'import-x/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
          peerDependencies: true,
          optionalDependencies: false,
        },
      ],

      'import-x/no-mutable-exports': 'error', // Forbid mutable exports
      'import-x/named': 'off', // not needed - ts does this
      'import-x/no-named-default': 'off', // Prevent importing the default as if it were named
      'import-x/no-named-export': 'off', // Prohibit named exports, we want everything to be a named export
      'import-x/no-self-import': 'error', // Forbid a module from importing itself
      'import-x/order': 'off', // use the simple-import-sort instead
      'import-x/prefer-default-export': 'off', // we want everything to be named
      //
      'unused-imports/no-unused-imports': 'error',

      //---------------------------------------------
      // eslint-plugin-node (use this to setup for esm transition)
      //
      'n/no-missing-import': 'off',
      'n/no-extraneous-import': 'error',
      'n/file-extension-in-import': ['error', 'always'], // enforce/fix file extension in import statements

      //---------------------------------------------
      // eslint-plugin-unicorn (setup for esm transition) https://gist.github.com/Jaid/164668c0151ae09d2bc81be78a203dd5
      //
      'unicorn/prefer-module': 'error', // Prefer JavaScript modules (ESM) over CommonJS. (autofix)
      'unicorn/prefer-node-protocol': 'error', // Prefer using the node: protocol when importing Node.js builtin modules.
      'unicorn/prefer-top-level-await': 'error', // Prefer top-level await over top-level promises and async function calls.

      //---------------------------------------------
      //
      //
      // require a eslint-enable comment for every eslint-disable comment
      '@eslint-community/eslint-comments/disable-enable-pair': [
        'error',
        {
          allowWholeFile: true,
        },
      ],
      '@eslint-community/eslint-comments/no-aggregating-enable': 'error', // disallow a eslint-enable comment for multiple eslint-disable comments
      '@eslint-community/eslint-comments/no-duplicate-disable': 'error', // disallow duplicate eslint-disable comments
      '@eslint-community/eslint-comments/no-unlimited-disable': 'off', // disallow eslint-disable comments without rule names - default generated in apollo
      '@eslint-community/eslint-comments/no-unused-disable': 'error', // disallow unused eslint-disable comments
      '@eslint-community/eslint-comments/no-unused-enable': 'error', // disallow unused eslint-enable comments
      // disallow ESLint directive-comments
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
  // allow commonjs for cjs files
  {
    name: 'af-limits-cjs',
    files: ['**/*.cjs'],
    rules: {
      'import-x/no-commonjs': 'off',
    },
  },
  // don't worry much about the eslint config file
  {
    name: 'af-limits-eslint.config.mjs',
    files: ['**/eslint.config.mjs'],
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
    },
  },
  // always last so it disables rules incompatible with prettier during the process execution
  eslintPluginPrettierRecommended,
)

export default configs
