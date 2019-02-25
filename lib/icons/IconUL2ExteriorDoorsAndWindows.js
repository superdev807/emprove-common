'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconUL2ExteriorDoorsAndWindows = function IconUL2ExteriorDoorsAndWindows(props) {
  var primary = props.primary || '#878787';
  var secondary = props.secondary || 'none';
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: 0,
    y: 0,
    viewBox: "0 0 24 24",
    xmlSpace: "preserve"
  }, props), _react.default.createElement("path", {
    fill: secondary,
    d: "M0 0h24v24H0z"
  }), _react.default.createElement("path", {
    fill: primary,
    d: "M22.255 1.833H2.415a.375.375 0 0 0-.375.375v19.584c0 .207.168.375.375.375h19.84a.375.375 0 0 0 .375-.375V2.208a.375.375 0 0 0-.375-.375zm-.375 19.584H2.79V2.583h19.09v18.834z"
  }), _react.default.createElement("path", {
    fill: primary,
    d: "M3.788 20.644h7.924a.25.25 0 0 0 .25-.25V3.605a.25.25 0 0 0-.25-.25H3.788a.25.25 0 0 0-.25.25v16.789c0 .138.112.25.25.25zm.25-16.789h7.424v16.289H4.038V3.855z"
  }), _react.default.createElement("path", {
    fill: primary,
    d: "M7.75 4.852a2.799 2.799 0 0 0-2.796 2.796v6.263c0 .138.112.25.25.25h5.093a.25.25 0 0 0 .25-.25V7.648A2.8 2.8 0 0 0 7.75 4.852zm2.271 2.546H8v-2.02a2.283 2.283 0 0 1 2.021 2.02zm-4.567.5H7.5v3.781H5.454V7.898zm2.546 0h2.047v3.781H8V7.898zm-.5-2.52v2.021H5.479A2.284 2.284 0 0 1 7.5 5.378zM5.454 12.18H7.5v1.481H5.454V12.18zM8 13.661V12.18h2.047v1.481H8zM12.958 20.644h7.924a.25.25 0 0 0 .25-.25V3.605a.25.25 0 0 0-.25-.25h-7.924a.25.25 0 0 0-.25.25v16.789c0 .138.112.25.25.25zm.25-16.789h7.424v16.289h-7.424V3.855z"
  }), _react.default.createElement("path", {
    fill: primary,
    d: "M19.466 14.819a.375.375 0 0 0-.375.375v1.025a.375.375 0 0 0 .75 0v-1.025a.375.375 0 0 0-.375-.375zM19.716 13.911V7.648c0-1.542-1.255-2.796-2.797-2.796s-2.796 1.254-2.796 2.796v6.263c0 .138.112.25.25.25h5.093a.25.25 0 0 0 .25-.25zm-5.092-6.013h2.046v3.781h-2.046V7.898zm2.546 0h2.047v3.781H17.17V7.898zm2.021-.5H17.17v-2.02a2.283 2.283 0 0 1 2.021 2.02zm-2.521-2.02v2.021h-2.021a2.284 2.284 0 0 1 2.021-2.021zm-2.046 6.802h2.046v1.481h-2.046V12.18zm2.546 1.481V12.18h2.047v1.481H17.17z"
  }));
};

var _default = IconUL2ExteriorDoorsAndWindows;
exports.default = _default;