'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconRatings = function IconRatings(props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), _react["default"].createElement("path", {
    d: "M20.82 1.013H3.272C2.571 1.013 2 1.584 2 2.285v14.979c0 .72.585 1.305 1.305 1.305h4.471v3.619a.796.796 0 0 0 .801.799.79.79 0 0 0 .558-.229l4.363-4.188h7.276a1.23 1.23 0 0 0 1.229-1.228V2.194a1.184 1.184 0 0 0-1.183-1.181zm.431 16.328a.479.479 0 0 1-.479.478h-7.427a.377.377 0 0 0-.26.104l-4.531 4.31c-.03-.013-.03-.034-.03-.045v-3.994a.375.375 0 0 0-.375-.375H3.304a.556.556 0 0 1-.555-.555V2.286c0-.288.234-.522.522-.522H20.82c.237 0 .431.193.431.431v15.146z"
  }), _react["default"].createElement("path", {
    d: "M17.469 7.754l-3.686-.314-1.438-3.393c-.119-.277-.574-.277-.691 0l-1.438 3.4-3.686.315a.379.379 0 0 0-.324.258.373.373 0 0 0 .111.399l2.794 2.42-.839 3.603a.375.375 0 0 0 .559.407L12 12.937l3.169 1.911a.376.376 0 0 0 .559-.406l-.84-3.61 2.794-2.42a.374.374 0 0 0 .111-.399.38.38 0 0 0-.324-.259z"
  }));
};

var _default = IconRatings;
exports["default"] = _default;