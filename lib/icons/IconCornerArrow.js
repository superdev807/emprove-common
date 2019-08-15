'use strict';

import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconCornerArrow = function IconCornerArrow(props) {
  var primary = props.primary || '#888';
  return React.createElement(SvgIcon, _extends({
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), React.createElement("path", {
    d: "M5.693 7.107l1.414-1.414 8.485 8.485V6.4H17.6v11.2H6.4v-2.008h7.778L5.693 7.107z",
    fill: primary
  }));
};

export default IconCornerArrow;