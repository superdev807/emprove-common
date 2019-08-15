'use strict';

import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import MuiSwitch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { labelStyles, switchStyles } from './styles';
var ControlLabel = withStyles(labelStyles)(FormControlLabel);
var Switch = withStyles(switchStyles)(MuiSwitch);

var SwitchField = function SwitchField(_ref) {
  var className = _ref.className,
      disabled = _ref.disabled,
      input = _ref.input,
      label = _ref.label,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error;
  return React.createElement(FormControl, {
    className: className,
    error: touched && !!error
  }, label ? React.createElement(ControlLabel, {
    control: React.createElement(Switch, {
      name: input.name,
      color: "primary",
      checked: Boolean(input.value),
      disabled: disabled,
      onChange: input.onChange,
      onBlur: input.onBlur
    }),
    label: label
  }) : React.createElement(Switch, {
    name: input.name,
    color: "primary",
    checked: Boolean(input.value),
    disabled: disabled,
    onChange: input.onChange,
    onBlur: input.onBlur
  }), touched && error && React.createElement(FormHelperText, {
    style: {
      marginTop: 0
    }
  }, error));
};

export default SwitchField;