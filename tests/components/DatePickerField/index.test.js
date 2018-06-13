'use strict';

import React from 'react';
import moment from 'moment';
import { shallow, mount } from 'enzyme';

import { DatePickerField } from '../../../src/components/DatePickerField';

describe('DatePickerField', () => {
  let props;
  let component;
  let mounted;

  beforeEach(() => {
    const dispatch = {
      openCalendar: jest.fn(),
      closeCalendar: jest.fn(),
    }
    props = {
      ...dispatch,
      input: {},
      meta: {},
      label: '',
      disableDatePast: null,
    }
    component = shallow(<DatePickerField {...props} />);
    mounted = mount(<DatePickerField {...props} />);
  });

  it('should have closeOnSelect set to true', () => {
    expect(component.children().at(0).prop('closeOnSelect')).toBe(true);
  });

  it('should display the date in MM/DD/YYYY format', () => {
    component.setProps({input: {value: '2018-08-22'}});

    expect(component.children().at(0).prop('value')).toBe('08/22/2018');
  });

  it('should have viewDate set to input value provided', () => {
    component.setProps({input: {value: '2018-08-22'}});

    expect(component.children().at(0).prop('viewDate')).toBe('08/22/2018');
  });

  it('should disable dates before disableDatePast', () => {
    component.setProps({disableDatePast: '2018-06-05'});
    const disablePast = component.children().at(0).prop('isValidDate');

    expect(disablePast(moment('2018-06-02', 'YYYY-MM-DD'))).toBe(false);
    expect(disablePast(moment('2018-06-22', 'YYYY-MM-DD'))).toBe(true);
  })

  it('should disable dates before disableDatePast if time provided in moment object', () => {
    component.setProps({disableDatePast: moment('2018-06-05', 'YYYY-MM-DD')});
    const disablePast = component.children().at(0).prop('isValidDate');

    expect(disablePast(moment('2018-06-02', 'YYYY-MM-DD'))).toBe(false);
    expect(disablePast(moment('2018-06-22', 'YYYY-MM-DD'))).toBe(true);
  })

  it('should render MUI input component with the input value', () => {
    mounted.setProps({input: {value: moment('2018-08-22')}});
    
    const muiInput = mounted.find('WithStyles(Input)');
    expect(muiInput.prop('value')).toBe('08/22/2018')
  })
})