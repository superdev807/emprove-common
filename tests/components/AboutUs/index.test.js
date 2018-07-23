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

  it('should include sections about the process', () => {
    expect(component.find('DreamItPartial').length).toBe(1);
    expect(component.find('CostItPartial').length).toBe(1);
    expect(component.find('BidItPartial').length).toBe(1);
  });

  it('should include section about professionals', () => {
    expect(component.find('WithStyles(ForProfessionals)').length).toBe(1);
  });

  it('should include section for tips and ideas', () => {
    expect(component.find('.about-us__tips-and-ideas').length).toBe(1);
  });

  it('should include section about the team', () => {
    expect(component.find('TheTeam').length).toBe(1);
  });

  it('should not include section about the product', () => {
    expect(component.find('OurProduct').length).toBe(0);
  });

  xit('should include section about the investors', () => {
    expect(component.find('OurInvestors').length).toBe(1);
  });

  it('should include section about the press and media', () => {
    expect(component.find('.about-us__press-and-media').length).toBe(1);
  });
});
