'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InformationModal = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxModal = require('redux-modal');

var _Dialog = require('@material-ui/core/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogContent = require('@material-ui/core/DialogContent');

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _DialogTitle = require('@material-ui/core/DialogTitle');

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Close = require('@material-ui/icons/Close');

var _Close2 = _interopRequireDefault(_Close);

var _renderers = require('./renderers');

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InformationDefinition = function InformationDefinition(props) {
  var definition = '';
  if (props.term.definition) {
    definition = ': ' + props.term.definition;
  }

  return _react2.default.createElement(
    _Typography2.default,
    { className: (0, _classnames2.default)('information-definition', { 'information-definition--undefined': definition === '' }) },
    _react2.default.createElement(
      'strong',
      null,
      '\u25CF ',
      props.term.name
    ),
    definition
  );
};

var InformationImage = function InformationImage(props) {
  var imageDescription = '';
  if (props.image.description) {
    imageDescription = _react2.default.createElement(
      _Typography2.default,
      { className: 'information-image__description' },
      props.image.description
    );
  }

  return _react2.default.createElement(
    'div',
    { className: 'information-image' },
    imageDescription,
    _react2.default.createElement(
      'div',
      { className: 'information-image__image-container' },
      _react2.default.createElement('img', {
        className: 'information-image__image',
        src: props.image.url,
        alt: 'Information Image',
        width: props.image.displayWidth,
        height: props.image.displayHeight
      })
    )
  );
};

var InformationModal = function (_Component) {
  _inherits(InformationModal, _Component);

  function InformationModal(props) {
    _classCallCheck(this, InformationModal);

    var _this = _possibleConstructorReturn(this, (InformationModal.__proto__ || Object.getPrototypeOf(InformationModal)).call(this, props));

    _this.state = {
      renderers: _this.getRenderers()
    };
    return _this;
  }

  _createClass(InformationModal, [{
    key: 'getRenderers',
    value: function getRenderers() {
      var renderers = {
        paragraph: _renderers.RawRenderer
      };
      if (this.props.hasLink) {
        renderers.link = _renderers.LinkRenderer;
      }

      return renderers;
    }
  }, {
    key: 'renderImage',
    value: function renderImage(image) {
      var displayHeight = image.height && image.height < 400 ? image.height : 400;
      var displayWidth = image.width / image.height * displayHeight;
      var url = image.useUrl ? image.url : process.env.IMGIX_PUBLIC_IMAGES_HOST + image.filename + '?h=' + displayHeight;

      var imageWithUrl = _extends({}, image, {
        url: url,
        displayWidth: displayWidth,
        displayHeight: displayHeight
      });

      return _react2.default.createElement(InformationImage, { key: image.id, image: imageWithUrl });
    }
  }, {
    key: 'renderParagraph',
    value: function renderParagraph(paragraph) {
      return _react2.default.createElement(_reactMarkdown2.default, {
        className: 'information-modal-body-paragraph',
        source: paragraph,
        renderers: this.state.renderers
      });
    }
  }, {
    key: 'renderUnorderedList',
    value: function renderUnorderedList(items) {
      var formattedText = items.reduce(function (text, item) {
        return text + '* ' + item + '\n';
      }, '');

      return _react2.default.createElement(_reactMarkdown2.default, {
        source: formattedText,
        className: 'information-modal__unordered-list',
        renderers: this.state.renderers
      });
    }
  }, {
    key: 'renderBody',
    value: function renderBody() {
      var _this2 = this;

      return this.props.body.map(function (paragraph, index) {
        if (typeof paragraph === 'string') {
          return _this2.renderParagraph(paragraph);
        } else if ((typeof paragraph === 'undefined' ? 'undefined' : _typeof(paragraph)) === 'object') {
          if (paragraph.type === 'image') {
            return _this2.renderImage(paragraph);
          } else if (paragraph.type === 'unordered-list') {
            return paragraph.items ? _this2.renderUnorderedList(paragraph.items) : '';
          }
        }
      });
    }
  }, {
    key: 'renderImages',
    value: function renderImages() {
      var _this3 = this;

      return this.props.images.map(function (image) {
        return _this3.renderImage(image);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Dialog2.default,
        { classes: { paper: 'information-modal' }, open: this.props.show, onClose: this.props.handleHide },
        _react2.default.createElement(
          _IconButton2.default,
          { className: 'information-modal-close-button', onClick: this.props.handleHide },
          _react2.default.createElement(_Close2.default, null)
        ),
        _react2.default.createElement(
          _DialogTitle2.default,
          { className: 'information-modal__title' },
          this.props.title
        ),
        _react2.default.createElement(
          _DialogContent2.default,
          { className: 'information-modal__content' },
          this.renderBody(),
          this.props.terms && this.props.terms.map(function (term) {
            return _react2.default.createElement(InformationDefinition, { key: term.id, term: term });
          }),
          this.renderImages()
        )
      );
    }
  }]);

  return InformationModal;
}(_react.Component);

InformationModal.propTypes = {
  title: _propTypes2.default.string.isRequired,
  body: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])).isRequired,
  terms: _propTypes2.default.arrayOf(_propTypes2.default.object),
  images: _propTypes2.default.arrayOf(_propTypes2.default.object),
  hasLink: _propTypes2.default.bool
};

InformationModal.defaultProps = {
  images: []
};

exports.default = (0, _reduxModal.connectModal)({ name: 'informationModal' })(InformationModal);
exports.InformationModal = InformationModal; // for testing