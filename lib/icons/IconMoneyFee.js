'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconMoneyFee = function IconMoneyFee(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    d: "M0,0h24v24H0V0z"
  }), _react["default"].createElement("circle", {
    cx: "13.1",
    cy: "10.6",
    r: "3.3"
  }), _react["default"].createElement("path", {
    d: "M22.9,4H3.3C3.2,4,3.1,4.1,3.1,4.1v13c0,0.1,0.1,0.2,0.2,0.2h19.6c0.1,0,0.2-0.1,0.2-0.2v-13 C23,4,23,4,22.9,4z M21.7,13.1c-1.4,0-2.5,1.1-2.5,2.5H6.9c0-1.4-1.1-2.5-2.5-2.5V8.2c1.4,0,2.5-1.1,2.5-2.5h12.3 c0,1.4,1.1,2.5,2.5,2.5V13.1z"
  }), _react["default"].createElement("path", {
    d: "M1.3,7.5H0.6v12c0,0.2,0.2,0.4,0.4,0.4h17.6v-0.8H1.3V7.5z"
  }));
};

var _default = IconMoneyFee;
exports["default"] = _default;