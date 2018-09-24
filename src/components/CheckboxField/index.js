'use strict';

import React from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';
import cx from 'classnames';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core/styles';

import { checkboxStyles, styles } from './styles';

const Checkbox = withStyles(checkboxStyles)(MuiCheckbox);

const CheckboxField = ({ className, classes, disabled, hideErrorText, input, label, meta: { touched, error } }) => (
  <FormControl className={className} error={touched && !!error}>
    {label ? (
      <FormControlLabel
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
        classes={{
          root: classes.rootLabel,
          label: hideErrorText && touched && error ? classes.redLabel : undefined
        }}
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
    {!hideErrorText && touched && error && <FormHelperText style={{ marginTop: 0 }}>{error}</FormHelperText>}
  </FormControl>
);

export default withStyles(styles)(CheckboxField);
