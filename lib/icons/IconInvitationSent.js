'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconInvitationSent = function IconInvitationSent(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), _react["default"].createElement("path", {
    d: "M21.413 6.004h-3.195c.635-.524 1.046-1.293 1.046-2.162 0-1.574-1.323-2.854-2.95-2.854-1.149 0-2.229.715-2.816 1.863L12 5.742l-1.497-2.889C9.915 1.703 8.835.988 7.686.988c-1.626 0-2.949 1.28-2.949 2.854 0 .869.411 1.638 1.048 2.162H2.587c-.758 0-1.375.617-1.375 1.375v2.398c0 .207.168.375.375.375h1.141v9.607c0 .758.617 1.375 1.375 1.375h3.991c.931 1.136 2.327 1.877 3.907 1.877s2.976-.741 3.906-1.877h3.991c.758 0 1.375-.617 1.375-1.375v-9.607h1.141a.375.375 0 0 0 .375-.375V7.379a1.378 1.378 0 0 0-1.376-1.375zm-7.249-2.809c.36-.704 1.113-1.457 2.149-1.457 1.213 0 2.2.944 2.2 2.104s-.987 2.105-2.211 2.105h-3.563l1.425-2.752zm-.26 3.559v2.648h-3.809V6.754h3.809zm0 3.399v3.093c-.589-.24-1.23-.378-1.904-.378s-1.315.138-1.904.378v-3.093h3.808zM5.487 3.842c0-1.16.986-2.104 2.199-2.104 1.036 0 1.789.753 2.15 1.459l1.425 2.75H7.686c-1.212 0-2.199-.945-2.199-2.105zM3.103 9.403H1.962V7.379c0-.345.28-.625.625-.625h6.759v2.648H3.103zm3.825 8.537c0 .891.251 1.717.656 2.445H4.102a.625.625 0 0 1-.625-.625v-9.607h5.868v3.485c-1.444.894-2.417 2.481-2.417 4.302zm4.081 2.045l-1.678-1.678.43-.43 1.248 1.245 3.23-3.227.43.43-3.66 3.66zm9.513-.225c0 .345-.28.625-.625.625h-3.481a5.012 5.012 0 0 0 .656-2.445c0-1.821-.973-3.408-2.418-4.302v-3.485h5.868v9.607zm1.516-10.357h-7.384V6.754h6.759c.345 0 .625.28.625.625v2.024z"
  }));
};

var _default = IconInvitationSent;
exports["default"] = _default;