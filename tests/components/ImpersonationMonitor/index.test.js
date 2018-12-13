'use strict';

import React from 'react';
import Button from '@material-ui/core/Button';
import Draggable from 'react-draggable';
import Snackbar from '@material-ui/core/Snackbar';
import { shallow } from 'enzyme';

import ImpersonationMonitor from '~/components/ImpersonationMonitor';

describe('ImpersonationMonitor component', () => {
  let component;
  let wrapper;
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
    wrapper = shallow(<ImpersonationMonitor {...props} />);
  });

  test('should render as <Draggable />', () => {
    expect(wrapper.name()).toBe('Draggable');
  });

  test('should render impersonator email', () => {
    component = wrapper.find(Snackbar).dive();
    let textWrapper = shallow(component.prop('message')).find('.impersonation-monitor-text');
    expect(textWrapper.text()).toContain('admin@example.com');
    wrapper.setProps({ impersonator: { email: 'otheradmin@example.com' } });
    component = wrapper.find(Snackbar).dive();
    textWrapper = shallow(component.prop('message')).find('.impersonation-monitor-text');
    expect(textWrapper.text()).toContain('otheradmin@example.com');
  });

  test('should render time left', () => {
    component = wrapper.find(Snackbar).dive();
    let textWrapper = shallow(component.prop('message')).find('.impersonation-monitor-text');
    expect(textWrapper.text()).toContain('in 30 minutes');
    wrapper.setProps({ tokenExp: mockedNow + 5 });
    component = wrapper.find(Snackbar).dive();
    textWrapper = shallow(component.prop('message')).find('.impersonation-monitor-text');
    expect(textWrapper.text()).toContain('in 5 seconds');
  });

  test('should not render any thing if impersonator is nil', () => {
    wrapper.setProps({ impersonator: null });
    expect(wrapper.name()).toEqual(null);
    wrapper.setProps({ impersonator: undefined });
    expect(wrapper.name()).toEqual(null);
  });

  test('should trigger close action when Exit button is clicked', () => {
    component = wrapper.find(Snackbar).dive();
    shallow(component.prop('action')[0]).prop('onClick')();
    expect(props.onExit).toHaveBeenCalled();
  });
});
