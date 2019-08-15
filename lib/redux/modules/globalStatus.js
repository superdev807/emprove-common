'use strict';

import "core-js/modules/es.symbol";
import "core-js/modules/es.array.filter";
import "core-js/modules/es.array.for-each";
import "core-js/modules/es.object.define-properties";
import "core-js/modules/es.object.define-property";
import "core-js/modules/es.object.get-own-property-descriptor";
import "core-js/modules/es.object.get-own-property-descriptors";
import "core-js/modules/es.object.keys";
import "core-js/modules/es.string.anchor";
import "core-js/modules/web.dom-collections.for-each";

var _handleActions;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { createAction, handleActions } from 'redux-actions';
import { API_PENDING, API_SUCCESS, API_FAIL, requestPending, requestSuccess, requestFail } from '../api/request';
import { LIST_TRANSLATIONS, RESET_SNACKBAR, SET_SNACKBAR, SET_LANDING_VISITED, SET_GLOBAL_PROPERTY, TOGGLE_DRAWER } from '../constants';
var initialState = {
  drawerOpen: false,
  landingVisited: false,
  snackbar: null,
  variant: 'success',
  translations: [],
  translationsStatus: 'INIT'
};
/* Action creators */

export var resetSnackbar = createAction(RESET_SNACKBAR);
export var setSnackbar = createAction(SET_SNACKBAR);
export var toggleDrawer = createAction(TOGGLE_DRAWER);
export var listTranslations = createAction(LIST_TRANSLATIONS);
export var setLandingVisited = createAction(SET_LANDING_VISITED);
export var setGlobalProperty = createAction(SET_GLOBAL_PROPERTY);
/* Reducer */

export default handleActions((_handleActions = {}, _defineProperty(_handleActions, SET_SNACKBAR, function (state, _ref) {
  var payload = _ref.payload;
  return _objectSpread({}, state, {
    snackbar: payload.message,
    // snackbar message
    variant: payload.variant,
    // snackbar variant
    anchor: payload.anchor
  });
}), _defineProperty(_handleActions, RESET_SNACKBAR, function (state, _ref2) {
  var payload = _ref2.payload;
  return _objectSpread({}, state, {
    snackbar: null,
    variant: 'success'
  });
}), _defineProperty(_handleActions, TOGGLE_DRAWER, function (state, _ref3) {
  var payload = _ref3.payload;
  return _objectSpread({}, state, {
    drawerOpen: typeof payload === 'boolean' ? payload : !state.drawerOpen
  });
}), _defineProperty(_handleActions, SET_LANDING_VISITED, function (state, _ref4) {
  var payload = _ref4.payload;
  return _objectSpread({}, state, {
    landingVisited: true
  });
}), _defineProperty(_handleActions, requestPending(LIST_TRANSLATIONS), function (state, _ref5) {
  var payload = _ref5.payload;
  return _objectSpread({}, state, {
    translationsStatus: API_PENDING
  });
}), _defineProperty(_handleActions, requestSuccess(LIST_TRANSLATIONS), function (state, _ref6) {
  var payload = _ref6.payload;
  return _objectSpread({}, state, {
    translations: payload,
    translationsStatus: API_SUCCESS
  });
}), _defineProperty(_handleActions, requestFail(LIST_TRANSLATIONS), function (state, _ref7) {
  var payload = _ref7.payload;
  return _objectSpread({}, state, {
    translationsStatus: API_FAIL
  });
}), _defineProperty(_handleActions, SET_GLOBAL_PROPERTY, function (state, action) {
  return _objectSpread({}, state, {}, action.payload);
}), _handleActions), initialState);