'use strict';

import React from 'react';
import NumberFormat from 'react-number-format';

export const NumberFormatCustom = ({ inputRef, onChange, ...other }) => (
  <NumberFormat
    {...other}
    ref={inputRef}
    onValueChange={values => {
      onChange({
        target: {
          value: values.value
        }
      });
    }}
    thousandSeparator
  />
);
