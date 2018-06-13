import React from 'react';
import { Link } from 'react-router-dom';

import FooterList from '../FooterList';

const companyLinks = [
  <Link to="about-us">About Emprove, Inc.</Link>,
  <a href="https://emproveit.com/blog" target="_blank" rel="noopener noreferrer">Blog</a>,
  <a href="mailto:contact@emproveit.com">Contact Us</a>,
  /* <Link to="#">Our Team</Link>,
  <Link to="#">Investors</Link>,
  <Link to="#">Press & Media</Link>, */
  <a href="https://angel.co/emproveit/jobs" target="_blank" rel="noopener noreferrer">Careers</a>,
  <a href="https://help.emproveit.com" target="_blank" rel="noopener noreferrer">Help</a>,
  <a href="https://emproveit.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>,
  <a href="https://emproveit.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>,
];

const CompanyLinks = (props) => {
  return (
    <FooterList items={companyLinks} />
  );
};

export default CompanyLinks;
