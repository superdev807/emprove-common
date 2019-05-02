'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconUL2WallBaseTrims = function IconUL2WallBaseTrims(props) {
  var primary = props.primary || '#878787';
  var secondary = props.secondary || 'none';
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    fill: secondary,
    d: "M0 0h24v24H0z"
  }), _react["default"].createElement("path", {
    d: "M23.161 15.18c-.058-.201-.221-.516-.51-.678a2.5 2.5 0 0 0-.252-.797c-.379-.752-.565-1.996.038-3.216l.21-.385c.042-.125.178-.552.178-.784 0-.227-.162-.435-.259-.539a.364.364 0 0 0-.329-.115l-.074.011-.754-.082-14.835 2.099-.004-.025-4.286-2.074-.625.042v.002a.354.354 0 0 0-.235.094c-.003.003-.312.303-.275.648.03.299.177.549.185.552.012.031.162.422.251.742.404 1.457-.033 3.219-.198 3.79a.989.989 0 0 0-.546.61.345.345 0 0 0-.016.106v.61c0 .146.085.279.218.341l5.341 2.458a.38.38 0 0 0 .214.03l16.26-2.48a.375.375 0 0 0 .318-.371v-.486a.4.4 0 0 0-.015-.103zM2.138 9.951a4.861 4.861 0 0 0-.139-.358l-.019-.032 4.467 2.122a.366.366 0 0 0 .165.032l15.442-2.264a5.967 5.967 0 0 1-.084.332L6.665 12.135 2.138 9.951zm4.794 2.648l14.762-2.268a4.494 4.494 0 0 0-.122 3.352l-14.64 2.044v-3.128zm-.736-.135c-.004.023-.014.044-.014.068v3.051l-3.867-1.782c.169-.853.297-2.069.016-3.201l3.865 1.864zm-3.99 1.837l3.977 1.833v.355l-4.048-1.915c.022-.08.044-.168.071-.273zm4.726 1.931l14.845-2.072c.047.111.08.21.1.296l-14.944 2.19v-.414zm-5.357-.977a.232.232 0 0 1 .08-.079l4.626 2.188a.755.755 0 0 1 .072.293c0 .028-.013.056-.018.084l-4.759-2.19v-.296zm20.85.192l-15.33 2.339a1.318 1.318 0 0 0-.024-.402l15.199-2.227c.06.018.124.113.156.19v.1z",
    fill: primary
  }));
};

var _default = IconUL2WallBaseTrims;
exports["default"] = _default;