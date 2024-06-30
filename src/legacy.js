import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import eslintJs from '@eslint/js'
// import eslintTs from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslintJs.configs.recommended,
})

/**
 * @param {string} name the pugin name
 * @param {string} alias the plugin alias
 * @returns {import("eslint").ESLint.Plugin}
 */
export function legacyPlugin(name, alias = name) {
  const plugin = compat.plugins(name)[0]?.plugins?.[alias]

  if (!plugin) {
    throw new Error(`Unable to resolve plugin ${name} and/or alias ${alias}`)
  }

  /* eslint-disable @typescript-eslint/no-unsafe-return */
  return fixupPluginRules(plugin)
}
