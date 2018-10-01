'use strict';

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import FooterCopyright from '../FooterCopyright';
import SocialMediaLinks from '../SocialMediaLinks';
import './styles.scss';

const FooterCopyrightAndSocial = props => {
  return (
    <Fragment>
      {props.topContent}
      <section className="footer-copyright-and-social">
        <div className="footer-copyright-and-social___social-media-links">
          <SocialMediaLinks />
        </div>
        <div className="footer-copyright-and-social__copyright">
          <FooterCopyright contractor={props.contractor} />
        </div>
      </section>
    </Fragment>
  );
};

FooterCopyrightAndSocial.propTypes = {
  contractor: PropTypes.bool,
  topContent: PropTypes.node
};

FooterCopyrightAndSocial.defaultProps = {
  contractor: false
};

export default FooterCopyrightAndSocial;
