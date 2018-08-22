'use strict';

import React, { Component } from 'react';
import cx from 'classnames';
import moment from 'moment';
import DateTime from 'react-datetime';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';

import './style.scss';

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
    className: PropTypes.string,
    fullWidth: PropTypes.bool,
    hideErrorText: PropTypes.bool,
    label: PropTypes.string,
    meta: PropTypes.object,
    disableDatePast: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    datePickerInputText: PropTypes.string
  };

  handleChange = date => {
    const { input, closeDateWidget } = this.props;
    input.onChange && input.onChange(date);
    //close the widget when the date var becomes a date. when the var is not a date, it's a string.
    if (typeof date !== 'string') {
      closeDateWidget && closeDateWidget();
    }
  };

  renderInput = props => {
    const { datePickerInputText, placeholder } = this.props;
    const inputProps = { ...props, className: datePickerInputText ? datePickerInputText : 'datePickerInputText' };

    return (
      <div>
        <Input {...inputProps} type="text" placeholder={placeholder} inputComponent={DateMask} />
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
      open,
      closeDateWidget,
      alignment // left or right
    } = this.props;

    const inputDate =
      input.value !== 'Invalid date' && input.value !== ''
        ? moment.isMoment(input.value) ? input.value.format('MM/DD/YYYY') : moment(input.value, 'YYYY-MM-DD').format('MM/DD/YYYY')
        : input.value;
    const datePickerAlignment = alignment || 'left';

    return (
      <FormControl className={className} error={touched && !!error} fullWidth={fullWidth}>
        {label && <InputLabel shrink={!!input.value || undefined}>{label}</InputLabel>}
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        <DateTime
          renderInput={this.renderInput}
          className={cx(datePickerClassName, datePickerAlignment)}
          defaultValue={inputDate}
          viewDate={viewDate && viewDate !== 'Invalid date' ? viewDate : inputDate !== '' ? inputDate : new Date()} // determines the calendar month to display
          onChange={this.handleChange}
          timeFormat={timeFormat ? timeFormat : false}
          closeOnSelect={true}
          isValidDate={disableDatePast && this.disablePast} //if disableDatePast is given, dates before that date become unavailable
          onViewModeChange={this.handleViewModeChange}
          open={open}
          onBlur={closeDateWidget}
        />
        {!hideErrorText && touched && error && <FormHelperText className={errorClassName}>{error}</FormHelperText>}
      </FormControl>
    );
  }
}

export default DatePickerField;
export { DatePickerField }; //for testing
