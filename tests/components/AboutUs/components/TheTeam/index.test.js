'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import TheTeam from '../../../../../src/components/AboutUs/components/TheTeam';

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
      'Kiwook Kwon',
      'Renan Martins',
      'Sousuke Tanaka',
      'Leo Esaki',
      'Juan Ortiz',
    ];

    const teamMembers = component.find('TeamMember');
    members.forEach((member, index) => {
      try {
        expect(teamMembers.at(index).prop('member').name).toBe(member);
      } catch (error) {
        throw new Error(`${error.message}\n  (member name: ${member})`);
      }
    })
  });
});
