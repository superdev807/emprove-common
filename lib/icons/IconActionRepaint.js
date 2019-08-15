'use strict';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconActionRepaint = function IconActionRepaint(props) {
  return React.createElement(SvgIcon, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), React.createElement("path", {
    d: "M12 1.4C6.1 1.4 1.4 6.1 1.4 12S6.1 22.6 12 22.6 22.6 17.9 22.6 12 17.9 1.4 12 1.4zm0 20.5c-5.4 0-9.9-4.4-9.9-9.9S6.6 2.1 12 2.1s9.9 4.4 9.9 9.9-4.5 9.9-9.9 9.9z"
  }), React.createElement("path", {
    d: "M12 17.2c-2.7 0-4.9-2.2-4.9-4.9S9.3 7.4 12 7.4c1.5 0 2.9.7 3.8 1.8h-2.1v1.2h3.9V6.6h-1.2v1.6c-1.1-1.3-2.7-2-4.5-2-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6h-1.2c.2 2.8-2 5-4.7 5z"
  }));
};

export default IconActionRepaint;