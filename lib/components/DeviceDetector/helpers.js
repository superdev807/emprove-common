'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDeviceType = undefined;

var _mobileDetect = require('mobile-detect');

var _mobileDetect2 = _interopRequireDefault(_mobileDetect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getDeviceType = exports.getDeviceType = function getDeviceType(userAgent) {
  var md = userAgent && new _mobileDetect2.default(userAgent);
  if (md) {
    return { isMobile: Boolean(md.mobile()), isPhone: Boolean(md.phone()), isTablet: Boolean(md.tablet()) };
  }
  return { isMobile: false, isPhone: false, isTablet: false };
};