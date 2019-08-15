'use strict';

import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconActionRemove = function IconActionRemove(props) {
  return React.createElement(SvgIcon, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }), React.createElement("path", {
    d: "M12 1.4C6.1 1.4 1.4 6.1 1.4 12S6.1 22.6 12 22.6 22.6 17.9 22.6 12 17.9 1.4 12 1.4zm0 20.5c-5.4 0-9.9-4.4-9.9-9.9S6.6 2.1 12 2.1s9.9 4.4 9.9 9.9-4.5 9.9-9.9 9.9z"
  }), React.createElement("path", {
    fill: "green",
    d: "M15.5 7.3L12 10.8 8.5 7.3 7.3 8.5l3.5 3.5-3.5 3.5 1.2 1.2 3.5-3.5 3.5 3.5 1.2-1.2-3.5-3.5 3.5-3.5z"
  }));
};

export default IconActionRemove;