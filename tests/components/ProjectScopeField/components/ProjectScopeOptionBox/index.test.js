'use strict';

import React, { Fragment } from 'react';
import { shallow } from 'enzyme';

import ProjectScopeOptionBox from '../../../../../src/components/ProjectScopeField/components/ProjectScopeOptionBox';

describe('ProjectScopeOptionBox component', () => {
  let component;
  let props;

  beforeEach(() => {
    const option = {
      barValues: {
        refinish: 30,
        replace: 20
      },
      label: (
        <Fragment>
          UPGRADE<br />FINISHES
        </Fragment>
      ),
      text: 'A facelift for your space, with new hard surfaces and a repaint'
    };
    props = {
      onClick: jest.fn(),
      option
    };
    component = shallow(<ProjectScopeOptionBox {...props} />);
  });

  test('should take an onClick event handler from props', () => {
    expect(component.prop('onClick')).toBe(props.onClick);
  });

  test('should display the option label', () => {
    const label = 'Some label goes here';
    component.setProps({
      option: {
        ...props.option,
        label
      }
    });

    expect(
      component
        .find('WithStyles(Typography)')
        .first()
        .children()
        .text()
    ).toBe(label);
  });

  test('should display a ProjectScopeBar for the option barValues', () => {
    const projectScopeBar = component.find('ProjectScopeBar');

    expect(projectScopeBar.length).toBe(1);
    expect(projectScopeBar.prop('refinish')).toBe(props.option.barValues.refinish);
    expect(projectScopeBar.prop('replace')).toBe(props.option.barValues.replace);
  });

  test('should display the option text', () => {
    const text = 'Something something something';
    component.setProps({
      option: {
        ...props.option,
        text
      }
    });

    expect(
      component
        .find('.project-scope-option-box__text')
        .at(1)
        .children()
        .text()
    ).toBe(text);
  });

  test('should display a Select button', () => {
    const button = component.find('WithStyles(Button)');

    expect(button.length).toBe(1);
    expect(button.prop('color')).toBe('primary');
    expect(button.prop('fullWidth')).toBe(true);
    expect(button.prop('variant')).toBe('contained');
  });

  test('should allow a className passed by the parent', () => {
    component.setProps({ className: 'some-parent__project-scope-option-box' });

    expect(component.prop('className')).toBe('project-scope-option-box some-parent__project-scope-option-box');
  });

  test('should allow an id passed by the parent', () => {
    component.setProps({ id: 'some-parent__project-scope-option-box' });

    expect(component.prop('id')).toBe('some-parent__project-scope-option-box');
  });
});
