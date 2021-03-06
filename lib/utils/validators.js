'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passwordValidator = exports.validateYear = exports.validateNumber = exports.validateEmail = void 0;

var validateEmail = function validateEmail(email) {
  // eslint-disable-next-line no-useless-escape
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

exports.validateEmail = validateEmail;

var validateNumber = function validateNumber(number, defaultValue) {
  if (isNaN(Number(number))) {
    return defaultValue;
  } else {
    return number;
  }
};

exports.validateNumber = validateNumber;

var validateYear = function validateYear(year) {
  if (year.toString().length === 4) {
    var actualYear = new Date().getFullYear();

    if (actualYear - year >= 0) {
      return true;
    }
  }

  return false;
};

exports.validateYear = validateYear;

var hasLetters = function hasLetters(password) {
  return /[a-zA-Z]/.test(password);
};

var hasNumbers = function hasNumbers(password) {
  return /[0-9]/.test(password);
}; // eslint-disable-next-line no-useless-escape


var hasSpecialChars = function hasSpecialChars(password) {
  return /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
};

var hasMinLengthChars = function hasMinLengthChars(password) {
  return password && password.length >= 8;
};

var passwordValidator = {
  hasLetters: hasLetters,
  hasNumbers: hasNumbers,
  hasSpecialChars: hasSpecialChars,
  hasMinLengthChars: hasMinLengthChars,
  isStrong: function isStrong(password) {
    return hasMinLengthChars(password) && hasLetters(password) && hasNumbers(password) && hasSpecialChars(password);
  }
};
exports.passwordValidator = passwordValidator;