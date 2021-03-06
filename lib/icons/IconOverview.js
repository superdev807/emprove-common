'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconOverview = function IconOverview(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, props), _react["default"].createElement("path", {
    d: "M0-.459h24v24H0v-24z",
    fill: "none"
  }), _react["default"].createElement("path", {
    d: "M18 1.167H8.029c-.017 0-.033.008-.049.01s-.03.005-.046.009a.359.359 0 0 0-.171.09L3.735 5.304a.361.361 0 0 0-.091.171.373.373 0 0 0-.009.046c-.002.017-.01.032-.01.049v13.972A2.377 2.377 0 0 0 6 21.917h12.01a2.367 2.367 0 0 0 2.355-2.375v-16A2.372 2.372 0 0 0 18 1.167zM7.654 2.447l-.001 2.747H4.905l2.749-2.747zm11.961 17.095c0 .896-.72 1.625-1.605 1.625H6a1.627 1.627 0 0 1-1.625-1.625V5.945h3.653a.375.375 0 0 0 .375-.375v-.345h8.479a.375.375 0 0 0 0-.75H8.404V1.917H18c.891 0 1.615.729 1.615 1.625v16z"
  }), _react["default"].createElement("path", {
    d: "M16.882 7.332H7.118a.375.375 0 0 0-.375.375v1.612c0 .207.168.375.375.375h9.764a.375.375 0 0 0 .375-.375V7.707a.375.375 0 0 0-.375-.375zm-.375 1.612H7.493v-.862h9.014v.862zM11.995 11.82c-2.092 0-3.794 1.701-3.794 3.793s1.702 3.794 3.794 3.794 3.793-1.702 3.793-3.794-1.701-3.793-3.793-3.793zm-3.044 3.793c0-1.023.511-1.925 1.288-2.477l1.22 2.272-2.427.879a3.062 3.062 0 0 1-.081-.674zm.344 1.376l1.876-.679-.984 1.738a3.037 3.037 0 0 1-.892-1.059zm2.7 1.668c-.411 0-.802-.084-1.16-.232l1.285-2.27 2.135 1.476a3.021 3.021 0 0 1-2.26 1.026zm2.685-1.643l-2.398-1.659-1.382-2.573a3.023 3.023 0 0 1 1.095-.212 3.046 3.046 0 0 1 3.043 3.043c0 .508-.137.98-.358 1.401z"
  }));
};

var _default = IconOverview;
exports["default"] = _default;