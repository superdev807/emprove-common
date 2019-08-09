'use strict';

import MobileDetect from 'mobile-detect';
export var getDeviceType = function getDeviceType(userAgent) {
  var md = userAgent && new MobileDetect(userAgent);

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