'use strict';

import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { mount } from 'enzyme';

import { AutocompleteField } from '~/components/AutocompleteField';

describe('AutocompleteField', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      classes: {},
      input: { value: '' },
      meta: {},
      label: ''
    };
    wrapper = mount(<AutocompleteField {...props} />);
  });

  it('should render label correctly', () => {
    const label = 'Message IDs';
    wrapper.setProps({ label, input: { value: 'TEST_VALUE' } });
    expect(wrapper.find(InputLabel).prop('children')).toBe(label);
  });

  it('should render value correctly', () => {
    const value = 'TEST_VALUE';
    wrapper.setProps({ input: { value } });
    expect(wrapper.find(Input).prop('value')).toBe(value);
  });

  it('should render error message correctly', () => {
    const errorMessage = 'Message can not be blank.';
    wrapper.setProps({ meta: { touched: true, error: errorMessage } });
    const helperTexts = wrapper.find(FormHelperText);
    expect(helperTexts.last().prop('children')).toBe(errorMessage);
  });
});
