'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (theme) {
  return {
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