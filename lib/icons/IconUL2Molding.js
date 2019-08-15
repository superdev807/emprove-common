'use strict';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconUL2Molding = function IconUL2Molding(props) {
  var primary = props.primary || '#878787';
  var secondary = props.secondary || 'none';
  return React.createElement(SvgIcon, _extends({
    x: 0,
    y: 0,
    viewBox: "0 0 24 24",
    xmlSpace: "preserve"
  }, props), React.createElement("path", {
    fill: secondary,
    d: "M0 0h24v24H0z"
  }), React.createElement("path", {
    fill: primary,
    d: "M22.731 1.885H1.269v20.229h.75V3.233L3.27 4.421v17.693h.041v.001h.93V4.76H22.73v-.125h.001v-.75h-.001v-.083H3.706L2.478 2.635h20.253z"
  }), React.createElement("path", {
    fill: primary,
    d: "M6.353 22.114h.75V8.24l.417.425v13.449h.75V9.24l1.583 1.13v11.744h.75V11.037l.416.387v10.69h.375v.001h.562V11.948H22.73v-.312h.001v-.75h-11.19l-.36-.334h11.55v-.75H10.349l-1.284-.916h13.666v-.75H8.052l-.43-.437h15.109v-.75H6.353z"
  }));
};

export default IconUL2Molding;