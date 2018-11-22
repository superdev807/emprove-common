'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (theme) {
  return {
    input: {
      fontSize: 12,
      fontWeight: 400
    },
    select: {
      padding: '12px 14px'
    },
    originSelect: {
      color: theme.palette.text.primary,
      '&:before': {
        borderBottom: '1px solid ' + theme.palette.bottomLine
      }
    }
  };
};