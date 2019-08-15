'use strict';

import "core-js/modules/es.string.anchor";
import React from 'react';
import MuiSnackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '../SnackbarContent';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { globalStatusSelector } from '../../redux/selectors';
import { resetSnackbar } from '../../redux/modules/globalStatus';

var Snackbar = function Snackbar(_ref) {
  var classes = _ref.classes,
      globalStatus = _ref.globalStatus,
      resetSnackbar = _ref.resetSnackbar;
  return React.createElement(MuiSnackbar, {
    anchorOrigin: {
      vertical: globalStatus.anchor || 'top',
      horizontal: 'center'
    },
    open: Boolean(globalStatus.snackbar),
    autoHideDuration: 3000,
    onClose: resetSnackbar
  }, React.createElement(SnackbarContent, {
    onClose: resetSnackbar,
    variant: globalStatus.variant,
    message: globalStatus.snackbar
  }));
};

var selector = createStructuredSelector({
  globalStatus: globalStatusSelector
});
var actions = {
  resetSnackbar: resetSnackbar
};
export default compose(withStyles(styles), connect(selector, actions))(Snackbar);