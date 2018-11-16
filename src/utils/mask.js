'use strict';

import React from 'react';
import MaskedInput from 'react-text-mask';

// mask for a number field up to 9 digits
export const NumberMask = ({ inputRef, ...inputProps }) => (
  <MaskedInput {...inputProps} mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]} guide={false} showMask />
);
