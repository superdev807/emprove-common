'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import './team-member-photo-styles.scss';

var TeamMemberPhoto = function TeamMemberPhoto(props) {
  return React.createElement("img", {
    className: "team-member-photo",
    src: props.photoUrl,
    alt: props.photoAlt,
    onMouseOver: props.onMouseOver,
    onMouseOut: props.onMouseOut
  });
};

TeamMemberPhoto.propTypes = {
  photoAlt: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func
};
export default TeamMemberPhoto;