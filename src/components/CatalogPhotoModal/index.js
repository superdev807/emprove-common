'use strict';

import React from 'react';
import Modal from '@material-ui/core/Modal';

import CatalogPhoto from './components/CatalogPhoto';
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
  if (!props.image) {
    return null;
  }

  return (
    <Modal open={true || props.open}>
      <div style={getModalStyle()} className="catalog-photo-modal">
        <CatalogPhoto imageKey={props.image.imageKey} alt={props.image.name} />
      </div>
    </Modal>
  );
};

// CatalogPhotoModal.propTypes = {
//
// }

export default CatalogPhotoModal;
