'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Modal = require('@material-ui/core/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _CloseButton = require('./components/CloseButton');

var _CloseButton2 = _interopRequireDefault(_CloseButton);

var _CatalogPhoto = require('./components/CatalogPhoto');

var _CatalogPhoto2 = _interopRequireDefault(_CatalogPhoto);

var _CatalogPhotoHeader = require('./components/CatalogPhotoHeader');

var _CatalogPhotoHeader2 = _interopRequireDefault(_CatalogPhotoHeader);

var _DreamItLink = require('./components/DreamItLink');

var _DreamItLink2 = _interopRequireDefault(_DreamItLink);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getModalStyle() {
  var top = 50;
  var left = 50;

  return {
    top: top + '%',
    left: left + '%',
    transform: 'translate(-' + top + '%, -' + left + '%)'
  };
}

var CatalogPhotoModal = function CatalogPhotoModal(props) {
  console.log('CatalogPhotoModal', props);
  // if (!props.image) {
  //   return null;
  // }

  var imageName = props.image.style + ' ' + props.image.homeArea;

  // <div className="catalog-photo-modal__catalog-photo-container">
  return _react2.default.createElement(
    _Modal2.default,
    { open: true || props.open, onClose: props.onClose },
    _react2.default.createElement(
      'div',
      { className: 'catalog-photo-modal' },
      _react2.default.createElement(_CatalogPhoto2.default, {
        className: 'catalog-photo-modal__catalog-photo',
        imageKey: props.image.imageKey,
        alt: imageName
      }),
      _react2.default.createElement(_CatalogPhotoHeader2.default, {
        className: 'catalog-photo-modal__catalog-photo-header',
        designStyle: props.image.style,
        homeArea: props.image.homeArea,
        qualityStandard: props.image.quality
      }),
      _react2.default.createElement(_CloseButton2.default, { className: 'catalog-photo-modal__close-button', onClick: props.onClose }),
      _react2.default.createElement(_DreamItLink2.default, { browseFilter: imageName.toLowerCase().replace(/ /g, '-') })
    )
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

exports.default = CatalogPhotoModal;