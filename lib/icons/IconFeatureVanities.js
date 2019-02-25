"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconFeatureVanities = function IconFeatureVanities(props) {
  var primary = props.primary || '#878787';
  var secondary = props.secondary || 'none';
  return _react.default.createElement(SvgIcon, _extends({
    x: 0,
    y: 0,
    viewBox: "0 0 24 24",
    xmlSpace: "preserve"
  }, props), _react.default.createElement("path", {
    fill: secondary,
    d: "M0 0h24v24H0z"
  }), _react.default.createElement("path", {
    fill: primary,
    d: "M22.712 13.707H19.27V9.251a7.245 7.245 0 0 0-2.499-5.471l.172.102c.198-.333.214-.755.045-1.158a2.007 2.007 0 0 0-.836-.929 2.003 2.003 0 0 0-1.215-.29c-.168.017-.324.06-.466.124C14.099.977 13.138.524 11.984.524c-1.147 0-2.104.448-2.479 1.104-.471-.207-1.1-.163-1.655.168-.83.491-1.184 1.428-.793 2.086l.174-.103a7.248 7.248 0 0 0-2.5 5.472v4.456H1.288a.375.375 0 0 0-.375.375v3.774c0 .207.168.375.375.375h1.116l.39 4.898a.377.377 0 0 0 .374.346h1.094a.375.375 0 0 0 .373-.34l.463-4.904h13.799l.39 4.898a.377.377 0 0 0 .374.346h1.094a.375.375 0 0 0 .373-.34l.463-4.904h1.122a.375.375 0 0 0 .375-.375v-3.774a.377.377 0 0 0-.376-.375zM15.013 2.251c.231-.024.512.044.756.188.242.145.435.354.527.574a.606.606 0 0 1 .03.409 7.267 7.267 0 0 0-1.728-.953c.106-.159.302-.206.415-.218zm-3.03-.977c1.122 0 1.904.509 1.905.949-.001.006.004.012.003.018A7.24 7.24 0 0 0 12 1.983c-.667 0-1.31.098-1.924.267 0-.004.003-.006.003-.01 0-.458.782-.966 1.904-.966zM8.231 2.44c.453-.267.974-.253 1.166.031l.001.001a7.31 7.31 0 0 0-1.714.944c-.097-.296.129-.727.547-.976zm-2.75 6.811c0-3.595 2.924-6.519 6.519-6.519s6.52 2.924 6.52 6.519v4.456H5.481V9.251zm-3.818 5.206h9.962v3.024H1.663v-3.024zm2.258 8.269h-.407l-.357-4.494h1.188l-.424 4.494zm16.492 0h-.406l-.357-4.494h1.188l-.425 4.494zm1.924-5.244h-9.962v-3.024h9.962v3.024z"
  }), _react.default.createElement("path", {
    fill: primary,
    d: "M5.215 16.345h2.858a.375.375 0 0 0 0-.75H5.215a.375.375 0 0 0 0 .75zM10.058 9.049l2.021-2.021a.377.377 0 0 0 0-.531.377.377 0 0 0-.531 0L9.527 8.518a.375.375 0 1 0 .531.531zM13.942 6.755l-4.157 4.157a.375.375 0 1 0 .266.64.377.377 0 0 0 .266-.109l4.157-4.157a.377.377 0 0 0-.532-.531zM15.927 15.595a.375.375 0 0 0 0 .75h2.858a.375.375 0 0 0 0-.75h-2.858z"
  }));
};

var _default = IconFeatureVanities;
exports.default = _default;