'use strict';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconPlane = function IconPlane(props) {
  return React.createElement(SvgIcon, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, props), React.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), React.createElement("path", {
    d: "M23.714 4.275a.371.371 0 0 0-.035-.185c-.007-.015 0-.032-.009-.046-.003-.004-.008-.004-.011-.008-.003-.005-.003-.012-.006-.017a.372.372 0 0 0-.191-.129c-.017-.005-.034 0-.052-.003-.047-.008-.095-.02-.143-.008L.562 9.206a.374.374 0 0 0-.282.291.378.378 0 0 0 .147.378l5.091 3.7-.011 5.384a.783.783 0 0 0 .785.784.76.76 0 0 0 .449-.146l3.637-2.492 4.065 2.954a.376.376 0 0 0 .548-.121l8.689-15.51c.013-.023.009-.05.017-.075.008-.027.015-.049.017-.078zM6.257 18.96l.01-4.83 3.398 2.547-3.408 2.283zM20.554 5.286L5.926 12.943 1.53 9.749l19.024-4.463zM6.602 13.434l12.762-6.679-10.826 8.086-1.936-1.407zm7.94 5.77l-5.368-3.901 12.989-9.701-7.621 13.602z"
  }));
};

export default IconPlane;