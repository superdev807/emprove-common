'use strict';

// This used to be .babelrc. It has to be babel.config.js in order for Jest to work.
// Jest does not like the { modules: false } for @babel/preset-env.
// So, we need a different preset for the test env.
module.exports = {
  presets: [['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3, modules: false }], '@babel/preset-react'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',

    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    '@babel/plugin-proposal-json-strings',
    ['@babel/plugin-transform-runtime', { corejs: 3 }]
  ],
  env: {
    test: {
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
  }
};