'use strict';

import React from 'react';

import FooterList from '../FooterList';
import './styles.scss';

const instructions = [
  <span className="how-to-use-subtitle">DREAM IT</span>,
  'Get inspiration in our Photo Catalog',
  'Create Styleboards',
  <span className="how-to-use-subtitle">PLAN IT</span>,
  'Create a project plan',
  'Get an instant cost estimate',
  <span className="how-to-use-subtitle">PRICE IT</span>,
  'Receive a detailed project pricing brief',
  'Receive pricing from qualified contractors',
  'Compare contractor proposals and make an informed selection'
];

const HowToUse = (props) => {
  return (
    <FooterList items={instructions} />
  );
};

export default HowToUse;
