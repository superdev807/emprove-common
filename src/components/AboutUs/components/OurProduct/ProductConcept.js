'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './product-concept-styles.scss';

const ProductConcept = (props) => {
  return (
    <div className={cx('product-concept', props.className)}>
      <div className="product-concept__icon">{props.concept.icon}</div>
      <div className="product-concept__name">{props.concept.name}</div>
      <p className="product-concept__description">{props.concept.description}</p>
    </div>
  );
};

ProductConcept.propTypes = {
  concept: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default ProductConcept;
