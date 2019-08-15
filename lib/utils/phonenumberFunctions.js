'use strict';

import { format, isValidNumber } from 'libphonenumber-js';
export var sanitizePhoneNumber = function sanitizePhoneNumber(phoneNumber) {
  if (phoneNumber) {
    return phoneNumber.replace(/[^0-9]/g, '');
  } else {
    return phoneNumber;
  }
};
export var formatPhoneNumber = function formatPhoneNumber(phoneNumber) {
  if (phoneNumber) {
    return format(phoneNumber, 'US', 'National');
  } else {
    return phoneNumber;
  }
};
export var isValidPhoneNumber = function isValidPhoneNumber(phoneNumber) {
  if (phoneNumber) {
    return isValidNumber(phoneNumber, 'US');
  } else {
    return false;
  }
};