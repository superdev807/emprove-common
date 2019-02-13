'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconBgTheme = function IconBgTheme(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M19.5 3.1L3.1 19.5c.1.3.3.6.5.9.2.2.6.4.9.5L20.9 4.5c-.2-.7-.7-1.2-1.4-1.4zM11.9 3L3 11.9v2.8L14.7 3h-2.8zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4v-2l-4 4h2zm-9.7 0h2.8l8.9-8.9V9.3L9.3 21z"
  }));
};

var _default = IconBgTheme;
exports.default = _default;