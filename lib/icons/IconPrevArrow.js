'use strict';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconPrevArrow = function IconPrevArrow(props) {
  return React.createElement(SvgIcon, _extends({
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    d: "M24 0H0v24h24V0z",
    fill: "none"
  }), React.createElement("path", {
    d: "M16.17 17.165L11.015 12l5.154-5.165-1.587-1.587L7.83 12l6.752 6.752 1.588-1.587z"
  }));
};

export default IconPrevArrow;