import { defineConfig } from 'eslint/config'

import limits from '../limits/index.js'
import js from './js.js'
import json from './json.js'
import markdown from './markdown.js'
import storybook from './storybook.js'

const configs = {
  js,
  json,
  markdown,
  recommended: defineConfig([
    js,
    limits.tsScriptsAndConfigs,
    limits.jsOnly,
    limits.jsOnlyScripts,
    json,
    markdown,
  ]),
  storybook,
  other: defineConfig([markdown, json]),
}
export default configs
