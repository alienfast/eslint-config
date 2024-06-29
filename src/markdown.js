import tseslint from 'typescript-eslint'
import markdown from "eslint-plugin-markdown"
import { BUILD_IGNORES, JSON_FILES, JS_FILES } from './constants.js';

// npx @eslint/config-inspector 
const configs = tseslint.config(

  ...markdown.configs.recommended,
  {
    name: 'alienfast-markdown-ignores',
      ignores: [
        ...BUILD_IGNORES,
        // ...JS_FILES,
        // ...JSON_FILES
      ]
  },
  {
    name: 'alienfast-markdown',
    // files: ["**/*.md"],
  },
);


export default configs;
