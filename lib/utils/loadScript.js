'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.loadScript = void 0;

var loadScript = function loadScript(src) {
  return new Promise(function (resolve, reject) {
    var s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
};

exports.loadScript = loadScript;
var _default = loadScript;
exports["default"] = _default;