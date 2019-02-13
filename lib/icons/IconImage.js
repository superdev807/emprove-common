'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconImage = function IconImage(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("rect", {
    fill: "none",
    width: "24",
    height: "24"
  }), _react.default.createElement("ellipse", {
    cx: "6.1",
    cy: "7.2",
    rx: "2.4",
    ry: "2.4"
  }), _react.default.createElement("polygon", {
    points: "1.4,19.3 10.7,9.5 14.9,14.2 16.2,12.9 22.6,19.3"
  }));
};

var _default = IconImage;
exports.default = _default;