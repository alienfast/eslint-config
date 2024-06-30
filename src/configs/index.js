import js from './js.js'
import json from './json.js'
import markdown from './markdown.js'

const configs = {
  js,
  json,
  markdown,
  recommended: [...js, ...json, ...markdown],
}
export default configs
