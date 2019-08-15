'use strict';

import "core-js/modules/es.object.assign";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconUL2Lighting = function IconUL2Lighting(props) {
  var primary = props.primary || '#878787';
  var secondary = props.secondary || 'none';
  return React.createElement(SvgIcon, _extends({
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: secondary,
    d: "M0 0h24v24H0z"
  }), React.createElement("path", {
    d: "M17.916 1.698H6.083a1.21 1.21 0 0 0 0 2.417h2.629v5.93c-1.251.253-1.565 2.582-1.63 3.242l-.8.8a.376.376 0 0 0 .266.64h.593c.221.888 1.005 1.525 1.946 1.525s1.725-.638 1.946-1.525h.593a.376.376 0 0 0 .266-.639l-.799-.8c-.065-.66-.379-2.99-1.631-3.243v-5.93h5.091c-.006.026-.016.052-.016.08v11.898c-1.251.253-1.565 2.583-1.63 3.244l-.8.799a.376.376 0 0 0 .266.64h.594c.221.888 1.005 1.525 1.946 1.525s1.725-.638 1.946-1.525h.594a.379.379 0 0 0 .347-.231.377.377 0 0 0-.081-.409l-.8-.799c-.065-.661-.378-2.991-1.631-3.244V4.195c0-.028-.01-.054-.016-.08h2.645a1.21 1.21 0 0 0 1.209-1.209 1.211 1.211 0 0 0-1.21-1.208zM9.087 15.502a1.25 1.25 0 0 1-1.153-.754h2.307c-.196.45-.638.754-1.154.754zm1.269-2.019c.007.09.045.174.108.237l.257.257H7.453l.257-.256a.375.375 0 0 0 .108-.238c.08-1.095.491-2.714 1.119-2.714h.299c.627 0 1.039 1.619 1.12 2.714zm4.556 8.069c-.515 0-.957-.305-1.153-.754h2.308c-.198.45-.64.754-1.155.754zm1.27-2.019a.38.38 0 0 0 .108.238l.257.256h-3.269l.257-.256a.375.375 0 0 0 .108-.238c.08-1.095.491-2.715 1.119-2.715h.299c.627 0 1.04 1.62 1.121 2.715zm1.734-16.168H6.083a.459.459 0 0 1 0-.917h11.833a.459.459 0 1 1 0 .917z",
    fill: primary
  }));
};

export default IconUL2Lighting;