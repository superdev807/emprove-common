'use strict';

import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import MuiSwitch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

import { labelStyles, switchStyles } from './styles';

const ControlLabel = withStyles(labelStyles)(FormControlLabel);
const Switch = withStyles(switchStyles)(MuiSwitch);

const SwitchField = ({ className, disabled, input, label, meta: { touched, error } }) => (
  <FormControl className={className} error={touched && !!error}>
    {label ? (
      <ControlLabel
        control={
          <Switch
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
      <Switch
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

export default SwitchField;
