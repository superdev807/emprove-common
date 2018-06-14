'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import SocialMediaLinks from '../../../../../src/components/Footer/components/SocialMediaLinks';

describe('SocialMediaLinks component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SocialMediaLinks />);
  });

  test('should display an icon link to the Facebook page', () => {
    expect(component.find('IconFacebookLetter').length).toBe(1);
    const a = component.find('a[href="https://www.facebook.com/emproveit/"]');
    expect(a.prop('target')).toBe('_blank');
    expect(a.prop('rel')).toBe('noopener noreferrer');
  });

  test('should display an icon link to the Twitter profile', () => {
    expect(component.find('IconTwitter').length).toBe(1);
    const a = component.find('a[href="https://twitter.com/emprove_it"]');
    expect(a.prop('target')).toBe('_blank');
    expect(a.prop('rel')).toBe('noopener noreferrer');
  });

  test('should display an icon link to the Instagram profile', () => {
    expect(component.find('IconInstagram').length).toBe(1);
    const a = component.find('a[href="https://www.instagram.com/emprove_it/"]');
    expect(a.prop('target')).toBe('_blank');
    expect(a.prop('rel')).toBe('noopener noreferrer');
  });

  test('should display an icon link to the LinkedIn page', () => {
    expect(component.find('IconLinkedIn').length).toBe(1);
    const a = component.find('a[href="https://www.linkedin.com/company/emprove-inc/"]');
    expect(a.prop('target')).toBe('_blank');
    expect(a.prop('rel')).toBe('noopener noreferrer');
  });
});
