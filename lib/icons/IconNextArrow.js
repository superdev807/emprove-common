'use strict';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconNextArrow = function IconNextArrow(props) {
  return React.createElement(SvgIcon, _extends({
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), React.createElement("path", {
    d: "M7.83 17.165L12.985 12 7.83 6.835l1.587-1.587L16.17 12l-6.752 6.752-1.588-1.587z"
  }));
};

export default IconNextArrow;