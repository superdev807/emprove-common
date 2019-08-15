'use strict';

import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconAddPlus = function IconAddPlus(props) {
  return React.createElement(SvgIcon, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
  }), React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }));
};

export default IconAddPlus;