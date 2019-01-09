'use strict';

import fp from 'lodash/fp';

/* post */
export const postsSelector = fp.get('post.posts');
export const postSelector = fp.get('post.post');

/* device */
export const isMobileSelector = fp.get('device.isMobile');
export const isPhoneSelector = fp.get('device.isPhone');
export const isTabletSelector = fp.get('device.isTablet');

/* global status */
export const globalStatusSelector = fp.get('globalStatus');
export const translationsSelector = fp.get('globalStatus.translations');
export const translationsStatusSelector = fp.get('globalStatus.translationsStatus');

/* pdf status */
export const exportStatusSelector = fp.get('pdf.status');
export const sendPdfStatusSelector = fp.get('pdf.sendStatus');
