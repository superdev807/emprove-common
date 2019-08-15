'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconBookmarkFilled = function IconBookmarkFilled(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), _react["default"].createElement("path", {
    d: "M17.359 1.727H6.641a1.3 1.3 0 0 0-1.298 1.298V22a.272.272 0 0 0 .424.226l6.079-4.036 6.393 4.039a.272.272 0 0 0 .418-.231V3.025a1.3 1.3 0 0 0-1.298-1.298z"
  }));
};

var _default = IconBookmarkFilled;
exports["default"] = _default;