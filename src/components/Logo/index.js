'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import './styles.scss';

const Logo = ({ className, imageClass, shortened, contractor, version }) => {
  const isBeta = version === 'beta';

  let imageFilename = isBeta ? 'emprove_beta_logo.svg' : 'emprove_logo.svg';
  if (shortened) {
    imageFilename = 'ic_e_logo.svg';
  } else if (contractor) {
    imageFilename = isBeta ? 'emprove_pro_beta_logo.svg' : 'emprove_pro_logo.svg';
  }

  let destinationLink = '/';
  if(!contractor) {
    destinationLink = '/browse';
  }

  return (
    <Link to={destinationLink} className={cx('logo', { 'logo__image--shortened': shortened, 'logo__image--beta': !shortened && isBeta }, className)}>
      <img
        className={cx('logo__image', imageClass)}
        src={`/images/${imageFilename}`}
        alt="Emprove | Home Improvement Renewed"
      />
    </Link>
  );
};

Logo.propTypes = {
  shortened: PropTypes.bool,
  className: PropTypes.string,
  contractor: PropTypes.bool,
  imageClass: PropTypes.string,
  version: PropTypes.string
};

Logo.defaultProps = {
  shortened: false,
  contractor: false,
  version: '1'
};

export default Logo;
