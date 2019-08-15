'use strict';

import "core-js/modules/es.array.map";
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ProductConcept from './ProductConcept';
import IconBidIt from '../../../../icons/IconBidIt';
import IconCostIt from '../../../../icons/IconCostIt';
import IconDreamIt from '../../../../icons/IconDreamIt';
import './styles.scss';
var productConcepts = [{
  id: 1,
  name: React.createElement("span", null, React.createElement("strong", null, "Dream"), " It!"),
  description: 'Emprove empowers home owners to dream with purpose and precision.  The platforms learns home owner objectives and design sensibilities then translates them into an actionable project plan.',
  icon: React.createElement(IconDreamIt, null)
}, {
  id: 2,
  name: React.createElement("span", null, React.createElement("strong", null, "Cost"), " It!"),
  description: 'Emprove’s proprietary data engine generates a comprehensive scope and cost estimate for the project.  Each scope element can be tailored to accommodate various project scales or budget constraints.',
  icon: React.createElement(IconCostIt, null)
}, {
  id: 3,
  name: React.createElement("span", null, React.createElement("strong", null, "Bid"), " It!"),
  description: 'Emprove delivers a detailed request-for-proposal to its marketplace of qualified contractors and administers a bid process.  A competitive market is achieved for home owners and contractors efficiently engage with the most qualified consumer in the market.',
  icon: React.createElement(IconBidIt, null)
}];

var OurProduct = function OurProduct(props) {
  return React.createElement("section", {
    className: cx('our-product', props.className)
  }, React.createElement("div", {
    className: "our-product__title"
  }, "Our ", React.createElement("strong", null, "Product")), React.createElement("div", {
    className: "our-product__concepts"
  }, productConcepts.map(function (concept) {
    return React.createElement(ProductConcept, {
      key: concept.id,
      className: "our-product__concept",
      concept: concept
    });
  })));
};

OurProduct.propTypes = {
  className: PropTypes.string
};
export default OurProduct;