'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconExpiresOn = function IconExpiresOn(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    d: "M0,0h24v24H0V0z"
  }), _react["default"].createElement("path", {
    d: "M18.8,3.8h-0.6V2.3c0-0.2-0.2-0.4-0.4-0.4h-1.9c-0.2,0-0.4,0.2-0.4,0.4v1.6h-7V2.3c0-0.2-0.2-0.4-0.4-0.4H6.2 c-0.2,0-0.4,0.2-0.4,0.4v1.6H5.2C4.6,3.8,4.1,4,3.7,4.4C3.5,4.5,3.4,4.6,3.3,4.8C3,5.2,2.9,5.6,2.9,6.2l0,13.6 c0,1.3,1,2.3,2.3,2.3h13.6c1.3,0,2.3-1,2.3-2.3V6.2C21.1,4.9,20.1,3.8,18.8,3.8z M18.8,21.4H5.2c-0.9,0-1.6-0.7-1.6-1.6l0-11.4 h16.8v11.4C20.4,20.7,19.7,21.4,18.8,21.4z"
  }), _react["default"].createElement("rect", {
    x: "11",
    y: "10.3",
    width: "2",
    height: "6"
  }), _react["default"].createElement("rect", {
    x: "11",
    y: "17.9",
    width: "2",
    height: "2"
  }));
};

var _default = IconExpiresOn;
exports["default"] = _default;