'use strict';

import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const LoadingIndicator = ({ classes, className, opacity, fixed, positionStatic, size }) => (
  <div
    className={cx(classes.refreshOverlay, { [classes.fixedOverlay]: fixed, [classes.positionStatic]: positionStatic }, className)}
    style={opacity !== undefined ? { backgroundColor: `rgba(255, 255, 255, ${opacity})` } : {}}>
    <CircularProgress size={size} thickness={5} />
  </div>
);

LoadingIndicator.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  opacity: PropTypes.number,
  size: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
  positionStatic: PropTypes.bool
};

LoadingIndicator.defaultProps = {
  size: 70,
  positionStatic: false
};

export default withStyles(styles)(LoadingIndicator);
