'use strict';

import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const LoadingIndicator = ({ classes, className, opacity }) => (
  <div className={classes.refreshOverlay} style={opacity !== undefined ? { backgroundColor: `rgba(255, 255, 255, ${opacity})` } : {}}>
    <CircularProgress size={70} thickness={5} />
  </div>
);

LoadingIndicator.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  opacity: PropTypes.number
};

export default withStyles(styles)(LoadingIndicator);
