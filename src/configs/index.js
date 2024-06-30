import jsOnlyScripts from '../limits/jsOnlyScripts.js'
import js from './js.js'
import json from './json.js'
import markdown from './markdown.js'

const configs = {
  js,
  json,
  markdown,
  recommended: [...js, ...jsOnlyScripts, ...json, ...markdown],
  other: [...markdown, ...json],
}
export default configs
