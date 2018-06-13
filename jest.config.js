'use strict';

module.exports = {
  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>mocks/styleMock.js',
    '^\~(.*)$': '<rootDir>/src'
  },
  setupTestFrameworkScriptFile: '<rootDir>setupTests.js',
};
