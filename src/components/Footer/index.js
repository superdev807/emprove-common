'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

import CompanyLinks from '../CompanyLinks';
import BrowseCatalogLinks from '../BrowseCatalogLinks';
import ServiceAreas from '../ServiceAreas';
import HowToUse from '../HowToUse';
import './styles.scss';

const Footer = (props) => {
  return (
    <footer className="emprove-footer">
      <div className="emprove-footer-grouped-sections">
        <div className="emprove-footer-section">
          <div className="footer-column-name">Company</div>
          <CompanyLinks />
        </div>
        <div className="emprove-footer-section">
          <div className="footer-column-name">Browse Catalog</div>
          <BrowseCatalogLinks />
        </div>
      </div>
      <div className="emprove-footer-grouped-sections">
        <div className="emprove-footer-section">
          <div className="footer-column-name">Service Areas</div>
          <ServiceAreas />
        </div>
        <div className="emprove-footer-section">
          <div className="footer-column-name">How to Use Emprove</div>
          <HowToUse />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
