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
          UPGRADE
          <br />
          FINISHES
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
    expect(component.children().prop('onClick')).toBe(props.onClick);
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

  // ProjectScopeBar no longer used
  // test('should display a ProjectScopeBar for the option barValues', () => {
  //   const projectScopeBar = component.find('ProjectScopeBar');

  //   expect(projectScopeBar.length).toBe(1);
  //   expect(projectScopeBar.prop('refinish')).toBe(props.option.barValues.refinish);
  //   expect(projectScopeBar.prop('replace')).toBe(props.option.barValues.replace);
  // });

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
        .find('.project-scope-option-box__text--help')
        .at(0)
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

  test('should not show a select button if given showSelectButton prop with false value', () => {
    component.setProps({ showSelectButton: false });

    expect(component.find('WithStyles(Button)').length).toBe(0);
  });

  test('should allow a className passed by the parent', () => {
    component.setProps({ className: 'some-parent-name__project-scope-option-box' });

    expect(component.children().prop('className')).toMatch('some-parent-name__project-scope-option-box');
  });

  test('should allow an id passed by the parent', () => {
    component.setProps({ id: 'some-parent__project-scope-option-box' });

    expect(component.children().prop('id')).toBe('some-parent__project-scope-option-box');
  });
});
