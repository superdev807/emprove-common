'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _FooterList = _interopRequireDefault(require("../FooterList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var growWithUsReasons = ['Build Your Professional Brand', 'Lower Your Overhead Costs'];

var GrowWithUs = function GrowWithUs(props) {
  return _react["default"].createElement(_FooterList["default"], {
    items: growWithUsReasons
  });
};

var _default = GrowWithUs;
exports["default"] = _default;