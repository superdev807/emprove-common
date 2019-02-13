'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconAccountCircle = function IconAccountCircle(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    fill: "none",
    d: "M0,0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M12,2.2c-5.5,0-10,4.5-10,10s4.5,10,10,10s10-4.5,10-10S17.5,2.2,12,2.2z M12,5.2c1.7,0,3,1.3,3,3s-1.3,3-3,3 c-1.7,0-3-1.3-3-3S10.3,5.2,12,5.2z M12,19.4c-2.5,0-4.7-1.3-6-3.2c0-2,4-3.1,6-3.1c2,0,6,1.1,6,3.1C16.7,18.1,14.5,19.4,12,19.4z"
  }));
};

var _default = IconAccountCircle;
exports.default = _default;