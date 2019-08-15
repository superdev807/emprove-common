'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

var LoadingIndicator = function LoadingIndicator(_ref) {
  var _cx;

  var classes = _ref.classes,
      className = _ref.className,
      opacity = _ref.opacity,
      fixed = _ref.fixed,
      positionStatic = _ref.positionStatic,
      size = _ref.size;
  return React.createElement("div", {
    className: cx(classes.refreshOverlay, (_cx = {}, _defineProperty(_cx, classes.fixedOverlay, fixed), _defineProperty(_cx, classes.positionStatic, positionStatic), _cx), className),
    style: opacity !== undefined ? {
      backgroundColor: "rgba(255, 255, 255, ".concat(opacity, ")")
    } : {}
  }, React.createElement(CircularProgress, {
    size: size,
    thickness: 5
  }));
};

LoadingIndicator.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  opacity: PropTypes.number,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  positionStatic: PropTypes.bool
};
LoadingIndicator.defaultProps = {
  size: 70,
  positionStatic: false
};
export default withStyles(styles)(LoadingIndicator);