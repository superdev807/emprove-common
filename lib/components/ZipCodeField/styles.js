'use strict';

export default (function (theme) {
  return {
    zipCode: {
      color: theme.palette.text.primary,
      '&:before': {
        borderBottomColor: theme.palette.bottomLine
      }
    }
  };
});