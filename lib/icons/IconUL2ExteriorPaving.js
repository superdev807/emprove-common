'use strict';

import _extends from "@babel/runtime-corejs3/helpers/extends";
import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

var IconUL2ExteriorPaving = function IconUL2ExteriorPaving(props) {
  var primary = props.primary || '#878787';
  var secondary = props.secondary || 'none';
  return React.createElement(SvgIcon, _extends({
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: secondary,
    d: "M0 0h24v24H0z"
  }), React.createElement("path", {
    d: "M21.019 21.579l-4.935-6.908h.436a.97.97 0 0 0 .969-.969V7.416l.34.292.488-.568-6.072-5.221a.373.373 0 0 0-.488 0l-6.074 5.22.488.568.34-.292v6.286a.97.97 0 0 0 .969.969h.436l-4.935 6.908a.373.373 0 0 0-.028.39.372.372 0 0 0 .333.203h17.429a.374.374 0 0 0 .304-.592zm-6.038-12.64H9.019v-.634h5.962v.634zm-5.962.75h5.962v.495H9.019v-.495zm0 1.245h5.962v.495H9.019v-.495zm0 1.246h5.962v.496H9.019v-.496zm0 1.246h5.962v.495H9.019v-.495zm-1.758.276V6.771L12 2.697l4.738 4.074v6.931a.219.219 0 0 1-.219.219h-.789V7.93a.375.375 0 0 0-.375-.375H8.644a.375.375 0 0 0-.375.375v5.991H7.48a.219.219 0 0 1-.219-.219zm-3.247 7.72l4.823-6.751h6.325l4.823 6.751H4.014z",
    fill: primary
  }));
};

export default IconUL2ExteriorPaving;