'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconCompareCheck = function IconCompareCheck(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), _react["default"].createElement("path", {
    d: "M19.133 3.186L9.037 13.291 5.28 9.534l-3.757 3.757 7.514 7.523L22.89 6.943l-3.757-3.757zM4.025 13.291L5.28 12.08l3.757 3.712L19.133 5.679l1.255 1.264L9.037 18.294l-5.012-5.003z"
  }));
};

var _default = IconCompareCheck;
exports["default"] = _default;