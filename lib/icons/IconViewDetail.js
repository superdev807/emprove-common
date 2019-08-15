'use strict';

import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconViewDetail = function IconViewDetail(props) {
  return React.createElement(SvgIcon, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "none",
    d: "M0,0h24v24H0V0z"
  }), React.createElement("path", {
    d: "M21.4,9.8c0-5.2-4.2-9.4-9.4-9.4S2.6,4.6,2.6,9.8c0,4.9,3.8,9,8.7,9.4v0.4l-0.8,0.8V24h2.9v-3.6l-0.8-0.8 v-0.4C17.5,18.8,21.4,14.7,21.4,9.8z M12,18.4c-1.6,0-3.1-0.4-4.4-1.2h3.9v-2.7H4.8c-0.6-0.9-1.1-2-1.3-3.1h8V8.9H3.4 C3.5,7.9,3.8,7,4.1,6.2h15.7c0.5,1.1,0.8,2.3,0.8,3.6C20.7,14.5,16.8,18.4,12,18.4z M17.5,3.1H6.5c1.5-1.3,3.4-2,5.5-2 C14.1,1.1,16,1.9,17.5,3.1z"
  }), React.createElement("rect", {
    x: "13.2",
    y: "8.2",
    width: "4",
    height: "4"
  }));
};

export default IconViewDetail;