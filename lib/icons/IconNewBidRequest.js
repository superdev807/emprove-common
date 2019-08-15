'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconNewBidRequest = function IconNewBidRequest(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    d: "M0,0h24v24H0V0z"
  }), _react["default"].createElement("path", {
    d: "M16.2,8.7c-0.3,0-0.6,0-0.9,0.1c0-0.3,0.1-0.6,0.1-1c0-4.1-3.3-7.4-7.4-7.4S0.6,3.7,0.6,7.8s3.3,7.4,7.4,7.4 c0.3,0,0.7,0,1-0.1c0,0.3-0.1,0.6-0.1,0.9c0,1.2,0.3,2.5,0.9,3.6L8.4,22c-0.1,0.2-0.1,0.4,0,0.5c0.1,0.2,0.3,0.2,0.5,0.2l3.3-0.7 c1.2,0.8,2.5,1.2,3.9,1.2c4,0,7.2-3.3,7.2-7.2S20.2,8.7,16.2,8.7z M7.9,14.4c-3.7,0-6.6-3-6.6-6.6s3-6.6,6.6-6.6s6.6,3,6.6,6.6 c0,0.4,0,0.7-0.1,1.1c-0.5,2.8-2.6,4.9-5.4,5.4C8.7,14.4,8.3,14.4,7.9,14.4z M16.9,19.1v1h-1.4v-1c-0.9-0.2-1.6-0.8-1.7-1.8h1 c0.1,0.5,0.4,1,1.4,1c1,0,1.2-0.5,1.2-0.8c0-0.4-0.2-0.8-1.4-1.1c-1.3-0.3-2.2-0.8-2.2-1.9c0-0.9,0.7-1.5,1.6-1.7v-1h1.4v1 c1,0.2,1.4,1,1.5,1.7h-1c0-0.6-0.3-1-1.1-1c-0.8,0-1.2,0.3-1.2,0.8c0,0.4,0.3,0.7,1.4,1c1,0.3,2.2,0.7,2.2,2 C18.5,18.4,17.8,18.9,16.9,19.1z"
  }), _react["default"].createElement("polygon", {
    points: "8.8,4.7 7.1,4.7 7.1,6.9 4.8,6.9 4.8,8.6 7.1,8.6 7.1,10.9 8.8,10.9 8.8,8.6 11.1,8.6 11.1,6.9  8.8,6.9"
  }));
};

var _default = IconNewBidRequest;
exports["default"] = _default;