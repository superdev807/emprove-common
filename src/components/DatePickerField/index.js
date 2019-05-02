'use strict';

import React, { Component } from 'react';
import cx from 'classnames';
import moment from 'moment-timezone';
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
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      {...otherProps}
      mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
      guide
      placeholderChar={'\u2000'}
    />
  );
};

const convertTimezone = (date, timezone) =>
  // date parameter in onChange of DateTime is always UTC time regardless of timezone.
  // If timezone is specified, we need to make the date whose time is all set to zero in the specified timezone.
  // (e.g. from YYYY-MM-DD 00:00:00 UTC to YYYY-MM-DD 00:00:00 PST, if timezone is PST)
  moment.tz(moment(date).format('YYYY-MM-DD'), 'YYYY-MM-DD', timezone);

class DatePickerField extends Component {
  static propTypes = {
    className: PropTypes.string,
    datePickerInputText: PropTypes.string,
    disableDateFuture: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    disableDatePast: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    fullWidth: PropTypes.bool,
    hideErrorText: PropTypes.bool,
    input: PropTypes.object,
    inputRef: PropTypes.func,
    label: PropTypes.string,
    meta: PropTypes.object,
    onValidBlur: PropTypes.func,
    timezone: PropTypes.string
  };

  handleChange = date => {
    const { input, timezone } = this.props;
    input.onChange(date && timezone ? convertTimezone(date, timezone) : date);
  };

  handleBlur = date => {
    const { input, meta, onValidBlur, timezone } = this.props;
    const value = date && timezone ? convertTimezone(date, timezone) : date || input.value;
    input.onBlur(value);
    onValidBlur && meta.valid && onValidBlur(null, value);
  };

  handleInputRef = ref => {
    const { inputRef } = this.props;
    inputRef && ref && inputRef(ref.inputElement);
  };

  renderInput = props => {
    const { classes, datePickerInputText, helperText, input, inputRef, label, placeholder, variant } = this.props;
    const inputProps = { ...props, className: datePickerInputText ? datePickerInputText : 'datePickerInputText' };

    return variant === 'outlined' ? (
      <div>
        <TextField
          {...inputProps}
          inputRef={this.handleInputRef}
          type="text"
          placeholder={label && !input.value ? undefined : placeholder}
          label={helperText}
          variant="outlined"
          InputProps={{ inputComponent: DateMask, classes: { input: classes.input } }}
          InputLabelProps={{
            shrink: true
          }}
        />
      </div>
    ) : (
      <div>
        <Input
          {...inputProps}
          inputRef={this.handleInputRef}
          type="text"
          placeholder={label && !input.value ? undefined : placeholder}
          inputComponent={DateMask}
        />
      </div>
    );
  };

  handleValidDatePast = current => {
    const { disableDatePast, timezone } = this.props;
    if (disableDatePast) {
      const disableDate = moment.tz(disableDatePast, timezone).startOf('day');
      return current.isSameOrAfter(disableDate);
    } else {
      return true;
    }
  };

  handleValidDateFuture = current => {
    const { disableDateFuture, timezone } = this.props;
    if (disableDateFuture) {
      const disableDate = moment.tz(disableDateFuture, timezone).endOf('day');
      return current.isSameOrBefore(disableDate);
    } else {
      return true;
    }
  };

  handleValidDate = current => {
    return this.handleValidDatePast(current) && this.handleValidDateFuture(current);
  };

  render() {
    const {
      input,
      classes,
      className,
      datePickerClassName,
      timeFormat,
      timezone,
      label,
      fullWidth,
      meta: { touched, error },
      helperText,
      errorClassName,
      hideErrorText,
      disableDatePast,
      viewDate,
      alignment, // left or right
      variant
    } = this.props;

    const inputDate = input.value !== 'Invalid date' && input.value !== '' ? moment.tz(input.value, timezone) : input.value;
    const sanitizedViewDate = viewDate && viewDate !== 'Invalid date' ? moment.tz(viewDate, timezone) : inputDate || undefined;

    return (
      <FormControl className={className} error={touched && !!error} fullWidth={fullWidth}>
        {label && <InputLabel shrink={!!input.value || undefined}>{label}</InputLabel>}
        {helperText && variant !== 'outlined' && <FormHelperText>{helperText}</FormHelperText>}
        <div className={classes.inputWrapper}>
          <DateTime
            renderInput={this.renderInput}
            className={datePickerClassName}
            defaultValue={inputDate}
            viewDate={sanitizedViewDate} // determines the calendar month to display
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            dateFormat="MM/DD/YYYY"
            displayTimeZone={timezone}
            timeFormat={timeFormat ? timeFormat : false}
            closeOnSelect
            isValidDate={this.handleValidDate}
          />
          {variant === 'outlined' ? (
            <IconCalendar className={classes.icon} />
          ) : (
            <IconCalendar className={cx(classes.icon, classes.originIcon)} />
          )}
        </div>
        {!hideErrorText && touched && error && <FormHelperText className={errorClassName}>{error}</FormHelperText>}
      </FormControl>
    );
  }
}

export default withStyles(styles)(DatePickerField);
export { DatePickerField }; //for testing
