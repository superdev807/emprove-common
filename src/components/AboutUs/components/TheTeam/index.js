'use strict';

import React from 'react';

import TeamMember from './TeamMember';
import { HomeArea } from '../../../../utils/enums';
import './styles.scss';

const teamMembers = [
  {
    id: 1,
    name: 'James Noel',
    position: 'CEO',
    dreamSpace: 'Contemporary General Living',
    homeAreaId: HomeArea.GENERAL_LIVING,
    description: 'Construction executive with 15+ years delivering large & highly refined projects on the contractor and owner sides.',
    photoKey: '',
    dreamSpaceImageKey: '',
  },
  {
    id: 2,
    name: 'Linda Lee',
    position: 'COO',
    dreamSpace: 'Transitional Master Bedroom',
    homeAreaId: HomeArea.MASTER_BEDROOM,
    description: 'Sofware executive with expertise in growing 0-$500MM businesses. Built large machine-learning personalization products.',
    photoKey: '',
    dreamSpaceImageKey: '',
  },
  {
    id: 3,
    name: 'Andrew Pascal',
    position: 'Chairman',
    dreamSpace: 'Modern Master Bathroom',
    homeAreaId: HomeArea.MASTER_BATHROOM,
    description: 'An accomplished leader who has founded & built businesses in the digital casino & leisure entertainment industries.',
    photoKey: '',
    dreamSpaceImageKey: '',
  },
  {
    id: 4,
    name: 'Ervi Bongso',
    position: 'Principal Engineer',
    dreamSpace: 'Rustic Guest Bedroom',
    homeAreaId: HomeArea.GUEST_BEDROOM,
    description: null,
    photoKey: '',
    dreamSpaceImageKey: '',
  },
  {
    id: 5,
    name: 'Tonson Back',
    position: 'UI/UX Artist',
    dreamSpace: 'Transitional Kitchen',
    homeAreaId: HomeArea.KITCHEN,
    description: null,
    photoKey: '',
    dreamSpaceImageKey: '',
  },
  {
    id: 6,
    name: 'Mike Gonzales',
    position: 'Market Launcher',
    dreamSpace: 'Country Kitchen',
    homeAreaId: HomeArea.KITCHEN,
    description: null,
    photoKey: '',
    dreamSpaceImageKey: '',
  },
  {
    id: 7,
    name: 'JoAnne McCauley',
    position: 'Market Launcher',
    dreamSpace: 'Craftsman Powder Room',
    homeAreaId: HomeArea.POWDER_ROOM,
    description: null,
    photoKey: '',
    dreamSpaceImageKey: '',
  },
  {
    id: 8,
    name: 'Domini Noel',
    position: 'Business Intelligence',
    dreamSpace: 'Traditional Master Bathroom',
    homeAreaId: HomeArea.MASTER_BATHROOM,
    description: null,
    photoKey: '',
    dreamSpaceImageKey: '',
  },
  {
    id: 9,
    name: 'Kiwook Kwon',
    position: 'Engineer',
    dreamSpace: 'Industrial General Living',
    homeAreaId: HomeArea.GENERAL_LIVING,
    description: null,
    photoKey: '',
    dreamSpaceImageKey: '',
  },
  {
    id: 10,
    name: 'Renan Martins',
    position: 'Engineer',
    dreamSpace: 'Modern Zen Master Bath',
    homeAreaId: HomeArea.MASTER_BATHROOM,
    description: null,
    photoKey: '',
    dreamSpaceImageKey: '',
  },
];

const TheTeam = (props) => {
  return (
    <section className="the-team">
      <div className="the-team__title">Meet the Team</div>
      <div className="the-team__members">
        {teamMembers.map(teamMember => (
          <div key={teamMember.id} className="the-team__team-member">
            <TeamMember member={teamMember} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TheTeam;
