'use strict';

import React from 'react';
import { mount } from 'enzyme';

import OutlinedRadio, { ControlLabel, Radio } from '~/components/OutlinedRadio';

describe('OutlinedRadio component', () => {
  const getComponent = props => {
    return mount(<OutlinedRadio value="value" checked onChange={jest.fn()} label="Checkbox Label" disabled={false} {...props} />);
  };

  it('should render as <ControlLabel />', () => {
    const component = getComponent();
    expect(component.find(ControlLabel).length).toBe(1);
  });

  it('should render label correctly', () => {
    const label = 'Checkbox Label';
    const component = getComponent({ label });
    expect(component.find(ControlLabel).prop('label')).toBe(label);
  });

  it('should set value correctly', () => {
    const component = getComponent({ value: 'other' });
    expect(component.find(ControlLabel).prop('value')).toBe('other');
  });

  it('should render checked status correctly', () => {
    const component = getComponent({ checked: false });
    expect(component.find(Radio).prop('checked')).toBe(false);
    component.setProps({ checked: true });
    expect(component.find(Radio).prop('checked')).toBe(true);
  });

  it('should set className properly', () => {
    const component = getComponent({ className: 'testClassName' });
    expect(component.find(ControlLabel).prop('className')).toContain('testClassName');
  });

  it('should not show radio if disabled', () => {
    const component = getComponent({ disabled: true });
    expect(component.find(Radio).length).toBe(0);
  });
});
