'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class DropdownField extends Component {
  render() {
    const {
      className,
      classes,
      disabled,
      inputProps,
      disableUnderline,
      fullWidth,
      helperText,
      helperTextClassName,
      input,
      inputClassName,
      inputLabelProps,
      label,
      menuItemClassName,
      meta: { touched, error },
      options,
      overrideClasses,
      placeholder,
      variant
    } = this.props;

    const outlined = variant === 'outlined';

    return (
      <FormControl className={className} error={touched && !!error} fullWidth={fullWidth} variant={variant}>
        {helperText && <FormHelperText className={helperTextClassName}>{helperText}</FormHelperText>}
        {label && (
          <InputLabel
            ref={ref => {
              this.labelRef = ReactDOM.findDOMNode(ref);
            }}
            {...inputLabelProps}>
            {label}
          </InputLabel>
        )}
        <Select
          onChange={input.onBlur}
          value={input.value}
          className={cx(classes.select, inputClassName)}
          displayEmpty={!!placeholder}
          // disableUnderline={disableUnderline}
          classes={overrideClasses}
          // inputProps={{ ...inputProps }}
          input={
            outlined ? (
              <OutlinedInput
                labelWidth={variant === 'outlined' && this.labelRef ? this.labelRef.offsetWidth : 0}
                name="age"
                id="outlined-age-simple"
              />
            ) : (
              undefined
            )
          }>
          {placeholder && <MenuItem value="">{placeholder}</MenuItem>}
          {options &&
            options.map((option, index) => {
              return option.value ? (
                <MenuItem key={option.value} className={menuItemClassName} value={option.value}>
                  {option.label}
                </MenuItem>
              ) : (
                <MenuItem key={index} className={menuItemClassName} value={option}>
                  {option}
                </MenuItem>
              );
            })}
        </Select>
        {touched && error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    );
  }
}

DropdownField.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  disableUnderline: PropTypes.bool,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.string,
  helperTextClassName: PropTypes.string,
  input: PropTypes.object.isRequired,
  inputClassName: PropTypes.string,
  label: PropTypes.string,
  menuItemClassName: PropTypes.string,
  meta: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  overrideClasses: PropTypes.object,
  placeholder: PropTypes.string,
  variant: PropTypes.string
};

export { DropdownField };
export default withStyles(styles)(DropdownField);
