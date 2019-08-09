'use strict';

import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.replace";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
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
      var _context;

      var image = this.props.image;

      var imageName = _concatInstanceProperty(_context = "".concat(image.style, " ")).call(_context, image.homeArea);

      return React.createElement(Modal, {
        disableAutoFocus: true,
        open: this.props.open,
        onClose: this.props.onClose
      }, React.createElement("div", {
        className: cx('catalog-photo-modal', {
          'catalog-photo-modal--loading': this.state.loading,
          'catalog-photo-modal--error': this.state.error
        })
      }, React.createElement(CatalogPhoto, {
        className: cx('catalog-photo-modal__catalog-photo', {
          'catalog-photo-modal__catalog-photo--loading': this.state.loading
        }),
        imageUrl: process.env.IMGIX_CATALOG_IMAGES_HOST + image.imageKey,
        alt: imageName,
        onLoad: this.handleImageLoad,
        onError: this.handleImageError
      }), this.state.loading ? React.createElement(LoadingIndicator, null) : React.createElement(CatalogPhotoHeader, {
        className: "catalog-photo-modal__catalog-photo-header",
        designStyle: image.style,
        homeArea: image.homeArea,
        qualityStandard: image.quality,
        loading: this.state.loading
      }), React.createElement(CloseButton, {
        className: "catalog-photo-modal__close-button",
        onClick: this.props.onClose
      }), React.createElement(DreamItLink, {
        browseFilter: imageName.toLowerCase().replace(/ /g, '-'),
        disabled: this.state.loading,
        fromContractor: this.props.fromContractor
      }), this.state.loading && React.createElement("span", {
        className: "catalog-photo-modal__message"
      }, "Loading image..."), this.state.error && React.createElement("span", {
        className: "catalog-photo-modal__message--error"
      }, this.state.error)));
    }
  }]);

  return CatalogPhotoModal;
}(React.Component);

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