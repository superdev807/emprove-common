'use strict';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom'; // import withPartner from '../../hocs/withPartner';
// import { PARTNER } from '../../config/constants';

import './styles.scss';
export var Logo = function Logo(_ref) {
  var className = _ref.className,
      destination = _ref.destination,
      imageClass = _ref.imageClass,
      noLink = _ref.noLink,
      shortened = _ref.shortened,
      contractor = _ref.contractor,
      id = _ref.id,
      subDomain = _ref.subDomain;
  var imageFilename; // if (subDomain === PARTNER.REDFIN) {
  //   if (shortened) {
  //     imageFilename = 'redfin_emprove_logo.png';
  //   } else {
  //     imageFilename = 'redfin_powered_by_emprove.png';
  //   }
  //   imageFilename = `${process.env.IMGIX_PUBLIC_IMAGES_HOST}consumer/partner-landing/${imageFilename}?auto=format`;
  // } else {

  imageFilename = 'emprove_logo.svg';

  if (shortened) {
    imageFilename = 'ic_e_logo.png';
  } else if (contractor) {
    imageFilename = 'emprove_pro_logo.svg';
  }

  imageFilename = "/images/".concat(imageFilename); // }

  var Container;
  var extraProps = {};

  if (noLink) {
    Container = 'div';
  } else {
    Container = Link;
    extraProps.to = destination;
  }

  return React.createElement(Container, _extends({
    className: cx('logo', {
      'logo__image--shortened': shortened,
      logo__image: !shortened
    }, className),
    id: id
  }, extraProps), React.createElement("img", {
    className: cx('logo__image', imageClass),
    src: imageFilename,
    alt: "Emprove | Home Improvement Renewed"
  }));
};
Logo.propTypes = {
  destination: PropTypes.string,
  shortened: PropTypes.bool,
  className: PropTypes.string,
  contractor: PropTypes.bool,
  imageClass: PropTypes.string,
  noLink: PropTypes.bool
};
Logo.defaultProps = {
  destination: '/',
  noLink: false,
  shortened: false,
  contractor: false
}; // export default withPartner(Logo);

export default Logo;