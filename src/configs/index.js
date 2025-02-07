import limits from '../limits/index.js'
import js from './js.js'
import json from './json.js'
import markdown from './markdown.js'
import storybook from './storybook.js'

const configs = {
  js,
  json,
  markdown,
  recommended: [
    ...js,
    ...storybook,
    ...limits.tsScriptsAndConfigs,
    ...limits.jsOnly,
    ...limits.jsOnlyScripts,
    ...json,
    ...markdown,
  ],
  other: [...markdown, ...json],
}
export default configs
