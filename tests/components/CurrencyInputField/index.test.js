'use strict';

import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import NumberFormat from 'react-number-format';
import InputLabel from '@material-ui/core/InputLabel';
import { mount } from 'enzyme';

import CurrencyInputField from '~/components/CurrencyInputField';

describe('CurrencyInputField', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      classes: {},
      input: { value: '1234' },
      meta: {},
      label: ''
    };
    wrapper = mount(<CurrencyInputField {...props} />);
  });

  it('should render label correctly', () => {
    const label = 'Total Price';
    wrapper.setProps({ label });
    expect(wrapper.find(InputLabel).prop('children')).toBe(label);
  });

  it('should render as NumberFormat', () => {
    expect(wrapper.find(NumberFormat).length).toBe(1);
  });

  it('should render value with thousand separators', () => {
    const props1 = {
      classes: {},
      input: { value: '1234' },
      meta: {},
      label: ''
    };
    const props2 = {
      classes: {},
      input: { value: '1234567' },
      meta: {},
      label: ''
    };
    const props3 = {
      classes: {},
      input: { value: '123' },
      meta: {},
      label: ''
    };

    const wrapper1 = mount(<CurrencyInputField {...props1} />);
    const wrapper2 = mount(<CurrencyInputField {...props2} />);
    const wrapper3 = mount(<CurrencyInputField {...props3} />);

    expect(
      wrapper1
        .find(NumberFormat)
        .find('input')
        .prop('value')
    ).toBe('1,234');
    expect(
      wrapper2
        .find(NumberFormat)
        .find('input')
        .prop('value')
    ).toBe('1,234,567');
    expect(
      wrapper3
        .find(NumberFormat)
        .find('input')
        .prop('value')
    ).toBe('123');
  });

  it('should render error message correctly', () => {
    const errorMessage = 'Value should not be negative';
    wrapper.setProps({ meta: { touched: true, error: errorMessage } });
    const helperTexts = wrapper.find(FormHelperText);
    expect(helperTexts.at(helperTexts.length - 1).prop('children')).toBe(errorMessage);
  });
});
