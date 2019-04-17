'use strict';

export default theme => ({
  phoneNumber: {
    color: theme.palette.text.primary,
    '&:before': {
      borderBottom: `1px solid ${theme.palette.bottomLine}`
    }
  }
});
