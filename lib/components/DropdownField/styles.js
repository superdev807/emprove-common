'use strict';

export default (function (theme) {
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
        borderBottom: "1px solid ".concat(theme.palette.bottomLine)
      }
    }
  };
});