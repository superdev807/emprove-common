'use strict';

import fp from 'lodash/fp';
import { createSelector } from 'reselect';
import { API_PENDING } from './api/request'; // post

export var postLoadingSelector = fp.compose(function (postStatus) {
  return postStatus === API_PENDING;
}, fp.get('post.postStatus'));
export var postsLoadingSelector = fp.compose(function (postsStatus) {
  return postsStatus === API_PENDING;
}, fp.get('post.postsStatus'));
export var postsSelector = fp.get('post.posts');
export var postSelector = fp.get('post.post'); // device

export var isMobileSelector = fp.get('device.isMobile');
export var isPhoneSelector = fp.get('device.isPhone');
export var isTabletSelector = fp.get('device.isTablet');
export var usingDesktopSelector = createSelector(isMobileSelector, function (isMobile) {
  return !isMobile;
}); //  global status

export var globalStatusSelector = fp.get('globalStatus');
export var translationsSelector = fp.get('globalStatus.translations');
export var translationsStatusSelector = fp.get('globalStatus.translationsStatus'); // pdf status

export var exportStatusSelector = fp.get('pdf.status');
export var sendPdfStatusSelector = fp.get('pdf.sendStatus');
export var exportInProcessStatusSelector = createSelector(exportStatusSelector, function (exportStatus) {
  return exportStatus === API_PENDING;
});