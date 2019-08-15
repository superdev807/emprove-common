'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import BrowseCatalogLinks from '../BrowseCatalogLinks';
import CompanyLinks from '../CompanyLinks';
import FooterCopyrightAndSocial from '../FooterCopyrightAndSocial';
import FooterServiceArea from '../FooterServiceArea';
import HowToUse from '../HowToUse';
import './styles.scss';

var ConsumerFooter = function ConsumerFooter(props) {
  return React.createElement("footer", {
    className: cx(props.className)
  }, React.createElement("section", {
    className: "consumer-footer-index"
  }, React.createElement("div", {
    className: "consumer-footer-index__grouped-sections consumer-footer-index__grouped-sections--first"
  }, React.createElement("div", {
    className: "consumer-footer-index__section"
  }, React.createElement("div", {
    className: "consumer-footer-index__section-name"
  }, "Company"), React.createElement(CompanyLinks, null)), React.createElement("div", {
    className: "consumer-footer-index__section"
  }, React.createElement("div", {
    className: "consumer-footer-index__section-name"
  }, "Browse Catalog"), React.createElement(BrowseCatalogLinks, null))), React.createElement("div", {
    className: "consumer-footer-index__grouped-sections consumer-footer-index__grouped-sections--second"
  }, React.createElement("div", {
    className: "consumer-footer-index__section consumer-footer-index__section--no-right-margin"
  }, React.createElement("div", {
    className: "consumer-footer-index__section-name"
  }, "How to Use Emprove"), React.createElement(HowToUse, null))), React.createElement("div", {
    className: "consumer-footer-index__grouped-sections consumer-footer-index__grouped-sections--smaller"
  }, React.createElement(FooterServiceArea, null))), React.createElement(FooterCopyrightAndSocial, {
    topContent: props.copyrightTopContent,
    showSocial: false
  }));
};

ConsumerFooter.propTypes = {
  className: PropTypes.string,
  copyrightTopContent: PropTypes.node
};
export default ConsumerFooter;