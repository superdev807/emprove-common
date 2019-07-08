'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import withPartner from '../../hocs/withPartner';
import { PARTNER } from '../../config/constants';

import './styles.scss';

const Logo = ({ className, destination, imageClass, noLink, shortened, contractor, version, id, partner }) => {
  let imageFilename;
  const isBeta = version === 'beta';

  if (partner === PARTNER.REDFIN) {
    imageFilename = 'redfin/redfin_logo.png';
  } else {
    imageFilename = isBeta ? 'emprove_beta_logo.svg' : 'emprove_logo.svg';
    if (shortened) {
      imageFilename = 'ic_e_logo.png';
    } else if (contractor) {
      imageFilename = isBeta ? 'emprove_pro_beta_logo.svg' : 'emprove_pro_logo.svg';
    }
  }

  let Container;
  const extraProps = {};

  if (partner === PARTNER.REDFIN) {
    Container = 'a';
    extraProps.href = 'https://redfin.com';
    extraProps.target = '_blank';
  } else {
    if (noLink) {
      Container = 'div';
    } else {
      Container = Link;
      extraProps.to = destination;
    }
  }

  return (
    <Container
      className={cx('logo', { 'logo__image--shortened': shortened, 'logo__image--beta': !shortened && isBeta }, className)}
      id={id}
      {...extraProps}>
      <img className={cx('logo__image', imageClass)} src={`/images/${imageFilename}`} alt="Emprove | Home Improvement Renewed" />
    </Container>
  );
};

Logo.propTypes = {
  destination: PropTypes.string,
  shortened: PropTypes.bool,
  className: PropTypes.string,
  contractor: PropTypes.bool,
  imageClass: PropTypes.string,
  noLink: PropTypes.bool,
  version: PropTypes.string
};

Logo.defaultProps = {
  destination: '/',
  noLink: false,
  shortened: false,
  contractor: false,
  version: '1'
};

export default withPartner(Logo);
