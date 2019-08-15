'use strict';

import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconAddYourPhoto = function IconAddYourPhoto(props) {
  return React.createElement(SvgIcon, _extends({
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), React.createElement("path", {
    d: "M20.517 4.199h-3.039l-2.129-2.13H8.651l-2.13 2.13H3.483A2.506 2.506 0 0 0 .979 6.703v12.774a2.506 2.506 0 0 0 2.504 2.504h17.033a2.506 2.506 0 0 0 2.504-2.504V6.702a2.505 2.505 0 0 0-2.503-2.503zm1.754 15.278c0 .967-.787 1.754-1.754 1.754H3.483a1.756 1.756 0 0 1-1.754-1.754V6.702c0-.967.787-1.754 1.754-1.754h1.952v.018h13.75v-.017h1.331c.967 0 1.754.787 1.754 1.754v12.774z"
  }), React.createElement("path", {
    d: "M12 7.392c-3.142 0-5.698 2.556-5.698 5.697S8.858 18.787 12 18.787s5.697-2.557 5.697-5.698S15.142 7.392 12 7.392zm0 10.645a4.953 4.953 0 0 1-4.948-4.948A4.953 4.953 0 0 1 12 8.142a4.953 4.953 0 0 1 4.947 4.947A4.953 4.953 0 0 1 12 18.037z"
  }), React.createElement("path", {
    d: "M12 9.896a3.194 3.194 0 1 0 0 6.388 3.194 3.194 0 0 0 0-6.388z"
  }));
};

export default IconAddYourPhoto;