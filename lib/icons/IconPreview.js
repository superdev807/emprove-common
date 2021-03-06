'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconPreview = function IconPreview(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, props), _react["default"].createElement("path", {
    d: "M24 0H0v24h24V0z",
    fill: "none"
  }), _react["default"].createElement("path", {
    d: "M21.9 21.4H9.3c-.8 0-1.4-.6-1.4-1.4v-1.7c0-.2.2-.4.4-.4s.4.2.4.4V20c0 .4.3.7.7.7h12.7c.4 0 .7-.3.7-.7V5.5l-4.4-4.4h-9c-.3 0-.6.3-.6.6v6c0 .2-.2.4-.4.4-.4 0-.6-.1-.6-.3v-6C7.8 1 8.4.4 9.2.4h9.2c.1 0 .2 0 .3.1l4.6 4.6c.1.1.1.2.1.3V20c0 .8-.7 1.4-1.5 1.4z"
  }), _react["default"].createElement("path", {
    d: "M22.7 5.5h-4.2c-.2 0-.4-.2-.4-.4V1c0-.2.1-.3.2-.3.1-.1.3 0 .4.1L23 4.9c.1.1.1.3.1.4-.1.1-.2.2-.4.2zm-3.8-.7h2.9l-2.9-2.9v2.9zM7.2 17.8l-.3.2v.7l-4.5 4.6L1 21.9l4.5-4.5h.8l.2-.3"
  }), _react["default"].createElement("path", {
    d: "M10.8 19.1c-3.4 0-6.1-2.8-6.1-6.1s2.8-6.1 6.1-6.1 6.1 2.8 6.1 6.1-2.8 6.1-6.1 6.1zm0-11.5c-3 0-5.4 2.4-5.4 5.4s2.4 5.4 5.4 5.4 5.4-2.4 5.4-5.4-2.5-5.4-5.4-5.4z"
  }), _react["default"].createElement("path", {
    d: "M13.4 11.7H8.1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5.4c.3 0 .5.2.5.5s-.3.5-.6.5z"
  }), _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M16 14.5h-5.7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5H16c.3 0 .5.2.5.5s-.2.5-.5.5z"
  })));
};

var _default = IconPreview;
exports["default"] = _default;