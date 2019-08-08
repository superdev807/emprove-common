'use strict';

import React from 'react';

import FooterList from '../FooterList';
import './styles.scss';

/* eslint-disable react/jsx-key */
const instructions = [
  <span className="how-to-use-subtitle">STYLE IT</span>,
  'Be inspired by our PrettySmart photos',
  'Create Styleboards',
  <span className="how-to-use-subtitle">ESTIMATE IT</span>,
  'Affordability assurance',
  'Submit your project',
  <span className="how-to-use-subtitle">GET IT DONE</span>,
  'Receive a comprehensive Project Plan',
  'Get preliminary pricing from qualified contractors',
  'Compare proposals to make a well informed selection',
  'Create a General Contractor work agreement'
];
/* eslint-enable react/jsx-key */

const HowToUse = (props) => {
  return (
    <FooterList items={instructions} />
  );
};

export default HowToUse;
