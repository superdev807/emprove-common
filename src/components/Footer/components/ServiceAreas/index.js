'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import FooterList from '../FooterList';
import './styles.scss';

const serviceAreas = ['Greater Las Vegas, NV', 'Greater Phoenix, AZ'];

const comingSoonAreas = ['Greater Los Angeles, CA', 'Greater San Diego, CA'];

const SERVICE_AREAS = 'service_areas';
const COMING_SOON = 'coming_soon';

const renderServiceAreaColumns = serviceAreas => {
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
};

const ServiceAreas = props => {
  let areas;

  switch (props.columnType) {
    case SERVICE_AREAS:
      areas = serviceAreas;
      break;
    case COMING_SOON:
      areas = comingSoonAreas;
      break;
    default:
      areas = '';
  }

  if (props.splitColumns) {
    return renderServiceAreaColumns(areas);
  }

  return <FooterList items={areas} />;
};

ServiceAreas.propTypes = {
  splitColumns: PropTypes.bool,
  columnType: PropTypes.oneOf([SERVICE_AREAS, COMING_SOON])
};

ServiceAreas.defaultProps = {
  splitColumns: false,
  columnType: SERVICE_AREAS
};

export default ServiceAreas;
