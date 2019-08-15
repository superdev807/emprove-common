'use strict';

import React from 'react';
import { Link } from 'react-router-dom';
import FooterList from '../FooterList';
import './styles.scss';
/* eslint-disable react/jsx-key */
// TODO: use values from metaData

var homeAreas = ['BY HOME AREA', React.createElement(Link, {
  to: "/browse/any-guest-bathroom"
}, "Guest Bathroom"), React.createElement(Link, {
  to: "/browse/any-master-bathroom"
}, "Master Bathroom"), React.createElement(Link, {
  to: "/browse/any-powder-room"
}, "Powder Room"), React.createElement(Link, {
  to: "/browse/any-guest-bedroom"
}, "Guest Bedroom"), React.createElement(Link, {
  to: "/browse/any-master-bedroom"
}, "Master Bedroom"), React.createElement(Link, {
  to: "/browse/any-kitchen"
}, "Kitchen"), React.createElement(Link, {
  to: "/browse/any-general-living"
}, "General Living")]; // TODO: use values from metaData

var homeStyles = ['BY STYLE', React.createElement(Link, {
  to: "/browse/contemporary-homes"
}, "Contemporary"), React.createElement(Link, {
  to: "/browse/country-homes"
}, "Country"), React.createElement(Link, {
  to: "/browse/craftsman-homes"
}, "Craftsman"), React.createElement(Link, {
  to: "/browse/industrial-homes"
}, "Industrial"), React.createElement(Link, {
  to: "/browse/modern-homes"
}, "Modern"), React.createElement(Link, {
  to: "/browse/rustic-homes"
}, "Rustic"), React.createElement(Link, {
  to: "/browse/traditional-homes"
}, "Traditional"), React.createElement(Link, {
  to: "/browse/transitional-homes"
}, "Transitional")];
/* eslint-enable react/jsx-key */

var BrowseCatalogLinks = function BrowseCatalogLinks(props) {
  return React.createElement("div", {
    className: "browse-catalog-links"
  }, React.createElement(FooterList, {
    className: "browse-catalog-links__section",
    items: homeAreas
  }), React.createElement("div", {
    className: "browse-catalog-links__category-divider"
  }, "|"), React.createElement(FooterList, {
    className: "browse-catalog-links__section",
    items: homeStyles
  }));
};

export default BrowseCatalogLinks;