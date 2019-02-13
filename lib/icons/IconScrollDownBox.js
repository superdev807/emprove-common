'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconScrollDownBox = function IconScrollDownBox(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 50 30"
  }, props), _react.default.createElement("path", {
    d: "M6.4 28.2h37.5c.3 0 .5-.2.5-.5l3.9-25.9H1.7l3.9 25.6c0 .5.4.8.8.8z"
  }), _react.default.createElement("path", {
    d: "M34 23.9H16v-18h18v18z",
    fill: "none"
  }), _react.default.createElement("path", {
    d: "M29 9l1.2 1.2-5.2 5.3-5.2-5.2L21 9l4 4 4-4m0 5.2l1.2 1.2-5.2 5.3-5.2-5.2 1.2-1.2 4 4 4-4.1z",
    fill: "#fff"
  }));
};

var _default = IconScrollDownBox;
exports.default = _default;