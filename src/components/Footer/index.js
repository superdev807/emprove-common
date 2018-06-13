'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

import BrowseCatalogLinks from './BrowseCatalogLinks';
import CompanyLinks from './CompanyLinks';
import FooterCopyright from './FooterCopyright';
import HowToUse from './HowToUse';
import ServiceAreas from './ServiceAreas';
import SocialMediaLinks from './SocialMediaLinks';
import './styles.scss';

const Footer = (props) => {
  return (
    <footer className="site-footer">
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
          <div className="footer-index__section">
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
