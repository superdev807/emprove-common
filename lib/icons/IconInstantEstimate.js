'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconInstantEstimate = function IconInstantEstimate(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), _react["default"].createElement("path", {
    d: "M12 1.625C6.279 1.625 1.625 6.28 1.625 12S6.279 22.375 12 22.375 22.375 17.721 22.375 12 17.721 1.625 12 1.625zm0 20c-5.308 0-9.625-4.317-9.625-9.625S6.692 2.375 12 2.375 21.625 6.693 21.625 12 17.307 21.625 12 21.625z"
  }), _react["default"].createElement("path", {
    d: "M12.263 11.265c-1.515-.39-2.003-.802-2.003-1.432 0-.72.675-1.23 1.8-1.23 1.185 0 1.628.57 1.665 1.402h1.47c-.045-1.148-.742-2.205-2.138-2.542V6h-2.002v1.448c-1.29.277-2.333 1.117-2.333 2.407 0 1.538 1.275 2.302 3.135 2.752 1.672.398 2.002.983 2.002 1.605 0 .457-.33 1.193-1.8 1.193-1.372 0-1.912-.615-1.987-1.403h-1.47c.083 1.455 1.17 2.28 2.453 2.55V18h2.002v-1.432c1.305-.247 2.333-.997 2.34-2.37.001-1.891-1.62-2.543-3.134-2.933z"
  }));
};

var _default = IconInstantEstimate;
exports["default"] = _default;