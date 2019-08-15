'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.detectDevice = void 0;

var _reduxActions = require("redux-actions");

var _constants = require("../constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

exports["default"] = _default;