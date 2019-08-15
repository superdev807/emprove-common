'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './product-concept-styles.scss';

var ProductConcept = function ProductConcept(props) {
  return React.createElement("div", {
    className: cx('product-concept', props.className)
  }, React.createElement("div", {
    className: "product-concept__icon"
  }, props.concept.icon), React.createElement("div", {
    className: "product-concept__name"
  }, props.concept.name), React.createElement("p", {
    className: "product-concept__description"
  }, props.concept.description));
};

ProductConcept.propTypes = {
  concept: PropTypes.object.isRequired,
  className: PropTypes.string
};
export default ProductConcept;