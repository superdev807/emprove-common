'use strict';

import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';

export default theme => ({
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
  contentAction: {
    [theme.breakpoints.down('sm')]: {
      padding: 0
    }
  }
});
