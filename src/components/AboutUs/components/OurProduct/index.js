'use strict';

import React from 'react';

import ProductConcept from './ProductConcept';

const productConcepts = [
  {
    id: 1,
    name: 'Dream It!',
    description: '',
    icon: null,
  },
  {
    id: 2,
    name: 'Cost It!',
    description: '',
    icon: null,
  },
  {
    id: 3,
    name: 'Bid It!',
    description: '',
    icon: null,
  },
]

const OurProduct = (props) => {
  return (
    <section>
      <div>Our Product</div>
      {productConcepts.map(concept => <ProductConcept key={concept.id} concept={concept} />)}
    </section>
  );
};

export default OurProduct;
