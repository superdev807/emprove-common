'use strict';

export var API_PENDING = 'pending';
export var API_SUCCESS = 'success';
export var API_FAIL = 'fail';
export var requestPending = function requestPending(type) {
  return "".concat(type, "/").concat(API_PENDING);
};
export var requestSuccess = function requestSuccess(type) {
  return "".concat(type, "/").concat(API_SUCCESS);
};
export var requestFail = function requestFail(type) {
  return "".concat(type, "/").concat(API_FAIL);
};