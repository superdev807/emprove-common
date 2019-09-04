'use strict';

import React from 'react';
import MaskedInput from 'react-text-mask';

// mask for a number field up to 9 digits
export const NumberMask = ({ inputRef, ...inputProps }) => (
  <MaskedInput {...inputProps} mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]} guide={false} showMask />
);

export const PhoneNumberMask = ({ inputRef, ...inputProps }) => (
  <MaskedInput
    {...inputProps}
    mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    // eslint-disable-next-line no-extra-boolean-cast
    showMask={!Boolean(inputProps.placeholder)} //placeholder doesn't show if showMask is true
  />
);

export const DateMMYYMask = ({ inputRef, ...inputProps }) => {
  const getMask = value => {
    if (value.substring(0, 1) == 0) {
      return [/[0]/, /[1-9]/, ' ', '/', ' ', /\d/, /\d/];
    } else if (value.substring(0, 1) == 1) {
      return [/[1]/, /[0-2]/, ' ', '/', ' ', /\d/, /\d/];
    }
    return ['0', /[1-9]/, ' ', '/', ' ', /\d/, /\d/];
  };

  return (
    <MaskedInput
      {...inputProps}
      mask={getMask}
      // eslint-disable-next-line no-extra-boolean-cast
      showMask={!Boolean(inputProps.placeholder)} //placeholder doesn't show if showMask is true
    />
  );
};
