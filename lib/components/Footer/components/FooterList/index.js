'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FooterList = function FooterList(props) {
  return _react["default"].createElement("ul", {
    className: (0, _classnames["default"])('footer-list', props.className)
  }, props.items.map(function (item, index) {
    return _react["default"].createElement("li", {
      key: index,
      className: "footer-list__item"
    }, item);
  }));
};

var _default = FooterList;
exports["default"] = _default;