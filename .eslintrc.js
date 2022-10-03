module.exports = {
  extends: './index.js',
  parserOptions: {
    createDefaultProgram: true, // fix parser complaint
    project: ['./tsconfig.lint.json'],
  }
}
