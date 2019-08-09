'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './styles.scss';

var CatalogPhotoHeader = function CatalogPhotoHeader(props) {
  return React.createElement("div", {
    className: cx('catalog-photo-header', props.className)
  }, React.createElement("div", {
    className: "catalog-photo-header__title"
  }, props.loading ? React.createElement("span", {
    className: "catalog-photo-header__loading-text"
  }, "Loading Image...") : React.createElement(React.Fragment, null, React.createElement("span", {
    className: "catalog-photo-header__style-and-area"
  }, props.designStyle, " ", props.homeArea), ' | ', React.createElement("span", {
    className: "catalog-photo-header__quality"
  }, props.qualityStandard))));
};

CatalogPhotoHeader.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool
};
CatalogPhotoHeader.defaultProps = {
  loading: false
};
export default CatalogPhotoHeader;