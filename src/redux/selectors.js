'use strict';

import fp from 'lodash/fp';

/* post */
export const postsSelector = fp.get('post.posts');
export const postSelector = fp.get('post.post');

/* device */
export const isMobileSelector = fp.get('device.isMobile');
export const isPhoneSelector = fp.get('device.isPhone');
export const isTabletSelector = fp.get('device.isTablet');
