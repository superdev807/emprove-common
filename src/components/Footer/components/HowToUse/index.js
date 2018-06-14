'use strict';

import React from 'react';

import FooterList from '../FooterList';
import './styles.scss';

const instructions = [
  <span className="how-to-use-subtitle">DREAM IT</span>,
  'Get inspiration in our Photo Catalog',
  'Create Styleboards',
  <span className="how-to-use-subtitle">COST IT</span>,
  'Cost Plans',
  'Submit a Project',
  <span className="how-to-use-subtitle">BID IT</span>,
  'Receive a Comprehensive Request For Proposal (RFP)',
  'Get Competitive Bids from the Most Suitable Contractors',
  'Compare Bid Proposals and make an Informed Selection',
  'Create a General Contractor Work Agreement',
];

const HowToUse = (props) => {
  return (
    <FooterList items={instructions} />
  );
};

export default HowToUse;
