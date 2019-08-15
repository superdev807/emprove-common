'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../../Logo';
import './styles.scss';

var FooterCopyright = function FooterCopyright(props) {
  return React.createElement("div", {
    className: "footer-copyright"
  }, React.createElement("div", {
    className: "footer-copyright__container"
  }, React.createElement("div", {
    className: "footer-copyright__logo-container"
  }, React.createElement("div", {
    className: "footer-copyright__logo"
  }, React.createElement("div", {
    className: "footer-copyright__logo-overline"
  }), React.createElement(Logo, {
    imageClass: "footer-copyright__logo-image",
    contractor: props.contractor
  }))), React.createElement("div", {
    className: "footer-copyright__copyright-declaration"
  }, "\xA9 2019", ' ', React.createElement("a", {
    href: "/"
  }, React.createElement("strong", null, "EMPROVE, Inc.")), ' ', "ALL RIGHTS RESERVED.")), React.createElement("div", {
    className: "footer-copyright__container footer-copyright__container--bbb"
  }, React.createElement("a", {
    id: "bbblink",
    className: "sevtbum footer-copyright__bbb-logo",
    href: "https://www.bbb.org/us/nv/las-vegas/profile/home-improvement/emprove-1086-90063688#bbbseal",
    title: "Emprove, Inc., Home Improvement, Las Vegas, NV",
    target: "_blank",
    rel: "noopener noreferrer"
  }, React.createElement("img", {
    className: "footer-copyright__bbb-logo-image",
    id: "bbblinkimg",
    src: "https://seal-southernnevada.bbb.org/logo/sevtbum/emprove-90063688.png",
    alt: "Emprove, Inc., Home Improvement, Las Vegas, NV"
  }))));
};

FooterCopyright.propTypes = {
  contractor: PropTypes.bool
};
FooterCopyright.defaultProps = {
  contractor: false
};
export default FooterCopyright;