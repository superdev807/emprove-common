'use strict';

import "core-js/modules/es.symbol";
import "core-js/modules/es.array.filter";
import "core-js/modules/es.array.for-each";
import "core-js/modules/es.object.define-properties";
import "core-js/modules/es.object.define-property";
import "core-js/modules/es.object.get-own-property-descriptor";
import "core-js/modules/es.object.get-own-property-descriptors";
import "core-js/modules/es.object.keys";
import "core-js/modules/web.dom-collections.for-each";

var _handleActions;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { createAction, handleActions } from 'redux-actions';
import { API_PENDING, API_SUCCESS, API_FAIL, requestPending, requestSuccess, requestFail } from '../api/request';
import { EXPORT_RFP_PDF, DOWNLOAD_RFP_PDF, SEND_RFP_PDF, EXPORT_BID_PDF, DOWNLOAD_BID_PDF, SEND_BID_PDF, EXPORT_CONTRACT_PDF, EXPORT_RFP_SUMMARY_PDF, SEND_RFP_SUMMARY_PDF } from '../constants';
/* Initial state */

var initialState = {
  status: 'INIT',
  sendStatus: 'INIT'
};
/* Action creators */

export var exportRfpPdf = createAction(EXPORT_RFP_PDF);
export var downloadRfpPdf = createAction(DOWNLOAD_RFP_PDF);
export var sendRfpPdf = createAction(SEND_RFP_PDF);
export var exportRfpSummaryPdf = createAction(EXPORT_RFP_SUMMARY_PDF);
export var sendRfpSummaryPdf = createAction(SEND_RFP_SUMMARY_PDF);
export var exportBidPdf = createAction(EXPORT_BID_PDF);
export var downloadBidPdf = createAction(DOWNLOAD_BID_PDF);
export var sendBidPdf = createAction(SEND_BID_PDF);
export var exportContractPdf = createAction(EXPORT_CONTRACT_PDF);
/* Reducer */

