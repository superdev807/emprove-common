'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconSiteInfo = function IconSiteInfo(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    fill: "none",
    d: "M0,0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M18.088,8.654V5.653c0-1.207-0.981-2.188-2.188-2.188h-3.539c-0.505-1.094-1.603-1.812-2.808-1.812 S7.251,2.371,6.747,3.464H3.208C2,3.464,1.019,4.446,1.019,5.653V20.16c0,1.207,0.981,2.188,2.188,2.188h12.693 c1.127,0,2.047-0.86,2.164-1.957c2.79-0.5,4.916-2.939,4.916-5.87C22.981,11.597,20.867,9.162,18.088,8.654z M9.554,3.84 c0.499,0,0.907,0.408,0.907,0.907c0,0.499-0.408,0.907-0.907,0.907c-0.499,0-0.907-0.408-0.907-0.907 C8.647,4.248,9.055,3.84,9.554,3.84z M15.901,21.598H3.208c-0.793,0-1.438-0.646-1.438-1.438V5.653 c0-0.793,0.646-1.438,1.438-1.438h1.381v3.562h9.941V4.214h1.371c0.793,0,1.438,0.646,1.438,1.438v2.915 c-0.109-0.006-0.216-0.017-0.326-0.017c-3.292,0-5.97,2.678-5.97,5.97c0,3.291,2.678,5.969,5.97,5.969 c0.098,0,0.193-0.01,0.289-0.015C17.157,21.116,16.585,21.598,15.901,21.598z M17.012,19.74c-2.878,0-5.22-2.341-5.22-5.219 s2.342-5.22,5.22-5.22c0.212,0,0.414,0.038,0.62,0.063c0.027,0.006,0.052,0.016,0.081,0.016c0.01,0,0.018-0.005,0.027-0.005 c2.531,0.358,4.491,2.517,4.491,5.146C22.231,17.399,19.89,19.74,17.012,19.74z"
  }), _react.default.createElement("polygon", {
    points: "16.117,15.586 14.51,13.984 13.879,14.615 16.117,16.852 20.145,12.824 19.514,12.189"
  }), _react.default.createElement("path", {
    d: "M8.377,9.365H4.835c-0.207,0-0.375,0.168-0.375,0.375v3.543c0,0.207,0.168,0.375,0.375,0.375h3.542 c0.207,0,0.375-0.168,0.375-0.375V9.74C8.752,9.533,8.584,9.365,8.377,9.365z M8.002,12.908H5.21v-2.793h2.792V12.908z"
  }), _react.default.createElement("path", {
    d: "M8.377,14.831H4.835c-0.207,0-0.375,0.168-0.375,0.375v3.542c0,0.207,0.168,0.375,0.375,0.375h3.542 c0.207,0,0.375-0.168,0.375-0.375v-3.542C8.752,14.999,8.584,14.831,8.377,14.831z M8.002,18.373H5.21v-2.792h2.792V18.373z"
  }));
};

var _default = IconSiteInfo;
exports.default = _default;