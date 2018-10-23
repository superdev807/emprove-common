'use strict';

import React, { Component } from 'react';
import cx from 'classnames';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MaskedInput from 'react-text-mask';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const ZipCodeMask = ({ inputRef, ...inputProps }) => (
  <MaskedInput {...inputProps} mask={[/\d/, /\d/, /\d/, /\d/, /\d/]} guide={false} showMask />
);

export class ZipCodeField extends Component {
  render() {
    const {
      className,
      classes,
      disabled,
      fullWidth,
      helperText,
      input,
      inputClassName,
      label,
      labelClassName,
      meta: { touched, error },
      placeholder,
      type,
      hideErrorText,
      endAdornment,
      inputProps
    } = this.props;

    return (
      <FormControl className={className} error={touched && !!error} fullWidth={fullWidth}>
        {label && <InputLabel className={labelClassName}>{label}</InputLabel>}
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        <Input
          {...input}
          type={type}
          className={cx(classes.zipCode, inputClassName)}
          placeholder={placeholder}
          disabled={disabled}
          inputComponent={ZipCodeMask}
          endAdornment={endAdornment}
          inputProps={{
            ...inputProps
          }}
        />
        {!hideErrorText && touched && error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    );
  }
}

export default withStyles(styles)(ZipCodeField);
