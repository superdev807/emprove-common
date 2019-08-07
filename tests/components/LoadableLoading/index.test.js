'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import LoadableLoading from '../../../src/components/LoadableLoading';

describe('LoadableLoading component', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      error: null,
      retry: jest.fn()
    };

    component = shallow(<LoadableLoading {...props} />);
  });

  test('should display a loading indicator spinner', () => {
    expect(component.dive().name()).toBe('LoadingIndicator');
    expect(component.prop('fixed')).toBe(true);
  });

  test('should display a snackbar instead of a loading spinner if there was a dynamic import error', () => {
    component.setProps({ error: new Error('Could not retrieve the dynamic import') });

    const snackbar = component.dive();
    expect(snackbar.name()).not.toBe('LoadingIndicator');
    expect(snackbar.name()).toBe('ForwardRef(Snackbar)');
    expect(snackbar.prop('open')).toBe(true);
  });

  test('should display a button for the user to retry the dynamic import, given there was an error', () => {
    component.setProps({ error: new Error('Could not retrieve the dynamic import') });

    const snackbarContent = component
      .dive()
      .children()
      .dive();
    expect(snackbarContent.name()).toBe('CustomSnackbarContent');

    const button = snackbarContent.prop('action')[0];
    expect(button.props.onClick).toBe(props.retry);
  });
});
