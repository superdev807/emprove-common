'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconServiceArea = function IconServiceArea(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "5",
    opacity: ".2"
  }), _react.default.createElement("path", {
    d: "M12 17.4c-3 0-5.4-2.4-5.4-5.4S9 6.6 12 6.6 17.4 9 17.4 12 15 17.4 12 17.4zm0-10c-2.6 0-4.6 2.1-4.6 4.6s2.1 4.6 4.6 4.6 4.6-2.1 4.6-4.6-2-4.6-4.6-4.6z"
  }), _react.default.createElement("g", {
    opacity: ".4"
  }, _react.default.createElement("path", {
    d: "M12 22.9C6 22.9 1.1 18 1.1 12S6 1.1 12 1.1 22.9 6 22.9 12 18 22.9 12 22.9zm0-19.3c-4.6 0-8.4 3.8-8.4 8.4s3.8 8.4 8.4 8.4 8.4-3.8 8.4-8.4-3.8-8.4-8.4-8.4z"
  })));
};

var _default = IconServiceArea;
exports.default = _default;