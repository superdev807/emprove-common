'use strict';

import React from 'react';
import Typography from '@material-ui/core/Typography';

import SocialMediaLinks from '../SocialMediaLinks';

import './styles.scss';

const FooterServiceArea = props => {
  return (
    <div className="footer-service-area">
      <div className="footer-service-area__map">
        <img className="footer-service-area__map-image" src="/images/usa_map_graphic_24px.png" />
      </div>
      <Typography className="footer-service-area__description">
        <span className="footer-service-area__description-text">
          WE CURRENTLY SERVICE<br />
          <span className="footer-service-area__description-text--orange">THE USA</span> NATIONWIDE
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
