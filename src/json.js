import tseslint from 'typescript-eslint'
import json from 'eslint-plugin-json';
import { BUILD_IGNORES, JS_FILES } from './constants.js';

// npx @eslint/config-inspector 
const configs = tseslint.config(

  {
      name: 'alienfast-json',

    files: ["**/*.json"],
    ...json.configs["recommended"]
  },
{
  name: 'alienfast-json-ignores',
    ignores: [
      ...BUILD_IGNORES,
      ...JS_FILES
    ]
},
);


export default configs;
