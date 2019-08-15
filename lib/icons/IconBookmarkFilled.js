'use strict';

import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconBookmarkFilled = function IconBookmarkFilled(props) {
  return React.createElement(SvgIcon, _extends({
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), React.createElement("path", {
    d: "M17.359 1.727H6.641a1.3 1.3 0 0 0-1.298 1.298V22a.272.272 0 0 0 .424.226l6.079-4.036 6.393 4.039a.272.272 0 0 0 .418-.231V3.025a1.3 1.3 0 0 0-1.298-1.298z"
  }));
};

export default IconBookmarkFilled;