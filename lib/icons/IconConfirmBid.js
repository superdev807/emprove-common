'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconConfirmBid = function IconConfirmBid(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    d: "M0,0h24v24H0V0z"
  }), _react["default"].createElement("path", {
    d: "M18.817,3.833h-0.599V2.261c0-0.207-0.168-0.375-0.375-0.375h-1.948c-0.207,0-0.375,0.168-0.375,0.375v1.572 H8.48V2.261c0-0.207-0.168-0.375-0.375-0.375H6.156c-0.207,0-0.375,0.168-0.375,0.375v1.572H5.183 c-1.275,0-2.313,1.042-2.313,2.323l-0.01,13.636c0,1.28,1.042,2.322,2.323,2.322h13.635c1.281,0,2.323-1.042,2.323-2.322V6.156 C21.141,4.875,20.099,3.833,18.817,3.833z M18.817,21.364H5.183c-0.867,0-1.573-0.705-1.573-1.572L3.617,9.578h16.774v10.214 C20.391,20.659,19.685,21.364,18.817,21.364z"
  }), _react["default"].createElement("polygon", {
    points: "10.624,16.385 8.504,14.265 7.444,15.325 10.624,18.505 16.564,12.565 15.504,11.505"
  }));
};

var _default = IconConfirmBid;
exports["default"] = _default;