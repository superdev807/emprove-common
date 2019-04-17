'use strict';

import React, { Component } from 'react';
import cx from 'classnames';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MaskedInput from 'react-text-mask';

import { withStyles } from '@material-ui/core/styles';
import { sanitizePhoneNumber } from '../../utils/phonenumberFunctions';
import styles from './styles';

const PhoneNumberMask = ({ inputRef, ...inputProps }) => {
  return (
    <MaskedInput
      {...inputProps}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      showMask={!Boolean(inputProps.placeholder)} //placeholder doesn't show if showMask is true
    />
  );
};

class PhoneNumberField extends Component {
  handleChange = event => {
    const { input } = this.props;
    input.onChange(sanitizePhoneNumber(event.target.value));
  };

  handleBlur = event => {
    const { input } = this.props;
    input.onBlur(sanitizePhoneNumber(event.target.value));
  };

  render() {
    const {
      className,
      classes,
      disabled,
      errorMessageClass,
      fullWidth,
      helperText,
      input,
      inputClassName,
      label,
      labelClassName,
      meta: { touched, error },
      placeholder,
      inputProps,
      type
    } = this.props;

    return (
      <FormControl className={className} error={touched && !!error} fullWidth={fullWidth}>
        {label && <InputLabel className={labelClassName}>{label}</InputLabel>}
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        <Input
          {...input}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          type={type}
          className={cx(classes.phoneNumber, inputClassName)}
          placeholder={placeholder}
          disabled={disabled}
          inputComponent={PhoneNumberMask}
          inputProps={{
            ...inputProps
          }}
        />
        {touched && error && <FormHelperText className={errorMessageClass}>{error}</FormHelperText>}
      </FormControl>
    );
  }
}

export default withStyles(styles)(PhoneNumberField);
