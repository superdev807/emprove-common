'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import ContractorFooter from '~/components/Footer/components/ContractorFooter';

describe('ContractorFooter component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ContractorFooter />);
  });

  test('should include company links section', () => {
    expect(component.find('CompanyLinks').length).toBe(1);
  });

  test('should include service areas section', () => {
    expect(component.find('ServiceAreas').length).toBe(1);
  });

  test('should include work with us section', () => {
    expect(component.find('WorkWithUs').length).toBe(1);
  });

  test('should include grow with us section', () => {
    expect(component.find('GrowWithUs').length).toBe(1);
  });

  test('should include footer copyright & social media component', () => {
    expect(component.find('FooterCopyrightAndSocial').length).toBe(1);
  });
});
