'use strict';

import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const LoadingIndicator = ({ classes, className, opacity, fixed, size }) => (
  <div className={cx(classes.refreshOverlay, { [classes.fixedOverlay]: fixed })} style={opacity !== undefined ? { backgroundColor: `rgba(255, 255, 255, ${opacity})` } : {}}>
    <CircularProgress size={size} thickness={5} />
  </div>
);

LoadingIndicator.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  opacity: PropTypes.number,
  size: PropTypes.number
};

LoadingIndicator.defaultProps = {
  size: 70
};

export default withStyles(styles)(LoadingIndicator);
