'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../../Logo';
import './styles.scss';

const FooterCopyright = props => {
  return (
    <div className="footer-copyright">
      <div className="footer-copyright__container">
        <div className="footer-copyright__logo-container">
          <div className="footer-copyright__logo">
            <div className="footer-copyright__logo-overline" />
            <Logo imageClass="footer-copyright__logo-image" contractor={props.contractor} />
          </div>
        </div>
        <div className="footer-copyright__copyright-declaration">
          © 2019{' '}
          <a href="/">
            <strong>EMPROVE, LLC.</strong>
          </a>{' '}
          ALL RIGHTS RESERVED.
        </div>
      </div>
      <div className="footer-copyright__container footer-copyright__container--bbb">
        <a
          id="bbblink"
          className="sevtbum"
          href="https://www.bbb.org/us/nv/las-vegas/profile/home-improvement/emprove-1086-90063688#bbbseal"
          title="Emprove, Inc., Home Improvement, Las Vegas, NV"
          style={{ display: 'block', position: 'relative', overflow: 'hidden', width: 60, height: 98, margin: 0, padding: 0 }}>
          <img
            style={{ padding: 0, border: 'none' }}
            id="bbblinkimg"
            src="https://seal-southernnevada.bbb.org/logo/sevtbum/emprove-90063688.png"
            width={120}
            height={98}
            alt="Emprove, Inc., Home Improvement, Las Vegas, NV"
          />
        </a>
      </div>
    </div>
  );
};

FooterCopyright.propTypes = {
  contractor: PropTypes.bool
};

FooterCopyright.defaultProps = {
  contractor: false
};

export default FooterCopyright;
