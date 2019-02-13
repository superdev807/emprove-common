'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CatalogPhoto = function CatalogPhoto(props) {
  return _react.default.createElement("img", {
    className: (0, _classnames.default)('catalog-photo', props.className),
    src: props.imageUrl,
    alt: props.alt,
    onLoad: props.onLoad,
    onError: props.onError
  });
};

CatalogPhoto.propTypes = {
  alt: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  imageUrl: _propTypes.default.string.isRequired,
  onError: _propTypes.default.func,
  onLoad: _propTypes.default.func
};
var _default = CatalogPhoto;
exports.default = _default;