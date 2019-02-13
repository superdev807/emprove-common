'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconYourProperty = function IconYourProperty(props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), _react.default.createElement("path", {
    d: "M12.245 1.816a.373.373 0 0 0-.488 0l-9.943 8.548.488.569.95-.817v10.812c0 .743.604 1.347 1.348 1.347h14.802c.743 0 1.348-.604 1.348-1.347V10.115l.951.817.488-.569-9.944-8.547zm4.875 19.709H6.88v-1.289h10.24v1.289zm0-2.039H6.88v-1.289h10.24v1.289zm0-2.039H6.88v-1.289h10.24v1.289zm0-2.039H6.88v-1.289h10.24v1.289zm0-2.039H6.88v-1.518h10.24v1.518zm2.878 7.559a.599.599 0 0 1-.598.597h-1.53V11.476a.375.375 0 0 0-.375-.375H6.505a.375.375 0 0 0-.375.375v10.048H4.599a.599.599 0 0 1-.598-.597V9.471L12 2.595l7.998 6.875v11.458z"
  }));
};

var _default = IconYourProperty;
exports.default = _default;