'use strict';

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {
    process: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: 2018,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'no-unused-vars': ['error', { args: 'none' }],
    quotes: ['error', 'single'],
    'react/prop-types': 1,
    'react/sort-comp': 1,
    semi: ['error', 'always']
  }
};
