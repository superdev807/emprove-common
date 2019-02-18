'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Modal = _interopRequireDefault(require("@material-ui/core/Modal"));

var _CloseButton = _interopRequireDefault(require("../CloseButton"));

var _CatalogPhoto = _interopRequireDefault(require("./components/CatalogPhoto"));

var _CatalogPhotoHeader = _interopRequireDefault(require("./components/CatalogPhotoHeader"));

var _DreamItLink = _interopRequireDefault(require("./components/DreamItLink"));

var _LoadingIndicator = _interopRequireDefault(require("../LoadingIndicator"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CatalogPhotoModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CatalogPhotoModal, _React$Component);

  function CatalogPhotoModal(props) {
    var _this;

    _classCallCheck(this, CatalogPhotoModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CatalogPhotoModal).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleImageLoad", function () {
      _this.setState({
        loading: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleImageError", function () {
      _this.setState({
        loading: false,
        error: 'Could not load image. Please close the dialog and try again.'
      });
    });

    _this.state = {
      loading: true,
      error: null
    };
    return _this;
  }

  _createClass(CatalogPhotoModal, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.image !== prevProps.image) {
        if (this.props.image.imageKey === '') {
          this.setState({
            loading: true,
            error: null
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var image = this.props.image;
      var imageName = "".concat(image.style, " ").concat(image.homeArea);
      return _react.default.createElement(_Modal.default, {
        disableAutoFocus: true,
        open: this.props.open,
        onClose: this.props.onClose
      }, _react.default.createElement("div", {
        className: (0, _classnames.default)('catalog-photo-modal', {
          'catalog-photo-modal--loading': this.state.loading,
          'catalog-photo-modal--error': this.state.error
        })
      }, _react.default.createElement(_CatalogPhoto.default, {
        className: (0, _classnames.default)('catalog-photo-modal__catalog-photo', {
          'catalog-photo-modal__catalog-photo--loading': this.state.loading
        }),
        imageUrl: process.env.IMGIX_CATALOG_IMAGES_HOST + image.imageKey,
        alt: imageName,
        onLoad: this.handleImageLoad,
        onError: this.handleImageError
      }), this.state.loading ? _react.default.createElement(_LoadingIndicator.default, null) : _react.default.createElement(_CatalogPhotoHeader.default, {
        className: "catalog-photo-modal__catalog-photo-header",
        designStyle: image.style,
        homeArea: image.homeArea,
        qualityStandard: image.quality,
        loading: this.state.loading
      }), _react.default.createElement(_CloseButton.default, {
        className: "catalog-photo-modal__close-button",
        onClick: this.props.onClose
      }), _react.default.createElement(_DreamItLink.default, {
        browseFilter: imageName.toLowerCase().replace(/ /g, '-'),
        disabled: this.state.loading,
        fromContractor: this.props.fromContractor
      }), this.state.loading && _react.default.createElement("span", {
        className: "catalog-photo-modal__message"
      }, "Loading image..."), this.state.error && _react.default.createElement("span", {
        className: "catalog-photo-modal__message--error"
      }, this.state.error)));
    }
  }]);

  return CatalogPhotoModal;
}(_react.default.Component);

;
CatalogPhotoModal.propTypes = {
  image: _propTypes.default.object,
  fromContractor: _propTypes.default.bool
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
var _default = CatalogPhotoModal;
exports.default = _default;