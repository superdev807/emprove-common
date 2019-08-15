'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconDoubleArrowsDown = function IconDoubleArrowsDown(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: 0,
    y: 0,
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    d: "M23.9 23.9L.1 24V0h23.8v23.9z"
  }), _react["default"].createElement("path", {
    fill: "#888",
    d: "M17.3 4.188l1.645 1.631-6.942 7-7-6.942 1.631-1.645 5.355 5.299L17.3 4.188m.029 6.971l1.645 1.631-6.942 7-7-6.942 1.631-1.645 5.355 5.299 5.311-5.343z"
  }));
};

var _default = IconDoubleArrowsDown;
exports["default"] = _default;