'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import BrowseCatalogLinks from '~/components/Footer/components/BrowseCatalogLinks';

describe('BrowseCatalogLinks component', () => {
  let component;
  const indices = {
    homeAreas: 0,
    homeStyles: 1
  };

  beforeEach(() => {
    component = shallow(<BrowseCatalogLinks />);
  });

  test('should display a list of links to the home areas', () => {
    component.find('FooterList').at(indices.homeAreas).prop('items').slice(1).forEach(listItem => {
      expect(listItem.props.to).toMatch(/^\/browse\/any-.+$/);
    });
  });

  test('should display a list of links to the home styles', () => {
    component.find('FooterList').at(indices.homeStyles).prop('items').slice(1).forEach(listItem => {
      expect(listItem.props.to).toMatch(/^\/browse\/.+-homes$/);
    });
  });
});
