'use strict';

import React from 'react';

import FooterList from '../FooterList';
import './styles.scss';

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

const renderServiceAreaColumns = (serviceAreas) => {
  const middleIndex = serviceAreas.length / 2;
  const serviceAreasFirstHalf = serviceAreas.slice(0, middleIndex);
  const serviceAreasSecondHalf = serviceAreas.slice(middleIndex);

  return (
    <div className="service-area-split-columns">
      <FooterList className="service-area-column" items={serviceAreasFirstHalf} />
      <div className="service-area-column-separator" />
      <FooterList className="service-area-column" items={serviceAreasSecondHalf} />
    </div>
  );
}

const ServiceAreas = (props) => {
  if (props.splitColumns) {
    return renderServiceAreaColumns(serviceAreas);
  }

  return (
    <FooterList items={serviceAreas} />
  );
};

export default ServiceAreas;
