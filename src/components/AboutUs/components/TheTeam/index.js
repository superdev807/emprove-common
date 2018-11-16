'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import TeamMember from './TeamMember';
import CatalogPhotoModal from '../../../CatalogPhotoModal';
import { HomeArea } from '../../../../utils/enums';
import './styles.scss';

const teamMembers = [
  {
    id: 1,
    name: 'James Noel',
    position: 'CEO',
    dreamSpace: {
      style: 'Contemporary',
      homeArea: 'General Living',
      quality: 'Upgraded',
      homeAreaId: HomeArea.GENERAL_LIVING,
      imageKey: '01698_E_cimage.jpg',
    },
    description: 'Construction executive with 15+ years delivering large & highly refined projects on the contractor and owner sides.',
    photoKey: 'james_400x400.jpg',
  },
  {
    id: 2,
    name: 'Linda Lee',
    position: 'COO',
    dreamSpace: {
      style: 'Contemporary',
      homeArea: 'Master Bathroom',
      quality: 'Luxurious',
      homeAreaId: HomeArea.MASTER_BATHROOM,
      imageKey: '00043_E_cimage.jpg',
    },
    description: 'Sofware executive with expertise in growing 0-$500MM businesses. Built large machine-learning personalization products.',
    photoKey: 'linda_400x400.jpg',
  },
  {
    id: 3,
    name: 'Andrew Pascal',
    position: 'Chairman',
    dreamSpace: {
      style: 'Contemporary',
      homeArea: 'Master Bathroom',
      quality: 'High-End',
      homeAreaId: HomeArea.MASTER_BATHROOM,
      imageKey: '00016_E_cimage.jpg',
    },
    description: 'An accomplished leader who has founded & built businesses in the digital casino & leisure entertainment industries.',
    photoKey: 'andrew_400x400.jpg',
  },
  {
    id: 15,
    name: 'Rosemary',
    position: '',
    dreamSpace: {
      style: 'Contemporary',
      homeArea: 'General Living',
      quality: 'Upgraded',
      homeAreaId: HomeArea.GENERAL_LIVING,
      imageKey: '00426_E_cimage.jpg',
    },
    description: 'Rosemary is a chronicler of culture, from street art to consumer trends, and a chronic connector of dots.',
    photoKey: 'rosemary_400x400.jpg',
  },
  {
    id: 4,
    name: 'Ervi Bongso',
    position: 'Principal Engineer',
    dreamSpace: {
      style: 'Rustic',
      homeArea: 'General Living',
      quality: 'Best Value',
      homeAreaId: HomeArea.GENERAL_LIVING,
      imageKey: '02369_E_cimage.jpg',
    },
    description: null,
    photoKey: 'ervi_400x400.jpg',
  },
  {
    id: 5,
    name: 'Tonson Back',
    position: 'UI/UX Artist',
    dreamSpace: {
      style: 'Industrial',
      homeArea: 'General Living',
      quality: 'Upgraded',
      homeAreaId: HomeArea.GENERAL_LIVING,
      imageKey: '01990_E_cimage.jpg',
    },
    description: null,
    photoKey: 'tonson_400x400.jpg',
  },
  {
    id: 6,
    name: 'Mike Gonzales',
    position: 'Market Launcher',
    dreamSpace: {
      style: 'Contemporary',
      homeArea: 'General Living',
      quality: 'High-End',
      homeAreaId: HomeArea.GENERAL_LIVING,
      imageKey: '01762_E_cimage.jpeg',
    },
    description: null,
    photoKey: 'mike_400x400.jpg',
  },
  {
    id: 7,
    name: 'JoAnne McCauley',
    position: 'Market Launcher',
    dreamSpace: {
      style: 'Contemporary',
      homeArea: 'Master Bedroom',
      quality: 'Luxurious',
      homeAreaId: HomeArea.MASTER_BEDROOM,
      imageKey: '00889_E_cimage.jpg',
    },
    description: null,
    photoKey: 'joanne_400x400.jpg',
  },
  {
    id: 8,
    name: 'Domini Noel',
    position: 'Business Intelligence',
    dreamSpace: {
      style: 'Traditional',
      homeArea: 'Kitchen',
      quality: 'High-End',
      homeAreaId: HomeArea.KITCHEN,
      imageKey: '01844_E_cimage.jpg',
    },
    description: null,
    photoKey: 'domini_400x400.jpg',
  },
  {
    id: 9,
    name: 'Kiwook Kwon',
    position: 'Engineer',
    dreamSpace: {
      style: 'Rustic',
      homeArea: 'Master Bathroom',
      quality: 'Upgraded',
      homeAreaId: HomeArea.MASTER_BATHROOM,
      imageKey: '00599_E_cimage.jpg',
    },
    description: null,
    photoKey: 'kiwook_400x400.jpg',
  },
  {
    id: 10,
    name: 'Renan Martins',
    position: 'Engineer',
    dreamSpace: {
      style: 'Modern',
      homeArea: 'Master Bathroom',
      quality: 'Luxurious',
      homeAreaId: HomeArea.MASTER_BATHROOM,
      imageKey: '00504_E_cimage.jpg',
    },
    description: null,
    photoKey: 'renan_400x400.jpg',
  },
  {
    id: 11,
    name: 'Sousuke Tanaka',
    position: 'Engineer',
    dreamSpace: {
      style: 'Contemporary',
      homeArea: 'Master Bedroom',
      quality: 'High-End',
      homeAreaId: HomeArea.MASTER_BEDROOM,
      imageKey: '00234_E_cimage.jpg',
    },
    description: null,
    photoKey: 'sousuke_400x400.jpg',
  },
  {
    id: 12,
    name: 'Leo Esaki',
    position: 'Engineer',
    dreamSpace: {
      style: 'Traditional',
      homeArea: 'General Living',
      quality: 'Upgraded',
      homeAreaId: HomeArea.GENERAL_LIVING,
      imageKey: '01946_E_cimage.jpg',
    },
    description: null,
    photoKey: 'leo_400x400.jpg',
  },
  {
    id: 13,
    name: 'Juan Ortiz',
    position: 'Engineer',
    dreamSpace: {
      style: 'Contemporary',
      homeArea: 'Kitchen',
      quality: 'Luxurious',
      homeAreaId: HomeArea.KITCHEN,
      imageKey: '00009_E_cimage.jpg',
    },
    description: null,
    photoKey: 'juan_400x400.jpg',
  },
  {
    id: 14,
    name: 'Vooha Nallamothu',
    position: 'Quality Assurance',
    dreamSpace: {
      style: 'Traditional',
      homeArea: 'General Living',
      quality: 'Upgraded',
      homeAreaId: HomeArea.GENERAL_LIVING,
      imageKey: '02021_E_cimage.jpg',
    },
    description: null,
    photoKey: 'vooha_400x400.jpg',
  },
];

