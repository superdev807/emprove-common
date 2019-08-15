'use strict';

import "core-js/modules/es.function.name";
import React from 'react';
import PropTypes from 'prop-types';
import './investor-styles.scss';

var Investor = function Investor(props) {
  return React.createElement("img", {
    className: "investor-image",
    src: props.investor.imageUrl,
    alt: props.investor.name
  });
};

Investor.propTypes = {
  investor: PropTypes.object.isRequired
};
export default Investor;