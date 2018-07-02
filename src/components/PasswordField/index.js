'use strict';

import React, { Component } from 'react';
import cx from 'classnames';
import Fade from '@material-ui/core/Fade';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import get from 'lodash/get';
import IconCheck from '@material-ui/icons/Check';
import IconClose from '@material-ui/icons/Close';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { Manager, Target, Popper } from 'react-popper';
import { withStyles } from '@material-ui/core/styles';

import styles, { validatorTextStyles } from './styles';
import { passwordValidator } from '../../utils/validators';

export const ValidationText = withStyles(validatorTextStyles)(({ children, classes, success }) => (
  <Typography variant="caption" gutterBottom className={cx({ [classes.success]: success, [classes.fail]: !success })}>
    {success ? <IconCheck color="inherit" className={classes.icon} /> : <IconClose color="inherit" className={classes.icon} />}
    <span className={classes.text}>{children}</span>
  </Typography>
));

export class PasswordField extends Component {
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

  constructor(props) {
    super(props);
    this.state = {
      meterOpen: false
    };
  }

  handleFocus = event => {
    const { input } = this.props;
    event.target.placeholder = '';
    this.setState({ meterOpen: true });
    input.onFocus(event);
  };

  handleBlur = event => {
    const { input, placeholder } = this.props;
    if (placeholder) {
      event.target.placeholder = placeholder;
    }
    this.setState({ meterOpen: false });
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
      inputRef,
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
    const { meterOpen } = this.state;
    const hasLetters = passwordValidator.hasLetters(input.value || '');
    const hasNumbers = passwordValidator.hasNumbers(input.value || '');
    const hasSpecialChars = passwordValidator.hasSpecialChars(input.value || '');
    const hasMinLengthChars = passwordValidator.hasMinLengthChars(input.value || '');

    return (
      <Manager>
        <Target>
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
              inputRef={inputRef}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
            {!hideErrorText && touched && error && <FormHelperText>{error}</FormHelperText>}
          </FormControl>
        </Target>
        <Popper placement="bottom-start" eventsEnabled={meterOpen} className={classes.popperClose}>
          <Fade in={meterOpen}>
            <Paper role="tooltip" aria-hidden={!meterOpen} elevation={5} className={classes.paper}>
              <ValidationText success={hasMinLengthChars}>At least 8 characters</ValidationText>
              <ValidationText success={hasLetters}>At least 1 letter (a, b, c, ...)</ValidationText>
              <ValidationText success={hasNumbers}>At least 1 number (1, 2, 3, ...)</ValidationText>
              <ValidationText success={hasSpecialChars}>At least special character ($, @, %, ...)</ValidationText>
            </Paper>
          </Fade>
        </Popper>
      </Manager>
    );
  }
}

export default withStyles(styles)(PasswordField);
