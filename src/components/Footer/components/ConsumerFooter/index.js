'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import BrowseCatalogLinks from '../BrowseCatalogLinks';
import CompanyLinks from '../CompanyLinks';
import FooterCopyrightAndSocial from '../FooterCopyrightAndSocial';
import HowToUse from '../HowToUse';
import ServiceAreas from '../ServiceAreas';
import * as areas from '../../../../data/serviceAreas';

import './styles.scss';

const ConsumerFooter = props => {
  return (
    <footer className={cx(props.className)}>
      <section className="consumer-footer-index">
        <div className="consumer-footer-index__grouped-sections">
          <div className="consumer-footer-index__section">
            <div className="consumer-footer-index__section-name">Company</div>
            <CompanyLinks />
          </div>
          <div className="consumer-footer-index__section">
            <div className="consumer-footer-index__section-name">Browse Catalog</div>
            <BrowseCatalogLinks />
          </div>
        </div>
        <div className="consumer-footer-index__grouped-sections">
          <div className="consumer-footer-index__section">
            <div className="consumer-footer-index__section-item">
              <div className="consumer-footer-index__section-name">Service Areas</div>
              <ServiceAreas areas={areas.serviceAreas} />
            </div>
            <div className="consumer-footer-index__section-item">
              <div className="consumer-footer-index__section-name">Coming Soon</div>
              <ServiceAreas areas={areas.comingSoonAreas} />
            </div>
          </div>
          <div className="consumer-footer-index__section consumer-footer-index__section--no-right-margin">
            <div className="consumer-footer-index__section-name">How to Use Emprove</div>
            <HowToUse />
          </div>
        </div>
      </section>
      <FooterCopyrightAndSocial />
    </footer>
  );
};

ConsumerFooter.propTypes = {
  className: PropTypes.string
};

export default ConsumerFooter;
