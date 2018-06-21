'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './styles.scss';

const CatalogPhoto = (props) => {
  let src = props.loading ? '/images/catalog_photo_placeholder.svg' : props.imageUrl;

  return (
    <img
      className={cx('catalog-photo', { 'catalog-photo--loading': props.loading }, props.className)}
      src={src}
      alt={props.alt}
    />
  );
};

CatalogPhoto.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  loading: PropTypes.bool
};

export default CatalogPhoto;
