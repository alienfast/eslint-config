import tseslint from 'typescript-eslint'

import { configs } from './src/index.js'

export default tseslint.config({
  name: 'project',
  extends: [...configs.recommended],
  // ignore since we are using just js, until we eventually switch this to ts
  rules: {
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
  },
})
