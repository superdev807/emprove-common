'use strict';

import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import MaskedInput from 'react-text-mask';
import InputLabel from '@material-ui/core/InputLabel';
import { mount } from 'enzyme';

import { ZipCodeField } from '~/components/ZipCodeField';

describe('ZipCodeField', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      classes: {},
      input: { value: '90058' },
      meta: {},
      label: ''
    };
    wrapper = mount(<ZipCodeField {...props} />);
  });

  it('should render label correctly', () => {
    const label = 'Zipcode';
    wrapper.setProps({ label });
    expect(wrapper.find(InputLabel).prop('children')).toBe(label);
  });

  it('should render value correctly', () => {
    const value = '90051';
    wrapper.setProps({ input: { value } });
    expect(wrapper.find(MaskedInput).prop('value')).toBe(value);
  });

  it('should render error message correctly', () => {
    const errorMessage = 'Password is too week';
    wrapper.setProps({ meta: { touched: true, error: errorMessage } });
    const helperTexts = wrapper.find(FormHelperText);
    expect(helperTexts.at(helperTexts.length - 1).prop('children')).toBe(errorMessage);
  });
});
