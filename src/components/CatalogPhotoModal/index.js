'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Modal from '@material-ui/core/Modal';

import CloseButton from './components/CloseButton';
import CatalogPhoto from './components/CatalogPhoto';
import CatalogPhotoHeader from './components/CatalogPhotoHeader';
import DreamItLink from './components/DreamItLink';
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
        this.setState({ loading: true });
      }
      else {
        const image = new Image();
        image.src = process.env.IMGIX_CATALOG_IMAGES_HOST + this.props.image.imageKey;
        image.addEventListener('load', () => {
          this.setState({ loading: false });
        });
        image.addEventListener('error', () => {
          this.setState({
            loading: false,
            error: 'Could not load image. Please close the dialog and try again.'
          });
        });
      }
    }
  }

  render() {
    const { image } = this.props;
    const imageName = `${image.style} ${image.homeArea}`;

    return (
      <Modal open={this.props.open} onClose={this.props.onClose}>
        <div className="catalog-photo-modal">
            <CatalogPhoto
              className={cx('catalog-photo-modal__catalog-photo', 'catalog-photo-modal__catalog-photo--loading')}
              imageUrl={process.env.IMGIX_CATALOG_IMAGES_HOST + image.imageKey}
              alt={imageName}
              loading={this.state.loading}
            />
            <CatalogPhotoHeader
              className="catalog-photo-modal__catalog-photo-header"
              designStyle={image.style}
              homeArea={image.homeArea}
              qualityStandard={image.quality}
              loading={this.state.loading}
            />
            <CloseButton className="catalog-photo-modal__close-button" onClick={this.props.onClose} />
            <DreamItLink browseFilter={imageName.toLowerCase().replace(/ /g, '-')} disabled={this.state.loading} />
            {this.state.error && <span className="catalog-photo-modal__error-message">{this.state.error}</span>}
          </div>
      </Modal>
    );
  }
};

CatalogPhotoModal.propTypes = {
  image: PropTypes.object
};

CatalogPhotoModal.defaultProps = {
  image: {
    imageKey: '',
    style: '',
    homeArea: '',
    quality: ''
  }
};

export default CatalogPhotoModal;
