'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

import FooterList from '../FooterList';
import './styles.scss';

// TODO: use values from metaData
const homeAreas = [
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
  <Link to="#">Comtemporary</Link>,
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
      <FooterList items={homeAreas} />
      <FooterList items={homeStyles} />
    </div>
  );
};

export default BrowseCatalogLinks;
