'use strict';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconFileDownload = function IconFileDownload(props) {
  return React.createElement(SvgIcon, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, props), React.createElement("path", {
    fill: "none",
    d: "M0,0h24v24H0V0z"
  }), React.createElement("rect", {
    x: "4.542",
    y: "20.362",
    width: "14",
    height: "2"
  }), React.createElement("polygon", {
    points: "18.542,11.362 14.542,11.362 14.542,5.362 8.542,5.362 8.542,11.362 4.542,11.362 11.542,18.362"
  }));
};

export default IconFileDownload;