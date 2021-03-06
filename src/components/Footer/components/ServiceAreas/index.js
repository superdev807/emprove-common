'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import FooterList from '../FooterList';
import './styles.scss';

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
  if (props.splitColumns) {
    return renderServiceAreaColumns(props.areas);
  }

  return <FooterList items={props.areas} />;
};

ServiceAreas.propTypes = {
  splitColumns: PropTypes.bool,
  areas: PropTypes.array
};

ServiceAreas.defaultProps = {
  splitColumns: false
};

export default ServiceAreas;
