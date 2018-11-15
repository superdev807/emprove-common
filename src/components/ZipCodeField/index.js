'use strict';

import React, { Component } from 'react';
import cx from 'classnames';
import ReactDOM from 'react-dom';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
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
      inputLabelProps,
      label,
      labelClassName,
      meta: { touched, error },
      placeholder,
      type,
      hideErrorText,
      endAdornment,
      inputProps,
      variant
    } = this.props;

    const outlined = variant === 'outlined';
    const InputComponent = outlined ? OutlinedInput : Input;

    return (
      <FormControl className={className} error={touched && !!error} fullWidth={fullWidth} variant={variant}>
        {label && (
          <InputLabel
            // classeName={inputLabelClassName}
            ref={ref => {
              this.labelRef = ReactDOM.findDOMNode(ref);
            }}
            shrink={outlined ? true : undefined}
            {...inputLabelProps}>
            {label}
          </InputLabel>
        )}
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        <InputComponent
          {...input}
          type={type}
          className={cx(classes.zipCode, inputClassName)}
          placeholder={placeholder}
          disabled={disabled}
          inputComponent={ZipCodeMask}
          labelWidth={outlined ? (this.labelRef ? this.labelRef.offsetWidth : 0) : undefined}
          endAdornment={endAdornment}
          inputProps={{
            ...inputProps
          }}
          notched={outlined ? true : undefined}
        />
        {!hideErrorText && touched && error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    );
  }
}

export default withStyles(styles)(ZipCodeField);
