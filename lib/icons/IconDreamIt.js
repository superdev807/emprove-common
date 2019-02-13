'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconDreamIt = function IconDreamIt(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 44 44",
    width: "44",
    height: "44"
  }, props), _react.default.createElement("rect", {
    fill: "none",
    width: "44",
    height: "44"
  }), _react.default.createElement("path", {
    d: "M14.895,38.501c0,1.389,1.132,2.521,2.521,2.521h9.167c1.389,0,2.521-1.132,2.521-2.521V35.98H14.895V38.501z M16.27,37.355h11.458v1.146c0,0.632-0.514,1.146-1.146,1.146h-9.167c-0.632,0-1.146-0.514-1.146-1.146V37.355z"
  }), _react.default.createElement("path", {
    d: "M21.999,2.98c-7.455,0-13.521,6.066-13.521,13.521c0,4.277,2.05,8.314,5.5,10.873v3.794 c0,1.389,1.132,2.521,2.521,2.521h11c1.389,0,2.521-1.132,2.521-2.521v-3.794c3.45-2.557,5.5-6.596,5.5-10.873 C35.52,9.046,29.454,2.98,21.999,2.98z M27.499,32.313h-11c-0.632,0-1.146-0.514-1.146-1.146v-1.146h13.292v1.146 C28.645,31.8,28.131,32.313,27.499,32.313z M28.939,26.461l-0.294,0.204v1.982H15.354v-1.982l-0.292-0.204 c-3.262-2.288-5.208-6.012-5.208-9.96c0-6.698,5.448-12.146,12.146-12.146s12.146,5.448,12.146,12.146 C34.145,20.45,32.199,24.174,28.939,26.461z"
  }));
};

var _default = IconDreamIt;
exports.default = _default;