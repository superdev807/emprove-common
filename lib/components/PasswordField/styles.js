'use strict';

import green from '@material-ui/core/colors/green';
export default (function (theme) {
  return {
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
      padding: theme.spacing.unit,
      position: 'relative',
      zIndex: 1
    },
    popperClose: {
      zIndex: theme.zIndex.tooltip,
      pointerEvents: 'none'
    }
  };
});
export var validatorTextStyles = function validatorTextStyles(theme) {
  return {
    icon: {
      fontSize: '0.8rem',
      verticalAlign: 'middle',
      marginRight: theme.spacing.unit / 2
    },
    text: {
      verticalAlign: 'middle'
    },
    success: {
      color: green[600]
    },
    fail: {
      color: theme.palette.error.main
    }
  };
};