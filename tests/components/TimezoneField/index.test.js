'use strict';

import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { mount } from 'enzyme';

import { TimezoneField } from '~/components/TimezoneField';

describe('TimezoneField', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      classes: {},
      input: { value: '' },
      meta: {},
      label: ''
    };
    wrapper = mount(<TimezoneField {...props} />);
  });

  it('should render label correctly', () => {
    const label = 'Email';
    wrapper.setProps({ label, input: { value: 'US/Pacific' } });
    expect(wrapper.find(InputLabel).prop('children')).toBe(label);
  });

  it('should render value correctly', () => {
    const value = 'US/Pacific';
    wrapper.setProps({ input: { value } });
    expect(wrapper.find(Input).prop('value')).toBe(value);
  });

  it('should render error message correctly', () => {
    const errorMessage = 'Timezone is incorrect.';
    wrapper.setProps({ meta: { touched: true, error: errorMessage } });
    const helperTexts = wrapper.find(FormHelperText);
    expect(helperTexts.last().prop('children')).toBe(errorMessage);
  });
});
