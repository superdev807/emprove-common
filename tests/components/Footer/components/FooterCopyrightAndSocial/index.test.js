'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import FooterCopyrightAndSocial from '~/components/Footer/components/FooterCopyrightAndSocial';

describe('FooterCopyrightAndSocial component', () => {
  let component;
  let componentWithNoSocialLinks;

  beforeEach(() => {
    component = shallow(<FooterCopyrightAndSocial />);
    componentWithNoSocialLinks = shallow(<FooterCopyrightAndSocial showSocial={false} />);
  });

  test('should include social media links section', () => {
    expect(component.find('SocialMediaLinks').length).toBe(1);
  });

  test('should not include social media links section if showSocial prop is false', () => {
    expect(componentWithNoSocialLinks.find('SocialMediaLinks').length).toBe(0);
  });

  test('should include footer copyright section', () => {
    expect(component.find('FooterCopyright').length).toBe(1);
  });
});
