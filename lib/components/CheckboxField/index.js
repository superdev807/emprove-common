'use strict';

import "core-js/modules/es.function.name";
import React from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { withStyles } from '@material-ui/core/styles';
import { checkboxStyles, styles } from './styles';
var Checkbox = withStyles(checkboxStyles)(MuiCheckbox);

var CheckboxField = function CheckboxField(_ref) {
  var className = _ref.className,
      classes = _ref.classes,
      disabled = _ref.disabled,
      hideErrorText = _ref.hideErrorText,
      input = _ref.input,
      label = _ref.label,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error;
  return React.createElement(FormControl, {
    className: className,
    error: touched && !!error
  }, label ? React.createElement(FormControlLabel, {
    control: React.createElement(Checkbox, {
      name: input.name,
      color: "primary",
      checked: Boolean(input.value),
      disabled: disabled,
      onChange: input.onChange,
      onBlur: input.onBlur
    }),
    label: label,
    classes: {
      root: classes.rootLabel,
      label: hideErrorText && touched && error ? classes.redLabel : undefined
    }
  }) : React.createElement(Checkbox, {
    name: input.name,
    color: "primary",
    checked: Boolean(input.value),
    disabled: disabled,
    onChange: input.onChange,
    onBlur: input.onBlur
  }), !hideErrorText && touched && error && React.createElement(FormHelperText, {
    style: {
      marginTop: 0
    }
  }, error));
};

export default withStyles(styles)(CheckboxField);