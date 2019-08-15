'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconUL2DoorKnob = function IconUL2DoorKnob(props) {
  var primary = props.primary || '#878787';
  var secondary = props.secondary || 'none';
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: 0,
    y: 0,
    viewBox: "0 0 24 24",
    xmlSpace: "preserve"
  }, props), _react["default"].createElement("path", {
    fill: secondary,
    d: "M0 0h24v24H0z"
  }), _react["default"].createElement("path", {
    fill: primary,
    d: "M9.478 7.185c0-1.104-.897-2.001-2.001-2.001s-2.001.898-2.001 2.001.897 2.001 2.001 2.001 2.001-.897 2.001-2.001zm-3.252 0c0-.689.562-1.251 1.251-1.251s1.251.562 1.251 1.251-.561 1.251-1.251 1.251-1.251-.561-1.251-1.251z"
  }), _react["default"].createElement("path", {
    fill: primary,
    d: "M7.727 7.654v-.937a.25.25 0 0 0-.5 0v.938a.25.25 0 1 0 .5-.001z"
  }), _react["default"].createElement("path", {
    fill: primary,
    d: "M19.906 14.25l-9.045-.381V3.92A3.134 3.134 0 0 0 7.73.789h-.506A3.134 3.134 0 0 0 4.093 3.92v16.16a3.134 3.134 0 0 0 3.131 3.131h.506a3.134 3.134 0 0 0 3.131-3.131v-2.915l9.045-.318V14.25zm-3.359.609v1.355l-8.151.287a.993.993 0 0 1-.015-1.985l8.166.343zm-6.436 5.221a2.384 2.384 0 0 1-2.381 2.381h-.506a2.384 2.384 0 0 1-2.381-2.381V3.92a2.384 2.384 0 0 1 2.381-2.381h.506a2.384 2.384 0 0 1 2.381 2.381v9.918l-1.716-.072c-.961 0-1.742.781-1.742 1.742s.781 1.743 1.755 1.743l1.703-.06v2.889zm9.045-3.958l-2.109.074V14.88l2.109.089v1.153z"
  }));
};

var _default = IconUL2DoorKnob;
exports["default"] = _default;