'use strict';

export default theme => ({
  input: {
    color: theme.palette.text.primary,
    '&:before': {
      borderBottom: `1px solid ${theme.palette.bottomLine}`
    }
  },
  helperText: {
    color: theme.palette.text.primary
  },
  formHelperText: {
    whiteSpace: 'nowrap'
  }
});
