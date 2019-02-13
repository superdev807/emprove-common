'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconMyProperties = function IconMyProperties(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, props), _react.default.createElement("path", {
    fill: "none",
    d: "M0,0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M22.187,10.618L12.244,2.07c-0.141-0.121-0.348-0.121-0.488,0l-9.943,8.548l0.488,0.568l0.951-0.818v10.813 c0,0.742,0.604,1.347,1.347,1.347h14.803c0.742,0,1.347-0.604,1.347-1.347V10.368l0.951,0.818L22.187,10.618z M17.12,13.998H6.88 v-1.893h10.24V13.998z M6.88,14.748h10.24v1.976H6.88V14.748z M6.88,17.473h10.24v1.975H6.88V17.473z M6.88,20.198h10.24v1.58H6.88 V20.198z M19.998,21.181c0,0.329-0.268,0.597-0.597,0.597H17.87V11.73c0-0.207-0.168-0.375-0.375-0.375H6.505 c-0.207,0-0.375,0.168-0.375,0.375v10.048H4.599c-0.329,0-0.597-0.268-0.597-0.597V9.724L12,2.848l7.998,6.875V21.181z"
  }));
};

var _default = IconMyProperties;
exports.default = _default;