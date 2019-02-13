'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconNewStyleColors = function IconNewStyleColors(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    id: "prefix__Layer_1",
    x: 0,
    y: 0,
    viewBox: "0 0 24 24",
    xmlSpace: "preserve"
  }, props), _react.default.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), _react.default.createElement("path", {
    fill: "#8c68b8",
    d: "M9.65 3.826H3.854v5.796H9.65V3.826z"
  }), _react.default.createElement("path", {
    fill: "#6167d5",
    d: "M3.854 13.155H9.65v5.796H3.854z"
  }), _react.default.createElement("path", {
    fill: "#44c1f5",
    d: "M13.077 3.826h5.796v5.796h-5.796z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    fill: "#8c68b8",
    d: "M10.579 21.652H1.462a.362.362 0 0 1-.362-.362V1.487c0-.2.162-.362.362-.362h19.802c.2 0 .362.162.362.362v9.023a.362.362 0 1 1-.724 0V1.85H1.825v19.078h8.755a.362.362 0 1 1-.001.724z"
  })), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M22.787 23.125h-12.08a.362.362 0 0 1-.362-.362V10.682c0-.2.162-.362.362-.362h12.08c.2 0 .362.162.362.362v12.081c0 .2-.162.362-.362.362z",
    fill: "#ffc36f"
  }), _react.default.createElement("circle", {
    fill: "#fff",
    cx: 14.397,
    cy: 14.786,
    r: 0.974
  }), _react.default.createElement("path", {
    fill: "#fff",
    d: "M12.518 19.633l3.728-3.897 1.677 1.854.506-.508 2.547 2.551z"
  })));
};

var _default = IconNewStyleColors;
exports.default = _default;