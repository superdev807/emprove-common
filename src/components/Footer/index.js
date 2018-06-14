'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

import BrowseCatalogLinks from './components/BrowseCatalogLinks';
import CompanyLinks from './components/CompanyLinks';
import FooterCopyright from './components/FooterCopyright';
import HowToUse from './components/HowToUse';
import ServiceAreas from './components/ServiceAreas';
import SocialMediaLinks from './components/SocialMediaLinks';
import './styles.scss';

const Footer = props => {
  return (
    <footer>
      <section className="footer-index">
        <div className="footer-index__grouped-sections">
          <div className="footer-index__section">
            <div className="footer-index__section-name">Company</div>
            <CompanyLinks />
          </div>
          <div className="footer-index__section">
            <div className="footer-index__section-name">Browse Catalog</div>
            <BrowseCatalogLinks />
          </div>
        </div>
        <div className="footer-index__grouped-sections">
          <div className="footer-index__section">
            <div className="footer-index__section-name">Service Areas</div>
            <ServiceAreas />
          </div>
          <div className="footer-index__section footer-index__section--no-right-margin">
            <div className="footer-index__section-name">How to Use Emprove</div>
            <HowToUse />
          </div>
        </div>
      </section>
      <section className="footer-copyright-and-social">
        <div className="footer-copyright-and-social___social-media-links">
          <SocialMediaLinks />
        </div>
        <div className="footer-copyright-and-social__copyright">
          <FooterCopyright />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
