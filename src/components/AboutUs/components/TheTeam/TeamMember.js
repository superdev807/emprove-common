'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';

import HomeAreaIcon from '../../../HomeAreaIcon';
import TeamMemberPhoto from './TeamMemberPhoto';
import './team-member-styles.scss';

const TeamMember = (props) => {
  return (
    <div className="team-member">
      <div className="team-member__photo">
        <TeamMemberPhoto photoUrl={props.member.photoUrl} photoAlt={props.member.name} />
      </div>
      <div>{props.member.name}</div>
      <div className="team-member__position">{props.member.position}</div>
      <div>My dream space,</div>
      <div className="team-member__dream-space">{props.member.dreamSpace}</div>
      <div className="team-member__home-area-icon-container">
        <IconButton>
          <HomeAreaIcon className="team-member__home-area-icon" homeAreaId={props.member.homeAreaId} />
        </IconButton>
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  member: PropTypes.object.isRequired
};

export default TeamMember;
