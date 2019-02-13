'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconNewBidAwards = function IconNewBidAwards(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    fill: "none",
    d: "M0,0h24v24H0V0z"
  }), _react.default.createElement("polygon", {
    points: "11.127,13.457 12.84,13.457 12.84,11.113 15.11,11.113 15.11,9.479 12.84,9.479 12.84,7.221  11.127,7.221 11.127,9.479 8.874,9.479 8.874,11.113 11.127,11.113"
  }), _react.default.createElement("path", {
    d: "M21.68,1.841h-2.614c-0.822,0-1.529,0.737-1.681,1.678H6.615c-0.152-0.94-0.859-1.678-1.681-1.678H2.319 c-0.207,0-0.375,0.168-0.375,0.375v8.568c0,1.543,1.171,2.375,2.272,2.375h1.723c0.207,2.013,2.033,3.587,4.663,3.956v1.323 c-2.778,0.27-3,1.397-3,2.945v0.4c0,0.207,0.168,0.375,0.375,0.375h8c0.207,0,0.375-0.168,0.375-0.375v-0.3 c0-1.548-0.222-2.677-3-2.946v-1.411c2.756-0.346,4.556-1.876,4.705-3.968h1.726c1.102,0,2.272-0.832,2.272-2.375V2.216 C22.055,2.009,21.887,1.841,21.68,1.841z M2.694,10.784V2.591h2.239c0.514,0,0.964,0.608,0.964,1.303v8.516H4.217 C3.46,12.409,2.694,11.85,2.694,10.784z M15.602,21.409h-7.25v-0.025c0-1.277,0-2.049,2.65-2.226 c0.196-0.013,0.35-0.177,0.35-0.374v-1.625h1.25v1.725c0,0.197,0.153,0.361,0.35,0.374C15.55,19.431,15.601,20.176,15.602,21.409z M17.337,12.884c0,1.897-1.617,3.247-4.221,3.525l-2.227,0.002c-2.498-0.272-4.242-1.764-4.242-3.627V4.268h10.689V12.884z M21.305,10.784c0,1.066-0.766,1.625-1.522,1.625h-1.696V3.893h0.016c0-0.694,0.45-1.303,0.964-1.303h2.239V10.784z"
  }));
};

var _default = IconNewBidAwards;
exports.default = _default;