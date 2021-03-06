'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconUL2Floor = function IconUL2Floor(props) {
  var primary = props.primary || '#878787';
  var secondary = props.secondary || 'none';
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    fill: secondary,
    d: "M0 0h24v24H0z"
  }), _react["default"].createElement("path", {
    d: "M23.581 18.587l-1.713-3.851-1.271-2.854-1.27-2.854-1.27-2.853-.476-1.069a.375.375 0 0 0-.343-.223H6.76a.376.376 0 0 0-.343.223l-3.481 7.823-2.517 5.656a.373.373 0 0 0 .342.527h22.477c.127 0 .245-.064.314-.171s.081-.237.029-.354zm-3.771-6.629l-2.435 2.551-1.629-1.39 3.124-3.273.94 2.112zm-8.936 5.176l-1.629-1.39 6.32-6.619 1.629 1.39-6.32 6.619zm6.727-10.14l.94 2.111-.828.868-1.629-1.39 1.517-1.589zm-2.698-1.359h2.094l.274.617-4.256 4.458-1.63-1.39 3.518-3.685zm-3.994 0h2.957l-5.522 5.784-1.63-1.39 4.195-4.394zm-3.906 0h2.868l-2.61 2.734L4.5 11.26l2.503-5.625zm-5.291 12.73h-.373l2.256-5.069 2.262-2.37.338-.354 1.63 1.39-6.113 6.403zm3.994 0H2.749l5.739-6.011 2.379-2.491 1.63 1.39-6.791 7.112zm3.994 0H6.743l1.983-2.077 1.629 1.39-.655.687zm3.994 0h-2.957l4.49-4.703 1.63 1.39-3.163 3.313zm1.037 0l1.096-1.148 1.325 1.148h-2.421zm1.614-1.691l.263-.275 3.532-3.7.94 2.113-1.75 1.833-1.366 1.431-1.619-1.402zm2.381 1.691l2.685-2.812 1.251 2.812h-3.936z",
    fill: primary
  }));
};

var _default = IconUL2Floor;
exports["default"] = _default;