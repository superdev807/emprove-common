'use strict';

import React, { Component } from 'react';
import cx from 'classnames';
import moment from 'moment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import DateTime from './TetheredDateTime';
import IconCalendar from '../../icons/IconCalendar';
import styles from './styles';

const DateMask = ({ inputRef, ...otherProps }) => {
  return (
    <MaskedInput
      ref={inputRef}
      {...otherProps}
      mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
      guide
      placeholderChar={'\u2000'}
    />
  );
};

class DatePickerField extends Component {
  static propTypes = {
    input: PropTypes.object,
    inputRef: PropTypes.func,
    className: PropTypes.string,
    fullWidth: PropTypes.bool,
    hideErrorText: PropTypes.bool,
    label: PropTypes.string,
    meta: PropTypes.object,
    disableDatePast: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    datePickerInputText: PropTypes.string
  };

  handleChange = date => {
    const { input } = this.props;
    input.onChange && input.onChange(date);
  };

  handleBlur = date => {
    const { input } = this.props;
    input.onBlur && input.onBlur(date);
  };

  handleInputRef = ref => {
    const { inputRef } = this.props;
    inputRef && ref && inputRef(ref.inputElement);
  };

  renderInput = props => {
    const { classes, datePickerInputText, helperText, input, inputRef, label, placeholder } = this.props;
    const inputProps = { ...props, className: datePickerInputText ? datePickerInputText : 'datePickerInputText' };

    return (
      <div>
        <TextField
          {...inputProps}
          inputRef={this.handleInputRef}
          type="text"
          placeholder={label && !input.value ? undefined : placeholder}
          label={helperText}
          variant="outlined"
          InputProps={{ inputComponent: DateMask, classes: { input: classes.input } }}
          InputLabelProps={{ classes: { outlined: classes.inputLabel } }}
        />
      </div>
    );
  };

  disablePast = current => {
    const { disableDatePast } = this.props;

    const disableMomentDate = disableDatePast
      ? moment.isMoment(disableDatePast) ? disableDatePast : moment(disableDatePast, 'YYYY-MM-DD')
      : moment();
    const dayDiff = disableMomentDate.diff(moment(), 'd');
    const disableDate = moment().add(dayDiff, 'd');
    return current.isAfter(disableDate);
  };

  render() {
    const {
      input,
      classes,
      className,
      datePickerClassName,
      timeFormat,
      label,
      fullWidth,
      meta: { touched, error },
      helperText,
      errorClassName,
      hideErrorText,
      disableDatePast,
      viewDate,
      alignment // left or right
    } = this.props;

    const inputDate =
      input.value !== 'Invalid date' && input.value !== ''
        ? moment.isMoment(input.value) ? input.value.format('MM/DD/YYYY') : moment(input.value, 'YYYY-MM-DD').format('MM/DD/YYYY')
        : input.value;

    return (
      <FormControl className={className} error={touched && !!error} fullWidth={fullWidth}>
        {label && <InputLabel shrink={!!input.value || undefined}>{label}</InputLabel>}
        <div className={classes.inputWrapper}>
          <DateTime
            renderInput={this.renderInput}
            className={datePickerClassName}
            defaultValue={inputDate}
            viewDate={viewDate && viewDate !== 'Invalid date' ? moment(viewDate, 'YYYY-MM-DD') : inputDate !== '' ? inputDate : new Date()} // determines the calendar month to display
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            timeFormat={timeFormat ? timeFormat : false}
            closeOnSelect
            isValidDate={disableDatePast && this.disablePast} //if disableDatePast is given, dates before that date become unavailable
          />
          <IconCalendar className={classes.icon} />
        </div>
        {!hideErrorText && touched && error && <FormHelperText className={errorClassName}>{error}</FormHelperText>}
      </FormControl>
    );
  }
}

export default withStyles(styles)(DatePickerField);
export { DatePickerField }; //for testing
