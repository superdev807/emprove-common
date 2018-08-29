"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawRenderer = exports.LinkRenderer = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkRenderer = exports.LinkRenderer = function LinkRenderer(props) {
  return _react2.default.createElement(
    "a",
    { href: props.href, target: "_blank", rel: "noopener noreferrer" },
    props.children
  );
};

var RawRenderer = exports.RawRenderer = function RawRenderer(props) {
  console.log('ParagraphRenderer', props);
  return props.children;
};