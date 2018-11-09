'use strict';

export default theme => ({
  select: {
    padding: '12px 14px'
  },
  originSelect: {
    color: theme.palette.text.primary,
    '&:before': {
      borderBottom: `1px solid ${theme.palette.bottomLine}`
    }
  }
});
