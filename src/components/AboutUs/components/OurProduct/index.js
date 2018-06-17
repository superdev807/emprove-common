'use strict';

import React from 'react';

import ProductConcept from './ProductConcept';
import IconBidIt from '~/icons/IconBidIt';
import IconCostIt from '~/icons/IconCostIt';
import IconDreamIt from '../../../../icons/IconDreamIt';
import './styles.scss';

const productConcepts = [
  {
    id: 1,
    name: <span><strong>Dream</strong> It!</span>,
    description: 'Emprove empowers home owners to dream with purpose and precision.  The platforms learns home owner objectives and design sensibilities then translates them into an actionable project plan.',
    icon: <IconDreamIt />,
  },
  {
    id: 2,
    name: <span><strong>Cost</strong> It</span>,
    description: 'Emprove’s proprietary data engine generates a comprehensive scope and cost estimate for the project.  Each scope element can be tailored to accommodate various project scales or budget constraints.',
    icon: <IconCostIt />,
  },
  {
    id: 3,
    name: <span><strong>Bid</strong> It!</span>,
    description: 'Emprove delivers a detailed request-for-proposal to its marketplace of qualified contractors and administers a bid process.  A competitive market is achieved for home owners and contractors efficiently engage with the most qualified consumer in the market.',
    icon: <IconBidIt />,
  },
];

const OurProduct = (props) => {
  return (
    <section className="our-product">
      <div className="our-product__title">Our <strong>Product</strong></div>
      <div className="our-product__concepts">
        {productConcepts.map(concept => <ProductConcept key={concept.id} className="our-product__concept" concept={concept} />)}
      </div>
    </section>
  );
};

export default OurProduct;
