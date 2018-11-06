'use strict';

import MobileDetect from 'mobile-detect';

export const getDeviceType = userAgent => {
  const md = new MobileDetect(userAgent);
  return { isMobile: Boolean(md.mobile()), isTablet: Boolean(md.tablet()) };
};
