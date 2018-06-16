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
    dreamSpace: 'Contemporary Premium Family Room',
    homeAreaId: HomeArea.GENERAL_LIVING,
    description: 'Construction executive with 15+ years delivering large & highly refined projects on the contractor and owner sides.',
    photoKey: 'james_400x400.jpg',
    dreamSpaceImageKey: '01698_E_cimage.jpg',
  },
  {
    id: 2,
    name: 'Linda Lee',
    position: 'COO',
    dreamSpace: 'Contemporary Luxurious Master Bath',
    homeAreaId: HomeArea.MASTER_BATHROOM,
    description: 'Sofware executive with expertise in growing 0-$500MM businesses. Built large machine-learning personalization products.',
    photoKey: 'linda_400x400.jpg',
    dreamSpaceImageKey: '00043_E_cimage.jpg',
  },
  {
    id: 3,
    name: 'Andrew Pascal',
    position: 'Chairman',
    dreamSpace: 'Contemporary High-End Master Bath',
    homeAreaId: HomeArea.MASTER_BATHROOM,
    description: 'An accomplished leader who has founded & built businesses in the digital casino & leisure entertainment industries.',
    photoKey: 'andrew_400x400.jpg',
    dreamSpaceImageKey: '00016_E_cimage.jpg',
  },
  {
    id: 4,
    name: 'Ervi Bongso',
    position: 'Principal Engineer',
    dreamSpace: 'Rustic Tiny House',
    homeAreaId: HomeArea.GENERAL_LIVING,
    description: null,
    photoKey: 'ervi_400x400.jpg',
    dreamSpaceImageKey: '02369_E_cimage.jpg',
  },
  {
    id: 5,
    name: 'Tonson Back',
    position: 'UI/UX Artist',
    dreamSpace: 'Industrial Upgraded Living Area',
    homeAreaId: HomeArea.GENERAL_LIVING,
    description: null,
    photoKey: 'tonson_400x400.jpg',
    dreamSpaceImageKey: '01990_E_cimage.jpg',
  },
  {
    id: 6,
    name: 'Mike Gonzales',
    position: 'Market Launcher',
    dreamSpace: 'Contemporary Open Living Area',
    homeAreaId: HomeArea.GENERAL_LIVING,
    description: null,
    photoKey: 'mike_400x400.jpg',
    dreamSpaceImageKey: '01762_E_cimage.jpeg',
  },
  {
    id: 7,
    name: 'JoAnne McCauley',
    position: 'Market Launcher',
    dreamSpace: 'Contemporary Luxurious Bedroom',
    homeAreaId: HomeArea.MASTER_BEDROOM,
    description: null,
    photoKey: 'joanne_400x400.jpg',
    dreamSpaceImageKey: '00889_E_cimage.jpg',
  },
  {
    id: 8,
    name: 'Domini Noel',
    position: 'Business Intelligence',
    dreamSpace: 'Traditional High-End Kitchen',
    homeAreaId: HomeArea.KITCHEN,
    description: null,
    photoKey: 'domini_400x400.jpg',
    dreamSpaceImageKey: '01844_E_cimage.jpg',
  },
  {
    id: 9,
    name: 'Kiwook Kwon',
    position: 'Engineer',
    dreamSpace: 'Rustic Upgraded Bathroom',
    homeAreaId: HomeArea.MASTER_BATHROOM,
    description: null,
    photoKey: 'kiwook_400x400.jpg',
    dreamSpaceImageKey: '00599_E_cimage.jpg',
  },
  {
    id: 10,
    name: 'Renan Martins',
    position: 'Engineer',
    dreamSpace: 'Modern Zen Master Bath',
    homeAreaId: HomeArea.MASTER_BATHROOM,
    description: null,
    photoKey: 'renan_400x400.jpg',
    dreamSpaceImageKey: '00504_E_cimage.jpg',
  },
];

const TheTeam = (props) => {
  const members = teamMembers.map(teamMember => {
    const memberWithPhotoUrl = {
      ...teamMember,
      photoUrl: `/images/team/${teamMember.photoKey}`
    };

    return (
      <div key={teamMember.id} className="the-team__team-member">
        <TeamMember member={memberWithPhotoUrl} />
      </div>
    );
  });

  return (
    <section className="the-team">
      <div className="the-team__title">Meet the Team</div>
      <div className="the-team__members">
        {members}
      </div>
    </section>
  );
};

export default TheTeam;
