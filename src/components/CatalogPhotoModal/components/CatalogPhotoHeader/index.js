'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './styles.scss';

const CatalogPhotoHeader = (props) => {
  return (
    <div className={cx('catalog-photo-header', props.className)}>
      <div className="catalog-photo-header__title">
        <span className="catalog-photo-header__style-and-area">{props.designStyle} {props.homeArea}</span>
        {' | '}
        <span className="catalog-photo-header__quality">{props.qualityStandard}</span>
      </div>
    </div>
  );
};

CatalogPhotoHeader.propTypes = {
  className: PropTypes.string
};

export default CatalogPhotoHeader;
