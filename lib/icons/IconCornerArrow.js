'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconCornerArrow = function IconCornerArrow(props) {
  var primary = props.primary || '#888';
  return _react.default.createElement(_SvgIcon.default, _extends({
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), _react.default.createElement("path", {
    d: "M5.693 7.107l1.414-1.414 8.485 8.485V6.4H17.6v11.2H6.4v-2.008h7.778L5.693 7.107z",
    fill: primary
  }));
};

var _default = IconCornerArrow;
exports.default = _default;