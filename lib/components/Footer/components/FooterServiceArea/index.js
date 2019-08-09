'use strict';

import React from 'react';
import Typography from '@material-ui/core/Typography';
import SocialMediaLinks from '../SocialMediaLinks';
import './styles.scss';

var FooterServiceArea = function FooterServiceArea(props) {
  return React.createElement("div", {
    className: "footer-service-area"
  }, React.createElement("div", {
    className: "footer-service-area__map"
  }, React.createElement("img", {
    className: "footer-service-area__map-image",
    src: process.env.IMGIX_PUBLIC_IMAGES_HOST + 'consumer/new-landing/usa_map_graphic_24px.png?auto=format'
  })), React.createElement(Typography, {
    className: "footer-service-area__description"
  }, React.createElement("span", {
    className: "footer-service-area__description-text"
  }, React.createElement("span", {
    className: "footer-service-area__description-text--orange"
  }, "EMPROVE"), " IS NATIONWIDE")), React.createElement("div", {
    className: "footer-service-area__social-media-links"
  }, React.createElement(SocialMediaLinks, null)));
};

FooterServiceArea.propTypes = {};
FooterServiceArea.defaultProps = {};
export default FooterServiceArea;