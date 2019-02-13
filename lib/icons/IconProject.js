'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconProject = function IconProject(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    fill: "none",
    d: "M0,0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M18.4,3.4h-3.6c-0.5-1.1-1.6-1.8-2.8-1.8c-1.2,0-2.3,0.7-2.8,1.8H5.6c-1.2,0-2.2,1-2.2,2.2v14.6 c0,1.2,1,2.2,2.2,2.2h12.8c1.2,0,2.2-1,2.2-2.2V5.6C20.6,4.4,19.6,3.4,18.4,3.4z M12,3.8c0.5,0,0.9,0.4,0.9,0.9 c0,0.5-0.4,0.9-0.9,0.9s-0.9-0.4-0.9-0.9C11.1,4.2,11.5,3.8,12,3.8z M19.8,20.2c0,0.8-0.6,1.4-1.4,1.4H5.6c-0.8,0-1.4-0.6-1.4-1.4 V5.6c0-0.8,0.6-1.4,1.4-1.4H7v3.6h10V4.2h1.4c0.8,0,1.4,0.6,1.4,1.4V20.2z"
  }), _react.default.createElement("polygon", {
    points: "13,10.3 11,10.3 11,13.3 8,13.3 8,15.3 11,15.3 11,18.3 13,18.3 13,15.3 16,15.3 16,13.3 13,13.3     "
  }));
};

var _default = IconProject;
exports.default = _default;