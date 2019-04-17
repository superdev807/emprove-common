'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidPhoneNumber = exports.formatPhoneNumber = exports.sanitizePhoneNumber = void 0;

var _libphonenumberJs = require("libphonenumber-js");

var sanitizePhoneNumber = function sanitizePhoneNumber(phoneNumber) {
  if (phoneNumber) {
    return phoneNumber.replace(/[^0-9]/g, '');
  } else {
    return phoneNumber;
  }
};

exports.sanitizePhoneNumber = sanitizePhoneNumber;

var formatPhoneNumber = function formatPhoneNumber(phoneNumber) {
  if (phoneNumber) {
    return (0, _libphonenumberJs.format)(phoneNumber, 'US', 'National');
  } else {
    return phoneNumber;
  }
};

exports.formatPhoneNumber = formatPhoneNumber;

var isValidPhoneNumber = function isValidPhoneNumber(phoneNumber) {
  if (phoneNumber) {
    return (0, _libphonenumberJs.isValidNumber)(phoneNumber, 'US');
  } else {
    return false;
  }
};

exports.isValidPhoneNumber = isValidPhoneNumber;