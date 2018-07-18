'use strict';

import React, { Component } from 'react';
import cx from 'classnames';
import moment from 'moment';
import DateTime from 'react-datetime';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';

import './style.scss';

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
    const { input, toggleDateWidget } = this.props;

    if (typeof date === 'string') {
      input.onChange(date);
    } else {
      input.onChange && input.onChange(date);
    }

    toggleDateWidget();
  };

  renderInput = props => {
    const { datePickerInputText } = this.props;
    const inputProps = { ...props, className: datePickerInputText ? datePickerInputText : 'datePickerInputText' };
    () => {
      props.onChange({ target: { value: '' } });
    };
    return (
      <div>
        <Input {...inputProps} type="text" placeholder="MM/DD/YYYY" />
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
        : null;
    const datePickerAlignment = alignment || 'left';

    return (
      <FormControl className={className} error={touched && !!error} fullWidth={fullWidth}>
        {label && <InputLabel shrink={!!input.value || undefined}>{label}</InputLabel>}
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        <DateTime
          renderInput={this.renderInput}
          className={cx(datePickerClassName, datePickerAlignment)}
          value={inputDate}
          viewDate={viewDate ? viewDate : inputDate}
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
