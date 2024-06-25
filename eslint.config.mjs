// import path from "node:path";
// import { fileURLToPath } from "node:url";
// import js from "@eslint/js";
// import { FlatCompat } from "@eslint/eslintrc";
import localConfig from "./index.js";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const compat = new FlatCompat({
//     baseDirectory: __dirname,
//     recommendedConfig: js.configs.recommended,
//     allConfig: js.configs.all
// });

export default [
    ...localConfig,  
    {

        name: "project config",
   files: ["index.js"],

    // ignores: [ "./scripts/**.js" ],    
    languageOptions: {
        // ecmaVersion: 5,
        // sourceType: "script",

        parserOptions: {
            // createDefaultProgram: true,
            project: ["./tsconfig.lint.json"],
        },
    },
}
];
