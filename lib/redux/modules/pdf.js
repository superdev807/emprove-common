'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.exportContractPdf = exports.sendBidPdf = exports.downloadBidPdf = exports.exportBidPdf = exports.sendRfpSummaryPdf = exports.exportRfpSummaryPdf = exports.sendRfpPdf = exports.downloadRfpPdf = exports.exportRfpPdf = void 0;

var _reduxActions = require("redux-actions");

var _request = require("../api/request");

var _constants = require("../constants");

var _handleActions;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Initial state */
var initialState = {
  status: 'INIT',
  sendStatus: 'INIT'
};
/* Action creators */

var exportRfpPdf = (0, _reduxActions.createAction)(_constants.EXPORT_RFP_PDF);
exports.exportRfpPdf = exportRfpPdf;
var downloadRfpPdf = (0, _reduxActions.createAction)(_constants.DOWNLOAD_RFP_PDF);
exports.downloadRfpPdf = downloadRfpPdf;
var sendRfpPdf = (0, _reduxActions.createAction)(_constants.SEND_RFP_PDF);
exports.sendRfpPdf = sendRfpPdf;
var exportRfpSummaryPdf = (0, _reduxActions.createAction)(_constants.EXPORT_RFP_SUMMARY_PDF);
exports.exportRfpSummaryPdf = exportRfpSummaryPdf;
var sendRfpSummaryPdf = (0, _reduxActions.createAction)(_constants.SEND_RFP_SUMMARY_PDF);
exports.sendRfpSummaryPdf = sendRfpSummaryPdf;
var exportBidPdf = (0, _reduxActions.createAction)(_constants.EXPORT_BID_PDF);
exports.exportBidPdf = exportBidPdf;
var downloadBidPdf = (0, _reduxActions.createAction)(_constants.DOWNLOAD_BID_PDF);
exports.downloadBidPdf = downloadBidPdf;
var sendBidPdf = (0, _reduxActions.createAction)(_constants.SEND_BID_PDF);
exports.sendBidPdf = sendBidPdf;
var exportContractPdf = (0, _reduxActions.createAction)(_constants.EXPORT_CONTRACT_PDF);
/* Reducer */

exports.exportContractPdf = exportContractPdf;

