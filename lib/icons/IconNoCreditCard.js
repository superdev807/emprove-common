'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconNoCreditCard = function IconNoCreditCard(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), _react["default"].createElement("path", {
    d: "M17.6 5.52v-.305a2.023 2.023 0 00-2.021-2.021H2.416A2.023 2.023 0 00.395 5.215v9.873c0 1.114.906 2.021 2.021 2.021H9.27c1.365 2.213 3.804 3.696 6.59 3.696 4.271 0 7.745-3.475 7.745-7.745 0-3.671-2.571-6.747-6.005-7.54zm5.255 7.54a6.953 6.953 0 01-1.799 4.666l-9.862-9.862a6.957 6.957 0 014.666-1.798 7.001 7.001 0 016.995 6.994zM2.416 3.945H15.58c.7 0 1.271.57 1.271 1.271v.171a7.702 7.702 0 00-.99-.071 7.7 7.7 0 00-4.623 1.545h.001H1.145V5.215c0-.7.571-1.27 1.271-1.27zm0 12.414c-.7 0-1.271-.57-1.271-1.271v-4.936h7.541a7.695 7.695 0 00-.572 2.908c0 1.181.273 2.296.748 3.299H2.416zm6.449-3.299c0-1.793.684-3.426 1.798-4.665l9.862 9.863a6.956 6.956 0 01-4.665 1.798c-3.857-.001-6.995-3.139-6.995-6.996z",
    fill: "#d6d6d6"
  }));
};

var _default = IconNoCreditCard;
exports["default"] = _default;