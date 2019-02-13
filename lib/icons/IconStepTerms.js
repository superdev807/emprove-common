'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconStepTerms = function IconStepTerms(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    fill: "none",
    d: "M0,0h24v24H0V0z"
  }), _react.default.createElement("circle", {
    cx: "17.1",
    cy: "18.6",
    r: "1.3"
  }), _react.default.createElement("path", {
    d: "M21,13.7h-0.3v-0.9c0-1.3-0.7-2.4-1.7-3L19,3c0-1.4-1.1-2.5-2.5-2.5H7c-0.1,0-0.2,0-0.3,0.1L1.4,5.9 C1.4,6,1.3,6,1.3,6.1v13.8c0,1.4,1.1,2.5,2.5,2.5h7.9c0.2,0.6,0.8,1.1,1.6,1.1H21c0.9,0,1.7-0.7,1.7-1.7v-6.5 C22.7,14.5,21.9,13.7,21,13.7z M20,12.8v0.9h-5.7v-0.9c0-1.6,1.3-2.9,2.9-2.9S20,11.2,20,12.8z M6.4,2.1v3.5H2.9L6.4,2.1z M2.1,19.9V6.3h4.7c0.2,0,0.4-0.2,0.4-0.4V1.2h9.4c1,0,1.7,0.8,1.7,1.7l0,6.5c-0.4-0.1-0.8-0.2-1.2-0.2c-2,0-3.6,1.6-3.6,3.6v0.9 h-0.3c-0.9,0-1.7,0.7-1.7,1.7v6.3H3.8C2.9,21.7,2.1,20.9,2.1,19.9z M21.9,21.9c0,0.5-0.4,0.9-0.9,0.9h-7.7c-0.5,0-0.9-0.4-0.9-0.9 v-6.5c0-0.5,0.4-0.9,0.9-0.9h0.6h6.5H21c0.5,0,0.9,0.4,0.9,0.9V21.9z"
  }), _react.default.createElement("path", {
    d: "M5,9h10.4c0.2,0,0.4-0.2,0.4-0.4s-0.2-0.4-0.4-0.4H5c-0.2,0-0.4,0.2-0.4,0.4S4.8,9,5,9z"
  }), _react.default.createElement("path", {
    d: "M5,12.9h4.8c0.2,0,0.4-0.2,0.4-0.4s-0.2-0.4-0.4-0.4H5c-0.2,0-0.4,0.2-0.4,0.4S4.8,12.9,5,12.9z"
  }), _react.default.createElement("path", {
    d: "M9.8,16.1H5c-0.2,0-0.4,0.2-0.4,0.4s0.2,0.4,0.4,0.4h4.8c0.2,0,0.4-0.2,0.4-0.4S10,16.1,9.8,16.1z"
  }));
};

var _default = IconStepTerms;
exports.default = _default;