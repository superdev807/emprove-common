'use strict';

import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconConfirmed = function IconConfirmed(props) {
  var primary = props.primary || '#008000';
  var secondary = props.secondary || '#ffffff';
  return React.createElement(SvgIcon, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z",
    fill: primary
  }), React.createElement("path", {
    fill: secondary,
    d: "M10.4 16.2l-4-4L7.5 11l2.9 2.9 6.1-6.1L17.6 9z"
  }), React.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }));
};

export default IconConfirmed;