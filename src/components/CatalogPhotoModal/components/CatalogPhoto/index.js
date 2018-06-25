'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './styles.scss';

const CatalogPhoto = (props) => {
  console.log('catalog photo', props.imageUrl);
  return (
    <img
      className={cx('catalog-photo', props.className)}
      src={props.imageUrl}
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
