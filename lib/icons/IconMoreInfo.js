'use strict';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconMoreInfo = function IconMoreInfo(props) {
  return React.createElement(SvgIcon, _extends({
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    d: "M24 0H0v24h24V0z",
    fill: "none"
  }), React.createElement("path", {
    d: "M12 10.132a1.868 1.868 0 1 0 0 3.735 1.868 1.868 0 0 0 0-3.735M5.151 10.132a1.868 1.868 0 1 0 0 3.735 1.868 1.868 0 0 0 0-3.735"
  }), React.createElement("circle", {
    cx: 18.849,
    cy: 12,
    r: 1.868
  }));
};

export default IconMoreInfo;