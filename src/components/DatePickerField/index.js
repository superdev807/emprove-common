'use strict';

import React, { Component } from 'react';
import moment from 'moment';
import DateTime from 'react-datetime';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
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
    const { input } = this.props;
    if (typeof date === 'string') {
      input.onChange(input.value);
    } else {
      input.onChange && input.onChange(date.utc());
    }
  };

  renderInput = props => {
    const { datePickerInputText } = this.props;
    const inputProps = { ...props, className: datePickerInputText ? datePickerInputText : 'datePickerInputText' };
    () => {
      props.onChange({ target: { value: '' } });
    };

    return (
      <div>
        <Input {...inputProps} inputComponent={DateMask} placeholder="MM/DD/YYYY" type="text" />
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
      viewDate
    } = this.props;

    const inputDate =
      input.value !== ''
        ? moment.isMoment(input.value) ? input.value.format('MM/DD/YYYY') : moment(input.value, 'YYYY-MM-DD').format('MM/DD/YYYY')
        : null;

    return (
      <FormControl className={className} error={touched && !!error} fullWidth={fullWidth}>
        {label && <InputLabel shrink={!!input.value || undefined}>{label}</InputLabel>}
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        <DateTime
          renderInput={this.renderInput}
          className={datePickerClassName}
          value={inputDate}
          viewDate={viewDate ? viewDate : inputDate}
          onChange={this.handleChange}
          timeFormat={timeFormat ? timeFormat : false}
          closeOnSelect={true}
          isValidDate={disableDatePast && this.disablePast} //if disableDatePast is given, dates before that date become unavailable
        />
        {!hideErrorText && touched && error && <FormHelperText className={errorClassName}>{error}</FormHelperText>}
      </FormControl>
    );
  }
}

export default DatePickerField;
export { DatePickerField }; //for testing
