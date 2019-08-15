'use strict';

import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconPhotoUpload = function IconPhotoUpload(props) {
  return React.createElement(SvgIcon, _extends({
    x: 0,
    y: 0,
    viewBox: "0 0 24 24",
    xmlSpace: "preserve"
  }, props), React.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), React.createElement("circle", {
    cx: 8.804,
    cy: 6.266,
    r: 1.325
  }), React.createElement("path", {
    d: "M14.288 9.387l-.688.692-2.282-2.522-5.071 5.301h11.506z"
  }), React.createElement("path", {
    d: "M22.315 1.483H1.685a.375.375 0 0 0-.375.375v16.784c0 .207.168.375.375.375h5.903c.032 2.408 1.995 4.358 4.412 4.358s4.38-1.95 4.413-4.358h5.903a.375.375 0 0 0 .375-.375V1.858a.377.377 0 0 0-.376-.375zM12 22.625a3.673 3.673 0 0 1-3.668-3.668A3.673 3.673 0 0 1 12 15.288a3.673 3.673 0 0 1 3.669 3.669A3.673 3.673 0 0 1 12 22.625zm9.94-4.358h-5.591c-.335-2.108-2.149-3.729-4.349-3.729s-4.014 1.621-4.348 3.729H2.06V2.233h19.88v16.034z"
  }), React.createElement("path", {
    d: "M10.72 20.761h2.56v.449h-2.56zM10.652 18.051l.317.317.806-.805v2.448h.45v-2.448l.806.805.317-.317L12 16.703z"
  }));
};

export default IconPhotoUpload;