'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import CollapseButton from '../../../src/components/CollapseButton';

describe('CollapseButton component', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      className: 'some-parent-component__collapse-button',
      collapsed: false,
      onClick: jest.fn()
    };
    component = shallow(<CollapseButton {...props} />);
  });

  test('should allow className prop to be passed to icon button, to come after the collapse-button class', () => {
    expect(component.prop('className')).toBe('collapse-button ' + props.className);
  });

  test('should define the icon button on click event using the onClick prop', () => {
    expect(component.prop('onClick')).toBe(props.onClick);
    component.prop('onClick')();
    expect(props.onClick).toHaveBeenCalled();
  });

  test('should show an expand more icon if collapsed prop is true', () => {
    component.setProps({ collapsed: true });
    expect(
      component
        .children()
        .dive()
        .name()
    ).toBe('WithStyles(ForwardRef(SvgIcon))');
  });

  test('should show an expand less icon if collapsed prop is false', () => {
    component.setProps({ collapsed: false });
    expect(
      component
        .children()
        .dive()
        .name()
    ).toBe('WithStyles(ForwardRef(SvgIcon))');
  });
});
