import React from 'react';

import FooterList from '../FooterList';

const serviceAreas = [
  'North Las Vegas',
  'Nellis AFB',
  'Las Vegas',
  'Sunrise Manor',
  'Winchester',
  'Summerlin South',
  'Spring Valley',
  'Whitney',
  'Paradise',
  'Blue Diamond',
  'Enterprise',
  'Henderson',
  'Boulder City',
];

const ServiceAreas = (props) => {
  return (
    <FooterList items={serviceAreas} />
  );
};

export default ServiceAreas;
