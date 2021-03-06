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
      imageKey: '01698_E_cimage.jpg'
    },
    description: 'Construction executive with 15+ years delivering large & highly refined projects on the contractor and owner sides.',
    photoKey: 'james_400x400.jpg',
    linkedIn: 'https://www.linkedin.com/in/james-noel/'
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
      imageKey: '02369_E_cimage.jpg'
    },
    description: 'Versatile full-stack engineer with deep startup experience. 10+ years building cross-platform & scalable consumer products.',
    photoKey: 'ervi_2_400x400.jpg',
    linkedIn: 'https://www.linkedin.com/in/ebongso/'
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
      imageKey: '00016_E_cimage.jpg'
    },
    description: 'An accomplished leader who has founded & built businesses in the digital casino & leisure entertainment industries.',
    photoKey: 'andrew_400x400.jpg',
    linkedIn: 'https://www.linkedin.com/in/andrew-pascal-926aaa27/'
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
      imageKey: '01990_E_cimage.jpg'
    },
    description: null,
    photoKey: 'tonson_400x400.jpg'
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
      imageKey: '01762_E_cimage.jpeg'
    },
    description: null,
    photoKey: 'mike_400x400.jpg'
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
      imageKey: '01844_E_cimage.jpg'
    },
    description: null,
    photoKey: 'domini_400x400.jpg'
  },
  {
    id: 17,
    name: 'Iris Sin',
    position: 'Interior Design Intelligence',
    dreamSpace: {
      style: 'Rustic',
      homeArea: 'Kitchen',
      quality: 'High-End',
      homeAreaId: HomeArea.KITCHEN,
      imageKey: '02443_E_cimage.jpg'
    },
    description: null,
    photoKey: 'iris_400x400.jpg'
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
      imageKey: '00599_E_cimage.jpg'
    },
    description: null,
    photoKey: 'kiwook_400x400.jpg'
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
      imageKey: '00234_E_cimage.jpg'
    },
    description: null,
    photoKey: 'sousuke_400x400.jpg'
  }
];

class TheTeam extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDreamSpace: undefined
    };
  }

  handleHomeAreaClick = dreamSpace => () => {
    this.setState({ selectedDreamSpace: dreamSpace });
  };

  handleCatalogPhotoModalClose = () => {
    this.setState({ selectedDreamSpace: undefined });
  };

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
        <div className="the-team__title">
          Meet <strong>the Team</strong>
        </div>
        <div className="the-team__members">{this.getTeamMembers()}</div>
        <CatalogPhotoModal
          image={this.state.selectedDreamSpace}
          open={this.state.selectedDreamSpace !== undefined}
          onClose={this.handleCatalogPhotoModalClose}
          fromContractor={this.props.fromContractor}
        />
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
