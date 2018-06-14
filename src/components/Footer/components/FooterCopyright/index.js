import React from 'react';

import Logo from '../../../Logo';
import './styles.scss';

const FooterCopyright = (props) => {
  return (
    <div className="footer-copyright">
      <div className="footer-copyright__logo-container">
        <div className="footer-copyright__logo">
          <div className="footer-copyright__logo-overline"></div>
          <Logo />
        </div>
      </div>
      <div className="footer-copyright__copyright-declaration">
        COPYRIGHT © 2018 <a href="/"><strong>EMPROVE, INC.</strong></a> ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};

export default FooterCopyright;
