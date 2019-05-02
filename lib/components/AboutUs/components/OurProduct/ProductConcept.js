'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./product-concept-styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProductConcept = function ProductConcept(props) {
  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])('product-concept', props.className)
  }, _react["default"].createElement("div", {
    className: "product-concept__icon"
  }, props.concept.icon), _react["default"].createElement("div", {
    className: "product-concept__name"
  }, props.concept.name), _react["default"].createElement("p", {
    className: "product-concept__description"
  }, props.concept.description));
};

ProductConcept.propTypes = {
  concept: _propTypes["default"].object.isRequired,
  className: _propTypes["default"].string
};
var _default = ProductConcept;
exports["default"] = _default;