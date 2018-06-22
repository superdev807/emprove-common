'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './styles.scss';

const CatalogPhotoHeader = (props) => {
  return (
    <div className={cx('catalog-photo-header', props.className)}>
      <div className="catalog-photo-header__title">
        {props.loading
          ? <span className="catalog-photo-header__loading-text">Loading Image...</span>
          : (
            <React.Fragment>
              <span className="catalog-photo-header__style-and-area">{props.designStyle} {props.homeArea}</span>
              {' | '}
              <span className="catalog-photo-header__quality">{props.qualityStandard}</span>
            </React.Fragment>
          )}
      </div>
    </div>
  );
};

CatalogPhotoHeader.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool
};

CatalogPhotoHeader.defaultProps = {
  loading: false
};

export default CatalogPhotoHeader;
