'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconQualityPractical = function IconQualityPractical(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    d: "M21.158 24H2.842A2.843 2.843 0 0 1 0 21.158V2.842A2.843 2.843 0 0 1 2.842 0h18.315A2.843 2.843 0 0 1 24 2.842v18.315A2.843 2.843 0 0 1 21.158 24z",
    fill: "#fff"
  }), _react["default"].createElement("path", {
    d: "M21.158 0H2.842A2.843 2.843 0 0 0 0 2.842v18.315A2.843 2.843 0 0 0 2.842 24h18.315A2.843 2.843 0 0 0 24 21.158V2.842A2.843 2.843 0 0 0 21.158 0zM6.844 18.727c-.452-3.818-.818-4.185-4.636-4.636 3.818-.452 4.185-.818 4.636-4.636.452 3.818.818 4.185 4.636 4.636-3.818.452-4.184.818-4.636 4.636zm9.767-2.709c-.542-4.582-.982-5.021-5.564-5.564 4.582-.542 5.021-.982 5.564-5.564.542 4.582.982 5.021 5.564 5.564-4.582.543-5.022.982-5.564 5.564z"
  }));
};

var _default = IconQualityPractical;
exports["default"] = _default;