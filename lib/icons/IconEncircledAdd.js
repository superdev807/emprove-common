'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconEncircledAdd = function IconEncircledAdd(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), _react.default.createElement("path", {
    d: "M12 2.155c-5.429 0-9.845 4.416-9.845 9.845S6.571 21.844 12 21.844s9.845-4.416 9.845-9.845S17.429 2.155 12 2.155zm0 18.939c-5.015 0-9.095-4.08-9.095-9.095S6.985 2.905 12 2.905s9.095 4.08 9.095 9.095-4.08 9.094-9.095 9.094z"
  }), _react.default.createElement("path", {
    d: "M13.148 7.782H10.83v3.055H7.782v2.211h3.048v3.17h2.318v-3.17h3.07v-2.211h-3.07z"
  }));
};

var _default = IconEncircledAdd;
exports.default = _default;