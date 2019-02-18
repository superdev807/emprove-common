'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setGlobalProperty = exports.setLandingVisited = exports.listTranslations = exports.toggleDrawer = exports.setSnackbar = exports.resetSnackbar = undefined;

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('redux-actions');

var _request = require('../api/request');

var _constants = require('../constants');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  drawerOpen: false,
  landingVisited: false,
  snackbar: null,
  variant: 'success',
  translations: [],
  translationsStatus: 'INIT'
};

/* Action creators */
var resetSnackbar = exports.resetSnackbar = (0, _reduxActions.createAction)(_constants.RESET_SNACKBAR);
var setSnackbar = exports.setSnackbar = (0, _reduxActions.createAction)(_constants.SET_SNACKBAR);
var toggleDrawer = exports.toggleDrawer = (0, _reduxActions.createAction)(_constants.TOGGLE_DRAWER);
var listTranslations = exports.listTranslations = (0, _reduxActions.createAction)(_constants.LIST_TRANSLATIONS);
var setLandingVisited = exports.setLandingVisited = (0, _reduxActions.createAction)(_constants.SET_LANDING_VISITED);
var setGlobalProperty = exports.setGlobalProperty = (0, _reduxActions.createAction)(_constants.SET_GLOBAL_PROPERTY);

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
}), _defineProperty(_handleActions, _constants.SET_LANDING_VISITED, function (state, _ref4) {
  var payload = _ref4.payload;
  return _extends({}, state, {
    landingVisited: true
  });
}), _defineProperty(_handleActions, (0, _request.requestPending)(_constants.LIST_TRANSLATIONS), function (state, _ref5) {
  var payload = _ref5.payload;
  return _extends({}, state, {
    translationsStatus: _request.API_PENDING
  });
}), _defineProperty(_handleActions, (0, _request.requestSuccess)(_constants.LIST_TRANSLATIONS), function (state, _ref6) {
  var payload = _ref6.payload;
  return _extends({}, state, {
    translations: payload,
    translationsStatus: _request.API_SUCCESS
  });
}), _defineProperty(_handleActions, (0, _request.requestFail)(_constants.LIST_TRANSLATIONS), function (state, _ref7) {
  var payload = _ref7.payload;
  return _extends({}, state, {
    translationsStatus: _request.API_FAIL
  });
}), _defineProperty(_handleActions, _constants.SET_GLOBAL_PROPERTY, function (state, action) {
  return _extends({}, state, action.payload);
}), _handleActions), initialState);