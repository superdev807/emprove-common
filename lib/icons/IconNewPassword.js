'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconNewPassword = function IconNewPassword(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    d: "M0,0h24v24H0V0z"
  }), _react["default"].createElement("path", {
    d: "M17.7,8.3h-0.6V6.8c0-2.8-2.3-5.1-5.1-5.1S6.9,4,6.9,6.8v1.5H6.3c-1.2,0-2.3,1-2.3,2.3V20 c0,1.2,1,2.3,2.3,2.3h11.3c1.2,0,2.3-1,2.3-2.3v-9.5C19.9,9.3,18.9,8.3,17.7,8.3z M12,2.4c2.4,0,4.4,2,4.4,4.4v1.5H7.6V6.8 C7.6,4.4,9.6,2.4,12,2.4z M19.2,20c0,0.8-0.7,1.5-1.5,1.5H6.3c-0.8,0-1.5-0.7-1.5-1.5v-9.5C4.8,9.7,5.5,9,6.3,9h11.3 c0.8,0,1.5,0.7,1.5,1.5L19.2,20z"
  }), _react["default"].createElement("path", {
    d: "M15.6,14.2L13.3,14l-0.9-2.2c-0.1-0.3-0.6-0.3-0.7,0l-1,2.2l-2.4,0.2c-0.2,0-0.4,0.1-0.4,0.3 c0,0.1,0.1,0.3,0.2,0.4l1.8,1.5l-0.5,2.3c0,0.1,0,0.3,0.1,0.4s0.3,0.1,0.4,0l2-1.2l2,1.2c0.2,0.1,0.4,0.1,0.5,0 c0.1-0.1,0.1-0.1,0-0.4L14,16.4l1.8-1.5c0.1-0.1,0.3-0.3,0.2-0.5C15.9,14.3,15.8,14.2,15.6,14.2z"
  }));
};

var _default = IconNewPassword;
exports["default"] = _default;