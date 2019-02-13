'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconActionKeep = function IconActionKeep(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    fill: "none",
    d: "M.1 0h24v24H.1z"
  }), _react.default.createElement("path", {
    d: "M12.1 1.4C6.3 1.4 1.5 6.1 1.5 12s4.8 10.6 10.6 10.6S22.7 17.9 22.7 12 18 1.4 12.1 1.4zm0 20.5c-5.4 0-9.9-4.4-9.9-9.9s4.4-9.9 9.9-9.9S22 6.6 22 12s-4.4 9.9-9.9 9.9z"
  }), _react.default.createElement("path", {
    d: "M9.7 14.9l-3-3.1-1 1.1 4 4 8.9-8.8-1.1-1z"
  }));
};

var _default = IconActionKeep;
exports.default = _default;