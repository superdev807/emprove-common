'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var validateEmail = exports.validateEmail = function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

var validateNumber = exports.validateNumber = function validateNumber(number, defaultValue) {
  if (isNaN(Number(number))) {
    return defaultValue;
  } else {
    return number;
  }
};

var validateYear = exports.validateYear = function validateYear(year) {
  if (year.toString().length === 4) {
    var actualYear = new Date().getFullYear();
    if (actualYear - year >= 0) {
      return true;
    }
  }
  return false;
};

var hasLetters = function hasLetters(password) {
  return (/[a-zA-Z]/.test(password)
  );
};
var hasNumbers = function hasNumbers(password) {
  return (/[0-9]/.test(password)
  );
};
var hasSpecialChars = function hasSpecialChars(password) {
  return (/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
  );
};
var hasMinLengthChars = function hasMinLengthChars(password) {
  return password && password.length >= 8;
};

var passwordValidator = exports.passwordValidator = {
  hasLetters: hasLetters,
  hasNumbers: hasNumbers,
  hasSpecialChars: hasSpecialChars,
  hasMinLengthChars: hasMinLengthChars,
  isStrong: function isStrong(password) {
    return hasMinLengthChars(password) && hasLetters(password) && hasNumbers(password) && hasSpecialChars(password);
  }
};