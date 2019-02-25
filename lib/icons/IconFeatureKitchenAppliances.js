'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconFeatureKitchenAppliances = function IconFeatureKitchenAppliances(props) {
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
    d: "M21.982 3.205h-2.998V2.173a.375.375 0 0 0-.375-.375h-5.203a.375.375 0 0 0-.375.375v1.031h-2.062V2.173a.375.375 0 0 0-.375-.375H5.391a.375.375 0 0 0-.375.375v1.031H2.018a.375.375 0 0 0-.375.375V20.2c0 .207.168.375.375.375H3.2v1.251c0 .207.168.375.375.375h16.85a.375.375 0 0 0 .375-.375v-1.251h1.183a.375.375 0 0 0 .375-.375V3.58a.377.377 0 0 0-.376-.375zm-16.591.75h16.215v3.791H2.393V3.955h2.998zM20.05 21.452H3.95v-.876h16.1v.876zm.375-1.626H2.393V8.496h19.214v11.33h-1.182z"
  }), _react.default.createElement("path", {
    fill: primary,
    d: "M18.609 9.746H5.391a.375.375 0 0 0-.375.375v8.081c0 .207.168.375.375.375h13.218a.375.375 0 0 0 .375-.375v-8.081a.375.375 0 0 0-.375-.375zm-.375 8.081H5.766v-7.331h12.468v7.331zM6.095 6.928a1.078 1.078 0 1 0 0-2.157 1.078 1.078 0 0 0 0 2.157zm0-1.406a.328.328 0 1 1 0 .656.328.328 0 0 1 0-.656zM10.031 6.928a1.078 1.078 0 1 0 0-2.157 1.078 1.078 0 0 0 0 2.157zm0-1.406a.328.328 0 1 1 0 .656.328.328 0 0 1 0-.656zM13.969 6.928a1.078 1.078 0 1 0 0-2.157 1.078 1.078 0 0 0 0 2.157zm0-1.406a.328.328 0 1 1 0 .656.328.328 0 0 1 0-.656zM17.906 6.928a1.078 1.078 0 1 0 0-2.157 1.078 1.078 0 0 0 0 2.157zm0-1.406a.328.328 0 1 1 0 .656.328.328 0 0 1 0-.656z"
  }));
};

var _default = IconFeatureKitchenAppliances;
exports.default = _default;