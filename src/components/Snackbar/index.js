'use strict';

import React from 'react';
import MuiSnackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import IconClose from '@material-ui/icons/Close';
import SnackbarContent from '../SnackbarContent';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import { globalStatusSelector } from '../../redux/selectors';
import { resetSnackbar } from '../../redux/modules/globalStatus';

const Snackbar = ({ classes, globalStatus, resetSnackbar }) => (
  <MuiSnackbar
    anchorOrigin={{ vertical: globalStatus.anchor || 'top', horizontal: 'center' }}
    open={Boolean(globalStatus.snackbar)}
    autoHideDuration={3000}
    onClose={resetSnackbar}>
    <SnackbarContent onClose={resetSnackbar} variant={globalStatus.variant} message={globalStatus.snackbar} />
  </MuiSnackbar>
);

const selector = createStructuredSelector({
  globalStatus: globalStatusSelector
});

const actions = {
  resetSnackbar
};

export default compose(withStyles(styles), connect(selector, actions))(Snackbar);
