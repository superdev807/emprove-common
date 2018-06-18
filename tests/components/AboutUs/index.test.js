'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import AboutUs from '../../../src/components/AboutUs';

describe('AboutUs component', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {};
    component = shallow(<AboutUs {...props} />);
  });

  it('should include a section with a hero image', () => {
    expect(component.find('AboutUsHero').length).toBe(1);
  });

  it('should include section about the company', () => {
    expect(component.find('AboutTheCompany').length).toBe(1);
  });

  it('should include section about the team', () => {
    expect(component.find('TheTeam').length).toBe(1);
  });

  it('should include section about the product', () => {
    expect(component.find('OurProduct').length).toBe(1);
  });

  xit('should include section about the investors', () => {
    expect(component.find('OurInvestors').length).toBe(1);
  });

  xit('should include section about the press and media', () => {
    expect(component.find('PressAndMedia').length).toBe(1);
  });
});
