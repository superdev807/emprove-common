'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import CompanyLinks from '../CompanyLinks';
import FooterCopyrightAndSocial from '../FooterCopyrightAndSocial';
import GrowWithUs from '../GrowWithUs';
import ServiceAreas from '../ServiceAreas';
import WorkWithUs from '../WorkWithUs';
import * as areas from '../../../../data/serviceAreas';
import './styles.scss';

var ContractorFooter = function ContractorFooter(props) {
  return React.createElement("footer", {
    className: cx(props.className)
  }, React.createElement("section", {
    className: "contractor-footer-index"
  }, React.createElement("div", {
    className: "contractor-footer-index__section"
  }, React.createElement("div", {
    className: "contractor-footer-index__section-name"
  }, "Company"), React.createElement(CompanyLinks, null)), React.createElement("div", {
    className: "contractor-footer-index__section contractor-footer-index__section--negative-left-margin"
  }, React.createElement("div", {
    className: "contractor-footer-index__section-item"
  }, React.createElement("div", {
    className: "contractor-footer-index__section-name"
  }, "Service Areas"), React.createElement(ServiceAreas, {
    areas: areas.serviceAreas
  })), React.createElement("div", {
    className: "contractor-footer-index__section-item"
  }, React.createElement("div", {
    className: "contractor-footer-index__section-name"
  }, "Coming Soon"), React.createElement(ServiceAreas, {
    areas: areas.comingSoonAreas
  }))), React.createElement("div", {
    className: "contractor-footer-index__section contractor-footer-index__section--no-right-margin"
  }, React.createElement("div", {
    className: "contractor-footer-index__section-name"
  }, "Why work with us?"), React.createElement(WorkWithUs, null), React.createElement("div", {
    className: "contractor-footer-index__vertical-section-separator"
  }), React.createElement("div", {
    className: "contractor-footer-index__section-name"
  }, "Grow your business with us"), React.createElement(GrowWithUs, null))), React.createElement(FooterCopyrightAndSocial, {
    contractor: true
  }));
};

ContractorFooter.propTypes = {
  className: PropTypes.string
};
export default ContractorFooter;