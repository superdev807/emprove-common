'use strict';

export default theme => ({
  input: {
    color: theme.palette.primary.main,
    '&:before': {
      borderBottom: `1px solid ${theme.palette.bottomLine}`
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
});
