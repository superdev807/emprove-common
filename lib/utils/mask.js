'use strict';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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