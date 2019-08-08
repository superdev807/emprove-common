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
    'no-extra-boolean-cast': 0,
    'no-unused-vars': ['error', { args: 'none' }],
    'react/prop-types': 1,
    'react/sort-comp': 1,
    semi: ['error', 'always']
  },
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
                                       // default to "createReactClass"
      pragma: 'React',  // Pragma to use, default to "React"
      version: 'detect' // React version. "detect" automatically picks the version you have installed.
                        // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                        // default to latest and warns if missing
                        // It will default to "detect" in the future
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      {property: 'freeze', object: 'Object'},
      {property: 'myFavoriteWrapper'}
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      {name: 'Link', linkAttribute: 'to'}
    ]
  }
};
