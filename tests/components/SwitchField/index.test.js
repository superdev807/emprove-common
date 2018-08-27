'use strict';

import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { mount } from 'enzyme';

import SwitchField from '~/components/SwitchField';

describe('SwitchField', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      classes: {},
      input: { value: false },
      meta: {}
    };
    wrapper = mount(<SwitchField {...props} />);
  });

  it('should render label correctly', () => {
    const label = 'Is public plan';
    wrapper.setProps({ label });
    expect(wrapper.find(FormControlLabel).prop('label')).toBe(label);
  });

  it('should render value correctly', () => {
    expect(wrapper.find(Switch).prop('checked')).toBe(false);
    let value = true;
    wrapper.setProps({ input: { value } });
    expect(wrapper.find(Switch).prop('checked')).toBe(value);
    value = false;
    wrapper.setProps({ input: { value } });
    expect(wrapper.find(Switch).prop('checked')).toBe(value);
  });

  it('should render error message correctly', () => {
    const errorMessage = 'Please turn on this switch';
    wrapper.setProps({ meta: { touched: true, error: errorMessage } });
    const helperTexts = wrapper.find(FormHelperText);
    expect(helperTexts.at(helperTexts.length - 1).prop('children')).toBe(errorMessage);
  });
});
