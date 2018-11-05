'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTabletSelector = exports.isMobileSelector = exports.postSelector = exports.postsSelector = undefined;

var _fp = require('lodash/fp');

var _fp2 = _interopRequireDefault(_fp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* post */
var postsSelector = exports.postsSelector = _fp2.default.get('post.posts');
var postSelector = exports.postSelector = _fp2.default.get('post.post');

/* device */
var isMobileSelector = exports.isMobileSelector = _fp2.default.get('device.isMobile');
var isTabletSelector = exports.isTabletSelector = _fp2.default.get('device.isTablet');