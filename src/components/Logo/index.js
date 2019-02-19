'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import './styles.scss';

const Logo = ({ className, destination, imageClass, shortened, contractor, version, id }) => {
  const isBeta = version === 'beta';

  let imageFilename = isBeta ? 'emprove_beta_logo.svg' : 'emprove_logo.svg';
  if (shortened) {
    imageFilename = 'ic_e_logo.svg';
  } else if (contractor) {
    imageFilename = isBeta ? 'emprove_pro_beta_logo.svg' : 'emprove_pro_logo.svg';
  }

  return (
    <Link
      to={destination}
      className={cx('logo', { 'logo__image--shortened': shortened, 'logo__image--beta': !shortened && isBeta }, className)}
      id={id}>
      <img className={cx('logo__image', imageClass)} src={`/images/${imageFilename}`} alt="Emprove | Home Improvement Renewed" />
    </Link>
  );
};

Logo.propTypes = {
  destination: PropTypes.string,
  shortened: PropTypes.bool,
  className: PropTypes.string,
  contractor: PropTypes.bool,
  imageClass: PropTypes.string,
  version: PropTypes.string
};

Logo.defaultProps = {
  destination: '/',
  shortened: false,
  contractor: false,
  version: '1'
};

export default Logo;
