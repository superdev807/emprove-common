'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestFail = exports.requestSuccess = exports.requestPending = exports.API_FAIL = exports.API_SUCCESS = exports.API_PENDING = void 0;
var API_PENDING = 'pending';
exports.API_PENDING = API_PENDING;
var API_SUCCESS = 'success';
exports.API_SUCCESS = API_SUCCESS;
var API_FAIL = 'fail';
exports.API_FAIL = API_FAIL;

var requestPending = function requestPending(type) {
  return "".concat(type, "/").concat(API_PENDING);
};

exports.requestPending = requestPending;

var requestSuccess = function requestSuccess(type) {
  return "".concat(type, "/").concat(API_SUCCESS);
};

exports.requestSuccess = requestSuccess;

var requestFail = function requestFail(type) {
  return "".concat(type, "/").concat(API_FAIL);
};

exports.requestFail = requestFail;