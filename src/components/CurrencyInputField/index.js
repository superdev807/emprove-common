'use strict';

import React, { Component } from 'react';
import cx from 'classnames';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import get from 'lodash/get';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import { propsChanged } from '~/utils/pureFunctions';
import { NumberFormatCustom } from '../../utils/numberFunctions';

class CurrencyInputField extends Component {
  static propTypes = {
    allowNegative: PropTypes.bool,
    classes: PropTypes.object,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    hideErrorText: PropTypes.bool,
    input: PropTypes.object.isRequired,
    inputProps: PropTypes.object,
    inputClassName: PropTypes.string,
    label: PropTypes.string,
    meta: PropTypes.object.isRequired,
    onValidBlur: PropTypes.func,
    placeholder: PropTypes.string,
    rightAligned: PropTypes.bool
  };

  constructor(props) {
    super(props);

    this.state = {
      focused: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (propsChanged(['focused'], prevState, this.state) && this.state.focused && parseInt(this.props.input.value, 10) === 0) {
      this.inputEl.select();
    }
  }

  handleFocus = () => {
    const { input } = this.props;

    this.setState({
      focused: true
    });
    input.onFocus(input.value);
  };

  handleBlur = event => {
    const { input, meta, onValidBlur } = this.props;

    this.setState({
      focused: false
    });
    input.onBlur(input.value);
    meta.valid && onValidBlur && onValidBlur(event, input.value);
  };

  handleChange = event => {
    const { input } = this.props;
    const { value } = event.target;
    input.onChange(value ? Number(value) : value);
  };

  handleRef = ref => {
    this.inputEl = ref;
  };

  render() {
    const {
      allowNegative,
      classes,
      className,
      disabled,
      fullWidth,
      hideErrorText,
      input,
      inputClassName,
      inputProps,
      label,
      meta: { touched, error },
      placeholder,
      rightAligned
    } = this.props;

    return (
      <FormControl className={className} error={touched && !!error} fullWidth={fullWidth}>
        {label && <InputLabel>{label}</InputLabel>}
        <Input
          {...input}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onChange={this.handleChange}
          type="text"
          inputComponent={NumberFormatCustom}
          className={cx(classes.currencyInput, inputClassName)}
          placeholder={placeholder}
          disabled={disabled}
          inputProps={{
            ...inputProps,
            allowNegative: allowNegative || false,
            getInputRef: this.handleRef,
            className: cx({
              [get(inputProps, 'className')]: Boolean(get(inputProps, 'className')),
              'text-right': Boolean(rightAligned)
            })
          }}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
        {!hideErrorText && touched && error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    );
  }
}

export default withStyles(styles)(CurrencyInputField);
