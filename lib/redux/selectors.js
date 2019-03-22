'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendPdfStatusSelector = exports.exportStatusSelector = exports.translationsStatusSelector = exports.translationsSelector = exports.globalStatusSelector = exports.usingDesktopSelector = exports.isTabletSelector = exports.isPhoneSelector = exports.isMobileSelector = exports.postSelector = exports.postsSelector = exports.postsLoadingSelector = exports.postLoadingSelector = void 0;

var _fp = _interopRequireDefault(require("lodash/fp"));

var _reselect = require("reselect");

var _request = require("./api/request");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* post */
var postLoadingSelector = _fp.default.compose(function (postStatus) {
  return postStatus === _request.API_PENDING;
}, _fp.default.get('post.postStatus'));

exports.postLoadingSelector = postLoadingSelector;

var postsLoadingSelector = _fp.default.compose(function (postsStatus) {
  return postsStatus === _request.API_PENDING;
}, _fp.default.get('post.postsStatus'));

exports.postsLoadingSelector = postsLoadingSelector;

var postsSelector = _fp.default.get('post.posts');

exports.postsSelector = postsSelector;

var postSelector = _fp.default.get('post.post');
/* device */


exports.postSelector = postSelector;

var isMobileSelector = _fp.default.get('device.isMobile');

exports.isMobileSelector = isMobileSelector;

var isPhoneSelector = _fp.default.get('device.isPhone');

exports.isPhoneSelector = isPhoneSelector;

var isTabletSelector = _fp.default.get('device.isTablet');

exports.isTabletSelector = isTabletSelector;
var usingDesktopSelector = (0, _reselect.createSelector)(isMobileSelector, function (isMobile) {
  return !isMobile;
});
/* global status */

exports.usingDesktopSelector = usingDesktopSelector;

var globalStatusSelector = _fp.default.get('globalStatus');

exports.globalStatusSelector = globalStatusSelector;

var translationsSelector = _fp.default.get('globalStatus.translations');

exports.translationsSelector = translationsSelector;

var translationsStatusSelector = _fp.default.get('globalStatus.translationsStatus');
/* pdf status */


exports.translationsStatusSelector = translationsStatusSelector;

var exportStatusSelector = _fp.default.get('pdf.status');

exports.exportStatusSelector = exportStatusSelector;

var sendPdfStatusSelector = _fp.default.get('pdf.sendStatus');

exports.sendPdfStatusSelector = sendPdfStatusSelector;