import tseslint from 'typescript-eslint'
import markdown from "eslint-plugin-markdown"
import { BUILD_IGNORES, JS_FILES } from './constants.js';

// npx @eslint/config-inspector 
const configs = tseslint.config(

{
  name: 'alienfast-markdown',
    files: ["**/*.md"],
    ...markdown.configs.recommended
  },
{
  name: 'alienfast-markdown-ignores',
    ignores: [
      ...BUILD_IGNORES,
      ...JS_FILES
    ]
},
);


export default configs;
