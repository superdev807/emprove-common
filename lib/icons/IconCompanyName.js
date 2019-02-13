'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconCompanyName = function IconCompanyName(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M16.4 20.6H2.3c-.9 0-1.5-.7-1.5-1.5V5c0-.9.7-1.5 1.5-1.5h14.1c.9 0 1.5.7 1.5 1.5v14c0 .9-.7 1.6-1.5 1.6zM2.3 4.2c-.4 0-.8.3-.8.8v14c0 .4.4.8.8.8h14.1c.4 0 .8-.4.8-.8V5c0-.4-.4-.8-.8-.8H2.3z"
  }), _react.default.createElement("path", {
    d: "M14.6 17.9H4.1V17c0-1.8 3.5-2.6 5.3-2.6s5.3.9 5.3 2.6v.9z"
  }), _react.default.createElement("circle", {
    cx: "9.3",
    cy: "9.7",
    r: "2.6"
  }), _react.default.createElement("path", {
    d: "M20.1 3.8h.8v16.4h-.8zM22.7 3.8h.8v16.4h-.8z"
  }));
};

var _default = IconCompanyName;
exports.default = _default;