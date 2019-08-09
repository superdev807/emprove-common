'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './styles.scss';

var CatalogPhoto = function CatalogPhoto(props) {
  return React.createElement("img", {
    className: cx('catalog-photo', props.className),
    src: props.imageUrl,
    alt: props.alt,
    onLoad: props.onLoad,
    onError: props.onError
  });
};

CatalogPhoto.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  onError: PropTypes.func,
  onLoad: PropTypes.func
};
export default CatalogPhoto;