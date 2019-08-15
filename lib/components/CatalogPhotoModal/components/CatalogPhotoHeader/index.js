'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CatalogPhotoHeader = function CatalogPhotoHeader(props) {
  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])('catalog-photo-header', props.className)
  }, _react["default"].createElement("div", {
    className: "catalog-photo-header__title"
  }, props.loading ? _react["default"].createElement("span", {
    className: "catalog-photo-header__loading-text"
  }, "Loading Image...") : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("span", {
    className: "catalog-photo-header__style-and-area"
  }, props.designStyle, " ", props.homeArea), ' | ', _react["default"].createElement("span", {
    className: "catalog-photo-header__quality"
  }, props.qualityStandard))));
};

CatalogPhotoHeader.propTypes = {
  className: _propTypes["default"].string,
  loading: _propTypes["default"].bool
};
CatalogPhotoHeader.defaultProps = {
  loading: false
};
var _default = CatalogPhotoHeader;
exports["default"] = _default;