'use strict';

import fp from 'lodash/fp';
import { createSelector } from 'reselect';

import { API_PENDING } from './api/request';

/* post */
export const postsLoadingSelector = fp.compose(postStatus => postStatus === API_PENDING, fp.get('post.postsStatus'));
export const postsSelector = fp.get('post.posts');
export const postSelector = fp.get('post.post');

/* device */
export const isMobileSelector = fp.get('device.isMobile');
export const isPhoneSelector = fp.get('device.isPhone');
export const isTabletSelector = fp.get('device.isTablet');
export const usingDesktopSelector = createSelector(isMobileSelector, isMobile => !isMobile);

/* global status */
export const globalStatusSelector = fp.get('globalStatus');
export const translationsSelector = fp.get('globalStatus.translations');
export const translationsStatusSelector = fp.get('globalStatus.translationsStatus');

/* pdf status */
export const exportStatusSelector = fp.get('pdf.status');
export const sendPdfStatusSelector = fp.get('pdf.sendStatus');
