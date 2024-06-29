// eslint.config.mjs
import tseslint4 from "typescript-eslint";

// src/js.js
import path from "node:path";
import { fileURLToPath } from "node:url";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import _import from "eslint-plugin-import";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import tseslint from "typescript-eslint";

// src/constants.js
var BUILD_IGNORES = [
  "packages/*/lib",
  "./lib/",
  "packages/*/dist",
  "./dist/",
  "**/typings-local",
  "**/typings",
  "**/.pnp*",
  "**/.yarn"
];
var TS_FILES = ["**/*.{ts,tsx,mts,cts}"];
var JS_FILES = ["**/*.{js,mjs,cjs}"];
var JSON_FILES = ["**/*.json"];

// src/js.js
var __injected_import_meta_url__ = "file:///Users/kross/projects/eslint-config/src/js.js";
var __filename = fileURLToPath(__injected_import_meta_url__);
var __dirname = path.dirname(__filename);
var compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  allConfig: eslint.configs.all
});
console.log(fixupConfigRules(compat.extends("plugin:import/typescript")));
process.exit(0);
var configs = tseslint.config(
  {
    name: "alienfast-js-files",
    files: [...JS_FILES, ...TS_FILES]
  },
  {
    name: "alienfast-js-ignores",
    ignores: [
      ...BUILD_IGNORES
      // ...JSON_FILES,
      // ...MD_FILES
    ]
  },
  {
    name: "alienfast-js",
    extends: [
      {
        name: "eslint.configs.recommended",
        // name is missing and this helps with inspector
        ...eslint.configs.recommended
      },
      // Recommended config applied to all files
      ...tseslint.configs.recommendedTypeChecked,
      { name: "import.errors", ...fixupConfigRules(compat.extends("plugin:import/errors"))[0] },
      // { name: 'import.warnings', ...fixupConfigRules(compat.extends('plugin:import/warnings'))[0] },
      // { name: 'import.react', ...fixupConfigRules(compat.extends('plugin:import/react'))[0] },
      {
        name: "import.typescript",
        ...fixupConfigRules(compat.extends("plugin:import/typescript"))[0]
      }
      // {
      //   name: 'react-hooks.recommended',
      //   ...fixupConfigRules(compat.extends('plugin:react-hooks/recommended'))[0],
      // },
      // {
      //   name: 'storybook.recommended',
      //   ...fixupConfigRules(compat.extends('plugin:storybook/recommended'))[0],
      // },
    ],
    plugins: {
      import: fixupPluginRules(_import)
      //   'eslint-comments': eslintComments,
      //   'simple-import-sort': simpleImportSort,
      //   'unused-imports': unusedImports,
      //   n,
      //   unicorn,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      // parser: tsParser,
      // ecmaVersion: 'latest',
      // sourceType: 'module',
      parserOptions: {
        project: true
        // find the closest tsconfig file. ['./tsconfig*.json', './packages/*/tsconfig.json'],
      }
    },
    settings: {
      // https://github.com/import-js/eslint-import-resolver-typescript#configuration
      "import/parsers": {
        "@typescript-eslint/parser": TS_FILES
      },
      "import/resolver": {
        typescript: {
          project: ["packages/*/tsconfig.json"]
        }
      }
    },
    rules: {
      //   'guard-for-in': 'error',
      //   'no-bitwise': 'error',
      //   'no-caller': 'error',
      //   'no-console': 'error',
      //   'no-eval': 'error',
      //   'no-new-wrappers': 'error',
      //   'no-throw-literal': 'error',
      //   'object-shorthand': 'error',
      //   'one-var': ['error', 'never'],
      //   'require-await': 'off',
      //   'sort-keys': 'off',
      //   'sort-imports': 'off',
      //   '@typescript-eslint/restrict-template-expressions': 'off',
      //   '@typescript-eslint/array-type': [
      //     'error',
      //     {
      //       default: 'array-simple',
      //     },
      //   ],
      //   '@typescript-eslint/camelcase': 'off',
      //   '@typescript-eslint/explicit-function-return-type': 'off',
      //   '@typescript-eslint/explicit-member-accessibility': [
      //     'error',
      //     {
      //       overrides: {
      //         constructors: 'no-public',
      //       },
      //     },
      //   ],
      //   '@typescript-eslint/member-ordering': 'error',
      //   '@typescript-eslint/no-empty-function': 'off',
      //   '@typescript-eslint/no-empty-interface': 'off',
      //   '@typescript-eslint/no-explicit-any': 'off',
      //   '@typescript-eslint/no-misused-promises': 'off',
      //   '@typescript-eslint/no-non-null-assertion': 'off',
      //   '@typescript-eslint/no-unnecessary-type-assertion': 'off',
      //   '@typescript-eslint/no-unused-vars': 'off',
      //   '@typescript-eslint/no-use-before-define': 'off',
      //   '@typescript-eslint/no-var-requires': 'off',
      //   '@typescript-eslint/prefer-for-of': 'error',
      //   '@typescript-eslint/prefer-function-type': 'off',
      //   '@typescript-eslint/require-await': 'off',
      //   '@typescript-eslint/unbound-method': 'off',
      //   '@typescript-eslint/unified-signatures': 'error',
      //   'simple-import-sort/imports': 'error',
      //   'simple-import-sort/exports': 'error',
      //   'import/no-unresolved': 'error',
      //   'import/first': 'error',
      //   'import/no-duplicates': 'error',
      //   'import/extensions': 'error',
      //   'import/no-useless-path-segments': 'error',
      //   'import/no-commonjs': 'error',
      //   'import/newline-after-import': 'error',
      //   'import/no-absolute-path': 'error',
      //   'import/no-amd': 'error',
      //   'import/no-default-export': 'off',
      //   'import/no-extraneous-dependencies': [
      //     'error',
      //     {
      //       devDependencies: true,
      //       peerDependencies: true,
      //       optionalDependencies: false,
      //     },
      //   ],
      //   'import/no-mutable-exports': 'error',
      //   'import/named': 'off',
      //   'import/no-named-default': 'off',
      //   'import/no-named-export': 'off',
      //   'import/no-self-import': 'error',
      //   'import/order': 'off',
      //   'import/prefer-default-export': 'off',
      //   'unused-imports/no-unused-imports': 'error',
      //   'n/no-missing-import': 'off',
      //   'n/no-extraneous-import': 'error',
      //   'n/file-extension-in-import': 'off',
      //   'unicorn/prefer-module': 'error',
      //   'unicorn/prefer-node-protocol': 'error',
      //   'unicorn/prefer-top-level-await': 'error',
      //   'eslint-comments/disable-enable-pair': [
      //     'error',
      //     {
      //       allowWholeFile: true,
      //     },
      //   ],
      //   'eslint-comments/no-aggregating-enable': 'error',
      //   'eslint-comments/no-duplicate-disable': 'error',
      //   'eslint-comments/no-unlimited-disable': 'off',
      //   'eslint-comments/no-unused-disable': 'error',
      //   'eslint-comments/no-unused-enable': 'error',
      //   'eslint-comments/no-use': [
      //     'error',
      //     {
      //       allow: [
      //         'eslint-disable',
      //         'eslint-disable-line',
      //         'eslint-disable-next-line',
      //         'eslint-enable',
      //       ],
      //     },
      //   ],
    }
  },
  // always last so it disables rules incompatible with prettier during the process execution
  eslintPluginPrettierRecommended
);
var js_default = configs;

