'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './styles.scss';

const CatalogPhoto = (props) => {
  console.log('CatalogPhoto props', props);
  return (
    <img
      className={cx('catalog-photo', props.className)}
      src={process.env.IMGIX_CATALOG_IMAGES_HOST + props.imageKey}
      alt={props.alt}
    />
  );
};

CatalogPhoto.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  imageKey: PropTypes.string.isRequired,
};

export default CatalogPhoto;
