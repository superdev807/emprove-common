'use strict';

import { format, isValidNumber } from 'libphonenumber-js';

export const sanitizePhoneNumber = phoneNumber => {
  if (phoneNumber) {
    return phoneNumber.replace(/[^0-9]/g, '');
  } else {
    return phoneNumber;
  }
};

export const formatPhoneNumber = phoneNumber => {
  if (phoneNumber) {
    return format(phoneNumber, 'US', 'National');
  } else {
    return phoneNumber;
  }
};

export const isValidPhoneNumber = phoneNumber => {
  if (phoneNumber) {
    return isValidNumber(phoneNumber, 'US');
  } else {
    return false;
  }
};
