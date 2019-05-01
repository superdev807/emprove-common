'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconBidIt = function IconBidIt(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    d: "M0,0h24v24H0V0z"
  }), _react["default"].createElement("path", {
    fill: "#888888",
    d: "M20.993,17.531l-7.326-7.326c0.7-2.006,0.172-4.267-1.373-5.811c-1.672-1.672-4.257-2.127-6.429-1.131 C5.775,3.305,5.709,3.389,5.692,3.489c-0.018,0.1,0.014,0.201,0.085,0.272l3.316,3.316L7.061,9.11L3.662,5.789 c-0.07-0.069-0.168-0.1-0.267-0.083c-0.097,0.016-0.18,0.078-0.225,0.166c-1.059,2.118-0.606,4.705,1.127,6.437 c1.544,1.545,3.805,2.071,5.811,1.373l7.34,7.34c0.226,0.226,0.509,0.339,0.793,0.339s0.567-0.113,0.793-0.339l1.865-1.868 c0.282-0.225,0.44-0.553,0.435-0.899C21.33,17.962,21.206,17.699,20.993,17.531z M20.49,18.695l-1.89,1.89 c-0.207,0.208-0.508,0.208-0.715,0l-7.479-7.479c-0.059-0.059-0.138-0.09-0.218-0.09c-0.038,0-0.076,0.007-0.112,0.021 c-1.823,0.716-3.92,0.257-5.341-1.164c-1.439-1.439-1.89-3.534-1.186-5.334l3.3,3.225c0.121,0.118,0.313,0.118,0.433-0.002 l2.465-2.466c0.121-0.12,0.121-0.315,0-0.436L6.541,3.654c1.846-0.655,3.933-0.208,5.318,1.176c1.42,1.421,1.877,3.518,1.164,5.341 c-0.044,0.114-0.018,0.244,0.069,0.33l7.479,7.479c0.01,0.011,0.021,0.02,0.033,0.029c0.07,0.053,0.112,0.146,0.114,0.255 C20.721,18.418,20.647,18.567,20.49,18.695z"
  }));
};

var _default = IconBidIt;
exports["default"] = _default;