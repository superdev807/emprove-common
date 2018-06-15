'use strict';

import React from 'react';
import PropTypes from 'prop-types';

const HomeAreaIcon = (props) => {
  return (
    <div>{props.homeAreaId}</div>
  );
};

HomeAreaIcon.propTypes = {
  homeAreaId: PropTypes.number.isRequired
};

export default HomeAreaIcon;
