'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconFeatureCabinets = function IconFeatureCabinets(props) {
  var primary = props.primary || '#878787';
  var secondary = props.secondary || 'none';
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: 0,
    y: 0,
    viewBox: "0 0 24 24",
    xmlSpace: "preserve"
  }, props), _react.default.createElement("path", {
    fill: secondary,
    d: "M0 0h24v24H0z"
  }), _react.default.createElement("path", {
    fill: primary,
    d: "M21.982 1.698H2.018a.375.375 0 0 0-.375.375v18.229c0 .207.168.375.375.375H3.2v1.251c0 .207.168.375.375.375h16.85a.375.375 0 0 0 .375-.375v-1.251h1.183a.375.375 0 0 0 .375-.375V2.073a.377.377 0 0 0-.376-.375zm-.906.75l-1.227 1.228h-5.717l-1.227-1.228h8.171zm-1.471 1.977v13.5h-5.229v-13.5h5.229zm-7.23-1.446l1.252 1.251v13.915l-1.252 1.251V2.979zm-1.28-.531L9.868 3.675H4.15L2.923 2.448h8.172zm.53.53v16.417l-1.251-1.25V4.23l1.251-1.252zM9.624 4.425v13.5h-5.23v-13.5h5.23zM2.393 2.978L3.644 4.23v13.915l-1.251 1.25V2.978zm.531 16.948l1.25-1.251h5.669l1.25 1.251H2.924zm17.125 1.626H3.95v-.876h16.1v.876zm.375-1.626h-7.519l1.252-1.251h5.668l1.252 1.251h-.653zm1.183-.53l-1.252-1.251V4.23l1.252-1.251v16.417z"
  }), _react.default.createElement("path", {
    fill: primary,
    d: "M8.009 13.465a1.078 1.078 0 1 0 0-2.157 1.078 1.078 0 0 0 0 2.157zm0-1.406a.328.328 0 1 1 0 .656.328.328 0 0 1 0-.656zM15.99 13.465a1.078 1.078 0 1 0 0-2.157 1.078 1.078 0 0 0 0 2.157zm0-1.406a.328.328 0 1 1 0 .656.328.328 0 0 1 0-.656z"
  }));
};

var _default = IconFeatureCabinets;
exports.default = _default;