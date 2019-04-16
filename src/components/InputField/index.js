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
import { NumberMask, PhoneNumberMask } from '../../utils/mask';
import { NumberFormatCustom } from '../../utils/numberFunctions';

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
    meta: PropTypes.object.isRequired,
    min: PropTypes.number,
    moveToFirstMaskPlaceholderOnFocus: PropTypes.bool,
    multiline: PropTypes.bool,
    onValidBlur: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    hideErrorText: PropTypes.bool,
    rightAligned: PropTypes.bool,
    rows: PropTypes.number,
    rowsMax: PropTypes.number,
    startAdornment: PropTypes.object,
    endAdornment: PropTypes.object
  };

  static defaultProps = {
    inputLabelProps: {}
  };

  constructor(props) {
    super(props);

    this.labelRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.variant === 'outlined') {
      this.labelNode = ReactDOM.findDOMNode(this.labelRef.current);
      this.forceUpdate();
    }
  }

  handleFocus = event => {
    const { target } = event;
    const { input } = this.props;
    event.target.placeholder = '';
    input.onFocus(event);

    if (this.props.moveToFirstMaskPlaceholderOnFocus) {
      setTimeout(() => {
        const cursorPosition = target.value.indexOf('_');
        if (cursorPosition !== -1) {
          target.setSelectionRange(cursorPosition, cursorPosition);
        }
      }, 0);
    }
  };

  handleBlur = event => {
    const { input, placeholder, meta, onValidBlur } = this.props;
    if (placeholder) {
      event.target.placeholder = placeholder;
    }
    input.onBlur(event);
    onValidBlur && meta.valid && onValidBlur(event, input.value);
  };

  handleChange = event => {
    const { input } = this.props;
    const { value } = event.target;
    input.onChange(value);
  };

  render() {
    const {
      autoFocus,
      className,
      classes,
      disabled,
      fullWidth,
      helperText,
      errorMessageClass,
      input,
      inputClasses,
      inputClassName,
      inputLabelProps,
      inputProps,
      label,
      mask,
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
    const moreProps = {};
    if (outlined) {
      if (typeof inputLabelProps.shrink !== 'undefined') {
        moreProps.notched = inputLabelProps.shrink;
      }
      moreProps.labelWidth = (this.labelNode && this.labelNode.offsetWidth) || 0;
    }

    let maskingComponent;
    if (mask === 'plainNumber') {
      maskingComponent = NumberMask;
    } else if (mask === 'withThousandSeparator') {
      maskingComponent = NumberFormatCustom;
    } else if (mask === 'phoneNumber') {
      maskingComponent = PhoneNumberMask;
    }

    const labelContent = label && (
      <InputLabel ref={this.labelRef} {...inputLabelProps}>
        {label}
      </InputLabel>
    );

    return (
      <FormControl className={className} error={touched && !!error} fullWidth={fullWidth} variant={variant}>
        {!outlined && labelContent}
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
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          inputComponent={maskingComponent}
          autoFocus={autoFocus}
          {...moreProps}
        />
        {outlined && labelContent}
        {!hideErrorText && touched && error && <FormHelperText className={errorMessageClass}>{error}</FormHelperText>}
      </FormControl>
    );
  }
}

export default withStyles(styles)(InputField);
