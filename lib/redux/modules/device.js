'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectDevice = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('redux-actions');

var _constants = require('../constants');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Initial state */

var initialState = {
  isMobile: null,
  isPhone: null,
  isTablet: null
};

/* Action creators */
var detectDevice = exports.detectDevice = (0, _reduxActions.createAction)(_constants.DETECT_DEVICE);

/* Reducer */
exports.default = (0, _reduxActions.handleActions)(_defineProperty({}, _constants.DETECT_DEVICE, function (state, _ref) {
  var payload = _ref.payload;

  return _extends({}, state, {
    isMobile: payload.isMobile,
    isPhone: payload.isPhone,
    isTablet: payload.isTablet
  });
}), initialState);