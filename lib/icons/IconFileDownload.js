'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconFileDownload = function IconFileDownload(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, props), _react.default.createElement("path", {
    fill: "none",
    d: "M0,0h24v24H0V0z"
  }), _react.default.createElement("rect", {
    x: "4.542",
    y: "20.362",
    width: "14",
    height: "2"
  }), _react.default.createElement("polygon", {
    points: "18.542,11.362 14.542,11.362 14.542,5.362 8.542,5.362 8.542,11.362 4.542,11.362 11.542,18.362"
  }));
};

var _default = IconFileDownload;
exports.default = _default;