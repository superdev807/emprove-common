'use strict';

import React from 'react';

import ProductConcept from './ProductConcept';

const productConcepts = [
  {
    id: 1,
    name: 'Dream It!',
    description: 'Emprove empowers home owners to dream with purpose and precision.  The platforms learns home owner objectives and design sensibilities then translates them into an actionable project plan.',
    icon: null,
  },
  {
    id: 2,
    name: 'Cost It!',
    description: 'Emprove’s proprietary data engine generates a comprehensive scope and cost estimate for the project.  Each scope element can be tailored to accommodate various project scales or budget constraints.',
    icon: null,
  },
  {
    id: 3,
    name: 'Bid It!',
    description: 'Emprove delivers a detailed request-for-proposal to its marketplace of qualified contractors and administers a bid process.  A competitive market is achieved for home owners and contractors efficiently engage with the most qualified consumer in the market.',
    icon: null,
  },
];

const OurProduct = (props) => {
  return (
    <section>
      <div>Our Product</div>
      {productConcepts.map(concept => <ProductConcept key={concept.id} concept={concept} />)}
    </section>
  );
};

export default OurProduct;
