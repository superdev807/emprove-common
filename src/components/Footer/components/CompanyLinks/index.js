'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

import FooterList from '../FooterList';

//This is converted into a function because the test couldn't inject process.env.CONSUMER_DOMAIN at runtime.
const getCompanyLinks = () => {
  return [
    <a href={process.env.CONSUMER_DOMAIN + '/about-emprove'}>About Emprove, Inc.</a>,
    <a href={process.env.CONSUMER_DOMAIN + '/blog'} target="_blank" rel="noopener noreferrer">
      Blog
    </a>,
    <a href="mailto:support@emproveit.com">Contact Us</a>,
    /* <Link to="#">Our Team</Link>,
    <Link to="#">Investors</Link>,
    <Link to="#">Press & Media</Link>, */
    <a href="https://angel.co/emproveit/jobs" target="_blank" rel="noopener noreferrer">
      Careers
    </a>,
    <a href={process.env.HELP_DOMAIN} target="_blank" rel="noopener noreferrer">
      Help Center
    </a>,
    <a href={process.env.CONSUMER_DOMAIN + '/privacy'} target="_blank" rel="noopener noreferrer">
      Privacy Policy
    </a>,
    <a href={process.env.CONSUMER_DOMAIN + '/terms'} target="_blank" rel="noopener noreferrer">
      Terms of Service
    </a>
  ];
};

const CompanyLinks = props => {
  return <FooterList items={getCompanyLinks()} />;
};

export default CompanyLinks;
