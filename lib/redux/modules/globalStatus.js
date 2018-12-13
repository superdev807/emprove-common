'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleDrawer = exports.setSnackbar = exports.resetSnackbar = undefined;

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('redux-actions');

var _constants = require('../constants');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  drawerOpen: false,
  snackbar: null,
  variant: 'success'
};

/* Action creators */
var resetSnackbar = exports.resetSnackbar = (0, _reduxActions.createAction)(_constants.RESET_SNACKBAR);
var setSnackbar = exports.setSnackbar = (0, _reduxActions.createAction)(_constants.SET_SNACKBAR);
var toggleDrawer = exports.toggleDrawer = (0, _reduxActions.createAction)(_constants.TOGGLE_DRAWER);

/* Reducer */

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _constants.SET_SNACKBAR, function (state, _ref) {
  var payload = _ref.payload;
  return _extends({}, state, {
    snackbar: payload.message, // snackbar message
    variant: payload.variant, // snackbar variant
    anchor: payload.anchor
  });
}), _defineProperty(_handleActions, _constants.RESET_SNACKBAR, function (state, _ref2) {
  var payload = _ref2.payload;
  return _extends({}, state, {
    snackbar: null,
    variant: 'success'
  });
}), _defineProperty(_handleActions, _constants.TOGGLE_DRAWER, function (state, _ref3) {
  var payload = _ref3.payload;
  return _extends({}, state, {
    drawerOpen: typeof payload === 'boolean' ? payload : !state.drawerOpen
  });
}), _handleActions), initialState);