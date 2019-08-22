'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import CloseButton from '~/components/CloseButton';

describe('CloseButton component', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
    };
    component = shallow(<CloseButton {...props} />);
  });

  test('should display an icon button that responds to click based on onClick prop', () => {
    const onClick = jest.fn();
    component.setProps({ onClick });

    expect(component.prop('onClick')).toBe(onClick);
  });

  test('should display a Close icon (X)', () => {
    expect(component.children().dive().name()).toBe('WithStyles(ForwardRef(SvgIcon))');
  });
});
