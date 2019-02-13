'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconPriceTag = function IconPriceTag(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, props), _react.default.createElement("rect", {
    fill: "none",
    width: "24",
    height: "24"
  }), _react.default.createElement("path", {
    fill: "#FF9E3C",
    d: "M21.675,11.315l-8.999-9c-0.445-0.444-1.04-0.69-1.676-0.69H4C2.69,1.625,1.625,2.691,1.625,4v7 c0,0.641,0.25,1.237,0.699,1.675l8.995,9.005c0.462,0.448,1.059,0.695,1.681,0.695c0.628,0,1.223-0.248,1.676-0.699l6.996-6.997 c0.453-0.442,0.703-1.038,0.703-1.679C22.375,12.363,22.126,11.765,21.675,11.315z M6.5,8.5c-1.172,0-2.125-0.953-2.125-2.125 S5.328,4.25,6.5,4.25s2.125,0.953,2.125,2.125S7.672,8.5,6.5,8.5z"
  }), _react.default.createElement("path", {
    fill: "#FFFFFF",
    d: "M15.613,16.418l-0.985-0.981c-0.367,0.294-0.773,0.527-1.219,0.7c-0.445,0.174-0.887,0.272-1.325,0.297 l-0.413-1.201c0.48-0.021,0.942-0.121,1.385-0.301c0.443-0.18,0.799-0.404,1.066-0.674c0.264-0.265,0.42-0.523,0.469-0.775 c0.049-0.253-0.015-0.466-0.189-0.64c-0.142-0.142-0.305-0.211-0.488-0.211c-0.184,0.001-0.375,0.043-0.572,0.129 c-0.199,0.085-0.455,0.216-0.77,0.39c-0.434,0.237-0.803,0.416-1.109,0.534s-0.63,0.158-0.973,0.118 c-0.341-0.039-0.668-0.214-0.979-0.523c-0.378-0.377-0.562-0.821-0.548-1.335c0.012-0.515,0.214-1.028,0.604-1.544L8.644,9.485 l0.69-0.709l0.922,0.917c0.296-0.241,0.616-0.444,0.961-0.61c0.344-0.166,0.682-0.285,1.016-0.356l0.449,1.208 c-0.409,0.1-0.79,0.242-1.141,0.424c-0.352,0.182-0.627,0.375-0.829,0.578c-0.226,0.227-0.362,0.449-0.408,0.666 c-0.048,0.217,0.005,0.4,0.156,0.551c0.138,0.137,0.297,0.205,0.481,0.204s0.375-0.042,0.572-0.122 c0.199-0.08,0.451-0.206,0.764-0.377c0.432-0.236,0.806-0.412,1.119-0.529c0.312-0.116,0.642-0.154,0.985-0.111 c0.345,0.041,0.675,0.219,0.991,0.535c0.402,0.398,0.593,0.866,0.573,1.4c-0.021,0.536-0.23,1.061-0.63,1.576l0.994,0.988 L15.613,16.418z"
  }));
};

var _default = IconPriceTag;
exports.default = _default;