'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InformationModal = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reduxModal = require("redux-modal");

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _renderers = require("./renderers");

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

var InformationDefinition = function InformationDefinition(props) {
  var name;

  if (props.term.name) {
    name = _react.default.createElement("strong", null, props.term.name);

    if (props.boldName === false) {
      name = props.term.name;
    }
  }

  var definition = '';

  if (props.term.definition) {
    var prefix = props.term.name ? ':' : '';
    definition = prefix + " ".concat(props.term.definition);
  }

  return _react.default.createElement(_Typography.default, {
    className: (0, _classnames.default)('information-definition', {
      'information-definition--undefined': definition === ''
    })
  }, "\u25CF\xA0", name, definition);
};

var InformationImage = function InformationImage(props) {
  var imageDescription = '';

  if (props.image.description) {
    imageDescription = _react.default.createElement(_Typography.default, {
      className: "information-image__description"
    }, props.image.description);
  }

  var dimensions = {};

  if (props.image.displayWidth && props.image.displayHeight) {
    dimensions.width = props.image.displayWidth;
    dimensions.height = props.image.displayHeight;
  }

  return _react.default.createElement("div", {
    className: "information-image"
  }, imageDescription, _react.default.createElement("div", {
    className: "information-image__image-container"
  }, _react.default.createElement("img", _extends({
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
        paragraph: _renderers.RawRenderer
      };

      if (this.props.hasLink) {
        renderers.link = _renderers.LinkRenderer;
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

      return _react.default.createElement(InformationImage, {
        key: image.id,
        image: imageWithUrl
      });
    }
  }, {
    key: "renderParagraph",
    value: function renderParagraph(paragraph, key) {
      return _react.default.createElement(_reactMarkdown.default, {
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
      return _react.default.createElement(_reactMarkdown.default, {
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

      return _react.default.createElement(_Dialog.default, {
        classes: {
          paper: 'information-modal'
        },
        open: this.props.show,
        onClose: this.props.handleHide,
        disableEnforceFocus: true
      }, _react.default.createElement(_IconButton.default, {
        className: "information-modal-close-button",
        onClick: this.props.handleHide
      }, _react.default.createElement(_Close.default, null)), _react.default.createElement(_DialogTitle.default, {
        className: "information-modal__title"
      }, this.props.title), _react.default.createElement(_DialogContent.default, {
        className: "information-modal__content"
      }, this.renderBody(), this.props.terms && this.props.terms.map(function (term) {
        return _react.default.createElement(InformationDefinition, {
          key: term.id,
          term: term,
          boldName: _this4.props.boldTermNames
        });
      }), this.renderImages()));
    }
  }]);

  return InformationModal;
}(_react.Component);

exports.InformationModal = InformationModal;
InformationModal.propTypes = {
  boldTermNames: _propTypes.default.bool,
  title: _propTypes.default.string.isRequired,
  body: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])).isRequired,
  terms: _propTypes.default.arrayOf(_propTypes.default.object),
  images: _propTypes.default.arrayOf(_propTypes.default.object),
  hasLink: _propTypes.default.bool
};
InformationModal.defaultProps = {
  boldTermNames: true,
  images: []
};

var _default = (0, _reduxModal.connectModal)({
  name: 'informationModal'
})(InformationModal); // for testing


exports.default = _default;