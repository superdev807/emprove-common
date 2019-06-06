'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

import FooterList from '../FooterList';

//This is converted into a function because the test couldn't inject process.env.CONSUMER_DOMAIN at runtime.
const getCompanyLinks = () => {
  return [
    <a href={process.env.CONSUMER_DOMAIN + '/about-emprove'}>About Emprove, Inc.</a>,
    <a href={process.env.CONSUMER_DOMAIN + '/blog'}>
      Blog
    </a>,
    <a href="mailto:contact@emproveit.com">Contact Us</a>,
    <a href="https://angel.co/emproveit/jobs" target="_blank" rel="noopener noreferrer">
      Careers
    </a>,
    <a href={process.env.HELP_DOMAIN} target="_blank" rel="noopener noreferrer">
      Help Center
    </a>,
    <a href={process.env.CONSUMER_DOMAIN + '/privacy'}>
      Privacy Policy
    </a>,
    <a href={process.env.CONSUMER_DOMAIN + '/terms'}>
      Terms of Service
    </a>
  ];
};

const CompanyLinks = props => {
  return <FooterList items={getCompanyLinks()} />;
};

export default CompanyLinks;
