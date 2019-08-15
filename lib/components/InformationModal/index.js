'use strict';

import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _typeof from "@babel/runtime-corejs3/helpers/typeof";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";
import _reduceInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/reduce";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _extends from "@babel/runtime-corejs3/helpers/extends";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context4; _forEachInstanceProperty(_context4 = ownKeys(source, true)).call(_context4, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context5; _forEachInstanceProperty(_context5 = ownKeys(source)).call(_context5, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
      var formattedText = _reduceInstanceProperty(items).call(items, function (text, item) {
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
      var _context,
          _this2 = this;

      return _mapInstanceProperty(_context = this.props.body).call(_context, function (paragraph, index) {
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
      var _context2,
          _this3 = this;

      return _mapInstanceProperty(_context2 = this.props.images).call(_context2, function (image) {
        return _this3.renderImage(image);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _context3,
          _this4 = this;

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
      }, this.renderBody(), this.props.terms && _mapInstanceProperty(_context3 = this.props.terms).call(_context3, function (term) {
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