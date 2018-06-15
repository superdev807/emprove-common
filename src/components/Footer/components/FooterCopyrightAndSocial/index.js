'use strict'

import React from 'react';

import FooterCopyright from './components/FooterCopyright';
import SocialMediaLinks from './components/SocialMediaLinks';
import './styles.scss';

const FooterCopyrightAndSocial = (props) => {
  return (
    <section className="footer-copyright-and-social">
      <div className="footer-copyright-and-social___social-media-links">
        <SocialMediaLinks />
      </div>
      <div className="footer-copyright-and-social__copyright">
        <FooterCopyright />
      </div>
    </section>
  );
};

export default FooterCopyrightAndSocial;
