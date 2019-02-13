'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconSnapPrice = function IconSnapPrice(props) {
  var primary = props.primary || '#ff9e3c';
  var secondary = props.secondary || '#ffffff';
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, props), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), _react.default.createElement("path", {
    fill: secondary,
    d: "M19.925 20.356V6.11c0-1.13-.916-2.035-2.035-2.035H3.644A2.035 2.035 0 0 0 1.609 6.11v14.247c0 1.124.911 2.035 2.035 2.035H17.89a2.036 2.036 0 0 0 2.035-2.036z"
  }), _react.default.createElement("path", {
    fill: primary,
    d: "M7.515 13.429a1.348 1.348 0 1 0-.002-2.696 1.348 1.348 0 0 0 .002 2.696zM12.395 15.96l-2.322-2.566-5.16 5.394h11.708l-3.526-3.531z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    fill: primary,
    d: "M22.767 6.608a5.374 5.374 0 0 0-5.375-5.375 5.368 5.368 0 0 0-4.516 2.466H3.643a2.413 2.413 0 0 0-2.41 2.41v14.247a2.413 2.413 0 0 0 2.41 2.41H17.89a2.413 2.413 0 0 0 2.41-2.41v-9.233a5.363 5.363 0 0 0 2.467-4.515zm-3.216 13.749c0 .915-.745 1.66-1.66 1.66H3.643c-.915 0-1.66-.745-1.66-1.66V6.109c0-.915.745-1.66 1.66-1.66h8.828a5.375 5.375 0 0 0 7.079 7.08v8.828z"
  }), _react.default.createElement("path", {
    fill: secondary,
    d: "M16.869 5.715c.093.093.208.168.348.228s.331.124.573.196c.337.099.613.199.829.298.216.1.399.247.551.442.152.194.228.45.228.768 0 .403-.14.734-.419.993-.28.258-.65.416-1.11.473v.996h-.704v-.99a3.267 3.267 0 0 1-.963-.263 3.059 3.059 0 0 1-.815-.519l.398-.811c.252.233.533.415.847.548.313.133.605.199.875.199.266 0 .474-.051.626-.153a.477.477 0 0 0 .228-.416c0-.143-.046-.26-.138-.353s-.21-.167-.353-.224a6.43 6.43 0 0 0-.583-.192 6.899 6.899 0 0 1-.825-.292 1.433 1.433 0 0 1-.548-.431c-.152-.192-.228-.444-.228-.758 0-.379.133-.694.398-.946.265-.251.626-.408 1.081-.469v-.924l.704-.007v.924a3.451 3.451 0 0 1 1.48.512l-.384.833a3.583 3.583 0 0 0-.786-.363 2.386 2.386 0 0 0-.708-.128c-.228 0-.408.043-.54.128a.4.4 0 0 0-.2.356c0 .138.046.253.138.345z"
  }))));
};

var _default = IconSnapPrice;
exports.default = _default;