'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

import FooterList from '../FooterList';
import './styles.scss';

// TODO: use values from metaData
const homeAreas = [
  'BY HOME AREA',
  <Link to="#">Guest Bathroom</Link>,
  <Link to="#">Master Bathroom</Link>,
  <Link to="#">Powder Room</Link>,
  <Link to="#">Guest Bedroom</Link>,
  <Link to="#">Master Bedroom</Link>,
  <Link to="#">Kitchen</Link>,
  <Link to="#">General Living</Link>,
];

// TODO: use values from metaData
const homeStyles = [
  'BY STYLE',
  <Link to="#">Contemporary</Link>,
  <Link to="#">Country</Link>,
  <Link to="#">Craftsman</Link>,
  <Link to="#">Industrial</Link>,
  <Link to="#">Modern</Link>,
  <Link to="#">Rustic</Link>,
  <Link to="#">Traditional</Link>,
  <Link to="#">Transitional</Link>,
];

const BrowseCatalogLinks = (props) => {
  return (
    <div className="browse-catalog-links">
      <FooterList className="browse-catalog-links__section" items={homeAreas} />
      <div className="browse-catalog-links__category-divider">|</div>
      <FooterList className="browse-catalog-links__section" items={homeStyles} />
    </div>
  );
};

export default BrowseCatalogLinks;
