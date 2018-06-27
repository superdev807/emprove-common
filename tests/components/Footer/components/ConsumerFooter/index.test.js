'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import ConsumerFooter from '~/components/Footer/components/ConsumerFooter';

describe('ConsumerFooter component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ConsumerFooter />);
  });

  test('should include company links section', () => {
    expect(component.find('CompanyLinks').length).toBe(1);
  });

  test('should include browse catalog links section', () => {
    expect(component.find('BrowseCatalogLinks').length).toBe(1);
  });

  test('should include service areas section', () => {
    expect(component.find('ServiceAreas').length).toBe(1);
  });

  test('should include how to use section', () => {
    expect(component.find('HowToUse').length).toBe(1);
  });

  test('should include footer copyright & social media links component', () => {
    expect(component.find('FooterCopyrightAndSocial').length).toBe(1);
  });
});