var _default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, (0, _request.requestPending)(_constants.EXPORT_RFP_PDF), function (state, _ref) {
  var payload = _ref.payload;
  return _objectSpread({}, state, {
    status: _request.API_PENDING
  });
}), _defineProperty(_handleActions, (0, _request.requestSuccess)(_constants.EXPORT_RFP_PDF), function (state, _ref2) {
  var payload = _ref2.payload;
  return _objectSpread({}, state, {
    status: _request.API_SUCCESS
  });
}), _defineProperty(_handleActions, (0, _request.requestFail)(_constants.EXPORT_RFP_PDF), function (state, _ref3) {
  var payload = _ref3.payload;
  return _objectSpread({}, state, {
    status: _request.API_FAIL
  });
}), _defineProperty(_handleActions, (0, _request.requestPending)(_constants.DOWNLOAD_RFP_PDF), function (state, _ref4) {
  var payload = _ref4.payload;
  return _objectSpread({}, state, {
    status: _request.API_PENDING
  });
}), _defineProperty(_handleActions, (0, _request.requestSuccess)(_constants.DOWNLOAD_RFP_PDF), function (state, _ref5) {
  var payload = _ref5.payload;
  return _objectSpread({}, state, {
    status: _request.API_SUCCESS
  });
}), _defineProperty(_handleActions, (0, _request.requestFail)(_constants.DOWNLOAD_RFP_PDF), function (state, _ref6) {
  var payload = _ref6.payload;
  return _objectSpread({}, state, {
    status: _request.API_FAIL
  });
}), _defineProperty(_handleActions, (0, _request.requestPending)(_constants.SEND_RFP_PDF), function (state, _ref7) {
  var payload = _ref7.payload;
  return _objectSpread({}, state, {
    sendStatus: _request.API_PENDING
  });
}), _defineProperty(_handleActions, (0, _request.requestSuccess)(_constants.SEND_RFP_PDF), function (state, _ref8) {
  var payload = _ref8.payload;
  return _objectSpread({}, state, {
    sendStatus: _request.API_SUCCESS
  });
}), _defineProperty(_handleActions, (0, _request.requestFail)(_constants.SEND_RFP_PDF), function (state, _ref9) {
  var payload = _ref9.payload;
  return _objectSpread({}, state, {
    sendStatus: _request.API_FAIL
  });
}), _defineProperty(_handleActions, (0, _request.requestPending)(_constants.EXPORT_RFP_SUMMARY_PDF), function (state, _ref10) {
  var payload = _ref10.payload;
  return _objectSpread({}, state, {
    status: _request.API_PENDING
  });
}), _defineProperty(_handleActions, (0, _request.requestSuccess)(_constants.EXPORT_RFP_SUMMARY_PDF), function (state, _ref11) {
  var payload = _ref11.payload;
  return _objectSpread({}, state, {
    status: _request.API_SUCCESS
  });
}), _defineProperty(_handleActions, (0, _request.requestFail)(_constants.EXPORT_RFP_SUMMARY_PDF), function (state, _ref12) {
  var payload = _ref12.payload;
  return _objectSpread({}, state, {
    status: _request.API_FAIL
  });
}), _defineProperty(_handleActions, (0, _request.requestPending)(_constants.SEND_RFP_SUMMARY_PDF), function (state, _ref13) {
  var payload = _ref13.payload;
  return _objectSpread({}, state, {
    sendStatus: _request.API_PENDING
  });
}), _defineProperty(_handleActions, (0, _request.requestSuccess)(_constants.SEND_RFP_SUMMARY_PDF), function (state, _ref14) {
  var payload = _ref14.payload;
  return _objectSpread({}, state, {
    sendStatus: _request.API_SUCCESS
  });
}), _defineProperty(_handleActions, (0, _request.requestFail)(_constants.SEND_RFP_SUMMARY_PDF), function (state, _ref15) {
  var payload = _ref15.payload;
  return _objectSpread({}, state, {
    sendStatus: _request.API_FAIL
  });
}), _defineProperty(_handleActions, (0, _request.requestPending)(_constants.EXPORT_BID_PDF), function (state, _ref16) {
  var payload = _ref16.payload;
  return _objectSpread({}, state, {
    status: _request.API_PENDING
  });
}), _defineProperty(_handleActions, (0, _request.requestSuccess)(_constants.EXPORT_BID_PDF), function (state, _ref17) {
  var payload = _ref17.payload;
  return _objectSpread({}, state, {
    status: _request.API_SUCCESS
  });
}), _defineProperty(_handleActions, (0, _request.requestFail)(_constants.EXPORT_BID_PDF), function (state, _ref18) {
  var payload = _ref18.payload;
  return _objectSpread({}, state, {
    status: _request.API_FAIL
  });
}), _defineProperty(_handleActions, (0, _request.requestPending)(_constants.DOWNLOAD_BID_PDF), function (state, _ref19) {
  var payload = _ref19.payload;
  return _objectSpread({}, state, {
    status: _request.API_PENDING
  });
}), _defineProperty(_handleActions, (0, _request.requestSuccess)(_constants.DOWNLOAD_BID_PDF), function (state, _ref20) {
  var payload = _ref20.payload;
  return _objectSpread({}, state, {
    status: _request.API_SUCCESS
  });
}), _defineProperty(_handleActions, (0, _request.requestFail)(_constants.DOWNLOAD_BID_PDF), function (state, _ref21) {
  var payload = _ref21.payload;
  return _objectSpread({}, state, {
    status: _request.API_FAIL
  });
}), _defineProperty(_handleActions, (0, _request.requestPending)(_constants.SEND_BID_PDF), function (state, _ref22) {
  var payload = _ref22.payload;
  return _objectSpread({}, state, {
    sendStatus: _request.API_PENDING
  });
}), _defineProperty(_handleActions, (0, _request.requestSuccess)(_constants.SEND_BID_PDF), function (state, _ref23) {
  var payload = _ref23.payload;
  return _objectSpread({}, state, {
    sendStatus: _request.API_SUCCESS
  });
}), _defineProperty(_handleActions, (0, _request.requestFail)(_constants.SEND_BID_PDF), function (state, _ref24) {
  var payload = _ref24.payload;
  return _objectSpread({}, state, {
    sendStatus: _request.API_FAIL
  });
}), _defineProperty(_handleActions, (0, _request.requestPending)(_constants.EXPORT_CONTRACT_PDF), function (state, _ref25) {
  var payload = _ref25.payload;
  return _objectSpread({}, state, {
    status: _request.API_PENDING
  });
}), _defineProperty(_handleActions, (0, _request.requestSuccess)(_constants.EXPORT_CONTRACT_PDF), function (state, _ref26) {
  var payload = _ref26.payload;
  return _objectSpread({}, state, {
    status: _request.API_SUCCESS
  });
}), _defineProperty(_handleActions, (0, _request.requestFail)(_constants.EXPORT_CONTRACT_PDF), function (state, _ref27) {
  var payload = _ref27.payload;
  return _objectSpread({}, state, {
    status: _request.API_FAIL
  });
}), _handleActions), initialState);

exports["default"] = _default;