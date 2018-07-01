'use strict';

import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { shallow } from 'enzyme';

import { DropdownField } from '~/components/DropdownField';

describe('DropdownField', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      classes: {},
      input: { value: '' },
      options: [{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }],
      meta: {},
      label: ''
    };
    wrapper = shallow(<DropdownField {...props} />);
  });

  it('should render label correctly', () => {
    const label = 'Gender';
    wrapper.setProps({ label, input: { value: 'male' } });
    expect(wrapper.find(InputLabel).prop('children')).toBe(label);
  });

  it('should render value correctly', () => {
    const value = 'female';
    wrapper.setProps({ input: { value } });
    expect(wrapper.find(Select).prop('value')).toBe(value);
  });

  it('should render error message correctly', () => {
    const errorMessage = 'Please select an item';
    wrapper.setProps({ meta: { touched: true, error: errorMessage } });
    const helperTexts = wrapper.find(FormHelperText);
    expect(helperTexts.at(helperTexts.length - 1).prop('children')).toBe(errorMessage);
  });

  it('should render options as MenuItems correctly', () => {
    const menuItems = wrapper.find(MenuItem);
    expect(menuItems.at(0).prop('value')).toBe('male');
    expect(menuItems.at(1).prop('value')).toBe('female');
  });
});
