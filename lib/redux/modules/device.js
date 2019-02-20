'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.detectDevice = void 0;

var _reduxActions = require("redux-actions");

var _constants = require("../constants");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Initial state */
var initialState = {
  isMobile: false,
  isPhone: false,
  isTablet: false
};
/* Action creators */

var detectDevice = (0, _reduxActions.createAction)(_constants.DETECT_DEVICE);
/* Reducer */

exports.detectDevice = detectDevice;

var _default = (0, _reduxActions.handleActions)(_defineProperty({}, _constants.DETECT_DEVICE, function (state, _ref) {
  var payload = _ref.payload;
  return _objectSpread({}, state, {
    isMobile: payload.isMobile,
    isPhone: payload.isPhone,
    isTablet: payload.isTablet
  });
}), initialState);

exports.default = _default;