'use strict';

import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconBack = function IconBack(props) {
  return React.createElement(SvgIcon, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 44 44",
    width: "24",
    height: "24"
  }, props), React.createElement("path", {
    d: "M44 0H0v44h44V0z",
    fill: "none"
  }), React.createElement("path", {
    d: "M30.488 6.863a2.851 2.851 0 0 1 .002 4.031L19.409 22 30.49 33.106a2.851 2.851 0 1 1-4.035 4.031L11.318 22 26.455 6.863a2.851 2.851 0 0 1 4.033 0z"
  }));
};

export default IconBack;