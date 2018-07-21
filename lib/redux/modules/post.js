'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPostBySlug = exports.getBlogPosts = undefined;

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('redux-actions');

var _request = require('../api/request');

var _constants = require('../constants');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Initial state */
var initialState = {
  posts: [],
  post: null,
  postsStatus: 'INIT'
};

/* Action creators */
var getBlogPosts = exports.getBlogPosts = (0, _reduxActions.createAction)(_constants.GET_BLOG_POSTS);
var getPostBySlug = exports.getPostBySlug = (0, _reduxActions.createAction)(_constants.GET_POST_BY_SLUG);

/* Reducer */

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, (0, _request.requestPending)(_constants.GET_BLOG_POSTS), function (state, _ref) {
  var payload = _ref.payload;
  return _extends({}, state, {
    postsStatus: _request.API_PENDING
  });
}), _defineProperty(_handleActions, (0, _request.requestSuccess)(_constants.GET_BLOG_POSTS), function (state, _ref2) {
  var payload = _ref2.payload;
  return _extends({}, state, {
    posts: payload,
    postsStatus: _request.API_SUCCESS
  });
}), _defineProperty(_handleActions, (0, _request.requestFail)(_constants.GET_BLOG_POSTS), function (state, _ref3) {
  var payload = _ref3.payload;
  return _extends({}, state, {
    posts: [],
    postsStatus: _request.API_FAIL
  });
}), _defineProperty(_handleActions, (0, _request.requestPending)(_constants.GET_POST_BY_SLUG), function (state, _ref4) {
  var payload = _ref4.payload;
  return _extends({}, state, {
    postsStatus: _request.API_PENDING
  });
}), _defineProperty(_handleActions, (0, _request.requestSuccess)(_constants.GET_POST_BY_SLUG), function (state, _ref5) {
  var payload = _ref5.payload;
  return _extends({}, state, {
    post: payload,
    postsStatus: _request.API_SUCCESS
  });
}), _defineProperty(_handleActions, (0, _request.requestFail)(_constants.GET_POST_BY_SLUG), function (state, _ref6) {
  var payload = _ref6.payload;
  return _extends({}, state, {
    post: [],
    postsStatus: _request.API_FAIL
  });
}), _handleActions), initialState);