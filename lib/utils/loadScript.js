'use strict';

import _Promise from "@babel/runtime-corejs3/core-js-stable/promise";
export var loadScript = function loadScript(src) {
  return new _Promise(function (resolve, reject) {
    var s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
};
export default loadScript;