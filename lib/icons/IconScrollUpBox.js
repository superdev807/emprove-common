'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconScrollUpBox = function IconScrollUpBox(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 50 30"
  }, props), _react["default"].createElement("path", {
    d: "M43.6 1.8H6.1c-.2 0-.5.2-.5.5L1.7 28.2h46.7l-4-25.7c0-.4-.4-.7-.8-.7z"
  }), _react["default"].createElement("path", {
    d: "M16 6.1h18v18H16v-18z",
    fill: "none"
  }), _react["default"].createElement("path", {
    d: "M21 21l-1.2-1.2 5.2-5.2 5.2 5.2L29 21l-4-4-4 4m0-5.2l-1.2-1.2L25 9.3l5.2 5.2-1.2 1.3-4-4-4 4z",
    fill: "#fff"
  }));
};

var _default = IconScrollUpBox;
exports["default"] = _default;