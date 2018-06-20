'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const CatalogPhoto = (props) => {
  console.log('CatalogPhoto props', props);
  return (
    <img
      className="catalog-photo"
      src={process.env.IMGIX_CATALOG_IMAGES_HOST + props.imageKey}
      alt={props.alt}
    />
  );
};

CatalogPhoto.propTypes = {
  imageKey: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default CatalogPhoto;
