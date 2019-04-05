'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconPremiumBadge = function IconPremiumBadge(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    d: "M24 0H0v24h24V0z",
    fill: "none"
  }), _react.default.createElement("circle", {
    fill: "#ffbf6a",
    cx: "12",
    cy: "12",
    r: "11.284"
  }), _react.default.createElement("path", {
    fill: "#ffbf6a",
    d: "M12 2.034c-5.495 0-9.966 4.471-9.966 9.966S6.505 21.966 12 21.966s9.966-4.471 9.966-9.966S17.495 2.034 12 2.034zm0 19.356c-5.177 0-9.39-4.212-9.39-9.39 0-5.177 4.212-9.39 9.39-9.39 5.177 0 9.39 4.212 9.39 9.39 0 5.177-4.213 9.39-9.39 9.39z"
  }), _react.default.createElement("path", {
    fill: "#b47a47",
    d: "M12 1.117C5.993 1.117 1.117 5.993 1.117 12S5.993 22.883 12 22.883 22.883 18.007 22.883 12 18.007 1.117 12 1.117zm0 20.849c-5.495 0-9.966-4.471-9.966-9.966S6.505 2.034 12 2.034 21.966 6.505 21.966 12 17.495 21.966 12 21.966z"
  }), _react.default.createElement("path", {
    fill: "#ffbf6a",
    d: "M12 23.5C5.659 23.5.5 18.341.5 12S5.659.5 12 .5 23.5 5.659 23.5 12 18.341 23.5 12 23.5zm0-22C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"
  }), _react.default.createElement("path", {
    fill: "#4c3d1e",
    d: "M12.034 5.81l1.869 3.786 4.178.607-3.023 2.947.714 4.162-3.738-1.965-3.737 1.965.714-4.162-3.024-2.947 4.179-.607z"
  }), _react.default.createElement("path", {
    fill: "#fdf8f1",
    d: "M11.632 5.535l1.869 3.787 4.178.607-3.023 2.947.714 4.161-3.738-1.964-3.737 1.964.714-4.161-3.024-2.947 4.179-.607z"
  }), _react.default.createElement("path", {
    fill: "#b47a47",
    d: "M15.37 17.212a.184.184 0 0 1-.082-.02l-3.656-1.923-3.656 1.923a.179.179 0 0 1-.185-.014.172.172 0 0 1-.069-.171l.698-4.071-2.958-2.883c-.048-.047-.065-.116-.044-.18s.075-.109.141-.119l4.087-.594 1.828-3.704c.059-.119.255-.119.313 0l1.828 3.704 4.087.594a.175.175 0 0 1 .097.299l-2.958 2.883.698 4.071a.177.177 0 0 1-.069.171.157.157 0 0 1-.1.034zm-3.738-2.315c.028 0 .056.007.082.02l3.423 1.8-.654-3.811a.175.175 0 0 1 .05-.155l2.77-2.7-3.828-.556a.172.172 0 0 1-.131-.096L11.632 5.93 9.92 9.399a.178.178 0 0 1-.131.096l-3.828.556 2.77 2.7c.042.041.06.098.05.155l-.654 3.811 3.423-1.8a.184.184 0 0 1 .082-.02z"
  }));
};

var _default = IconPremiumBadge;
exports.default = _default;