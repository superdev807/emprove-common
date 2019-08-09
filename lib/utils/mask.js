'use strict';

import _extends from "@babel/runtime-corejs3/helpers/extends";
import _objectWithoutProperties from "@babel/runtime-corejs3/helpers/objectWithoutProperties";
import React from 'react';
import MaskedInput from 'react-text-mask'; // mask for a number field up to 9 digits

export var NumberMask = function NumberMask(_ref) {
  var inputRef = _ref.inputRef,
      inputProps = _objectWithoutProperties(_ref, ["inputRef"]);

  return React.createElement(MaskedInput, _extends({}, inputProps, {
    mask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
    guide: false,
    showMask: true
  }));
};
export var PhoneNumberMask = function PhoneNumberMask(_ref2) {
  var inputRef = _ref2.inputRef,
      inputProps = _objectWithoutProperties(_ref2, ["inputRef"]);

  return React.createElement(MaskedInput, _extends({}, inputProps, {
    mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/] // eslint-disable-next-line no-extra-boolean-cast
    ,
    showMask: !Boolean(inputProps.placeholder) //placeholder doesn't show if showMask is true

  }));
};