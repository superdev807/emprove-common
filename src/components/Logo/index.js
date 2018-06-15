'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import './styles.scss';



const Logo = ({ className, shortened, contractor }) => {
  let imageFilename = 'emprove_logo.svg';
  if (shortened) {
    imageFilename = 'ic_e_logo.svg';
  }
  else if (contractor) {
    imageFilename = 'emprove_pro_beta_logo.svg';
  }

  return (
    <Link to="/" className={cx('logo', className)}>
      <img
        className={cx('logo__image', { 'logo__image--shortened': shortened })}
        src={`/images/${imageFilename}`}
        alt="Emprove | Home Improvement Renewed"
      />
    </Link>
  );
};

Logo.propTypes = {
  shortened: PropTypes.bool,
  contractor: PropTypes.bool
};

Logo.defaultProps = {
  shortened: false,
  contractor: false,
};

export default Logo;
