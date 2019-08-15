'use strict';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconCreateProject = function IconCreateProject(props) {
  return React.createElement(SvgIcon, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), React.createElement("path", {
    d: "M12 2.2c-5.4 0-9.8 4.4-9.8 9.8s4.4 9.8 9.8 9.8 9.8-4.4 9.8-9.8-4.4-9.8-9.8-9.8zm0 18.9c-5 0-9.1-4.1-9.1-9.1S7 2.9 12 2.9 21.1 7 21.1 12 17 21.1 12 21.1z"
  }), React.createElement("path", {
    d: "M13.1 7.8h-2.3v3h-3V13h3v3.2h2.3V13h3.1v-2.2h-3.1z"
  }));
};

export default IconCreateProject;