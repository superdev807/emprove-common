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
      ref={inputRef}
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
    input: PropTypes.object,
    inputRef: PropTypes.func,
    className: PropTypes.string,
    timezone: PropTypes.string,
    fullWidth: PropTypes.bool,
    hideErrorText: PropTypes.bool,
    label: PropTypes.string,
    meta: PropTypes.object,
    disableDatePast: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    datePickerInputText: PropTypes.string
  };

  handleChange = date => {
    const { input, timezone } = this.props;
    input.onChange(timezone ? convertTimezone(date, timezone) : date);
  };

  handleBlur = date => {
    const { input, timezone } = this.props;
    input.onBlur(timezone ? convertTimezone(date, timezone) : date);
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
          InputLabelProps={{ classes: { outlined: classes.inputLabel } }}
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
            isValidDate={disableDatePast && this.disablePast} //if disableDatePast is given, dates before that date become unavailable
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
