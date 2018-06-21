'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import DreamItLink from '../../../../../src/components/CatalogPhotoModal/components/DreamItLink';

describe('DreamItLink component', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      browseFilter: undefined,
      disabled: undefined
    };
    component = shallow(<DreamItLink {...props} />);
  });

  test('should display a dream-it icon', () => {
    expect(component.find('IconDreamIt').length).toBe(1);
  });

  test('should display a link with text `Go to Dream It`', () => {
    component.setProps({ browseFilter: 'modern-master-bedroom' })

    const link = component.find('Link');
    expect(link.prop('to')).toBe('/browse/modern-master-bedroom');
    expect(link.children().text()).toBe('Go to Dream It');
  });
});
