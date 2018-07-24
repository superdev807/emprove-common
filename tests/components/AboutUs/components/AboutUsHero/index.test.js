'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import AboutUsHero from '../../../../../src/components/AboutUs/components/AboutUsHero';

describe('AboutUsHero component', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      onPlayClick: jest.fn()
    };
    component = shallow(<AboutUsHero {...props} />);
  });

  test('should display a watch how it works button to see a video', () => {
    expect(component.find('WatchHowItWorks').prop('onPlayClick')).toBe(props.onPlayClick);
  });
});
