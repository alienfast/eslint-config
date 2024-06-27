import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import json from 'eslint-plugin-json';
import { BUILD_IGNORES } from './constants';

// npx @eslint/config-inspector 
const configs = tseslint.config(

// { 
//   name: 'alienfast-other-files',
//     files: ['**/*.{json,md}'],
// },
  {
    files: ["**/*.json"],
    ...json.configs["recommended"]
  },
{
  name: 'alienfast-other-ignores',
    ignores: BUILD_IGNORES
},
// {
//   ...eslintPluginPrettierRecommended,
//   name: 'alienfast-other',
// },
// always last so it disables rules incompatible with prettier during the process execution
// eslintPluginPrettierRecommended
);


export default configs;
