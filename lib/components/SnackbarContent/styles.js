'use strict';

import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
export default (function (theme) {
  return {
    success: {
      backgroundColor: green[600]
    },
    error: {
      backgroundColor: theme.palette.error.dark
    },
    info: {
      backgroundColor: theme.palette.primary.dark
    },
    warning: {
      backgroundColor: amber[700]
    },
    invitation: {
      backgroundColor: green[600]
    },
    icon: {
      fontSize: 20
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing.unit
    },
    message: {
      display: 'flex',
      alignItems: 'center'
    },
    contentMessage: {
      flex: 1
    },
    contentAction: _defineProperty({}, theme.breakpoints.down('sm'), {
      padding: 0
    })
  };
});