import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateTime from 'react-datetime';
import moment from 'moment';
import { utcDateWithZeroTime } from '~/utils/timeFunctions'

class DatePickerField extends Component {
  static PropTypes = {
    input: PropTypes.object,
  }

  handleChange = (event) => {
    const { input } = this.props;
    input.onChange && input.onChange(utcDateWithZeroTime(event.target.value))
  }

  render() {
    const { input, className } = this.props;
    return <DateTime
        className={className}
        value={moment(input.value).format('MM/DD/YYYY')}
        onChange={this.handleChange}
        timeFormat={timeFormat ? timeFormat : false}
    />;
  }
}

export default DatePickerField