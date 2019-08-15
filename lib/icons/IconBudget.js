'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconBudget = function IconBudget(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), _react["default"].createElement("path", {
    d: "M22.5 4.3H6.6c-.1 0-.1 0-.2.1L1.3 7.9c-.1 0-.2.2-.2.3v11.1c0 .2.2.4.4.4h15.6c.1 0 .1 0 .2-.1l5.4-3.5c.1-.1.2-.2.2-.3V4.7c0-.2-.2-.4-.4-.4zm-.4 9.2L16.6 17h-3.8v-1.5h3.9c.1 0 .1 0 .2-.1l5.2-3.3v1.4zM5.6 8.7v1.5H1.9V8.7h3.7zm0 2.3v1.5H1.9V11h3.7zm0 2.3v1.5H1.9v-1.5h3.7zm0 2.2V17H1.9v-1.5h3.7zM12.3 8c-.1.1-.2.2-.2.3v10.6H6.3V8.5L11 5.1h5.5L12.3 8zm5.5-2.9h3.4L16.6 8h-3l4.2-2.9zm4.3 6.2l-5.5 3.5h-3.8v-1.5h3.9c.1 0 .1 0 .2-.1l5.2-3.3v1.4zm0-2.3l-5.5 3.5h-3.8V11h3.9c.1 0 .1 0 .2-.1l5.2-3.3V9zm0-2.3l-5.5 3.5h-3.8V8.7h3.9c.1 0 .1 0 .2-.1l5.2-3.3v1.4zM6.7 5.1h3L5.8 8H2.5l4.2-2.9zM1.9 17.8h3.7v1.1H1.9v-1.1zM17 18.9h-4.1v-1.1h3.9c.1 0 .1 0 .2-.1l5.2-3.3v1.2L17 18.9z"
  }), _react["default"].createElement("path", {
    d: "M9.4 13.3c-.9-.2-1.2-.5-1.2-.9s.4-.8 1.1-.8c.7 0 1 .3 1 .9h.9c0-.7-.5-1.3-1.3-1.5v-.9H8.7v.9c-.8.2-1.4.7-1.4 1.5 0 .9.8 1.4 1.9 1.7 1 .2 1.2.6 1.2 1 0 .3-.2.7-1.1.7-.8 0-1.2-.4-1.2-.9h-.9c0 .9.7 1.4 1.5 1.6v.9h1.2v-.9c.8-.2 1.4-.6 1.4-1.4 0-1.3-1-1.7-1.9-1.9z"
  }));
};

var _default = IconBudget;
exports["default"] = _default;