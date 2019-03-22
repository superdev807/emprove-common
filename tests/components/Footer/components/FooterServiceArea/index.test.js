'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import FooterServiceArea from '~/components/Footer/components/FooterServiceArea';

describe('FooterServiceArea component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<FooterServiceArea />);
  });

  test('should include social media links section', () => {
    expect(component.find('SocialMediaLinks').length).toBe(1);
  });
});
