'use strict';

import React, { Component } from 'react';
import cx from 'classnames';
import get from 'lodash/get';
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
  static defaultProps = {
    inputLabelProps: {}
  };

  constructor(props) {
    super(props);

    this.labelRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.variant === 'outlined') {
      this.forceUpdate();
    }
  }

  handleBlur = event => {
    const { input, meta, onValidBlur } = this.props;
    input.onBlur(event);
    onValidBlur && meta.valid && onValidBlur(event, input.value);
  };

  render() {
    const {
      className,
      classes,
      disabled,
      disableUnderline,
      errorMessageClass,
      fullWidth,
      helperText,
      id,
      input,
      inputClassName,
      inputClasses,
      inputLabelProps,
      label,
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
    const moreProps = {};
    if (outlined) {
      if (typeof inputLabelProps.shrink !== 'undefined') {
        moreProps.notched = inputLabelProps.shrink;
      }
      moreProps.labelWidth = get(this.labelRef, 'current.offsetWidth') || 0;
    }

    const inputComponentProps = {
      ...input,
      onBlur: this.handleBlur,
      type: type,
      className: cx(classes.zipCode, inputClassName),
      classes: inputClasses,
      placeholder: placeholder,
      disabled: disabled,
      inputComponent: ZipCodeMask,
      endAdornment: endAdornment,
      inputProps: {
        ...inputProps
      },
      ...moreProps
    };

    if (!outlined) {
      inputComponentProps.disableUnderline = disableUnderline;
    }

    return (
      <FormControl id={id} className={className} error={touched && !!error} fullWidth={fullWidth} variant={variant}>
        {label && (
          <InputLabel
            // classeName={inputLabelClassName}
            ref={this.labelRef}
            {...inputLabelProps}>
            {label}
          </InputLabel>
        )}
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        <InputComponent {...inputComponentProps} />
        {!hideErrorText && touched && error && <FormHelperText className={errorMessageClass}>{error}</FormHelperText>}
      </FormControl>
    );
  }
}

export default withStyles(styles)(ZipCodeField);
