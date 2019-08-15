'use strict';

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FooterCopyright from '../FooterCopyright';
import SocialMediaLinks from '../SocialMediaLinks';
import './styles.scss';

var FooterCopyrightAndSocial = function FooterCopyrightAndSocial(props) {
  return React.createElement(Fragment, null, props.topContent, React.createElement("section", {
    className: "footer-copyright-and-social"
  }, props.showSocial && React.createElement("div", {
    className: "footer-copyright-and-social___social-media-links"
  }, React.createElement(SocialMediaLinks, null)), React.createElement("div", {
    className: "footer-copyright-and-social__copyright"
  }, React.createElement(FooterCopyright, {
    contractor: props.contractor
  }))));
};

FooterCopyrightAndSocial.propTypes = {
  contractor: PropTypes.bool,
  showSocial: PropTypes.bool,
  topContent: PropTypes.node
};
FooterCopyrightAndSocial.defaultProps = {
  contractor: false,
  showSocial: true
};
export default FooterCopyrightAndSocial;