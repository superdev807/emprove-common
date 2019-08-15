'use strict';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconCompanyName = function IconCompanyName(props) {
  return React.createElement(SvgIcon, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), React.createElement("path", {
    d: "M16.4 20.6H2.3c-.9 0-1.5-.7-1.5-1.5V5c0-.9.7-1.5 1.5-1.5h14.1c.9 0 1.5.7 1.5 1.5v14c0 .9-.7 1.6-1.5 1.6zM2.3 4.2c-.4 0-.8.3-.8.8v14c0 .4.4.8.8.8h14.1c.4 0 .8-.4.8-.8V5c0-.4-.4-.8-.8-.8H2.3z"
  }), React.createElement("path", {
    d: "M14.6 17.9H4.1V17c0-1.8 3.5-2.6 5.3-2.6s5.3.9 5.3 2.6v.9z"
  }), React.createElement("circle", {
    cx: "9.3",
    cy: "9.7",
    r: "2.6"
  }), React.createElement("path", {
    d: "M20.1 3.8h.8v16.4h-.8zM22.7 3.8h.8v16.4h-.8z"
  }));
};

export default IconCompanyName;