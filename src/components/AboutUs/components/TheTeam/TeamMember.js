'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import HomeAreaIcon from './HomeAreaIcon';
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
      <div>My dream space is</div>
      <div className="team-member__dream-space">{props.member.dreamSpace}</div>
      <HomeAreaIcon homeAreaId={props.member.homeAreaId} />
    </div>
  );
};

TeamMember.propTypes = {
  member: PropTypes.object.isRequired
};

export default TeamMember;
