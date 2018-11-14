'use strict';

import React, { Component } from 'react';
import cx from 'classnames';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import get from 'lodash/get';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

export class InputField extends Component {
  static propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    input: PropTypes.object.isRequired,
    inputClassName: PropTypes.string,
    inputProps: PropTypes.object,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    max: PropTypes.number,
    min: PropTypes.number,
    multiline: PropTypes.bool,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    hideErrorText: PropTypes.bool,
    rightAligned: PropTypes.bool,
    rows: PropTypes.number,
    rowsMax: PropTypes.number,
    startAdornment: PropTypes.object,
    endAdornment: PropTypes.object
  };

  handleFocus = event => {
    const { input } = this.props;
    event.target.placeholder = '';
    input.onFocus(event);
  };

  handleBlur = event => {
    const { input, placeholder } = this.props;
    if (placeholder) {
      event.target.placeholder = placeholder;
    }
    input.onBlur(event);
  };

  render() {
    const {
      className,
      classes,
      disabled,
      fullWidth,
      helperText,
      input,
      inputClasses,
      inputClassName,
      inputLabelProps,
      inputProps,
      label,
      max,
      min,
      multiline,
      placeholder,
      type,
      hideErrorText,
      rightAligned,
      rows,
      rowsMax,
      startAdornment,
      endAdornment,
      variant,
      meta: { touched, error }
    } = this.props;

    const outlined = variant === 'outlined';
    const InputComponent = outlined ? OutlinedInput : Input;

    return (
      <FormControl className={className} error={touched && !!error} fullWidth={fullWidth} variant={variant}>
        {helperText && <FormHelperText className={classes.formHelperText}>{helperText}</FormHelperText>}
        <InputComponent
          {...input}
          classes={inputClasses}
          type={type}
          placeholder={placeholder}
          multiline={multiline}
          className={cx(classes.input, inputClassName)}
          disabled={disabled}
          rows={rows}
          rowsMax={rowsMax}
          inputProps={{
            min,
            max,
            ...inputProps,
            className: cx({
              [get(inputProps, 'className')]: Boolean(get(inputProps, 'className')),
              'text-right': Boolean(rightAligned)
            })
          }}
          labelWidth={outlined && this.labelRef ? this.labelRef.offsetWidth : 0}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          startAdornment={startAdornment}
          endAdornment={endAdornment}
        />
        {/* moved InputLabel below InputComponent so that the label is placed on top of InputComponent for clicking*/}
        {label && (
          <InputLabel
            // classeName={inputLabelClassName}
            ref={ref => {
              this.labelRef = ReactDOM.findDOMNode(ref);
            }}
            {...inputLabelProps}>
            {label}
          </InputLabel>
        )}
        {!hideErrorText && touched && error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    );
  }
}

export default withStyles(styles)(InputField);
