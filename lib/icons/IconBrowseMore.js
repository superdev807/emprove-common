'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconBrowseMore = function IconBrowseMore(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), _react.default.createElement("path", {
    d: "M9.905 12.317a1.325 1.325 0 1 0-.002-2.65 1.325 1.325 0 0 0 .002 2.65zM15.389 14.113l-.688.692-2.282-2.522-5.071 5.301h11.506z"
  }), _react.default.createElement("path", {
    d: "M22.417 5.858h-1.625l-.307-2.914a.377.377 0 0 0-.412-.334L1.545 4.567a.374.374 0 0 0-.334.412l1.553 14.702a.376.376 0 0 0 .373.336l.039-.002.235-.025v1.027c0 .207.168.375.375.375h18.631a.375.375 0 0 0 .375-.375V6.233a.375.375 0 0 0-.375-.375zM1.996 5.274l17.781-1.879.26 2.463H3.786a.375.375 0 0 0-.375.375v12.433L1.996 5.274zm20.046 15.368H4.161V6.608h17.881v14.034z"
  }));
};

var _default = IconBrowseMore;
exports.default = _default;