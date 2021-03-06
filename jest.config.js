'use strict';

module.exports = {
  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>mocks/styleMock.js',
    '^~\\/(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ['<rootDir>setupTests.js'],
  testURL: 'http://localhost/'
};
