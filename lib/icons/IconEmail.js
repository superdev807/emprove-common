'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconEmail = function IconEmail(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react["default"].createElement("path", {
    d: "M21.1 21.4H3c-1.5 0-2.6-1.2-2.6-2.6V5.2C.4 3.7 1.6 2.6 3 2.6h18.1c1.5 0 2.6 1.2 2.6 2.6v13.6c0 1.4-1.2 2.6-2.6 2.6zM3 3.3c-1 0-1.9.8-1.9 1.9v13.6c0 1 .8 1.9 1.9 1.9h18.1c1 0 1.9-.8 1.9-1.9V5.2c0-1-.8-1.9-1.9-1.9H3z"
  }), _react["default"].createElement("path", {
    d: "M12 12.4c-.1 0-.2 0-.2-.1L1.3 3.8c-.1-.1-.2-.4 0-.5.1-.2.4-.2.5-.1L12 11.5l10.3-8.2c.2-.1.4-.1.5.1.1.2.1.4-.1.5l-10.5 8.3c0 .1-.1.2-.2.2z"
  }));
};

var _default = IconEmail;
exports["default"] = _default;