class TheTeam extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDreamSpace: undefined
    };
  }

  handleHomeAreaClick = dreamSpace => () => {
    this.setState({ selectedDreamSpace: dreamSpace })
  }

  handleCatalogPhotoModalClose = () => {
    this.setState({ selectedDreamSpace: undefined })
  }

  getTeamMembers() {
    return teamMembers.map(teamMember => {
      const memberWithPhotoUrl = {
        ...teamMember,
        photoUrl: `/images/team/${teamMember.photoKey}`
      };

      return (
        <div key={teamMember.id} className="the-team__team-member">
          <TeamMember member={memberWithPhotoUrl} onHomeAreaClick={this.handleHomeAreaClick(teamMember.dreamSpace)} />
        </div>
      );
    });
  }

  render() {
    return (
      <section className={cx('the-team', this.props.className)}>
        <div className="the-team__title">Meet <strong>the Team</strong></div>
        <div className="the-team__members">
          {this.getTeamMembers()}
        </div>
        <CatalogPhotoModal image={this.state.selectedDreamSpace} open={this.state.selectedDreamSpace !== undefined} onClose={this.handleCatalogPhotoModalClose} fromContractor={this.props.fromContractor} />
      </section>
    );
  }
}

TheTeam.propTypes = {
  className: PropTypes.string,
  fromContractor: PropTypes.bool
};

TheTeam.defaultProps = {
  fromContractor: false
};

export default TheTeam;
