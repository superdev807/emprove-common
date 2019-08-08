'use strict';

export const validateEmail = email => {
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validateNumber = (number, defaultValue) => {
  if (isNaN(Number(number))) {
    return defaultValue;
  } else {
    return number;
  }
};

export const validateYear = year => {
  if (year.toString().length === 4) {
    let actualYear = new Date().getFullYear();
    if (actualYear - year >= 0) {
      return true;
    }
  }
  return false;
};

const hasLetters = password => /[a-zA-Z]/.test(password);
const hasNumbers = password => /[0-9]/.test(password);
// eslint-disable-next-line no-useless-escape
const hasSpecialChars = password => /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
const hasMinLengthChars = password => password && password.length >= 8;

export const passwordValidator = {
  hasLetters,
  hasNumbers,
  hasSpecialChars,
  hasMinLengthChars,
  isStrong: password => hasMinLengthChars(password) && hasLetters(password) && hasNumbers(password) && hasSpecialChars(password)
};
