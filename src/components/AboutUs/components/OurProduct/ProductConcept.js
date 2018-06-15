'use strict';

import React from 'react';

const ProductConcept = (props) => {
  return (
    <div>
      <div>{props.concept.name}</div>
      <p>{props.concept.description}</p>
    </div>
  );
};

export default ProductConcept;
