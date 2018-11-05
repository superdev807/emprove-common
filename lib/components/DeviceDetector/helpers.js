'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDeviceType = undefined;

var _mobileDetect = require('mobile-detect');

var _mobileDetect2 = _interopRequireDefault(_mobileDetect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var md = new _mobileDetect2.default(window.navigator.userAgent);

var getDeviceType = exports.getDeviceType = function getDeviceType() {
  return { isMobile: Boolean(md.mobile()), isTablet: Boolean(md.tablet()) };
};