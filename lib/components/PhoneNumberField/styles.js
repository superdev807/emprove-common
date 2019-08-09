'use strict';

export default (function (theme) {
  return {
    phoneNumber: {
      color: theme.palette.text.primary,
      '&:before': {
        borderBottom: "1px solid ".concat(theme.palette.bottomLine)
      }
    }
  };
});