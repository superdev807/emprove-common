'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./investor-styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Investor = function Investor(props) {
  return _react["default"].createElement("img", {
    className: "investor-image",
    src: props.investor.imageUrl,
    alt: props.investor.name
  });
};

Investor.propTypes = {
  investor: _propTypes["default"].object.isRequired
};
var _default = Investor;
exports["default"] = _default;