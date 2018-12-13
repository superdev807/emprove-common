'use strict';

import React from 'react';

import FooterList from '../FooterList';
import './styles.scss';

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
  'Compare proposals to make an well informed selection',
  'Create a General Contractor work agreement'
];

const HowToUse = (props) => {
  return (
    <FooterList items={instructions} />
  );
};

export default HowToUse;
