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
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class DropdownField extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    disableUnderline: PropTypes.bool,
    fullWidth: PropTypes.bool,
    helperText: PropTypes.string,
    helperTextClassName: PropTypes.string,
    input: PropTypes.object.isRequired,
    inputClassName: PropTypes.string,
    inputLabelProps: PropTypes.object,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    menuItemClassName: PropTypes.string,
    meta: PropTypes.object.isRequired,
    onValidBlur: PropTypes.func,
    options: PropTypes.array.isRequired,
    overrideClasses: PropTypes.object,
    placeholder: PropTypes.string,
    selectOverride: PropTypes.object,
    variant: PropTypes.string
  };

  handleChange = event => {
    const { input, onValidBlur } = this.props;
    input.onBlur(event);
    setTimeout(() => {
      // Trigger onValidBlur with a delay, so that meta.valid is reflected correctly.
      // TODO: Consider to separate input.onChange in this.handleChange and input.onBlur in this.handleBlur
      // after testing thoroughly in both contractor & consumer
      const { input, meta } = this.props;
      onValidBlur && meta.valid && onValidBlur(event, input.value);
    }, 100);
  };

  render() {
    const {
      className,
      classes,
      capitalize,
      disabled,
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
      selectOverride,
      variant
    } = this.props;
    return variant === 'outlined' ? (
      <FormControl className={className} error={touched && !!error} fullWidth={fullWidth}>
        {helperText && <FormHelperText className={helperTextClassName}>{helperText}</FormHelperText>}
        <TextField
          select
          label={label}
          name={input.name}
          onChange={this.handleChange}
          value={input.value}
          className={inputClassName}
          classes={overrideClasses}
          variant="outlined"
          InputProps={{ classes: { input: classes.input } }}
          InputLabelProps={{ ...inputLabelProps }}
          SelectProps={{
            classes: {
              ...selectOverride,
              selectMenu: classes.select
            }
          }}>
          {placeholder && <MenuItem value="">{placeholder}</MenuItem>}
          {options &&
            options.map((option, index) => {
              return option.value ? (
                <MenuItem key={option.value} className={menuItemClassName} value={option.value}>
                  {capitalize ? option.label.toUpperCase() : option.label}
                </MenuItem>
              ) : (
                <MenuItem key={index} className={menuItemClassName} value={option}>
                  {option}
                </MenuItem>
              );
            })}
        </TextField>
        {touched && error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    ) : (
      <FormControl className={className} error={touched && !!error} fullWidth={fullWidth}>
        {helperText && <FormHelperText className={helperTextClassName}>{helperText}</FormHelperText>}
        {label && <InputLabel>{label}</InputLabel>}
        <Select
          onChange={this.handleChange}
          value={input.value}
          name={input.name}
          className={cx(classes.originSelect, inputClassName)}
          displayEmpty={!!placeholder}
          disableUnderline={disableUnderline}
          classes={overrideClasses}>
          {placeholder && <MenuItem value="">{placeholder}</MenuItem>}
          {options &&
            options.map((option, index) => {
              return option.value ? (
                <MenuItem key={option.value} className={menuItemClassName} value={option.value}>
                  {capitalize ? option.label.toUpperCase() : option.label}
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

export { DropdownField };
export default withStyles(styles)(DropdownField);
