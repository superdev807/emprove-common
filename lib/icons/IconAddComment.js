'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconAddComment = function IconAddComment(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    d: "M0,0h24v24H0V0z"
  }), _react["default"].createElement("path", {
    d: "M20.8,1.9H3.2c-0.7,0-1.3,0.6-1.3,1.3v13.6c0,0.7,0.6,1.3,1.3,1.3h4.5v4.3c0,0.3,0.2,0.6,0.5,0.7 c0.1,0,0.2,0.1,0.3,0.1c0.2,0,0.4-0.1,0.6-0.2l4.8-4.9h6.8c0.7,0,1.2-0.6,1.2-1.2V3C21.9,2.4,21.4,1.9,20.8,1.9z M21.2,16.8 c0,0.3-0.2,0.5-0.5,0.5h-6.9c-0.1,0-0.2,0-0.3,0.1l-5,5l0,0v-4.7c0-0.2-0.2-0.4-0.4-0.4H3.2c-0.3,0-0.6-0.2-0.6-0.6V3.1 c0-0.3,0.2-0.5,0.5-0.5h17.7c0.2,0,0.4,0.2,0.4,0.4V16.8L21.2,16.8z"
  }), _react["default"].createElement("polygon", {
    points: "13,4.8 10.9,4.8 10.9,9 6.6,9 6.6,11.2 10.9,11.2 10.9,15.4 13,15.4 13,11.2 17.2,11.2 17.2,9 13,9  "
  }));
};

var _default = IconAddComment;
exports["default"] = _default;