'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconMoreMenu = function IconMoreMenu(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: 0,
    y: 0,
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 12
  }), _react.default.createElement("path", {
    d: "M19.393 19.393V4.607H4.607v14.786h14.786z",
    fill: "none"
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M13.151 12a1.15 1.15 0 1 0-2.301 0 1.15 1.15 0 0 0 2.301 0M13.151 7.781a1.15 1.15 0 1 0-2.301 0 1.15 1.15 0 0 0 2.301 0"
  }), _react.default.createElement("circle", {
    fill: "#fff",
    cx: 12,
    cy: 16.219,
    r: 1.151
  }));
};

var _default = IconMoreMenu;
exports.default = _default;