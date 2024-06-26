import tseslint from 'typescript-eslint'
// import path from "node:path";
// import { fileURLToPath } from "node:url";
// import js from "@eslint/js";
// import { FlatCompat } from "@eslint/eslintrc";
import configs from "./src/index.js";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const compat = new FlatCompat({
//     baseDirectory: __dirname,
//     recommendedConfig: js.configs.recommended,
//     allConfig: js.configs.all
// });

export default tseslint.config({
    name: "project-js",
    extends: [
        ...configs.js,  
    ],
    

    languageOptions: {
        // ecmaVersion: 5,
        // sourceType: "script",

        parserOptions: {
            // createDefaultProgram: true,
            project: ["./tsconfig.lint.json"],
        },
    
    }},
{ 
    name: 'project-other', 
    extends: [...configs.other]
}

);
