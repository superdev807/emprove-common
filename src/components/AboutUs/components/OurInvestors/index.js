'use strict';

import React from 'react';

import Investor from './Investor';
import './styles.scss';

const investors = [
  {
    id: 1,
    name: '',
    imageKey: 'ic_investor_01.svg'
  },
  {
    id: 2,
    name: '',
    imageKey: 'ic_investor_02.svg'
  },
  {
    id: 3,
    name: '',
    imageKey: 'ic_investor_01.svg'
  },
];

const OurInvestors = (props) => {
  const theInvestors = investors.map(investor => {
    const investorWithImageUrl = {
      ...investor,
      imageUrl: `/images/${investor.imageKey}`
    };

    return(
      <div key={investor.id} className="our-investors__investor">
        <Investor investor={investorWithImageUrl} />
      </div>
    );
  });

  return (
    <section className="our-investors">
      <div className="our-investors__title">Our <strong>Investors</strong></div>
      <p className="our-investors__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis, tellus non aliquam gravida, augue dui lacinia felis, nec auctor mi dui nec lacus. Ut in iaculis nulla.</p>
      <div className="our-investors__investors">
        {theInvestors}
      </div>
    </section>
  );
};

export default OurInvestors;
