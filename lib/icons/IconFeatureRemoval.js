'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconFeatureRemoval = function IconFeatureRemoval(props) {
  var primary = props.primary || '#888';
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
    d: "M12 1.375C6.142 1.375 1.375 6.142 1.375 12S6.142 22.625 12 22.625 22.625 17.859 22.625 12 17.859 1.375 12 1.375zm0 20.5c-5.445 0-9.875-4.43-9.875-9.875S6.555 2.125 12 2.125s9.875 4.43 9.875 9.875-4.429 9.875-9.875 9.875z"
  }), _react.default.createElement("path", {
    fill: primary,
    d: "M15.521 7.305L12 10.826 8.479 7.305 7.305 8.479 10.826 12l-3.521 3.521 1.174 1.174L12 13.174l3.521 3.521 1.174-1.174L13.174 12l3.521-3.521z"
  }));
};

var _default = IconFeatureRemoval;
exports.default = _default;