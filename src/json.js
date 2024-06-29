import tseslint from 'typescript-eslint'
import json from 'eslint-plugin-json';
import { BUILD_IGNORES, JSON_FILES, JS_FILES, MD_FILES } from './constants.js';

// npx @eslint/config-inspector 
const configs = tseslint.config(
  {
    name: 'alienfast-json-ignores',
    ignores: [
      ...BUILD_IGNORES,
      // ...JS_FILES,
      // ...MD_FILES
    ]
  },
  
    {
        name: 'alienfast-json',
  
      files: JSON_FILES,
      ...json.configs["recommended"]
    },
);


export default configs;
