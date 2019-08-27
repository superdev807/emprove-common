'use strict';

import green from '@material-ui/core/colors/green';

export default theme => ({
  input: {
    color: theme.palette.text.primary,
    '&:before': {
      borderBottomColor: theme.palette.bottomLine
    }
  },
  helperText: {
    color: theme.palette.text.primary
  },
  paper: {
    padding: theme.spacing(1),
    position: 'relative',
    zIndex: 1
  },
  popperClose: {
    zIndex: theme.zIndex.tooltip,
    pointerEvents: 'none'
  }
});

export const validatorTextStyles = theme => ({
  icon: {
    fontSize: '0.8rem',
    verticalAlign: 'middle',
    marginRight: theme.spacing(0.5)
  },
  text: {
    verticalAlign: 'middle'
  },
  success: {
    color: green[600]
  },
  fail: {
    color: theme.palette.error.main
  },
  validationText: {
    display: 'block'
  },
  popper: {
    zIndex: 100
  }
});
