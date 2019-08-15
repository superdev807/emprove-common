'use strict';

import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconDoubleArrowsDown = function IconDoubleArrowsDown(props) {
  return React.createElement(SvgIcon, _extends({
    x: 0,
    y: 0,
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "none",
    d: "M23.9 23.9L.1 24V0h23.8v23.9z"
  }), React.createElement("path", {
    fill: "#888",
    d: "M17.3 4.188l1.645 1.631-6.942 7-7-6.942 1.631-1.645 5.355 5.299L17.3 4.188m.029 6.971l1.645 1.631-6.942 7-7-6.942 1.631-1.645 5.355 5.299 5.311-5.343z"
  }));
};

export default IconDoubleArrowsDown;