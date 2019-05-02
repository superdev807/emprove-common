'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconCommunityRequirement = function IconCommunityRequirement(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), _react["default"].createElement("path", {
    d: "M22.1.5h-10c-.5 0-.9.4-.9.9v2.1h-6c-.1 0-.2 0-.2.1L1.1 7.4s-.1.1-.1.2v15.5c0 .2.2.4.4.4h15.4c.2 0 .4-.2.4-.4V10.7l1-.7h3.9c.5 0 .9-.4.9-.9V1.3c0-.5-.4-.8-.9-.8zM3.6 6l1.3-1.3v2.5H2.3L3.6 6zm12.9 16.8H1.8V8h3.4c.2 0 .4-.2.4-.4V4.2h5.6v4.9c0 .5.4.9.9.9h2.4v1.8c0 .2.1.3.2.3s.2 0 .4-.1l1.4-.9v11.7zm5.7-13.6c0 .1-.1.1-.1.1h-3.9c-.1 0-.2 0-.3.1l-2.7 1.8V9.7c0-.2-.2-.4-.4-.4H12c-.1 0-.2-.1-.2-.2V1.4c0-.1.1-.1.1-.1h10.2s.1 0 .1.1v7.8z"
  }), _react["default"].createElement("path", {
    d: "M17.1 5.6c-.9 0-2.5.6-2.5 1.7v1.1h5.1V7.3c-.1-1.1-1.5-1.7-2.6-1.7z"
  }), _react["default"].createElement("circle", {
    cx: "17.1",
    cy: "3.5",
    r: "1.5"
  }), _react["default"].createElement("path", {
    d: "M13.4 19.2H4.8c-.2 0-.4.2-.4.4s.2.4.4.4h8.6c.2 0 .4-.2.4-.4s-.2-.4-.4-.4zM13.4 16.7H4.8c-.2 0-.4.2-.4.4s.2.4.4.4h8.6c.2 0 .4-.2.4-.4s-.2-.4-.4-.4zM5.8 12.8h1.5v1.5H5.8zM8.8 12.8h1.5v1.5H8.8zM11.9 12.8h1.5v1.5h-1.5z"
  }));
};

var _default = IconCommunityRequirement;
exports["default"] = _default;