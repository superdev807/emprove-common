'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import TheTeam from '~/components/AboutUs/components/TheTeam';

describe('TheTeam component', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {};
    component = shallow(<TheTeam {...props} />);
  });

  it('should include all the team members, in order', () => {
    const members = [
      'James Noel',
      'Linda Lee',
      'Andrew Pascal',
      'Ervi Bongso',
      'Tonson Back',
      'Mike Gonzales',
      'JoAnne McCauley',
      'Domini Noel',
      'Iris Sin',
      'Kiwook Kwon',
      'Sousuke Tanaka'
    ];

    const teamMembers = component.find('TeamMember');
    members.forEach((member, index) => {
      try {
        expect(teamMembers.at(index).prop('member').name).toBe(member);
      } catch (error) {
        throw new Error(`${error.message}\n  (member name: ${member})`);
      }
    });
  });
});
