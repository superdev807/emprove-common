'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconEditProfile = function IconEditProfile(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    fill: "none",
    d: "M0,0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M20.6,5.6h-0.8L20,5.4c0.5-0.5,0.5-1.4,0-2L17.6,1c-0.5-0.5-1.5-0.5-2,0l-4.5,4.6H7.3C6,5.6,5,6.6,5,7.8v3.9 l0,0l-3.6,3.6l0,0l0,0l-0.1,0.1c-0.1,0.1-0.1,0.2-0.1,0.3v3.9c0,0.2,0.2,0.4,0.4,0.4H5v1.1c0,1.3,1,2.3,2.3,2.3h13.3 c1.3,0,2.3-1,2.3-2.3V7.8C22.9,6.6,21.8,5.6,20.6,5.6z M17.4,6.9l-3.3-3.4L14.6,3L18,6.4L17.4,6.9z M5.5,19l-3.3-3.4L13.6,4.1 l3.3,3.4L5.5,19z M5.7,7.8c0-0.8,0.7-1.5,1.5-1.5h3.1L5.7,11V7.8z M1.9,16.4l2.8,2.9H1.9V16.4z M22.1,21.2c0,0.8-0.7,1.5-1.5,1.5 H7.3c-0.8,0-1.5-0.7-1.5-1.5v-1.3L18.1,7.3l1-1h1.5c0.8,0,1.5,0.7,1.5,1.5V21.2z"
  }), _react.default.createElement("path", {
    d: "M13.9,16.6c-1.4,0-4.3,0.7-4.3,2.1v0.7h8.6v-0.7C18.2,17.4,15.3,16.6,13.9,16.6z"
  }), _react.default.createElement("path", {
    d: "M16.1,12.8c0-0.7-0.3-1.2-0.8-1.6l-3,3c0.4,0.5,1,0.8,1.6,0.8C15.1,15,16.1,14,16.1,12.8z"
  }));
};

var _default = IconEditProfile;
exports.default = _default;