'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconCostStep2 = function IconCostStep2(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 52 52"
  }, props), _react["default"].createElement("path", {
    d: "M26 4.3C14 4.3 4.3 14 4.3 26S14 47.7 26 47.7 47.7 38 47.7 26 38 4.3 26 4.3z"
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h52v52H0V0z"
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M14 14h24v24H14z"
  }), _react["default"].createElement("path", {
    fill: "#fff",
    d: "M36.3 19.4l-10-3.5h-.2l-10.3 3.7c-.1.1-.2.2-.2.4v12.4c0 .2.1.3.2.3l9.8 3.8h.2l10.5-4c.1-.1.2-.2.2-.3V19.8c0-.2-.1-.3-.2-.4zm-9.8 8.9v-1.6l9.3 3.2v1.7l-9.3-3.3zm0-2.4v-1.7l9.3 3.2v1.7l-9.3-3.2zm0-2.4v-1.7l9.3 3.2v1.7l-9.3-3.2zm0-2.5v-1.7l9.3 3.2v1.7L26.5 21zm9.3.7l-9.3-3.2v-1.7l9.3 3.2v1.7zm-10.1-4.9v11.5l-2.2.8v-6.8c0-.1-.1-.2-.2-.3-.1-.1-.2-.1-.3 0l-3.4 1.2c-.1.1-.2.2-.2.4v7.1l-3.3 1.2V20.3l9.6-3.5zm-5.5 13.6v-6.5l2.6-.9v6.5l-2.6.9zm5.4 5.4l-8.8-3.4 3-1.1h.1l3.4-1.2 2.7-1 9 3.1-9.4 3.6z"
  }));
};

var _default = IconCostStep2;
exports["default"] = _default;