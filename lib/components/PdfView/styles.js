'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (theme) {
  return {
    root: {
      overflow: 'hidden'
    },
    paper: {
      margin: theme.spacing.unit + 'px 0'
    }
  };
};