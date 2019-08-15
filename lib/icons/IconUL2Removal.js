'use strict';

import _extends from "@babel/runtime-corejs3/helpers/extends";
import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconUL2Removal = function IconUL2Removal(props) {
  var primary = props.primary || '#888';
  var secondary = props.secondary || 'none';
  return React.createElement(SvgIcon, _extends({
    x: 0,
    y: 0,
    viewBox: "0 0 24 24",
    xmlSpace: "preserve"
  }, props), React.createElement("path", {
    fill: secondary,
    d: "M0 0h24v24H0z"
  }), React.createElement("path", {
    fill: primary,
    d: "M12 1.375C6.142 1.375 1.375 6.142 1.375 12S6.142 22.625 12 22.625 22.625 17.859 22.625 12 17.859 1.375 12 1.375zm0 20.5c-5.445 0-9.875-4.43-9.875-9.875S6.555 2.125 12 2.125s9.875 4.43 9.875 9.875-4.429 9.875-9.875 9.875z"
  }), React.createElement("path", {
    fill: primary,
    d: "M15.521 7.305L12 10.826 8.479 7.305 7.305 8.479 10.826 12l-3.521 3.521 1.174 1.174L12 13.174l3.521 3.521 1.174-1.174L13.174 12l3.521-3.521z"
  }));
};

export default IconUL2Removal;