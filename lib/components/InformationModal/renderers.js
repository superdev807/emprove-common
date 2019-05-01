'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawRenderer = exports.LinkRenderer = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LinkRenderer = function LinkRenderer(props) {
  return _react["default"].createElement("a", {
    href: props.href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, props.children);
};

exports.LinkRenderer = LinkRenderer;

var RawRenderer = function RawRenderer(props) {
  return props.children;
};

exports.RawRenderer = RawRenderer;