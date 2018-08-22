'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import CompanyLinks from '../CompanyLinks';
import FooterCopyrightAndSocial from '../FooterCopyrightAndSocial';
import GrowWithUs from '../GrowWithUs';
import ServiceAreas from '../ServiceAreas';
import WorkWithUs from '../WorkWithUs';
import './styles.scss';

const ContractorFooter = props => {
  return (
    <footer className={cx(props.className)}>
      <section className="contractor-footer-index">
        <div className="contractor-footer-index__section">
          <div className="contractor-footer-index__section-name">Company</div>
          <CompanyLinks />
        </div>
        <div className="contractor-footer-index__section contractor-footer-index__section--negative-left-margin">
          <div className="contractor-footer-index__section-item">
            <div className="contractor-footer-index__section-name">Service Areas</div>
            <ServiceAreas areas={['Greater Las Vegas, NV', 'Greater Phoenix, AZ']} />
          </div>
          <div className="contractor-footer-index__section-item">
            <div className="contractor-footer-index__section-name">Coming Soon</div>
            <ServiceAreas areas={['Greater Los Angeles, CA', 'Greater San Diego, CA']} />
          </div>
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

ContractorFooter.propTypes = {
  className: PropTypes.string
};

export default ContractorFooter;
