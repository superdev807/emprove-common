'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconArrowHorizontal = function IconArrowHorizontal(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 18 18"
  }, props), _react.default.createElement("path", {
    fill: "#d98232",
    d: "M4.8 4l8.4 5-8.4 5 3-5z"
  }), _react.default.createElement("path", {
    fill: "#ff9e3c",
    d: "M7.8 9l-3-5 8.4 5z"
  }));
};

var _default = IconArrowHorizontal;
exports.default = _default;