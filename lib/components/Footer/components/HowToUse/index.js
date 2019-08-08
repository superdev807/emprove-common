'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _FooterList = _interopRequireDefault(require("../FooterList"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable react/jsx-key */
var instructions = [_react["default"].createElement("span", {
  className: "how-to-use-subtitle"
}, "STYLE IT"), 'Be inspired by our PrettySmart photos', 'Create Styleboards', _react["default"].createElement("span", {
  className: "how-to-use-subtitle"
}, "ESTIMATE IT"), 'Affordability assurance', 'Submit your project', _react["default"].createElement("span", {
  className: "how-to-use-subtitle"
}, "GET IT DONE"), 'Receive a comprehensive Project Plan', 'Get preliminary pricing from qualified contractors', 'Compare proposals to make a well informed selection', 'Create a General Contractor work agreement'];
/* eslint-enable react/jsx-key */

var HowToUse = function HowToUse(props) {
  return _react["default"].createElement(_FooterList["default"], {
    items: instructions
  });
};

var _default = HowToUse;
exports["default"] = _default;