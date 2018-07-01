'use strict';

export default theme => ({
  zipCode: {
    color: theme.palette.text.primary,
    '&:before': {
      borderBottomColor: theme.palette.bottomLine
    }
  }
});
