'use strict';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconArrowHorizontal = function IconArrowHorizontal(props) {
  return React.createElement(SvgIcon, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 18 18"
  }, props), React.createElement("path", {
    fill: "#d98232",
    d: "M4.8 4l8.4 5-8.4 5 3-5z"
  }), React.createElement("path", {
    fill: "#ff9e3c",
    d: "M7.8 9l-3-5 8.4 5z"
  }));
};

export default IconArrowHorizontal;