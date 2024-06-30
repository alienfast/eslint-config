import js from './js.js'
import json from './json.js'
import markdown from './markdown.js'

export default {}
export * from './constants.js'

export const configs = {
  js,
  json,
  markdown,
  recommended: [...js, ...json, ...markdown],
}
