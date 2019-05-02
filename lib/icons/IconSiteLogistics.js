'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconSiteLogistics = function IconSiteLogistics(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), _react["default"].createElement("path", {
    d: "M8 19.7v-5.2l-2-3.7.6-2.3.9 1.3h4V8.5h-3L6.9 5.8c-.3-.4-.7-.6-1.2-.6-.1 0-.3 0-.4.1L.9 6.6v4.2h1.2v-3l2-.5L.9 19.7h1.5l2.3-6.6 1.9 2.5v4.1H8z"
  }), _react["default"].createElement("circle", {
    cx: "7.4",
    cy: "3.5",
    r: "1.5"
  }), _react["default"].createElement("path", {
    d: "M15.1 12.3v4.4h-4.3V21H7.1v1.2H12v-4.3h4.4v-4.3h6.9v-1.3z"
  }));
};

var _default = IconSiteLogistics;
exports["default"] = _default;