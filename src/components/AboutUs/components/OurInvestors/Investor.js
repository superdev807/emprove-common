'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import './investor-styles.scss';

const Investor = (props) => {
  return (
    <img className="investor-image" src={props.investor.imageUrl} alt={props.investor.name} />
  );
};

Investor.propTypes = {
  investor: PropTypes.object.isRequired
};

export default Investor;
