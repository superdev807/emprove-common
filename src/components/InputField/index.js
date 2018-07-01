'use strict';

import React, { Component } from 'react';
import cx from 'classnames';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import get from 'lodash/get';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

export class InputField extends Component {
  static propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    helperText: PropTypes.string,
    input: PropTypes.object.isRequired,
    inputClassName: PropTypes.string,
    inputProps: PropTypes.object,
    label: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
    multiline: PropTypes.bool,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    hideErrorText: PropTypes.bool,
    rightAligned: PropTypes.bool,
    rows: PropTypes.number,
    rowsMax: PropTypes.number
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
      inputClassName,
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
      meta: { touched, error }
    } = this.props;

    return (
      <FormControl className={className} error={touched && !!error} fullWidth={fullWidth}>
        {label && <InputLabel>{label}</InputLabel>}
        {helperText && <FormHelperText className={classes.formHelperText}>{helperText}</FormHelperText>}
        <Input
          {...input}
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
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        {!hideErrorText && touched && error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    );
  }
}

export default withStyles(styles)(InputField);
