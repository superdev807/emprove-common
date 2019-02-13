'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(theme) {
  return {
    input: {
      color: theme.palette.primary.main,
      '&:before': {
        borderBottom: "1px solid ".concat(theme.palette.bottomLine)
      }
    },
    helperText: {
      color: theme.palette.text.primary
    },
    formHelperText: {
      whiteSpace: 'nowrap'
    },
    testInput: {
      padding: '12px 14px'
    }
  };
};

exports.default = _default;