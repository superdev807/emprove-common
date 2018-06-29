'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (theme) {
  return {
    zipCode: {
      color: theme.palette.text.primary,
      '&:before': {
        borderBottomColor: theme.palette.bottomLine
      }
    }
  };
};