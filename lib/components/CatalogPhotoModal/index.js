'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CatalogPhotoModal = function (_React$Component) {
  _inherits(CatalogPhotoModal, _React$Component);

  function CatalogPhotoModal(props) {
    _classCallCheck(this, CatalogPhotoModal);

    var _this = _possibleConstructorReturn(this, (CatalogPhotoModal.__proto__ || Object.getPrototypeOf(CatalogPhotoModal)).call(this, props));

    _this.state = {
      loading: true,
      error: null
    };
    return _this;
  }

  _createClass(CatalogPhotoModal, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (this.props.image !== prevProps.image) {
        if (this.props.image.imageKey === '') {
          this.setState({ loading: true });
        } else {
          var image = new Image();
          image.src = process.env.IMGIX_CATALOG_IMAGES_HOST + this.props.image.imageKey;
          image.addEventListener('load', function () {
            _this2.setState({ loading: false });
          });
          image.addEventListener('error', function () {
            _this2.setState({
              loading: false,
              error: 'Could not load image. Please close the dialog and try again.'
            });
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var image = this.props.image;

      var imageName = image.style + ' ' + image.homeArea;

      return _react2.default.createElement(
        _Modal2.default,
        { open: this.props.open, onClose: this.props.onClose },
        _react2.default.createElement(
          'div',
          { className: 'catalog-photo-modal' },
          _react2.default.createElement(_CatalogPhoto2.default, {
            className: (0, _classnames2.default)('catalog-photo-modal__catalog-photo', 'catalog-photo-modal__catalog-photo--loading'),
            imageUrl: process.env.IMGIX_CATALOG_IMAGES_HOST + image.imageKey,
            alt: imageName,
            loading: this.state.loading
          }),
          _react2.default.createElement(_CatalogPhotoHeader2.default, {
            className: 'catalog-photo-modal__catalog-photo-header',
            designStyle: image.style,
            homeArea: image.homeArea,
            qualityStandard: image.quality,
            loading: this.state.loading
          }),
          _react2.default.createElement(_CloseButton2.default, { className: 'catalog-photo-modal__close-button', onClick: this.props.onClose }),
          _react2.default.createElement(_DreamItLink2.default, { browseFilter: imageName.toLowerCase().replace(/ /g, '-'), disabled: this.state.loading }),
          this.state.error && _react2.default.createElement(
            'span',
            { className: 'catalog-photo-modal__error-message' },
            this.state.error
          )
        )
      );
    }
  }]);

  return CatalogPhotoModal;
}(_react2.default.Component);

;

CatalogPhotoModal.propTypes = {
  image: _propTypes2.default.object
};

CatalogPhotoModal.defaultProps = {
  image: {
    imageKey: '',
    style: '',
    homeArea: '',
    quality: ''
  }
};

exports.default = CatalogPhotoModal;