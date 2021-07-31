module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
    'cypress/globals': true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {},
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'react-hooks', 'cypress'],
  ignorePatterns: ['node_modules/'],
  rules: {},
  settings: {
    react: {
      version: 'latest', // "detect" automatically picks the version you have installed.
    },
  },
}
