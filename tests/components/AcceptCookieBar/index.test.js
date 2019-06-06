'use strict';

import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { mount } from 'enzyme';

import { AcceptCookieBar } from '~/components/AcceptCookieBar';

describe('AcceptCookieBar component', () => {
  const originalProcess = global.process;
  const CONSUMER_DOMAIN = 'http://somewhere.com';

  beforeAll(() => {
    global.process = {
      ...global.process,
      env: {
        CONSUMER_DOMAIN
      }
    };
  });

  afterAll(() => {
    global.process = originalProcess;
  });

  let component;
  const props = {
    open: true,
    acceptCookie: jest.fn(),
    classes: {}
  };

  beforeEach(() => {
    component = mount(<AcceptCookieBar {...props} />);
  });

  test('should render as <Snackbar />', () => {
    expect(component.find(Snackbar).length).toBe(1);
  });

  test('should include privacy page link', () => {
    expect(component.find("[href='" + CONSUMER_DOMAIN + "/privacy']").length).toBe(1);
  });

  test('should hide snackbar if open prop is not set', () => {
    component.setProps({ open: false });
    expect(component.find(Snackbar).prop('open')).toBe(false);
  });

  test('should trigger acceptCookie action when Okay button is clicked', () => {
    component.find(Button).prop('onClick')();
    expect(props.acceptCookie).toHaveBeenCalled();
  });
});
