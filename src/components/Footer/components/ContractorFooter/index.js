'use strict'

import React from 'react';

import CompanyLinks from '../CompanyLinks';
import FooterCopyrightAndSocial from '../FooterCopyrightAndSocial';
import GrowWithUs from '../GrowWithUs';
import ServiceAreas from '../ServiceAreas';
import WorkWithUs from '../WorkWithUs';
import './styles.scss';

const ContractorFooter = props => {
  return (
    <footer>
      <section className="contractor-footer-index">
        <div className="contractor-footer-index__section">
          <div className="contractor-footer-index__section-name">Company</div>
          <CompanyLinks />
        </div>
        <div className="contractor-footer-index__section contractor-footer-index__section--negative-left-margin">
          <div className="contractor-footer-index__section-name">Service Areas</div>
          <ServiceAreas splitColumns />
        </div>
        <div className="contractor-footer-index__section contractor-footer-index__section--no-right-margin">
          <div className="contractor-footer-index__section-name">Why work with us?</div>
          <WorkWithUs />
          <div className="contractor-footer-index__vertical-section-separator" />
          <div className="contractor-footer-index__section-name">Grow your business with us</div>
          <GrowWithUs />
        </div>
      </section>
      <FooterCopyrightAndSocial contractor />
    </footer>
  );
};

export default ContractorFooter;
