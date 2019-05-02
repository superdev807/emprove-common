'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconUL2ElectricalWiring = function IconUL2ElectricalWiring(props) {
  var primary = props.primary || '#878787';
  var secondary = props.secondary || 'none';
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: 0,
    y: 0,
    viewBox: "0 0 24 24",
    xmlSpace: "preserve"
  }, props), _react["default"].createElement("path", {
    fill: secondary,
    d: "M0 0h24v24H0z"
  }), _react["default"].createElement("path", {
    fill: primary,
    d: "M15.951 5.891h-1.963v-.236a.93.93 0 0 0-.929-.93H12.5V2.154h-1v2.571h-.56c-.512 0-.929.417-.929.958 0 .074.026.139.042.208H8.049c-.566 0-1.027.46-1.027 1.026v14.276c0 .566.461 1.027 1.027 1.027h7.901c.566 0 1.027-.461 1.027-1.027V6.918a1.026 1.026 0 0 0-1.026-1.027zm-5.01-.416h2.118a.18.18 0 0 1 .179.18v.208h-2.297c-.099 0-.179-.081-.179-.208 0-.099.08-.18.179-.18zm5.287 15.719a.277.277 0 0 1-.277.277H8.049a.277.277 0 0 1-.277-.277V6.918c0-.152.124-.276.277-.276h7.901c.153 0 .277.124.277.276v14.276z"
  }), _react["default"].createElement("path", {
    fill: primary,
    d: "M13.5 7.819h-3.001a1.72 1.72 0 0 0-1.717 1.717v2.204a1.72 1.72 0 0 0 1.717 1.717H13.5a1.72 1.72 0 0 0 1.717-1.717V9.536A1.72 1.72 0 0 0 13.5 7.819zm.967 3.921a.968.968 0 0 1-.967.967h-3.001a.968.968 0 0 1-.967-.967V9.536c0-.533.434-.967.967-.967H13.5c.533 0 .967.434.967.967v2.204z"
  }), _react["default"].createElement("path", {
    fill: primary,
    d: "M13.195 8.887a.375.375 0 0 0-.375.375v1.141a.375.375 0 0 0 .75 0V9.262a.375.375 0 0 0-.375-.375zM11.216 10.402v-1.14a.375.375 0 0 0-.75 0v1.141a.375.375 0 1 0 .75-.001zM12 11.019c-.496 0-.899.544-.899 1.214 0 .012.002.022.003.034h1.792c0-.011.003-.022.003-.034 0-.67-.403-1.214-.899-1.214zM13.5 14.655h-3.001a1.72 1.72 0 0 0-1.717 1.717v2.205a1.72 1.72 0 0 0 1.717 1.717H13.5a1.72 1.72 0 0 0 1.717-1.717v-2.205a1.72 1.72 0 0 0-1.717-1.717zm.967 3.922a.968.968 0 0 1-.967.967h-3.001a.968.968 0 0 1-.967-.967v-2.205c0-.533.434-.967.967-.967H13.5c.533 0 .967.434.967.967v2.205z"
  }), _react["default"].createElement("path", {
    fill: primary,
    d: "M13.195 15.723a.375.375 0 0 0-.375.375v1.141a.375.375 0 0 0 .75 0v-1.141a.375.375 0 0 0-.375-.375zM11.216 17.239v-1.141a.375.375 0 0 0-.75 0v1.141a.375.375 0 0 0 .75 0zM12 17.856c-.496 0-.899.544-.899 1.214 0 .012.002.022.003.034h1.792c0-.011.003-.022.003-.034 0-.671-.403-1.214-.899-1.214z"
  }));
};

var _default = IconUL2ElectricalWiring;
exports["default"] = _default;