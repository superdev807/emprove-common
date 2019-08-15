'use strict';

import React from 'react';
import FooterList from '../FooterList'; //This is converted into a function because the test couldn't inject process.env.CONSUMER_DOMAIN at runtime.

/* eslint-disable react/jsx-key */

var getCompanyLinks = function getCompanyLinks() {
  return [React.createElement("a", {
    href: process.env.CONSUMER_DOMAIN + '/about-emprove'
  }, "About Emprove, Inc."), React.createElement("a", {
    href: process.env.CONSUMER_DOMAIN + '/blog'
  }, "Blog"), React.createElement("a", {
    href: "mailto:contact@emproveit.com"
  }, "Contact Us"), React.createElement("a", {
    href: "https://angel.co/emproveit/jobs",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Careers"), React.createElement("a", {
    href: process.env.HELP_DOMAIN,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Help Center"), React.createElement("a", {
    href: process.env.CONSUMER_DOMAIN + '/privacy'
  }, "Privacy Policy"), React.createElement("a", {
    href: process.env.CONSUMER_DOMAIN + '/terms'
  }, "Terms of Service")];
};
/* eslint-enable react/jsx-key */


var CompanyLinks = function CompanyLinks(props) {
  return React.createElement(FooterList, {
    items: getCompanyLinks()
  });
};

export default CompanyLinks;