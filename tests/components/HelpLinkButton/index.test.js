'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import HelpLinkButton from '../../../src/components/HelpLinkButton';

describe('HelpLinkButton component', () => {
  const originalProcess = global.process;
  const HELP_DOMAIN = 'https://help.emproveit.com/';
  let component;
  let props;

  beforeAll(() => {
    global.process = {
      ...global.process,
      env: {
        HELP_DOMAIN
      }
    };
  });

  beforeEach(() => {
    props = {
      path: 'some-guide/some-guide-further-information'
    };
    component = shallow(<HelpLinkButton {...props} />);
  });

  afterAll(() => {
    global.process = originalProcess;
  });

  test('should display a help icon', () => {
    expect(component.children().dive().name()).toBe('HelpOutline');
  });

  test('should display a clickable icon that links to the help domain slash a certain `path` given as prop', () => {
    component.setProps({ path: 'some-other-guide/further-information' });

    expect(component.dive().name()).toBe('IconButton');
    expect(component.prop('href')).toBe(`${HELP_DOMAIN}/some-other-guide/further-information`);
  });

  test('should allow a size prop that modifies the icon size', () => {
    component.setProps({ size: 16 });

    expect(component.prop('className')).toMatch('help-link-button--size-16');
  });
});
