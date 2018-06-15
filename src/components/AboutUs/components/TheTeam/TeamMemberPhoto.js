'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import './team-member-photo-styles.scss';

const TeamMemberPhoto = (props) => {
  // <img src={props.photoUrl} alt={props.photoAlt} />
  // <img className="team-member-photo" src={'https://image.flaticon.com/icons/svg/149/149074.svg'} alt={props.photoAlt} />
  return (
    <img className="team-member-photo" src={'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg'} alt={props.photoAlt} />
  );
};

TeamMemberPhoto.propTypes = {
  photoAlt: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired
};

export default TeamMemberPhoto;