export default handleActions((_handleActions = {}, _defineProperty(_handleActions, requestPending(EXPORT_RFP_PDF), function (state, _ref) {
  var payload = _ref.payload;
  return _objectSpread({}, state, {
    status: API_PENDING
  });
}), _defineProperty(_handleActions, requestSuccess(EXPORT_RFP_PDF), function (state, _ref2) {
  var payload = _ref2.payload;
  return _objectSpread({}, state, {
    status: API_SUCCESS
  });
}), _defineProperty(_handleActions, requestFail(EXPORT_RFP_PDF), function (state, _ref3) {
  var payload = _ref3.payload;
  return _objectSpread({}, state, {
    status: API_FAIL
  });
}), _defineProperty(_handleActions, requestPending(DOWNLOAD_RFP_PDF), function (state, _ref4) {
  var payload = _ref4.payload;
  return _objectSpread({}, state, {
    status: API_PENDING
  });
}), _defineProperty(_handleActions, requestSuccess(DOWNLOAD_RFP_PDF), function (state, _ref5) {
  var payload = _ref5.payload;
  return _objectSpread({}, state, {
    status: API_SUCCESS
  });
}), _defineProperty(_handleActions, requestFail(DOWNLOAD_RFP_PDF), function (state, _ref6) {
  var payload = _ref6.payload;
  return _objectSpread({}, state, {
    status: API_FAIL
  });
}), _defineProperty(_handleActions, requestPending(SEND_RFP_PDF), function (state, _ref7) {
  var payload = _ref7.payload;
  return _objectSpread({}, state, {
    sendStatus: API_PENDING
  });
}), _defineProperty(_handleActions, requestSuccess(SEND_RFP_PDF), function (state, _ref8) {
  var payload = _ref8.payload;
  return _objectSpread({}, state, {
    sendStatus: API_SUCCESS
  });
}), _defineProperty(_handleActions, requestFail(SEND_RFP_PDF), function (state, _ref9) {
  var payload = _ref9.payload;
  return _objectSpread({}, state, {
    sendStatus: API_FAIL
  });
}), _defineProperty(_handleActions, requestPending(EXPORT_RFP_SUMMARY_PDF), function (state, _ref10) {
  var payload = _ref10.payload;
  return _objectSpread({}, state, {
    status: API_PENDING
  });
}), _defineProperty(_handleActions, requestSuccess(EXPORT_RFP_SUMMARY_PDF), function (state, _ref11) {
  var payload = _ref11.payload;
  return _objectSpread({}, state, {
    status: API_SUCCESS
  });
}), _defineProperty(_handleActions, requestFail(EXPORT_RFP_SUMMARY_PDF), function (state, _ref12) {
  var payload = _ref12.payload;
  return _objectSpread({}, state, {
    status: API_FAIL
  });
}), _defineProperty(_handleActions, requestPending(SEND_RFP_SUMMARY_PDF), function (state, _ref13) {
  var payload = _ref13.payload;
  return _objectSpread({}, state, {
    sendStatus: API_PENDING
  });
}), _defineProperty(_handleActions, requestSuccess(SEND_RFP_SUMMARY_PDF), function (state, _ref14) {
  var payload = _ref14.payload;
  return _objectSpread({}, state, {
    sendStatus: API_SUCCESS
  });
}), _defineProperty(_handleActions, requestFail(SEND_RFP_SUMMARY_PDF), function (state, _ref15) {
  var payload = _ref15.payload;
  return _objectSpread({}, state, {
    sendStatus: API_FAIL
  });
}), _defineProperty(_handleActions, requestPending(EXPORT_BID_PDF), function (state, _ref16) {
  var payload = _ref16.payload;
  return _objectSpread({}, state, {
    status: API_PENDING
  });
}), _defineProperty(_handleActions, requestSuccess(EXPORT_BID_PDF), function (state, _ref17) {
  var payload = _ref17.payload;
  return _objectSpread({}, state, {
    status: API_SUCCESS
  });
}), _defineProperty(_handleActions, requestFail(EXPORT_BID_PDF), function (state, _ref18) {
  var payload = _ref18.payload;
  return _objectSpread({}, state, {
    status: API_FAIL
  });
}), _defineProperty(_handleActions, requestPending(DOWNLOAD_BID_PDF), function (state, _ref19) {
  var payload = _ref19.payload;
  return _objectSpread({}, state, {
    status: API_PENDING
  });
}), _defineProperty(_handleActions, requestSuccess(DOWNLOAD_BID_PDF), function (state, _ref20) {
  var payload = _ref20.payload;
  return _objectSpread({}, state, {
    status: API_SUCCESS
  });
}), _defineProperty(_handleActions, requestFail(DOWNLOAD_BID_PDF), function (state, _ref21) {
  var payload = _ref21.payload;
  return _objectSpread({}, state, {
    status: API_FAIL
  });
}), _defineProperty(_handleActions, requestPending(SEND_BID_PDF), function (state, _ref22) {
  var payload = _ref22.payload;
  return _objectSpread({}, state, {
    sendStatus: API_PENDING
  });
}), _defineProperty(_handleActions, requestSuccess(SEND_BID_PDF), function (state, _ref23) {
  var payload = _ref23.payload;
  return _objectSpread({}, state, {
    sendStatus: API_SUCCESS
  });
}), _defineProperty(_handleActions, requestFail(SEND_BID_PDF), function (state, _ref24) {
  var payload = _ref24.payload;
  return _objectSpread({}, state, {
    sendStatus: API_FAIL
  });
}), _defineProperty(_handleActions, requestPending(EXPORT_CONTRACT_PDF), function (state, _ref25) {
  var payload = _ref25.payload;
  return _objectSpread({}, state, {
    status: API_PENDING
  });
}), _defineProperty(_handleActions, requestSuccess(EXPORT_CONTRACT_PDF), function (state, _ref26) {
  var payload = _ref26.payload;
  return _objectSpread({}, state, {
    status: API_SUCCESS
  });
}), _defineProperty(_handleActions, requestFail(EXPORT_CONTRACT_PDF), function (state, _ref27) {
  var payload = _ref27.payload;
  return _objectSpread({}, state, {
    status: API_FAIL
  });
}), _handleActions), initialState);