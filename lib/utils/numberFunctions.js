'use strict';

import _extends from "@babel/runtime-corejs3/helpers/extends";
import _objectWithoutProperties from "@babel/runtime-corejs3/helpers/objectWithoutProperties";
import React from 'react';
import NumberFormat from 'react-number-format';
export var NumberFormatCustom = function NumberFormatCustom(_ref) {
  var inputRef = _ref.inputRef,
      onChange = _ref.onChange,
      other = _objectWithoutProperties(_ref, ["inputRef", "onChange"]);

  return React.createElement(NumberFormat, _extends({}, other, {
    ref: function ref(_ref2) {
      inputRef(_ref2 ? _ref2.inputElement : null);
    },
    onValueChange: function onValueChange(values) {
      onChange({
        target: {
          value: values.value
        }
      });
    },
    thousandSeparator: true
  }));
};