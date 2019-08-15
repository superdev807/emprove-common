'use strict';

import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconStyleboard = function IconStyleboard(props) {
  return React.createElement(SvgIcon, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    d: "M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"
  }), React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

export default IconStyleboard;