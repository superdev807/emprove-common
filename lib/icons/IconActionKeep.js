'use strict';

import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconActionKeep = function IconActionKeep(props) {
  return React.createElement(SvgIcon, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "none",
    d: "M.1 0h24v24H.1z"
  }), React.createElement("path", {
    d: "M12.1 1.4C6.3 1.4 1.5 6.1 1.5 12s4.8 10.6 10.6 10.6S22.7 17.9 22.7 12 18 1.4 12.1 1.4zm0 20.5c-5.4 0-9.9-4.4-9.9-9.9s4.4-9.9 9.9-9.9S22 6.6 22 12s-4.4 9.9-9.9 9.9z"
  }), React.createElement("path", {
    d: "M9.7 14.9l-3-3.1-1 1.1 4 4 8.9-8.8-1.1-1z"
  }));
};

export default IconActionKeep;