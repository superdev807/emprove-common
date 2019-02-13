"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(theme) {
  return {
    currencyInput: {
      color: theme.palette.text.primary,
      '&:before': {
        borderBottomColor: theme.palette.bottomLine
      }
    }
  };
};

exports.default = _default;