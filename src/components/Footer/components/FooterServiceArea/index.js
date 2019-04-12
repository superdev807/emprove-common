'use strict';

import React from 'react';
import Typography from '@material-ui/core/Typography';

import SocialMediaLinks from '../SocialMediaLinks';

import './styles.scss';

const FooterServiceArea = props => {
  return (
    <div className="footer-service-area">
      <div className="footer-service-area__map">
        <img
          className="footer-service-area__map-image"
          src={process.env.IMGIX_PUBLIC_IMAGES_HOST + 'consumer/new-landing/usa_map_graphic_24px.png'}
        />
      </div>
      <Typography className="footer-service-area__description">
        <span className="footer-service-area__description-text">
          <span className="footer-service-area__description-text--orange">EMPROVE</span> IS NATIONWIDE
        </span>
      </Typography>
      <div className="footer-service-area__social-media-links">
        <SocialMediaLinks />
      </div>
    </div>
  );
};

FooterServiceArea.propTypes = {};

FooterServiceArea.defaultProps = {};

export default FooterServiceArea;
