'use strict';

import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import MuiSnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { mount } from 'enzyme';

import SnackbarContent from '~/components/SnackbarContent';

describe('SnackbarContent component', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      variant: 'success',
      message: 'success message'
    };
    wrapper = mount(<SnackbarContent {...props} />);
  });

  test('should render snack bar content', () => {
    const snackbarContent = wrapper.find(MuiSnackbarContent);
    expect(snackbarContent.length).toBe(1);
  });

  test('should render message correctly', () => {
    const snackbarContent = wrapper.find(MuiSnackbarContent);
    const messageWrapper = mount(snackbarContent.prop('message'));
    expect(messageWrapper.text()).toBe('success message');
  });

  test('should render check circle icon if variant is `success`', () => {
    expect(wrapper.find(CheckCircleIcon).length).toBe(1);
  });

  test('should render warning icon if variant is `warning`', () => {
    wrapper.setProps({ variant: 'warning' });
    expect(wrapper.find(WarningIcon).length).toBe(1);
  });

  test('should render error icon if variant is `error`', () => {
    wrapper.setProps({ variant: 'error' });
    expect(wrapper.find(ErrorIcon).length).toBe(1);
  });

  test('should render info icon if variant is `info`', () => {
    wrapper.setProps({ variant: 'info' });
    expect(wrapper.find(InfoIcon).length).toBe(1);
  });
});
