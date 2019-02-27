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
    showMask={!Boolean(inputProps.placeholder)} //placeholder doesn't show if showMask is true
  />
);
