'use strict';

import React from 'react';
import IconFacebookLetter from '../../../../icons/IconFacebookLetter';
import IconTwitter from '../../../../icons/IconTwitter';
import IconLinkedIn from '../../../../icons/IconLinkedIn';
import IconInstagram from '../../../../icons/IconInstagram';
import IconPinterest from '../../../../icons/IconPinterest';
import './styles.scss';

var SocialMediaLinks = function SocialMediaLinks(props) {
  return React.createElement("div", {
    className: "social-media-links"
  }, React.createElement("a", {
    href: "https://www.pinterest.com/emproveit/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, React.createElement(IconPinterest, {
    className: "social-media-links__icon"
  })), React.createElement("a", {
    href: "https://www.facebook.com/emproveit/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, React.createElement(IconFacebookLetter, {
    className: "social-media-links__icon"
  })), React.createElement("a", {
    href: "https://twitter.com/emprove_it",
    target: "_blank",
    rel: "noopener noreferrer"
  }, React.createElement(IconTwitter, {
    className: "social-media-links__icon"
  })), React.createElement("a", {
    href: "https://www.instagram.com/emproveit/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, React.createElement(IconInstagram, {
    className: "social-media-links__icon"
  })), React.createElement("a", {
    href: "https://www.linkedin.com/company/emprove-inc/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, React.createElement(IconLinkedIn, {
    className: "social-media-links__icon"
  })));
};

export default SocialMediaLinks;