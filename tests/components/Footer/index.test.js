import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../../../src/components/Footer';

describe('Footer component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Footer />);
  });

  test('should include company links section', () => {
    expect(component.find('CompanyLinks').length).toBe(1);
  });

  test('should include browse catalog links section', () => {
    expect(component.find('CompanyLinks').length).toBe(1);
  });

  test('should include service areas section', () => {
    expect(component.find('ServiceAreas').length).toBe(1);
  });

  test('should include how to use section', () => {
    expect(component.find('HowToUse').length).toBe(1);
  });

  test('should include social media links section', () => {
    expect(component.find('SocialMediaLinks').length).toBe(1);
  });

  test('should include footer copyright section', () => {
    expect(component.find('FooterCopyright').length).toBe(1);
  });
});
