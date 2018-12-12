'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.globalStatusSelector = exports.isTabletSelector = exports.isPhoneSelector = exports.isMobileSelector = exports.postSelector = exports.postsSelector = undefined;

var _fp = require('lodash/fp');

var _fp2 = _interopRequireDefault(_fp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* post */
var postsSelector = exports.postsSelector = _fp2.default.get('post.posts');
var postSelector = exports.postSelector = _fp2.default.get('post.post');

/* device */
var isMobileSelector = exports.isMobileSelector = _fp2.default.get('device.isMobile');
var isPhoneSelector = exports.isPhoneSelector = _fp2.default.get('device.isPhone');
var isTabletSelector = exports.isTabletSelector = _fp2.default.get('device.isTablet');

/* global status */
var globalStatusSelector = exports.globalStatusSelector = _fp2.default.get('globalStatus');