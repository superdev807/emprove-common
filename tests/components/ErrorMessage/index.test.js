'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import ErrorMessage from '../../../src/components/ErrorMessage';

describe('ErrorMessage component', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      error: 'Failed to do something'
    };
    component = shallow(<ErrorMessage {...props} />);
  });

  test('should display the given error message', () => {
    expect(component.children().text()).toBe(props.error);
  });

  test('should display a button to try some operation again', () => {
    const handleTryAgainClick = jest.fn();
    component.setProps({
      tryAgain: true,
      onTryAgainClick: handleTryAgainClick
    });

    const button = component.find('WithStyles(ForwardRef(Button))');
    expect(button.length).toBe(1);
    expect(button.prop('onClick')).toBe(handleTryAgainClick);
  });
});