// src/json.js
import json from "eslint-plugin-json";
import tseslint2 from "typescript-eslint";
var configs2 = tseslint2.config(
  {
    name: "alienfast-json-ignores",
    ignores: [
      ...BUILD_IGNORES
      // ...JS_FILES,
      // ...MD_FILES
    ]
  },
  {
    name: "alienfast-json",
    files: JSON_FILES,
    ...json.configs["recommended"]
  }
);
var json_default = configs2;

// src/markdown.js
import markdown from "eslint-plugin-markdown";
import tseslint3 from "typescript-eslint";
var configs3 = tseslint3.config(
  ...markdown.configs.recommended,
  {
    name: "alienfast-markdown-ignores",
    ignores: [
      ...BUILD_IGNORES
      // ...JS_FILES,
      // ...JSON_FILES
    ]
  },
  {
    name: "alienfast-markdown"
    // files: ["**/*.md"],
  }
);
var markdown_default = configs3;

// src/index.js
var configs4 = {
  js: js_default,
  json: json_default,
  markdown: markdown_default,
  recommended: [...js_default, ...json_default, ...markdown_default]
};
var src_default = configs4;

// eslint.config.mjs
var eslint_config_default = tseslint4.config(
  // {
  // name: "project-js",
  // extends: [
  //     ...configs.js,
  // ],
  // languageOptions: {
  //     // ecmaVersion: 5,
  //     // sourceType: "script",
  //     parserOptions: {
  //         // createDefaultProgram: true,
  //         project: ["./tsconfig.lint.json"],
  //     },
  // }},
  {
    name: "project-json",
    extends: [
      // ...configs.json,
      // ...configs.markdown,
      ...src_default.js
    ],
    languageOptions: {
      // ecmaVersion: 5,
      // sourceType: "script",
      parserOptions: {
        // createDefaultProgram: true,
        project: ["./tsconfig.lint.json"]
      }
    },
    rules: {
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off"
    }
  }
);
export {
  eslint_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZXNsaW50LmNvbmZpZy5tanMiLCAic3JjL2pzLmpzIiwgInNyYy9jb25zdGFudHMuanMiLCAic3JjL2pzb24uanMiLCAic3JjL21hcmtkb3duLmpzIiwgInNyYy9pbmRleC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCIvVXNlcnMva3Jvc3MvcHJvamVjdHMvZXNsaW50LWNvbmZpZy9lc2xpbnQuY29uZmlnLm1qc1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCIvVXNlcnMva3Jvc3MvcHJvamVjdHMvZXNsaW50LWNvbmZpZ1wiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vVXNlcnMva3Jvc3MvcHJvamVjdHMvZXNsaW50LWNvbmZpZy9lc2xpbnQuY29uZmlnLm1qc1wiO2ltcG9ydCB0c2VzbGludCBmcm9tICd0eXBlc2NyaXB0LWVzbGludCdcbi8vIGltcG9ydCBwYXRoIGZyb20gXCJub2RlOnBhdGhcIjtcbi8vIGltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tIFwibm9kZTp1cmxcIjtcbi8vIGltcG9ydCBqcyBmcm9tIFwiQGVzbGludC9qc1wiO1xuLy8gaW1wb3J0IHsgRmxhdENvbXBhdCB9IGZyb20gXCJAZXNsaW50L2VzbGludHJjXCI7XG5pbXBvcnQgY29uZmlncyBmcm9tICcuL3NyYy9pbmRleC5qcydcblxuLy8gY29uc3QgX19maWxlbmFtZSA9IGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKTtcbi8vIGNvbnN0IF9fZGlybmFtZSA9IHBhdGguZGlybmFtZShfX2ZpbGVuYW1lKTtcbi8vIGNvbnN0IGNvbXBhdCA9IG5ldyBGbGF0Q29tcGF0KHtcbi8vICAgICBiYXNlRGlyZWN0b3J5OiBfX2Rpcm5hbWUsXG4vLyAgICAgcmVjb21tZW5kZWRDb25maWc6IGpzLmNvbmZpZ3MucmVjb21tZW5kZWQsXG4vLyAgICAgYWxsQ29uZmlnOiBqcy5jb25maWdzLmFsbFxuLy8gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRzZXNsaW50LmNvbmZpZyhcbiAgLy8ge1xuICAvLyBuYW1lOiBcInByb2plY3QtanNcIixcbiAgLy8gZXh0ZW5kczogW1xuICAvLyAgICAgLi4uY29uZmlncy5qcyxcbiAgLy8gXSxcblxuICAvLyBsYW5ndWFnZU9wdGlvbnM6IHtcbiAgLy8gICAgIC8vIGVjbWFWZXJzaW9uOiA1LFxuICAvLyAgICAgLy8gc291cmNlVHlwZTogXCJzY3JpcHRcIixcblxuICAvLyAgICAgcGFyc2VyT3B0aW9uczoge1xuICAvLyAgICAgICAgIC8vIGNyZWF0ZURlZmF1bHRQcm9ncmFtOiB0cnVlLFxuICAvLyAgICAgICAgIHByb2plY3Q6IFtcIi4vdHNjb25maWcubGludC5qc29uXCJdLFxuICAvLyAgICAgfSxcblxuICAvLyB9fSxcbiAge1xuICAgIG5hbWU6ICdwcm9qZWN0LWpzb24nLFxuICAgIGV4dGVuZHM6IFtcbiAgICAgIC8vIC4uLmNvbmZpZ3MuanNvbixcbiAgICAgIC8vIC4uLmNvbmZpZ3MubWFya2Rvd24sXG4gICAgICAuLi5jb25maWdzLmpzLFxuICAgIF0sXG4gICAgbGFuZ3VhZ2VPcHRpb25zOiB7XG4gICAgICAvLyBlY21hVmVyc2lvbjogNSxcbiAgICAgIC8vIHNvdXJjZVR5cGU6IFwic2NyaXB0XCIsXG5cbiAgICAgIHBhcnNlck9wdGlvbnM6IHtcbiAgICAgICAgLy8gY3JlYXRlRGVmYXVsdFByb2dyYW06IHRydWUsXG4gICAgICAgIHByb2plY3Q6IFsnLi90c2NvbmZpZy5saW50Lmpzb24nXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBydWxlczoge1xuICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXJndW1lbnQnOiAnb2ZmJyxcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3MnOiAnb2ZmJyxcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMnOiAnb2ZmJyxcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnQnOiAnb2ZmJyxcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGwnOiAnb2ZmJyxcbiAgICB9LFxuICB9LFxuKVxuIiwgImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiL1VzZXJzL2tyb3NzL3Byb2plY3RzL2VzbGludC1jb25maWcvc3JjL2pzLmpzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIi9Vc2Vycy9rcm9zcy9wcm9qZWN0cy9lc2xpbnQtY29uZmlnL3NyY1wiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vVXNlcnMva3Jvc3MvcHJvamVjdHMvZXNsaW50LWNvbmZpZy9zcmMvanMuanNcIjtpbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGZpeHVwQ29uZmlnUnVsZXMsIGZpeHVwUGx1Z2luUnVsZXMgfSBmcm9tICdAZXNsaW50L2NvbXBhdCdcbi8vIGltcG9ydCBzaW1wbGVJbXBvcnRTb3J0IGZyb20gJ2VzbGludC1wbHVnaW4tc2ltcGxlLWltcG9ydC1zb3J0J1xuLy8gaW1wb3J0IHVuaWNvcm4gZnJvbSAnZXNsaW50LXBsdWdpbi11bmljb3JuJ1xuLy8gaW1wb3J0IHVudXNlZEltcG9ydHMgZnJvbSAnZXNsaW50LXBsdWdpbi11bnVzZWQtaW1wb3J0cydcbi8vIGltcG9ydCB0c1BhcnNlciBmcm9tICdAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyJ1xuLy8gaW1wb3J0IGVzbGludENvbW1lbnRzIGZyb20gJ2VzbGludC1wbHVnaW4tZXNsaW50LWNvbW1lbnRzJ1xuLy8gaW1wb3J0IG4gZnJvbSAnZXNsaW50LXBsdWdpbi1uJ1xuXG5pbXBvcnQgeyBGbGF0Q29tcGF0IH0gZnJvbSAnQGVzbGludC9lc2xpbnRyYydcbmltcG9ydCBlc2xpbnQgZnJvbSAnQGVzbGludC9qcydcbmltcG9ydCBfaW1wb3J0IGZyb20gJ2VzbGludC1wbHVnaW4taW1wb3J0J1xuaW1wb3J0IGVzbGludFBsdWdpblByZXR0aWVyUmVjb21tZW5kZWQgZnJvbSAnZXNsaW50LXBsdWdpbi1wcmV0dGllci9yZWNvbW1lbmRlZCdcbmltcG9ydCBnbG9iYWxzIGZyb20gJ2dsb2JhbHMnXG5pbXBvcnQgdHNlc2xpbnQgZnJvbSAndHlwZXNjcmlwdC1lc2xpbnQnXG5cbmltcG9ydCB7IEJVSUxEX0lHTk9SRVMsIEpTX0ZJTEVTLCBUU19GSUxFUyB9IGZyb20gJy4vY29uc3RhbnRzLmpzJ1xuXG5jb25zdCBfX2ZpbGVuYW1lID0gZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpXG5jb25zdCBfX2Rpcm5hbWUgPSBwYXRoLmRpcm5hbWUoX19maWxlbmFtZSlcbmNvbnN0IGNvbXBhdCA9IG5ldyBGbGF0Q29tcGF0KHtcbiAgYmFzZURpcmVjdG9yeTogX19kaXJuYW1lLFxuICByZWNvbW1lbmRlZENvbmZpZzogZXNsaW50LmNvbmZpZ3MucmVjb21tZW5kZWQsXG4gIGFsbENvbmZpZzogZXNsaW50LmNvbmZpZ3MuYWxsLFxufSlcblxuY29uc29sZS5sb2coZml4dXBDb25maWdSdWxlcyhjb21wYXQuZXh0ZW5kcygncGx1Z2luOmltcG9ydC90eXBlc2NyaXB0JykpKVxucHJvY2Vzcy5leGl0KDApXG5cbi8vIG5weCBAZXNsaW50L2NvbmZpZy1pbnNwZWN0b3JcbmNvbnN0IGNvbmZpZ3MgPSB0c2VzbGludC5jb25maWcoXG4gIHtcbiAgICBuYW1lOiAnYWxpZW5mYXN0LWpzLWZpbGVzJyxcbiAgICBmaWxlczogWy4uLkpTX0ZJTEVTLCAuLi5UU19GSUxFU10sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnYWxpZW5mYXN0LWpzLWlnbm9yZXMnLFxuICAgIGlnbm9yZXM6IFtcbiAgICAgIC4uLkJVSUxEX0lHTk9SRVMsXG4gICAgICAvLyAuLi5KU09OX0ZJTEVTLFxuICAgICAgLy8gLi4uTURfRklMRVNcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2FsaWVuZmFzdC1qcycsXG4gICAgZXh0ZW5kczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnZXNsaW50LmNvbmZpZ3MucmVjb21tZW5kZWQnLCAvLyBuYW1lIGlzIG1pc3NpbmcgYW5kIHRoaXMgaGVscHMgd2l0aCBpbnNwZWN0b3JcbiAgICAgICAgLi4uZXNsaW50LmNvbmZpZ3MucmVjb21tZW5kZWQsXG4gICAgICB9LCAvLyBSZWNvbW1lbmRlZCBjb25maWcgYXBwbGllZCB0byBhbGwgZmlsZXNcbiAgICAgIC4uLnRzZXNsaW50LmNvbmZpZ3MucmVjb21tZW5kZWRUeXBlQ2hlY2tlZCxcbiAgICAgIHsgbmFtZTogJ2ltcG9ydC5lcnJvcnMnLCAuLi5maXh1cENvbmZpZ1J1bGVzKGNvbXBhdC5leHRlbmRzKCdwbHVnaW46aW1wb3J0L2Vycm9ycycpKVswXSB9LFxuICAgICAgLy8geyBuYW1lOiAnaW1wb3J0Lndhcm5pbmdzJywgLi4uZml4dXBDb25maWdSdWxlcyhjb21wYXQuZXh0ZW5kcygncGx1Z2luOmltcG9ydC93YXJuaW5ncycpKVswXSB9LFxuICAgICAgLy8geyBuYW1lOiAnaW1wb3J0LnJlYWN0JywgLi4uZml4dXBDb25maWdSdWxlcyhjb21wYXQuZXh0ZW5kcygncGx1Z2luOmltcG9ydC9yZWFjdCcpKVswXSB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnaW1wb3J0LnR5cGVzY3JpcHQnLFxuICAgICAgICAuLi5maXh1cENvbmZpZ1J1bGVzKGNvbXBhdC5leHRlbmRzKCdwbHVnaW46aW1wb3J0L3R5cGVzY3JpcHQnKSlbMF0sXG4gICAgICB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICBuYW1lOiAncmVhY3QtaG9va3MucmVjb21tZW5kZWQnLFxuICAgICAgLy8gICAuLi5maXh1cENvbmZpZ1J1bGVzKGNvbXBhdC5leHRlbmRzKCdwbHVnaW46cmVhY3QtaG9va3MvcmVjb21tZW5kZWQnKSlbMF0sXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICBuYW1lOiAnc3Rvcnlib29rLnJlY29tbWVuZGVkJyxcbiAgICAgIC8vICAgLi4uZml4dXBDb25maWdSdWxlcyhjb21wYXQuZXh0ZW5kcygncGx1Z2luOnN0b3J5Ym9vay9yZWNvbW1lbmRlZCcpKVswXSxcbiAgICAgIC8vIH0sXG4gICAgXSxcbiAgICBwbHVnaW5zOiB7XG4gICAgICBpbXBvcnQ6IGZpeHVwUGx1Z2luUnVsZXMoX2ltcG9ydCksXG4gICAgLy8gICAnZXNsaW50LWNvbW1lbnRzJzogZXNsaW50Q29tbWVudHMsXG4gICAgLy8gICAnc2ltcGxlLWltcG9ydC1zb3J0Jzogc2ltcGxlSW1wb3J0U29ydCxcbiAgICAvLyAgICd1bnVzZWQtaW1wb3J0cyc6IHVudXNlZEltcG9ydHMsXG4gICAgLy8gICBuLFxuICAgIC8vICAgdW5pY29ybixcbiAgICB9LFxuXG4gICAgbGFuZ3VhZ2VPcHRpb25zOiB7XG4gICAgICBnbG9iYWxzOiB7XG4gICAgICAgIC4uLmdsb2JhbHMuYnJvd3NlcixcbiAgICAgICAgLi4uZ2xvYmFscy5ub2RlLFxuICAgICAgfSxcblxuICAgICAgLy8gcGFyc2VyOiB0c1BhcnNlcixcbiAgICAgIC8vIGVjbWFWZXJzaW9uOiAnbGF0ZXN0JyxcbiAgICAgIC8vIHNvdXJjZVR5cGU6ICdtb2R1bGUnLFxuXG4gICAgICBwYXJzZXJPcHRpb25zOiB7XG4gICAgICAgIHByb2plY3Q6IHRydWUsIC8vIGZpbmQgdGhlIGNsb3Nlc3QgdHNjb25maWcgZmlsZS4gWycuL3RzY29uZmlnKi5qc29uJywgJy4vcGFja2FnZXMvKi90c2NvbmZpZy5qc29uJ10sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBzZXR0aW5nczoge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ltcG9ydC1qcy9lc2xpbnQtaW1wb3J0LXJlc29sdmVyLXR5cGVzY3JpcHQjY29uZmlndXJhdGlvblxuICAgICAgJ2ltcG9ydC9wYXJzZXJzJzoge1xuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L3BhcnNlcic6IFRTX0ZJTEVTLFxuICAgICAgfSxcbiAgICAgICdpbXBvcnQvcmVzb2x2ZXInOiB7XG4gICAgICAgIHR5cGVzY3JpcHQ6IHtcbiAgICAgICAgICBwcm9qZWN0OiBbJ3BhY2thZ2VzLyovdHNjb25maWcuanNvbiddLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgcnVsZXM6IHtcbiAgICAvLyAgICdndWFyZC1mb3ItaW4nOiAnZXJyb3InLFxuICAgIC8vICAgJ25vLWJpdHdpc2UnOiAnZXJyb3InLFxuICAgIC8vICAgJ25vLWNhbGxlcic6ICdlcnJvcicsXG4gICAgLy8gICAnbm8tY29uc29sZSc6ICdlcnJvcicsXG4gICAgLy8gICAnbm8tZXZhbCc6ICdlcnJvcicsXG4gICAgLy8gICAnbm8tbmV3LXdyYXBwZXJzJzogJ2Vycm9yJyxcbiAgICAvLyAgICduby10aHJvdy1saXRlcmFsJzogJ2Vycm9yJyxcbiAgICAvLyAgICdvYmplY3Qtc2hvcnRoYW5kJzogJ2Vycm9yJyxcbiAgICAvLyAgICdvbmUtdmFyJzogWydlcnJvcicsICduZXZlciddLFxuICAgIC8vICAgJ3JlcXVpcmUtYXdhaXQnOiAnb2ZmJyxcbiAgICAvLyAgICdzb3J0LWtleXMnOiAnb2ZmJyxcbiAgICAvLyAgICdzb3J0LWltcG9ydHMnOiAnb2ZmJyxcbiAgICAvLyAgICdAdHlwZXNjcmlwdC1lc2xpbnQvcmVzdHJpY3QtdGVtcGxhdGUtZXhwcmVzc2lvbnMnOiAnb2ZmJyxcblxuICAgIC8vICAgJ0B0eXBlc2NyaXB0LWVzbGludC9hcnJheS10eXBlJzogW1xuICAgIC8vICAgICAnZXJyb3InLFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgZGVmYXVsdDogJ2FycmF5LXNpbXBsZScsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICBdLFxuXG4gICAgLy8gICAnQHR5cGVzY3JpcHQtZXNsaW50L2NhbWVsY2FzZSc6ICdvZmYnLFxuICAgIC8vICAgJ0B0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSc6ICdvZmYnLFxuXG4gICAgLy8gICAnQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1lbWJlci1hY2Nlc3NpYmlsaXR5JzogW1xuICAgIC8vICAgICAnZXJyb3InLFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgb3ZlcnJpZGVzOiB7XG4gICAgLy8gICAgICAgICBjb25zdHJ1Y3RvcnM6ICduby1wdWJsaWMnLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICBdLFxuXG4gICAgLy8gICAnQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZyc6ICdlcnJvcicsXG4gICAgLy8gICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uJzogJ29mZicsXG4gICAgLy8gICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWludGVyZmFjZSc6ICdvZmYnLFxuICAgIC8vICAgJ0B0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnknOiAnb2ZmJyxcbiAgICAvLyAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbWlzdXNlZC1wcm9taXNlcyc6ICdvZmYnLFxuICAgIC8vICAgJ0B0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb24nOiAnb2ZmJyxcbiAgICAvLyAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5uZWNlc3NhcnktdHlwZS1hc3NlcnRpb24nOiAnb2ZmJyxcbiAgICAvLyAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMnOiAnb2ZmJyxcbiAgICAvLyAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmUnOiAnb2ZmJyxcbiAgICAvLyAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdmFyLXJlcXVpcmVzJzogJ29mZicsXG4gICAgLy8gICAnQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1mb3Itb2YnOiAnZXJyb3InLFxuICAgIC8vICAgJ0B0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItZnVuY3Rpb24tdHlwZSc6ICdvZmYnLFxuICAgIC8vICAgJ0B0eXBlc2NyaXB0LWVzbGludC9yZXF1aXJlLWF3YWl0JzogJ29mZicsXG4gICAgLy8gICAnQHR5cGVzY3JpcHQtZXNsaW50L3VuYm91bmQtbWV0aG9kJzogJ29mZicsXG4gICAgLy8gICAnQHR5cGVzY3JpcHQtZXNsaW50L3VuaWZpZWQtc2lnbmF0dXJlcyc6ICdlcnJvcicsXG4gICAgLy8gICAnc2ltcGxlLWltcG9ydC1zb3J0L2ltcG9ydHMnOiAnZXJyb3InLFxuICAgIC8vICAgJ3NpbXBsZS1pbXBvcnQtc29ydC9leHBvcnRzJzogJ2Vycm9yJyxcbiAgICAvLyAgICdpbXBvcnQvbm8tdW5yZXNvbHZlZCc6ICdlcnJvcicsXG4gICAgLy8gICAnaW1wb3J0L2ZpcnN0JzogJ2Vycm9yJyxcbiAgICAvLyAgICdpbXBvcnQvbm8tZHVwbGljYXRlcyc6ICdlcnJvcicsXG4gICAgLy8gICAnaW1wb3J0L2V4dGVuc2lvbnMnOiAnZXJyb3InLFxuICAgIC8vICAgJ2ltcG9ydC9uby11c2VsZXNzLXBhdGgtc2VnbWVudHMnOiAnZXJyb3InLFxuICAgIC8vICAgJ2ltcG9ydC9uby1jb21tb25qcyc6ICdlcnJvcicsXG4gICAgLy8gICAnaW1wb3J0L25ld2xpbmUtYWZ0ZXItaW1wb3J0JzogJ2Vycm9yJyxcbiAgICAvLyAgICdpbXBvcnQvbm8tYWJzb2x1dGUtcGF0aCc6ICdlcnJvcicsXG4gICAgLy8gICAnaW1wb3J0L25vLWFtZCc6ICdlcnJvcicsXG4gICAgLy8gICAnaW1wb3J0L25vLWRlZmF1bHQtZXhwb3J0JzogJ29mZicsXG5cbiAgICAvLyAgICdpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMnOiBbXG4gICAgLy8gICAgICdlcnJvcicsXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICBkZXZEZXBlbmRlbmNpZXM6IHRydWUsXG4gICAgLy8gICAgICAgcGVlckRlcGVuZGVuY2llczogdHJ1ZSxcbiAgICAvLyAgICAgICBvcHRpb25hbERlcGVuZGVuY2llczogZmFsc2UsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICBdLFxuXG4gICAgLy8gICAnaW1wb3J0L25vLW11dGFibGUtZXhwb3J0cyc6ICdlcnJvcicsXG4gICAgLy8gICAnaW1wb3J0L25hbWVkJzogJ29mZicsXG4gICAgLy8gICAnaW1wb3J0L25vLW5hbWVkLWRlZmF1bHQnOiAnb2ZmJyxcbiAgICAvLyAgICdpbXBvcnQvbm8tbmFtZWQtZXhwb3J0JzogJ29mZicsXG4gICAgLy8gICAnaW1wb3J0L25vLXNlbGYtaW1wb3J0JzogJ2Vycm9yJyxcbiAgICAvLyAgICdpbXBvcnQvb3JkZXInOiAnb2ZmJyxcbiAgICAvLyAgICdpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0JzogJ29mZicsXG4gICAgLy8gICAndW51c2VkLWltcG9ydHMvbm8tdW51c2VkLWltcG9ydHMnOiAnZXJyb3InLFxuICAgIC8vICAgJ24vbm8tbWlzc2luZy1pbXBvcnQnOiAnb2ZmJyxcbiAgICAvLyAgICduL25vLWV4dHJhbmVvdXMtaW1wb3J0JzogJ2Vycm9yJyxcbiAgICAvLyAgICduL2ZpbGUtZXh0ZW5zaW9uLWluLWltcG9ydCc6ICdvZmYnLFxuICAgIC8vICAgJ3VuaWNvcm4vcHJlZmVyLW1vZHVsZSc6ICdlcnJvcicsXG4gICAgLy8gICAndW5pY29ybi9wcmVmZXItbm9kZS1wcm90b2NvbCc6ICdlcnJvcicsXG4gICAgLy8gICAndW5pY29ybi9wcmVmZXItdG9wLWxldmVsLWF3YWl0JzogJ2Vycm9yJyxcblxuICAgIC8vICAgJ2VzbGludC1jb21tZW50cy9kaXNhYmxlLWVuYWJsZS1wYWlyJzogW1xuICAgIC8vICAgICAnZXJyb3InLFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgYWxsb3dXaG9sZUZpbGU6IHRydWUsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICBdLFxuXG4gICAgLy8gICAnZXNsaW50LWNvbW1lbnRzL25vLWFnZ3JlZ2F0aW5nLWVuYWJsZSc6ICdlcnJvcicsXG4gICAgLy8gICAnZXNsaW50LWNvbW1lbnRzL25vLWR1cGxpY2F0ZS1kaXNhYmxlJzogJ2Vycm9yJyxcbiAgICAvLyAgICdlc2xpbnQtY29tbWVudHMvbm8tdW5saW1pdGVkLWRpc2FibGUnOiAnb2ZmJyxcbiAgICAvLyAgICdlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWRpc2FibGUnOiAnZXJyb3InLFxuICAgIC8vICAgJ2VzbGludC1jb21tZW50cy9uby11bnVzZWQtZW5hYmxlJzogJ2Vycm9yJyxcblxuICAgIC8vICAgJ2VzbGludC1jb21tZW50cy9uby11c2UnOiBbXG4gICAgLy8gICAgICdlcnJvcicsXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICBhbGxvdzogW1xuICAgIC8vICAgICAgICAgJ2VzbGludC1kaXNhYmxlJyxcbiAgICAvLyAgICAgICAgICdlc2xpbnQtZGlzYWJsZS1saW5lJyxcbiAgICAvLyAgICAgICAgICdlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUnLFxuICAgIC8vICAgICAgICAgJ2VzbGludC1lbmFibGUnLFxuICAgIC8vICAgICAgIF0sXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICBdLFxuICAgIH0sXG4gIH0sXG4gIC8vIGFsd2F5cyBsYXN0IHNvIGl0IGRpc2FibGVzIHJ1bGVzIGluY29tcGF0aWJsZSB3aXRoIHByZXR0aWVyIGR1cmluZyB0aGUgcHJvY2VzcyBleGVjdXRpb25cbiAgZXNsaW50UGx1Z2luUHJldHRpZXJSZWNvbW1lbmRlZCxcbilcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnc1xuIiwgImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiL1VzZXJzL2tyb3NzL3Byb2plY3RzL2VzbGludC1jb25maWcvc3JjL2NvbnN0YW50cy5qc1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCIvVXNlcnMva3Jvc3MvcHJvamVjdHMvZXNsaW50LWNvbmZpZy9zcmNcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL1VzZXJzL2tyb3NzL3Byb2plY3RzL2VzbGludC1jb25maWcvc3JjL2NvbnN0YW50cy5qc1wiO2V4cG9ydCBjb25zdCBCVUlMRF9JR05PUkVTID0gW1xuICAncGFja2FnZXMvKi9saWInLFxuICAnLi9saWIvJyxcbiAgJ3BhY2thZ2VzLyovZGlzdCcsXG4gICcuL2Rpc3QvJyxcbiAgJyoqL3R5cGluZ3MtbG9jYWwnLFxuICAnKiovdHlwaW5ncycsXG4gICcqKi8ucG5wKicsXG4gICcqKi8ueWFybicsXG5dXG5cbmV4cG9ydCBjb25zdCBUU19GSUxFUyA9IFsnKiovKi57dHMsdHN4LG10cyxjdHN9J11cbmV4cG9ydCBjb25zdCBKU19GSUxFUyA9IFsnKiovKi57anMsbWpzLGNqc30nXVxuZXhwb3J0IGNvbnN0IEpTT05fRklMRVMgPSBbJyoqLyouanNvbiddXG5leHBvcnQgY29uc3QgTURfRklMRVMgPSBbJyoqLyoubWQnXVxuIiwgImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiL1VzZXJzL2tyb3NzL3Byb2plY3RzL2VzbGludC1jb25maWcvc3JjL2pzb24uanNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiL1VzZXJzL2tyb3NzL3Byb2plY3RzL2VzbGludC1jb25maWcvc3JjXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9Vc2Vycy9rcm9zcy9wcm9qZWN0cy9lc2xpbnQtY29uZmlnL3NyYy9qc29uLmpzXCI7aW1wb3J0IGpzb24gZnJvbSAnZXNsaW50LXBsdWdpbi1qc29uJ1xuaW1wb3J0IHRzZXNsaW50IGZyb20gJ3R5cGVzY3JpcHQtZXNsaW50J1xuXG5pbXBvcnQgeyBCVUlMRF9JR05PUkVTLCBKU09OX0ZJTEVTIH0gZnJvbSAnLi9jb25zdGFudHMuanMnXG5cbi8vIG5weCBAZXNsaW50L2NvbmZpZy1pbnNwZWN0b3JcbmNvbnN0IGNvbmZpZ3MgPSB0c2VzbGludC5jb25maWcoXG4gIHtcbiAgICBuYW1lOiAnYWxpZW5mYXN0LWpzb24taWdub3JlcycsXG4gICAgaWdub3JlczogW1xuICAgICAgLi4uQlVJTERfSUdOT1JFUyxcbiAgICAgIC8vIC4uLkpTX0ZJTEVTLFxuICAgICAgLy8gLi4uTURfRklMRVNcbiAgICBdLFxuICB9LFxuXG4gIHtcbiAgICBuYW1lOiAnYWxpZW5mYXN0LWpzb24nLFxuXG4gICAgZmlsZXM6IEpTT05fRklMRVMsXG4gICAgLi4uanNvbi5jb25maWdzWydyZWNvbW1lbmRlZCddLFxuICB9LFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb25maWdzXG4iLCAiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCIvVXNlcnMva3Jvc3MvcHJvamVjdHMvZXNsaW50LWNvbmZpZy9zcmMvbWFya2Rvd24uanNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiL1VzZXJzL2tyb3NzL3Byb2plY3RzL2VzbGludC1jb25maWcvc3JjXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9Vc2Vycy9rcm9zcy9wcm9qZWN0cy9lc2xpbnQtY29uZmlnL3NyYy9tYXJrZG93bi5qc1wiO2ltcG9ydCBtYXJrZG93biBmcm9tICdlc2xpbnQtcGx1Z2luLW1hcmtkb3duJ1xuaW1wb3J0IHRzZXNsaW50IGZyb20gJ3R5cGVzY3JpcHQtZXNsaW50J1xuXG5pbXBvcnQgeyBCVUlMRF9JR05PUkVTIH0gZnJvbSAnLi9jb25zdGFudHMuanMnXG5cbi8vIG5weCBAZXNsaW50L2NvbmZpZy1pbnNwZWN0b3JcbmNvbnN0IGNvbmZpZ3MgPSB0c2VzbGludC5jb25maWcoXG4gIC4uLm1hcmtkb3duLmNvbmZpZ3MucmVjb21tZW5kZWQsXG4gIHtcbiAgICBuYW1lOiAnYWxpZW5mYXN0LW1hcmtkb3duLWlnbm9yZXMnLFxuICAgIGlnbm9yZXM6IFtcbiAgICAgIC4uLkJVSUxEX0lHTk9SRVMsXG4gICAgICAvLyAuLi5KU19GSUxFUyxcbiAgICAgIC8vIC4uLkpTT05fRklMRVNcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2FsaWVuZmFzdC1tYXJrZG93bicsXG4gICAgLy8gZmlsZXM6IFtcIioqLyoubWRcIl0sXG4gIH0sXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3NcbiIsICJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIi9Vc2Vycy9rcm9zcy9wcm9qZWN0cy9lc2xpbnQtY29uZmlnL3NyYy9pbmRleC5qc1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCIvVXNlcnMva3Jvc3MvcHJvamVjdHMvZXNsaW50LWNvbmZpZy9zcmNcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL1VzZXJzL2tyb3NzL3Byb2plY3RzL2VzbGludC1jb25maWcvc3JjL2luZGV4LmpzXCI7aW1wb3J0IGpzIGZyb20gJy4vanMuanMnXG5pbXBvcnQganNvbiBmcm9tICcuL2pzb24uanMnXG5pbXBvcnQgbWFya2Rvd24gZnJvbSAnLi9tYXJrZG93bi5qcydcblxuZXhwb3J0ICogZnJvbSAnLi9jb25zdGFudHMuanMnXG5cbmNvbnN0IGNvbmZpZ3MgPSB7XG4gIGpzLFxuICBqc29uLFxuICBtYXJrZG93bixcbiAgcmVjb21tZW5kZWQ6IFsuLi5qcywgLi4uanNvbiwgLi4ubWFya2Rvd25dLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25maWdzXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZQLE9BQU9BLGVBQWM7OztBQ0FqQyxPQUFPLFVBQVU7QUFDbFEsU0FBUyxxQkFBcUI7QUFFOUIsU0FBUyxrQkFBa0Isd0JBQXdCO0FBUW5ELFNBQVMsa0JBQWtCO0FBQzNCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGFBQWE7QUFDcEIsT0FBTyxxQ0FBcUM7QUFDNUMsT0FBTyxhQUFhO0FB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQThHUDtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBRUE7QUFDRjtBQUVBLElBQU8sYUFBUTs7O0FFN05zTyxPQUFPLFVBQVU7QUFDdFEsT0FBT0MsZUFBYztBQUtyQixJQUFNQyxXQUFVQyxVQUFTO0FBQUEsRUFDdkI7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNQLEdBQUc7QUFBQTtBQUFBO0FBQUEsSUFHTDtBQUFBLEVBQ0Y7QUFBQSxFQUVBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFFTixPQUFPO0FBQUEsSUFDUCxHQUFHLEtBQUssUUFBUSxhQUFhO0FBQUEsRUFDL0I7QUFDRjtBQUVBLElBQU8sZUFBUUQ7OztBQ3hCOE8sT0FBTyxjQUFjO0FBQ2xSLE9BQU9FLGVBQWM7QUFLckIsSUFBTUMsV0FBVUMsVUFBUztBQUFBLEVBQ3ZCLEdBQUcsU0FBUyxRQUFRO0FBQUEsRUFDcEI7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNQLEdBQUc7QUFBQTtBQUFBO0FBQUEsSUFHTDtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUE7QUFBQSxFQUVSO0FBQ0Y7QUFFQSxJQUFPLG1CQUFRRDs7O0FDaEJmLElBQU1FLFdBQVU7QUFBQSxFQUNkO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBLGFBQWEsQ0FBQyxHQUFHLFlBQUksR0FBRyxjQUFNLEdBQUcsZ0JBQVE7QUFDM0M7QUFFQSxJQUFPLGNBQVFBOzs7QUxFZixJQUFPLHdCQUFRQyxVQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWlCdEI7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQTtBQUFBO0FBQUEsTUFHUCxHQUFHLFlBQVE7QUFBQSxJQUNiO0FBQUEsSUFDQSxpQkFBaUI7QUFBQTtBQUFBO0FBQUEsTUFJZixlQUFlO0FBQUE7QUFBQSxRQUViLFNBQVMsQ0FBQyxzQkFBc0I7QUFBQSxNQUNsQztBQUFBLElBQ0Y7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNMLHlDQUF5QztBQUFBLE1BQ3pDLDhDQUE4QztBQUFBLE1BQzlDLHFDQUFxQztBQUFBLE1BQ3JDLDJDQUEyQztBQUFBLE1BQzNDLHFDQUFxQztBQUFBLElBQ3ZDO0FBQUEsRUFDRjtBQUNGOyIsCiAgIm5hbWVzIjogWyJ0c2VzbGludCIsICJ0c2VzbGludCIsICJjb25maWdzIiwgInRzZXNsaW50IiwgInRzZXNsaW50IiwgImNvbmZpZ3MiLCAidHNlc2xpbnQiLCAiY29uZmlncyIsICJ0c2VzbGludCJdCn0K
