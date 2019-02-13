'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconPassword = function IconPassword(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("circle", {
    cx: "12",
    cy: "15.3",
    r: "1.9"
  }), _react.default.createElement("path", {
    d: "M17.7 22.3H6.3c-1.2 0-2.3-1-2.3-2.3v-9.5c0-1.2 1-2.3 2.3-2.3h.6V6.8C6.9 4 9.2 1.7 12 1.7s5.1 2.3 5.1 5.1v1.5h.6c1.2 0 2.3 1 2.3 2.3V20c-.1 1.3-1.1 2.3-2.3 2.3zM6.3 9.1c-.8 0-1.5.7-1.5 1.5V20c0 .8.7 1.5 1.5 1.5h11.3c.8 0 1.5-.7 1.5-1.5v-9.5c0-.8-.7-1.5-1.5-1.5h-.9c-.2 0-.4-.2-.4-.4V6.8c0-2.4-2-4.4-4.4-4.4s-4.4 2-4.4 4.4v1.9c0 .2-.2.4-.4.4h-.8z"
  }), _react.default.createElement("path", {
    d: "M16.7 9.1H7.3c-.2 0-.4-.2-.4-.4s.2-.4.4-.4h9.5c.2 0 .4.2.4.4s-.3.4-.5.4z"
  }));
};

var _default = IconPassword;
exports.default = _default;