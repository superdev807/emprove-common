'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconSnappriceCircleColor = function IconSnappriceCircleColor(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    d: "M23.5 11.117C23.5 5.253 18.729.483 12.866.483h-2.232v2.513C5.034 3.066.5 7.637.5 13.253c0 5.66 4.605 10.265 10.265 10.265 5.628 0 10.208-4.553 10.26-10.169H23.5v-2.232z"
  }), _react["default"].createElement("path", {
    d: "M12.812 3.288v7.883h7.883a7.883 7.883 0 0 0-7.883-7.883z",
    fill: "#ffbc6f"
  }), _react["default"].createElement("path", {
    d: "M15.207 19.714a7.9 7.9 0 0 0 3.518-6.572h-7.312l3.794 6.572z",
    fill: "#49baee"
  }), _react["default"].createElement("path", {
    d: "M4.269 17.507a7.901 7.901 0 0 0 6.573 3.518 7.86 7.86 0 0 0 3.508-.818l-3.685-6.395-6.396 3.695z",
    fill: "#6167ce"
  }), _react["default"].createElement("path", {
    d: "M10.841 5.259a7.883 7.883 0 0 0-7.883 7.883 7.86 7.86 0 0 0 .818 3.508l7.065-4.08V5.259z",
    fill: "#8568b1"
  }));
};

var _default = IconSnappriceCircleColor;
exports["default"] = _default;