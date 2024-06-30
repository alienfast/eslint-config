import tseslint from 'typescript-eslint'

/**
 * Turn off rules not necessary for js only files.
 *
 * View config with `npx @eslint/config-inspector`
 */
const configs = tseslint.config({
  name: 'alienfast-ruleset-js-only',
  rules: {
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
  },
})

export default configs
