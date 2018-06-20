'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './styles.scss';

const CatalogPhoto = (props) => {
  console.log('CatalogPhoto props', props);
  let src = process.env.IMGIX_CATALOG_IMAGES_HOST + props.imageKey;
  if (!props.imageKey) {
    src = '/images/catalog_photo_placeholder.svg';
  }

  return (
    <img
      className={cx('catalog-photo', props.className)}
      src={src}
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
