'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import { Logo } from '../../../src/components/Logo';

describe('Logo component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Logo partner={null} />);
  });

  test('should render the logo image if partner prop is null', () => {
    const img = component.find('img');

    expect(img.prop('src')).toBe('/images/emprove_logo.svg');
    expect(img.prop('alt')).toBe('Emprove | Home Improvement Renewed');
  });

  test('should render the shortened logo image if passed the shortened prop', () => {
    component.setProps({ partner: null, shortened: true });

    expect(component.find('img').prop('src')).toBe('/images/ic_e_logo.png');
  });
});
