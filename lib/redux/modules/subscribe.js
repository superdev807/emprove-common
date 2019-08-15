'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.unsubscribe = exports.subscribe = void 0;

var _reduxActions = require("redux-actions");

var _request = require("../api/request");

var _constants = require("../constants");

var _handleActions;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Initial state */
var initialState = {
  status: 'INIT'
};
/* Action creators */

var subscribe = (0, _reduxActions.createAction)(_constants.SUBSCRIBE);
exports.subscribe = subscribe;
var unsubscribe = (0, _reduxActions.createAction)(_constants.UNSUBSCRIBE);
/* Reducer */

exports.unsubscribe = unsubscribe;

var _default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, (0, _request.requestPending)(_constants.SUBSCRIBE), function (state, _ref) {
  var payload = _ref.payload;
  return _objectSpread({}, state, {
    status: _request.API_PENDING
  });
}), _defineProperty(_handleActions, (0, _request.requestSuccess)(_constants.SUBSCRIBE), function (state, _ref2) {
  var payload = _ref2.payload;
  return _objectSpread({}, state, {
    status: _request.API_SUCCESS
  });
}), _defineProperty(_handleActions, (0, _request.requestFail)(_constants.SUBSCRIBE), function (state, _ref3) {
  var payload = _ref3.payload;
  return _objectSpread({}, state, {
    status: _request.API_FAIL
  });
}), _defineProperty(_handleActions, (0, _request.requestPending)(_constants.UNSUBSCRIBE), function (state, _ref4) {
  var payload = _ref4.payload;
  return _objectSpread({}, state, {
    status: _request.API_PENDING
  });
}), _defineProperty(_handleActions, (0, _request.requestSuccess)(_constants.UNSUBSCRIBE), function (state, _ref5) {
  var payload = _ref5.payload;
  return _objectSpread({}, state, {
    status: _request.API_SUCCESS
  });
}), _defineProperty(_handleActions, (0, _request.requestFail)(_constants.UNSUBSCRIBE), function (state, _ref6) {
  var payload = _ref6.payload;
  return _objectSpread({}, state, {
    status: _request.API_FAIL
  });
}), _handleActions), initialState);

exports["default"] = _default;