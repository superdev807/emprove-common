'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import CompanyLinks from '../../../../../src/components/Footer/components/CompanyLinks';

describe('CompanyLinks component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CompanyLinks />);
  });

  test('should display link to about us', () => {
    expect(component.find('FooterList').prop('items')[0].props.to).toBe('/about-us');
  });
});
