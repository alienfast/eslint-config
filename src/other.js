import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'


// npx @eslint/config-inspector 
const configs = tseslint.config(
{
  name: 'alienfast-other',
  extends: [
      {name: 'prettier.recommended', ...eslintPluginPrettierRecommended},
  ],
},
{ 
  name: 'alienfast-other-files',
    files: ['**/*.{json,md}'],
},
{
  name: 'alienfast-other-ignores',
    ignores: []
}
);


export default configs;
