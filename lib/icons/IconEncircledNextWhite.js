'use strict';

import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconEncircledNextWhite = function IconEncircledNextWhite(props) {
  return React.createElement(SvgIcon, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "11",
    fill: "#fff"
  }), React.createElement("path", {
    d: "M12 23.375C5.727 23.375.625 18.273.625 12S5.727.625 12 .625 23.375 5.728 23.375 12 18.272 23.375 12 23.375zm0-22C6.141 1.375 1.375 6.142 1.375 12S6.141 22.625 12 22.625 22.625 17.859 22.625 12 17.858 1.375 12 1.375z"
  }), React.createElement("path", {
    d: "M9.913 15.825L13.729 12 9.913 8.175 11.087 7l5 5-5 5-1.174-1.175z"
  }));
};

export default IconEncircledNextWhite;