'use strict';

import React from 'react';

const investors = [
  {
    id: 1,
    imageKey: ''
  },
  {
    id: 2,
    imageKey: ''
  },
  {
    id: 3,
    imageKey: ''
  },
];

const OurInvestors = (props) => {
  return (
    <section>
      <div>Our Investors</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis, tellus non aliquam gravida, augue dui lacinia felis, nec auctor mi dui nec lacus. Ut in iaculis nulla.</p>
      {investors.map(investor => (
        <div key={investor.id}>{investor.id}</div>
      ))}
    </section>
  );
};

export default OurInvestors;
