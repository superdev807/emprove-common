'use strict';

import React from 'react';
import moment from 'moment-timezone';
import { shallow, mount } from 'enzyme';

import { DatePickerField } from '../../../src/components/DatePickerField';
import DateTime from '../../../src/components/DatePickerField/TetheredDateTime';

describe('DatePickerField', () => {
  let props;
  let component;
  let mounted;

  beforeEach(() => {
    props = {
      input: { value: '2018-08-22' },
      meta: {},
      label: '',
      classes: {},
      timezone: 'America/Los_Angeles',
      disableDatePast: null
    };
    component = shallow(<DatePickerField {...props} />);
    mounted = mount(<DatePickerField {...props} />);
  });

  it('should have closeOnSelect set to true', () => {
    expect(component.find(DateTime).prop('closeOnSelect')).toBe(true);
  });

  it('should display default value in MM/DD/YYYY format', () => {
    expect(
      component
        .find(DateTime)
        .prop('value')
        .isSame(moment.tz('2018-08-22', 'YYYY-MM-DD', 'America/Los_Angeles'))
    ).toBe(true);
  });

  it('should have viewDate set to input value provided', () => {
    component.setProps({ input: { value: '2018-08-22' } });

    expect(
      component
        .find(DateTime)
        .prop('viewDate')
        .isSame(moment.tz('2018-08-22', 'YYYY-MM-DD', 'America/Los_Angeles'))
    ).toBe(true);
  });

  it('should disable dates before disableDatePast', () => {
    component.setProps({ disableDatePast: '2018-06-05' });
    const disablePast = component.find(DateTime).prop('isValidDate');

    expect(disablePast(moment('2018-06-02', 'YYYY-MM-DD'))).toBe(false);
    expect(disablePast(moment('2018-06-22', 'YYYY-MM-DD'))).toBe(true);
  });

  it('should disable dates before disableDatePast if time provided in moment object', () => {
    component.setProps({ disableDatePast: moment('2018-06-05', 'YYYY-MM-DD') });
    const disablePast = component.find(DateTime).prop('isValidDate');

    expect(disablePast(moment('2018-06-02', 'YYYY-MM-DD'))).toBe(false);
    expect(disablePast(moment('2018-06-22', 'YYYY-MM-DD'))).toBe(true);
  });

  it('should render MUI input component with the input value', () => {
    const muiInput = mounted.find('WithStyles(Input)');
    expect(muiInput.prop('value')).toBe('08/22/2018');
  });
});
