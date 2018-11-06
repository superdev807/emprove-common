'use strict';

import MobileDetect from 'mobile-detect';

export const getDeviceType = userAgent => {
  const md = userAgent && new MobileDetect(userAgent);
  if (md) {
    return { isMobile: Boolean(md.mobile()), isTablet: Boolean(md.tablet()) };
  }
  return { isMobile: false, isTablet: false };
};
