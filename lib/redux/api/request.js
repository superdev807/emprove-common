'use strict';

import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
export var API_PENDING = 'pending';
export var API_SUCCESS = 'success';
export var API_FAIL = 'fail';
export var requestPending = function requestPending(type) {
  var _context;

  return _concatInstanceProperty(_context = "".concat(type, "/")).call(_context, API_PENDING);
};
export var requestSuccess = function requestSuccess(type) {
  var _context2;

  return _concatInstanceProperty(_context2 = "".concat(type, "/")).call(_context2, API_SUCCESS);
};
export var requestFail = function requestFail(type) {
  var _context3;

  return _concatInstanceProperty(_context3 = "".concat(type, "/")).call(_context3, API_FAIL);
};