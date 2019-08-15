'use strict';

var _handleActions;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { createAction, handleActions } from 'redux-actions';
import { API_PENDING, API_SUCCESS, API_FAIL, requestPending, requestSuccess, requestFail } from '../api/request';
import { SUBSCRIBE, UNSUBSCRIBE } from '../constants';
/* Initial state */

var initialState = {
  status: 'INIT'
};
/* Action creators */

export var subscribe = createAction(SUBSCRIBE);
export var unsubscribe = createAction(UNSUBSCRIBE);
/* Reducer */

export default handleActions((_handleActions = {}, _defineProperty(_handleActions, requestPending(SUBSCRIBE), function (state, _ref) {
  var payload = _ref.payload;
  return _objectSpread({}, state, {
    status: API_PENDING
  });
}), _defineProperty(_handleActions, requestSuccess(SUBSCRIBE), function (state, _ref2) {
  var payload = _ref2.payload;
  return _objectSpread({}, state, {
    status: API_SUCCESS
  });
}), _defineProperty(_handleActions, requestFail(SUBSCRIBE), function (state, _ref3) {
  var payload = _ref3.payload;
  return _objectSpread({}, state, {
    status: API_FAIL
  });
}), _defineProperty(_handleActions, requestPending(UNSUBSCRIBE), function (state, _ref4) {
  var payload = _ref4.payload;
  return _objectSpread({}, state, {
    status: API_PENDING
  });
}), _defineProperty(_handleActions, requestSuccess(UNSUBSCRIBE), function (state, _ref5) {
  var payload = _ref5.payload;
  return _objectSpread({}, state, {
    status: API_SUCCESS
  });
}), _defineProperty(_handleActions, requestFail(UNSUBSCRIBE), function (state, _ref6) {
  var payload = _ref6.payload;
  return _objectSpread({}, state, {
    status: API_FAIL
  });
}), _handleActions), initialState);