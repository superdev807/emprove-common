'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Modal from '@material-ui/core/Modal';

import CloseButton from '../CloseButton';
import CatalogPhoto from './components/CatalogPhoto';
import CatalogPhotoHeader from './components/CatalogPhotoHeader';
import DreamItLink from './components/DreamItLink';
import LoadingIndicator from '../LoadingIndicator';
import './styles.scss';

class CatalogPhotoModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.image !== prevProps.image) {
      if (this.props.image.imageKey === '') {
        this.setState({ loading: true, error: null });
      }
    }
  }

  handleImageLoad = () => {
    this.setState({ loading: false });
  };

  handleImageError = () => {
    this.setState({
      loading: false,
      error: 'Could not load image. Please close the dialog and try again.'
    });
  };

  render() {
    const { image } = this.props;
    const imageName = `${image.style} ${image.homeArea}`;

    return (
      <Modal disableAutoFocus open={this.props.open} onClose={this.props.onClose}>
        <div
          className={cx('catalog-photo-modal', {
            'catalog-photo-modal--loading': this.state.loading,
            'catalog-photo-modal--error': this.state.error
          })}>
          <CatalogPhoto
            className={cx('catalog-photo-modal__catalog-photo', { 'catalog-photo-modal__catalog-photo--loading': this.state.loading })}
            imageUrl={process.env.IMGIX_CATALOG_IMAGES_HOST + image.imageKey}
            alt={imageName}
            onLoad={this.handleImageLoad}
            onError={this.handleImageError}
          />
          {this.state.loading ? (
            <LoadingIndicator />
          ) : (
            <CatalogPhotoHeader
              className="catalog-photo-modal__catalog-photo-header"
              designStyle={image.style}
              homeArea={image.homeArea}
              qualityStandard={image.quality}
              loading={this.state.loading}
            />
          )}
          <CloseButton className="catalog-photo-modal__close-button" onClick={this.props.onClose} />
          <DreamItLink
            browseFilter={imageName.toLowerCase().replace(/ /g, '-')}
            disabled={this.state.loading}
            fromContractor={this.props.fromContractor}
          />
          {this.state.loading && <span className="catalog-photo-modal__message">Loading image...</span>}
          {this.state.error && <span className="catalog-photo-modal__message--error">{this.state.error}</span>}
        </div>
      </Modal>
    );
  }
}

CatalogPhotoModal.propTypes = {
  image: PropTypes.object,
  fromContractor: PropTypes.bool
};

CatalogPhotoModal.defaultProps = {
  image: {
    imageKey: '',
    style: '',
    homeArea: '',
    quality: ''
  },
  fromContractor: false
};

export default CatalogPhotoModal;
