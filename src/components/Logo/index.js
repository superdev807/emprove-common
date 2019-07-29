'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import withPartner from '../../hocs/withPartner';
import { PARTNER } from '../../config/constants';

import './styles.scss';

export const Logo = ({ className, destination, imageClass, noLink, shortened, contractor, version, id, subDomain }) => {
  let imageFilename;

  if (subDomain === PARTNER.REDFIN) {
    if (shortened) {
      imageFilename = 'redfin_emprove_logo.png';
    } else {
      imageFilename = 'redfin_powered_by_emprove.png';
    }
    imageFilename = `${process.env.IMGIX_PUBLIC_IMAGES_HOST}consumer/partner-landing/${imageFilename}?auto=format`;
  } else {
    imageFilename = 'emprove_logo.svg';
    if (shortened) {
      imageFilename = 'ic_e_logo.png';
    } else if (contractor) {
      imageFilename = 'emprove_pro_logo.svg';
    }
    imageFilename = `/images/${imageFilename}`;
  }

  let Container;
  const extraProps = {};

  if (noLink) {
    Container = 'div';
  } else {
    Container = Link;
    extraProps.to = destination;
  }

  return (
    <Container
      className={cx('logo', { 'logo__image--shortened': shortened, 'logo__image--beta': !shortened }, className)}
      id={id}
      {...extraProps}>
      <img className={cx('logo__image', imageClass)} src={imageFilename} alt="Emprove | Home Improvement Renewed" />
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
