'use strict';

import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

var _handleActions;

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(source, true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(source)).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

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