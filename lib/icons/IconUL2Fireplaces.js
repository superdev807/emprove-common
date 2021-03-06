'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconUL2Fireplaces = function IconUL2Fireplaces(props) {
  var primary = props.primary || '#878787';
  var secondary = props.secondary || 'none';
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("path", {
    fill: secondary,
    d: "M0 0h24v24H0z"
  }), _react["default"].createElement("path", {
    d: "M23.32 6.672a.375.375 0 0 0 .375-.375v-3.42a.375.375 0 0 0-.375-.375H.68a.375.375 0 0 0-.375.375v3.42c0 .207.168.375.375.375h.743v11.495H.68a.375.375 0 0 0-.375.375v2.581c0 .207.168.375.375.375h22.64a.375.375 0 0 0 .375-.375v-2.581a.375.375 0 0 0-.375-.375h-.744V6.672h.744zM1.055 3.252h21.891v2.67H1.055v-2.67zm9.269 14.915c-.21-.318-.745-1.172-.967-1.927-.148-.506.268-1.294 1.348-2.557.474-.555.733-1.134.777-1.729.271.281.678.785 1.245 1.685.243.386.127.961-.32 1.58a.375.375 0 0 0 .346.592c.042-.005.897-.109 1.609-.636.16.306.325.724.308 1.077-.025.464-.513 1.424-.904 1.914h-3.442zm4.432-3.79a.374.374 0 0 0-.282-.155c-.113-.021-.224.037-.3.121a2.107 2.107 0 0 1-.711.491c.214-.588.184-1.144-.101-1.595-1.1-1.741-1.911-2.545-2.437-2.363a.375.375 0 0 0-.245.446c.161.643-.018 1.256-.546 1.873-1.297 1.518-1.73 2.461-1.496 3.256.181.616.531 1.266.801 1.716H7.903V6.672h8.193v11.495h-1.42c.368-.586.715-1.342.742-1.875.049-.912-.633-1.874-.662-1.915zm-7.603-3.624v3.332H5.714v-3.332h1.439zm0-.75H4.27V6.672h2.884v3.331zm-3.633 0H2.173V6.672H3.52v3.331zm-1.347.75h2.791v3.332H2.173v-3.332zm0 4.082H3.52v3.332H2.173v-3.332zm2.097 0h2.884v3.332H4.27v-3.332zm12.577-.75v-3.332h2.79v3.332h-2.79zm0-4.082V6.672h1.346v3.331h-1.346zm0 4.832h1.346v3.332h-1.346v-3.332zm2.095 0h2.884v3.332h-2.884v-3.332zm2.884-.75h-1.439v-3.332h1.439v3.332zm0-4.082h-2.884V6.672h2.884v3.331zm1.119 10.745H1.055v-1.831h21.889v1.831z",
    fill: primary
  }));
};

var _default = IconUL2Fireplaces;
exports["default"] = _default;