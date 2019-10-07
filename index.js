module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'eslint-comments', 'import', 'simple-import-sort', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/react',
    'plugin:import/typescript',
    'plugin:jest/recommended',
  ],
  env: {
    'jest/globals': true,
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    project: './tsconfig.lint.json',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    //---------------------------------------------
    // eslint
    //
    'arrow-parens': ['error', 'as-needed'],
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
    'sort-keys': 'error',
    'sort-imports': 'off',

    //---------------------------------------------
    // typescript-eslint
    //
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/camelcase': ['error', { ignoreDestructuring: true }],
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
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/unified-signatures': 'error',

    //---------------------------------------------
    // eslint-plugin-import
    //

    // disallow non-import statements appearing before import statements
    'import/first': 'error',
    // Require a newline after the last import/require in a group
    'import/newline-after-import': 'error',
    // Forbid import of modules using absolute paths
    'import/no-absolute-path': 'error',
    // disallow AMD require/define
    'import/no-amd': 'error',
    // forbid default exports
    'import/no-default-export': 'error',
    // Forbid the use of extraneous packages
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        peerDependencies: true,
        optionalDependencies: false,
      },
    ],
    // Forbid mutable exports
    'import/no-mutable-exports': 'error',
    // Prevent importing the default as if it were named
    'import/no-named-default': 'off',
    // Prohibit named exports
    'import/no-named-export': 'off', // we want everything to be a named export
    // Forbid a module from importing itself
    'import/no-self-import': 'error',
    // use the simple sort plugin instead
    'import/order': 'off',
    // Require modules with a single export to use a default export
    'import/prefer-default-export': 'off', // we want everything to be named

    //---------------------------------------------
    // eslint-plugin-eslint-comment
    //

    // require a eslint-enable comment for every eslint-disable comment
    'eslint-comments/disable-enable-pair': [
      'error',
      {
        allowWholeFile: true,
      },
    ],
    // disallow a eslint-enable comment for multiple eslint-disable comments
    'eslint-comments/no-aggregating-enable': 'error',
    // disallow duplicate eslint-disable comments
    'eslint-comments/no-duplicate-disable': 'error',
    // disallow eslint-disable comments without rule names - default generated in apollo
    'eslint-comments/no-unlimited-disable': 'off',
    // disallow unused eslint-disable comments
    'eslint-comments/no-unused-disable': 'error',
    // disallow unused eslint-enable comments
    'eslint-comments/no-unused-enable': 'error',
    // disallow ESLint directive-comments
    'eslint-comments/no-use': [
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
}
