'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

import FooterList from '../FooterList';
import './styles.scss';

// TODO: use values from metaData
const homeAreas = [
  'BY HOME AREA',
  <Link to="browse/any-guest-bathroom">Guest Bathroom</Link>,
  <Link to="browse/any-master-bathroom">Master Bathroom</Link>,
  <Link to="browse/any-powder-room">Powder Room</Link>,
  <Link to="browse/any-guest-bedroom">Guest Bedroom</Link>,
  <Link to="browse/any-master-bedroom">Master Bedroom</Link>,
  <Link to="browse/any-kitchen">Kitchen</Link>,
  <Link to="browse/any-general-living">General Living</Link>
];

// TODO: use values from metaData
const homeStyles = [
  'BY STYLE',
  <Link to="browse/contemporary-homes">Contemporary</Link>,
  <Link to="browse/country-homes">Country</Link>,
  <Link to="browse/craftsman-homes">Craftsman</Link>,
  <Link to="browse/industrial-homes">Industrial</Link>,
  <Link to="browse/modern-homes">Modern</Link>,
  <Link to="browse/rustic-homes">Rustic</Link>,
  <Link to="browse/traditional-homes">Traditional</Link>,
  <Link to="browse/transitional-homes">Transitional</Link>
];

const BrowseCatalogLinks = props => {
  return (
    <div className="browse-catalog-links">
      <FooterList className="browse-catalog-links__section" items={homeAreas} />
      <div className="browse-catalog-links__category-divider">|</div>
      <FooterList className="browse-catalog-links__section" items={homeStyles} />
    </div>
  );
};

export default BrowseCatalogLinks;
