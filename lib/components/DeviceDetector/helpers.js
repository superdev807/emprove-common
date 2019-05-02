'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDeviceType = void 0;

var _mobileDetect = _interopRequireDefault(require("mobile-detect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getDeviceType = function getDeviceType(userAgent) {
  var md = userAgent && new _mobileDetect["default"](userAgent);

  if (md) {
    return {
      isMobile: Boolean(md.mobile()),
      isPhone: Boolean(md.phone()),
      isTablet: Boolean(md.tablet())
    };
  }

  return {
    isMobile: false,
    isPhone: false,
    isTablet: false
  };
};

exports.getDeviceType = getDeviceType;