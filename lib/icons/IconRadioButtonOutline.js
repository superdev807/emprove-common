'use strict';

import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconRadioButtonOutline = function IconRadioButtonOutline(props) {
  return React.createElement(SvgIcon, _extends({
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    d: "M12 3.667C7.4 3.667 3.667 7.4 3.667 12S7.4 20.333 12 20.333 20.333 16.6 20.333 12 16.6 3.667 12 3.667zm0 15c-3.683 0-6.667-2.983-6.667-6.667S8.317 5.333 12 5.333 18.667 8.317 18.667 12 15.683 18.667 12 18.667z"
  }), React.createElement("path", {
    d: "M2 2h20v20H2V2z",
    fill: "none"
  }));
};

export default IconRadioButtonOutline;