'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import FooterCopyrightAndSocial from '../../../../../src/components/Footer/components/FooterCopyrightAndSocial';

describe('FooterCopyrightAndSocial component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<FooterCopyrightAndSocial />);
  });

  test('should include social media links section', () => {
    expect(component.find('SocialMediaLinks').length).toBe(1);
  });

  test('should include footer copyright section', () => {
    expect(component.find('FooterCopyright').length).toBe(1);
  });
});
