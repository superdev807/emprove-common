'use strict';

import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent);

export const getDeviceType = () => {
  return { isMobile: Boolean(md.mobile()), isTablet: Boolean(md.tablet()) };
};