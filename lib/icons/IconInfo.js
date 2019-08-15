'use strict';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconInfo = function IconInfo(props) {
  return React.createElement(SvgIcon, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, props), React.createElement("path", {
    fill: "none",
    d: "M24,0L0,0l0,24h24V0z"
  }), React.createElement("path", {
    d: "M12,0.625C5.728,0.625,0.625,5.728,0.625,12S5.728,23.375,12,23.375S23.375,18.273,23.375,12 S18.273,0.625,12,0.625z M12,22.625C6.142,22.625,1.375,17.859,1.375,12S6.142,1.375,12,1.375S22.625,6.142,22.625,12 S17.858,22.625,12,22.625z"
  }), React.createElement("path", {
    d: "M10.674,18.277c0,0.196,0.159,0.354,0.354,0.354h1.955c0.189,0,0.343-0.153,0.343-0.343v-7.615h-2.653V18.277 z"
  }), React.createElement("path", {
    d: "M13.075,5.369h-2.148c-0.14,0-0.253,0.113-0.253,0.252v2.4h2.653V5.62 C13.326,5.481,13.214,5.369,13.075,5.369z"
  }));
};

export default IconInfo;