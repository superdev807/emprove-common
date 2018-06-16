'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import HomeAreaIcon from '../../../src/components/HomeAreaIcon';

describe('HomeAreaIcon component', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {};
    component = shallow(<HomeAreaIcon {...props} />);
  });

  test('should render a guest bathroom icon if given a homeAreaId that corresponds to that area', () => {
    component.setProps({ homeAreaId: 6 });

    expect(component.name()).toBe('IconGuestBathroom');
  });

  test('should render a master bathroom icon if given a homeAreaId that corresponds to that area', () => {
    component.setProps({ homeAreaId: 8 });

    expect(component.name()).toBe('IconMasterBathroom');
  });

  test('should render a powder room icon if given a homeAreaId that corresponds to that area', () => {
    component.setProps({ homeAreaId: 9 });

    expect(component.name()).toBe('IconPowderRoom');
  });

  test('should render a guest bedroom icon if given a homeAreaId that corresponds to that area', () => {
    component.setProps({ homeAreaId: 10 });

    expect(component.name()).toBe('IconGuestBedroom');
  });

  test('should render a master bedroom icon if given a homeAreaId that corresponds to that area', () => {
    component.setProps({ homeAreaId: 11 });

    expect(component.name()).toBe('IconMasterBedroom');
  });

  test('should render a kitchen icon if given a homeAreaId that corresponds to that area', () => {
    component.setProps({ homeAreaId: 27 });

    expect(component.name()).toBe('IconKitchen');
  });

  test('should render a general living icon if given a homeAreaId that corresponds to that area', () => {
    component.setProps({ homeAreaId: 43 });

    expect(component.name()).toBe('IconGeneralLiving');
  });
});
