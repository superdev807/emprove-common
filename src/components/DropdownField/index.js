'use strict';

import React from 'react';
import cx from 'classnames';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const DropdownField = ({
  className,
  classes,
  disabled,
  fullWidth,
  helperText,
  helperTextClassName,
  input,
  inputClassName,
  label,
  menuItemClassName,
  meta: { touched, error },
  options,
  overrideClasses,
  placeholder
}) => (
  <FormControl className={className} error={touched && !!error} fullWidth={fullWidth}>
    {helperText && <FormHelperText className={helperTextClassName}>{helperText}</FormHelperText>}
    {label && <InputLabel>{label}</InputLabel>}
    <Select
      onChange={input.onBlur}
      value={input.value}
      className={cx(classes.select, inputClassName)}
      displayEmpty={!!placeholder}
      classes={overrideClasses}>
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

DropdownField.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
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
  placeholder: PropTypes.object
};

export { DropdownField };
export default withStyles(styles)(DropdownField);
