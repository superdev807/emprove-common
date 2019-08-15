'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import FooterList from '../FooterList';
import './styles.scss';

var renderServiceAreaColumns = function renderServiceAreaColumns(serviceAreas) {
  var middleIndex = serviceAreas.length / 2;
  var serviceAreasFirstHalf = serviceAreas.slice(0, middleIndex);
  var serviceAreasSecondHalf = serviceAreas.slice(middleIndex);
  return React.createElement("div", {
    className: "service-area-split-columns"
  }, React.createElement(FooterList, {
    className: "service-area-column",
    items: serviceAreasFirstHalf
  }), React.createElement("div", {
    className: "service-area-column-separator"
  }), React.createElement(FooterList, {
    className: "service-area-column",
    items: serviceAreasSecondHalf
  }));
};

var ServiceAreas = function ServiceAreas(props) {
  if (props.splitColumns) {
    return renderServiceAreaColumns(props.areas);
  }

  return React.createElement(FooterList, {
    items: props.areas
  });
};

ServiceAreas.propTypes = {
  splitColumns: PropTypes.bool,
  areas: PropTypes.array
};
ServiceAreas.defaultProps = {
  splitColumns: false
};
export default ServiceAreas;