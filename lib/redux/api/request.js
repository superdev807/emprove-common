'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_PENDING = exports.API_PENDING = 'pending';

var API_SUCCESS = exports.API_SUCCESS = 'success';

var API_FAIL = exports.API_FAIL = 'fail';

var requestPending = exports.requestPending = function requestPending(type) {
  return type + '/' + API_PENDING;
};

var requestSuccess = exports.requestSuccess = function requestSuccess(type) {
  return type + '/' + API_SUCCESS;
};

var requestFail = exports.requestFail = function requestFail(type) {
  return type + '/' + API_FAIL;
};