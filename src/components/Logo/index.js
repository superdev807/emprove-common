import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import './style.scss';

const Logo = ({ className, shortened }) => {
  const imageFilename = shortened ? 'ic_e_logo.svg' : 'emprove_logo.svg';

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
  shortened: PropTypes.bool
};

Logo.defaultProps = {
  shortened: false
};

export default Logo;
