'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconAddCreditCard = function IconAddCreditCard(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: 0,
    y: 0,
    viewBox: "0 0 24 24",
    xmlSpace: "preserve"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), _react["default"].createElement("path", {
    className: "prefix__st1",
    d: "M18.799 7.605V4.138A2.14 2.14 0 0016.661 2H2.554A2.14 2.14 0 00.416 4.138v10.58a2.14 2.14 0 002.138 2.138h6.503C10.03 19.838 12.833 22 16.136 22c4.107 0 7.448-3.341 7.448-7.448 0-3.167-1.991-5.872-4.785-6.947zM1.166 4.138A1.39 1.39 0 012.554 2.75H16.66a1.39 1.39 0 011.388 1.388v1.763H1.166V4.138zm7.688 11.968h-6.3a1.39 1.39 0 01-1.388-1.388v-5.29h9.579l.001-.001a7.416 7.416 0 00-1.892 6.679zm7.282 5.144c-3.693 0-6.698-3.004-6.698-6.698s3.004-6.698 6.698-6.698 6.698 3.004 6.698 6.698-3.005 6.698-6.698 6.698z"
  }), _react["default"].createElement("path", {
    className: "prefix__st1",
    d: "M17.108 10.455h-1.475v3.002H12.63v1.563h3.003v2.985h1.475V15.02h3.02v-1.563h-3.02z"
  }));
};

var _default = IconAddCreditCard;
exports["default"] = _default;