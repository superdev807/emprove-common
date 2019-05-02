'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconBlankPriceTag = function IconBlankPriceTag(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, props), _react["default"].createElement("rect", {
    fill: "none",
    width: "24",
    height: "24"
  }), _react["default"].createElement("path", {
    d: "M21.41,11.58l-9-9C12.05,2.22,11.55,2,11,2H4C2.89,2,2,2.89,2,4v7c0,0.55,0.22,1.05,0.59,1.41l8.99,9 C11.95,21.77,12.45,22,13,22c0.55,0,1.05-0.23,1.41-0.59l7-7C21.78,14.05,22,13.55,22,13C22,12.44,21.77,11.94,21.41,11.58z M6.786,9.214c-1.42,0-2.571-1.151-2.571-2.571s1.151-2.571,2.571-2.571c1.42,0,2.571,1.151,2.571,2.571S8.206,9.214,6.786,9.214z"
  }));
};

var _default = IconBlankPriceTag;
exports["default"] = _default;