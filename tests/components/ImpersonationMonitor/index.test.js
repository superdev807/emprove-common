'use strict';

import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { shallow } from 'enzyme';

import ImpersonationMonitor from '~/components/ImpersonationMonitor';

describe('ImpersonationMonitor component', () => {
  let component;
  const realDateNow = Date.now.bind(global.Date);
  const mockedNow = 1539951580;
  const props = {
    tokenExp: mockedNow + 60 * 30,
    onExit: jest.fn(),
    impersonator: { email: 'admin@example.com' }
  };

  beforeAll(() => {
    const dateNowStub = jest.fn(() => mockedNow * 1000);
    global.Date.now = dateNowStub;
  });

  afterAll(() => {
    global.Date.now = realDateNow;
  });

  beforeEach(() => {
    component = shallow(<ImpersonationMonitor {...props} />);
  });

  test('should render as <Snackbar />', () => {
    expect(component.name()).toBe('WithStyles(Snackbar)');
  });

  test('should render impersonator email', () => {
    let textWrapper = shallow(component.dive().prop('message')).find('.impersonation-monitor-text');
    expect(textWrapper.text()).toContain('admin@example.com');
    component.setProps({ impersonator: { email: 'otheradmin@example.com' } });
    textWrapper = shallow(component.dive().prop('message')).find('.impersonation-monitor-text');
    expect(textWrapper.text()).toContain('otheradmin@example.com');
  });

  test('should render time left', () => {
    let textWrapper = shallow(component.dive().prop('message')).find('.impersonation-monitor-text');
    expect(textWrapper.text()).toContain('in 30 minutes');
    component.setProps({ tokenExp: mockedNow + 5 });
    textWrapper = shallow(component.dive().prop('message')).find('.impersonation-monitor-text');
    expect(textWrapper.text()).toContain('in 5 seconds');
  });

  test('should not render any thing if impersonator is nil', () => {
    component.setProps({ impersonator: null });
    expect(component.name()).toEqual(null);
    component.setProps({ impersonator: undefined });
    expect(component.name()).toEqual(null);
  });

  test('should trigger close action when Exit button is clicked', () => {
    shallow(component.dive().prop('action')[0]).prop('onClick')();
    expect(props.onExit).toHaveBeenCalled();
  });
});
