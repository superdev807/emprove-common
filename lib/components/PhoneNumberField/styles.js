'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(theme) {
  return {
    phoneNumber: {
      color: theme.palette.text.primary,
      '&:before': {
        borderBottom: "1px solid ".concat(theme.palette.bottomLine)
      }
    }
  };
};

exports.default = _default;