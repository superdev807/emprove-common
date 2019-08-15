'use strict';

import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.filter";
import "core-js/modules/es.array.for-each";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.map";
import "core-js/modules/es.array.reduce";
import "core-js/modules/es.function.name";
import "core-js/modules/es.object.assign";
import "core-js/modules/es.object.create";
import "core-js/modules/es.object.define-properties";
import "core-js/modules/es.object.define-property";
import "core-js/modules/es.object.get-own-property-descriptor";
import "core-js/modules/es.object.get-own-property-descriptors";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.keys";
import "core-js/modules/es.object.set-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/es.string.link";
import "core-js/modules/web.dom-collections.for-each";
import "core-js/modules/web.dom-collections.iterator";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { connectModal } from 'redux-modal';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import IconClose from '@material-ui/icons/Close';
import { LinkRenderer, RawRenderer } from './renderers';
import './styles.scss';

var InformationDefinition = function InformationDefinition(props) {
  var name;

  if (props.term.name) {
    name = React.createElement("strong", null, props.term.name);

    if (props.boldName === false) {
      name = props.term.name;
    }
  }

  var definition = '';

  if (props.term.definition) {
    var prefix = props.term.name ? ':' : '';
    definition = prefix + " ".concat(props.term.definition);
  }

  return React.createElement(Typography, {
    className: cx('information-definition', {
      'information-definition--undefined': definition === ''
    })
  }, "\u25CF\xA0", name, definition);
};

var InformationImage = function InformationImage(props) {
  var imageDescription = '';

  if (props.image.description) {
    imageDescription = React.createElement(Typography, {
      className: "information-image__description"
    }, props.image.description);
  }

  var dimensions = {};

  if (props.image.displayWidth && props.image.displayHeight) {
    dimensions.width = props.image.displayWidth;
    dimensions.height = props.image.displayHeight;
  }

  return React.createElement("div", {
    className: "information-image"
  }, imageDescription, React.createElement("div", {
    className: "information-image__image-container"
  }, React.createElement("img", _extends({
    className: "information-image__image",
    src: props.image.url,
    alt: "Information Image"
  }, dimensions))));
};

var InformationModal =
/*#__PURE__*/
function (_Component) {
  _inherits(InformationModal, _Component);

  function InformationModal(props) {
    var _this;

    _classCallCheck(this, InformationModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InformationModal).call(this, props));
    _this.state = {
      renderers: _this.getRenderers()
    };
    return _this;
  }

  _createClass(InformationModal, [{
    key: "getRenderers",
    value: function getRenderers() {
      var renderers = {
        paragraph: RawRenderer
      };

      if (this.props.hasLink) {
        renderers.link = LinkRenderer;
      }

      return renderers;
    }
  }, {
    key: "renderImage",
    value: function renderImage(image) {
      var displayHeight = image.height && image.height < 400 ? image.height : 400;
      var displayWidth = image.width / image.height * displayHeight;
      var url = image.useUrl ? image.url : process.env.IMGIX_PUBLIC_IMAGES_HOST + image.filename + '?h=' + displayHeight;

      var imageWithUrl = _objectSpread({}, image, {
        url: url,
        displayWidth: displayWidth,
        displayHeight: displayHeight
      });

      return React.createElement(InformationImage, {
        key: image.id,
        image: imageWithUrl
      });
    }
  }, {
    key: "renderParagraph",
    value: function renderParagraph(paragraph, key) {
      return React.createElement(ReactMarkdown, {
        key: key,
        className: "information-modal-body-paragraph",
        source: paragraph,
        escapeHtml: false,
        renderers: this.state.renderers
      });
    }
  }, {
    key: "renderUnorderedList",
    value: function renderUnorderedList(items, key) {
      var formattedText = items.reduce(function (text, item) {
        return text + '* ' + item + '\n';
      }, '');
      return React.createElement(ReactMarkdown, {
        key: key,
        source: formattedText,
        escapeHtml: false,
        className: "information-modal__unordered-list",
        renderers: this.state.renderers
      });
    }
  }, {
    key: "renderBody",
    value: function renderBody() {
      var _this2 = this;

      return this.props.body.map(function (paragraph, index) {
        if (typeof paragraph === 'string') {
          return _this2.renderParagraph(paragraph, index);
        } else if (_typeof(paragraph) === 'object') {
          if (paragraph.type === 'image') {
            return _this2.renderImage(paragraph, index);
          } else if (paragraph.type === 'unordered-list') {
            return paragraph.items ? _this2.renderUnorderedList(paragraph.items, index) : '';
          }
        }
      });
    }
  }, {
    key: "renderImages",
    value: function renderImages() {
      var _this3 = this;

      return this.props.images.map(function (image) {
        return _this3.renderImage(image);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return React.createElement(Dialog, {
        classes: {
          paper: 'information-modal'
        },
        open: this.props.show,
        onClose: this.props.handleHide,
        disableEnforceFocus: true
      }, React.createElement(IconButton, {
        className: "information-modal-close-button",
        onClick: this.props.handleHide
      }, React.createElement(IconClose, null)), React.createElement(DialogTitle, {
        className: "information-modal__title"
      }, this.props.title), React.createElement(DialogContent, {
        className: "information-modal__content"
      }, this.renderBody(), this.props.terms && this.props.terms.map(function (term) {
        return React.createElement(InformationDefinition, {
          key: term.id,
          term: term,
          boldName: _this4.props.boldTermNames
        });
      }), this.renderImages()));
    }
  }]);

  return InformationModal;
}(Component);

InformationModal.propTypes = {
  boldTermNames: PropTypes.bool,
  title: PropTypes.string.isRequired,
  body: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])).isRequired,
  terms: PropTypes.arrayOf(PropTypes.object),
  images: PropTypes.arrayOf(PropTypes.object),
  hasLink: PropTypes.bool
};
InformationModal.defaultProps = {
  boldTermNames: true,
  images: []
};
export default connectModal({
  name: 'informationModal'
})(InformationModal);
export { InformationModal }; // for testing