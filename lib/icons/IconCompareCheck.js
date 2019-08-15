'use strict';

import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconCompareCheck = function IconCompareCheck(props) {
  return React.createElement(SvgIcon, _extends({
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), React.createElement("path", {
    d: "M19.133 3.186L9.037 13.291 5.28 9.534l-3.757 3.757 7.514 7.523L22.89 6.943l-3.757-3.757zM4.025 13.291L5.28 12.08l3.757 3.712L19.133 5.679l1.255 1.264L9.037 18.294l-5.012-5.003z"
  }));
};

export default IconCompareCheck;