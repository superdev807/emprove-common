'use strict';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconCircleCheck = function IconCircleCheck(props) {
  return React.createElement(SvgIcon, _extends({
    x: "0px",
    y: "0px",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, props), React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    fill: "none",
    fillRule: "evenodd",
    clipRule: "evenodd",
    width: "23",
    height: "23"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "11.5"
  }), React.createElement("polygon", {
    fill: "#ffffff",
    points: "17.053,6.513 9.762,13.797 6.947,10.988 5.106,12.829 9.763,17.487 18.894,8.355"
  }));
};

export default IconCircleCheck;