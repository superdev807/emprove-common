'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import CatalogPhotoHeader from '~/components/CatalogPhotoModal/components/CatalogPhotoHeader';

describe('CatalogPhotoHeader component', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
    };
    component = shallow(<CatalogPhotoHeader {...props} />);
  });

  test('should display the photo name (composed of style + home area)', () => {
    props.designStyle = 'Modern';
    props.homeArea = 'Master Bedroom';
    component.setProps(props);

    const name = component.find('span[className="catalog-photo-header__style-and-area"]').children();
    expect(name.at(0).text()).toBe('Modern');
    expect(name.at(1).text()).toBe(' ');
    expect(name.at(2).text()).toBe('Master Bedroom');
  });

  test('should display the photo quality standard', () => {
    props.designStyle = 'Modern';
    props.homeArea = 'Master Bedroom';
    props.qualityStandard = 'Upgraded';
    component.setProps(props);

    expect(component.find('span[className="catalog-photo-header__quality"]').children().text()).toBe('Upgraded');
  });
});
