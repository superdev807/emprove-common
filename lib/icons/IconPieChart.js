'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconPieChart = function IconPieChart(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 44 44",
    width: "24",
    height: "24"
  }, props), _react.default.createElement("path", {
    d: "M0 0h44v44H0V0z",
    fill: "none"
  }), _react.default.createElement("path", {
    d: "M24.218 2.035v17.747h17.747c0-9.801-7.946-17.747-17.747-17.747zM29.609 39.014c4.769-3.194 7.92-8.629 7.92-14.796h-16.46l8.54 14.796zM4.985 34.045c3.195 4.77 8.629 7.92 14.796 7.92 2.84 0 5.546-.666 7.897-1.841l-8.297-14.397-14.396 8.318zM19.782 6.472c-9.801 0-17.747 7.946-17.747 17.747 0 2.84.665 5.546 1.841 7.897l15.906-9.184V6.472z"
  }));
};

var _default = IconPieChart;
exports.default = _default;