'use strict';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconUL2CommunicationCabling = function IconUL2CommunicationCabling(props) {
  var primary = props.primary || '#878787';
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
    d: "M6.619 12.286h4.302c.164 0 .31-.107.358-.265l.923-2.987a.372.372 0 0 0 .017-.11V2.492h-.75v1.65h-1.36v-1.65h-.75v1.65h-1.36v-1.65h-.75v1.65H5.888v-1.65h-.75V8.923c0 .044.008.089.023.13l1.105 2.987a.377.377 0 0 0 .353.246zm-.567-2.987h1.167v-.75h-1.33V4.892h1.714v1.6l.553.199v3.264c0 .237.193.43.43.43h.184a.43.43 0 0 0 .43-.43V6.661l.553-.168v-1.6h1.715v3.656h-1.331v.75h1.198l-.691 2.237H6.879l-.827-2.237zM11.066 13.228a.375.375 0 0 0-.375-.375H6.664a.375.375 0 0 0 0 .75h4.026a.375.375 0 0 0 .376-.375zM10.519 14.557a.375.375 0 0 0-.375-.375H7.211a.375.375 0 0 0 0 .75h2.933a.375.375 0 0 0 .375-.375zM10.132 15.887a.375.375 0 0 0-.375-.375H7.598a.375.375 0 0 0 0 .75h2.159a.375.375 0 0 0 .375-.375zM10.796 21.133a1.913 1.913 0 0 1-1.911-1.911v-2.424h-.75v2.424a2.663 2.663 0 0 0 2.661 2.661h9.487v-.75h-9.487z"
  }));
};

export default IconUL2CommunicationCabling;