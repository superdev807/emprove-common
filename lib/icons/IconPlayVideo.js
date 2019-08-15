'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconPlayVideo = function IconPlayVideo(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 36 36",
    width: "36",
    height: "36"
  }, props), _react["default"].createElement("circle", {
    cx: "18",
    cy: "18",
    r: "15.938",
    opacity: ".9",
    fill: "#fff"
  }), _react["default"].createElement("path", {
    d: "M36 0H0v36h36V0z",
    fill: "none"
  }), _react["default"].createElement("path", {
    d: "M18 35.063C8.592 35.063.938 27.409.938 18S8.592.938 18 .938 35.063 8.591 35.063 18 27.409 35.063 18 35.063zm0-33C9.213 2.063 2.063 9.213 2.063 18S9.213 33.938 18 33.938 33.938 26.788 33.938 18 26.788 2.063 18 2.063z"
  }), _react["default"].createElement("path", {
    d: "M15.01 11.808v12.383L24.74 18l-9.73-6.192z"
  }));
};

var _default = IconPlayVideo;
exports["default"] = _default;