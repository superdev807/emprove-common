'use strict';

import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { mount } from 'enzyme';

import CheckboxField from '~/components/CheckboxField';

describe('CheckboxField', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      classes: {},
      input: { value: false },
      meta: {}
    };
    wrapper = mount(<CheckboxField {...props} />);
  });

  it('should render label correctly', () => {
    const label = 'I Agree to the terms and conditions';
    wrapper.setProps({ label });
    expect(wrapper.find(FormControlLabel).prop('label')).toBe(label);
  });

  it('should render value correctly', () => {
    expect(wrapper.find(Checkbox).prop('checked')).toBe(false);
    let value = true;
    wrapper.setProps({ input: { value } });
    expect(wrapper.find(Checkbox).prop('checked')).toBe(value);
    value = false;
    wrapper.setProps({ input: { value } });
    expect(wrapper.find(Checkbox).prop('checked')).toBe(value);
  });

  it('should render error message correctly', () => {
    const errorMessage = 'Password is too week';
    wrapper.setProps({ meta: { touched: true, error: errorMessage } });
    const helperTexts = wrapper.find(FormHelperText);
    expect(helperTexts.at(helperTexts.length - 1).prop('children')).toBe(errorMessage);
  });
});
