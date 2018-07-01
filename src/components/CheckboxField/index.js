'use strict';

import React from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';
import cx from 'classnames';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core/styles';

import { checkboxStyles, labelStyles } from './styles';

const ControlLabel = withStyles(labelStyles)(FormControlLabel);
const Checkbox = withStyles(checkboxStyles)(MuiCheckbox);

const CheckboxField = ({ className, disabled, input, label, meta: { touched, error } }) => (
  <FormControl className={className} error={touched && !!error}>
    {label ? (
      <ControlLabel
        control={
          <Checkbox
            name={input.name}
            color="primary"
            checked={Boolean(input.value)}
            disabled={disabled}
            onChange={input.onChange}
            onBlur={input.onBlur}
          />
        }
        label={label}
      />
    ) : (
      <Checkbox
        name={input.name}
        color="primary"
        checked={Boolean(input.value)}
        disabled={disabled}
        onChange={input.onChange}
        onBlur={input.onBlur}
      />
    )}
    {touched && error && <FormHelperText style={{ marginTop: 0 }}>{error}</FormHelperText>}
  </FormControl>
);

export default CheckboxField;
