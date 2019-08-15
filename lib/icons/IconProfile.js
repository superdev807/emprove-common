'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconProfile = function IconProfile(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    d: "M0-.3h24v24H0v-24z"
  }), _react["default"].createElement("path", {
    d: "M20.6 22.2H3.4c-.2 0-.4-.2-.4-.4v-2.2c0-2.5 4-4.6 9-4.6s9 2.1 9 4.7v2.2c0 .2-.2.3-.4.3zm-16.8-.7h16.5v-1.8c0-2.1-3.8-3.9-8.2-3.9s-8.2 1.8-8.2 3.9v1.8zm8.2-7.9c-2.6 0-4.7-2.1-4.7-4.7 0-.2.2-.4.4-.4s.4.2.4.5c0 2.2 1.8 3.9 3.9 3.9s3.9-1.8 3.9-3.9c0-.2.2-.4.4-.4s.4.2.4.4c0 2.5-2.1 4.6-4.7 4.6zm5.4-5.3H6.6c-.2 0-.4-.2-.4-.4 0-.9.4-1.4.8-1.6.1-3.1 2.6-4.1 2.7-4.1h.3c.1.1.2.2.2.3v2.3h.3V2c0-.5.4-.9.9-.9h1.1c.5 0 .9.4.9.9v2.9h.3V2.5c0-.1.1-.2.2-.3.1-.1.2-.1.3 0 .1 0 2.5 1 2.7 4.1.3.2.8.6.8 1.6 0 .1 0 .2-.1.3 0 0-.1.1-.2.1zM7 7.5h10c-.1-.5-.4-.6-.5-.6-.2 0-.3-.2-.3-.4 0-2-1-3-1.7-3.4v2.1c0 .2-.2.4-.4.4H13c-.2 0-.4-.2-.4-.4V2c0-.1-.1-.2-.2-.2h-1.1c-.1 0-.2.1-.2.2v3.2c0 .2-.2.4-.4.4h-.9c-.2 0-.4-.2-.4-.4V3.1c-.6.5-1.6 1.5-1.6 3.4 0 .2-.1.3-.3.4 0 0-.4.1-.5.6z"
  }));
};

var _default = IconProfile;
exports["default"] = _default;