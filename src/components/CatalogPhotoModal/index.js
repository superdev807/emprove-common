'use strict';

import React from 'react';
import Modal from '@material-ui/core/Modal';

import CloseButton from './components/CloseButton';
import CatalogPhoto from './components/CatalogPhoto';
import CatalogPhotoHeader from './components/CatalogPhotoHeader';
import DreamItLink from './components/DreamItLink';
import './styles.scss';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const CatalogPhotoModal = (props) => {
  console.log('CatalogPhotoModal', props);
  // if (!props.image) {
  //   return null;
  // }

  const imageName = `${props.image.style} ${props.image.homeArea}`;

  // <div className="catalog-photo-modal__catalog-photo-container">
  return (
    <Modal open={true || props.open} onClose={props.onClose}>
      <div className="catalog-photo-modal">
          <CatalogPhoto
            className="catalog-photo-modal__catalog-photo"
            imageKey={props.image.imageKey}
            alt={imageName}
          />
          <CatalogPhotoHeader
            className="catalog-photo-modal__catalog-photo-header"
            designStyle={props.image.style}
            homeArea={props.image.homeArea}
            qualityStandard={props.image.quality}
          />
          <CloseButton className="catalog-photo-modal__close-button" onClick={props.onClose} />
          <DreamItLink browseFilter={imageName.toLowerCase().replace(/ /g, '-')} />
        </div>
    </Modal>
  );
// </div>
};

CatalogPhotoModal.defaultProps = {
  image: {
    imageKey: '',
    style: 'Loading',
    homeArea: '',
    quality: 'We will show you the image soon'
  }
};

export default CatalogPhotoModal;
