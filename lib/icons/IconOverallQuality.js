'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconOverallQuality = function IconOverallQuality(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), _react["default"].createElement("path", {
    d: "M19.7 1.9H4.3c-1.4 0-2.6 1.2-2.6 2.6v15.4c0 1.4 1.2 2.6 2.6 2.6h15.4c1.4 0 2.6-1.2 2.6-2.6V4.5c0-1.4-1.2-2.6-2.6-2.6zm1.9 18c0 1-.8 1.8-1.8 1.8H4.3c-1 0-1.8-.8-1.8-1.8V4.5c0-1 .8-1.8 1.8-1.8h15.4c1 0 1.8.8 1.8 1.8v15.4z"
  }), _react["default"].createElement("path", {
    d: "M17.8 10.5l-4-.3-1.5-3.6c-.1-.3-.6-.3-.7 0l-1.5 3.6-4 .3c-.1 0-.3.1-.3.3 0 .1 0 .3.1.4l3 2.6-.9 3.9c0 .1 0 .3.1.4.1.1.3.1.4 0l3.4-2 3.4 2c.1 0 .1.1.2.1s.2 0 .2-.1c.1-.1.2-.2.1-.4l-.9-3.9 3-2.6c.1-.1.2-.3.1-.4.1-.1 0-.3-.2-.3z"
  }));
};

var _default = IconOverallQuality;
exports["default"] = _default;