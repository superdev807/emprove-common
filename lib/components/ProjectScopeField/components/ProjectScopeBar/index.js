'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProjectScopeBar = function ProjectScopeBar(_ref) {
  var className = _ref.className,
      refinish = _ref.refinish,
      replace = _ref.replace;
  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])('project-scope-bar', _defineProperty({}, className, Boolean(className)))
  }, _react["default"].createElement("div", {
    className: "project-scope-bar__segment project-scope-bar__segment--refinish",
    style: {
      width: "".concat(refinish || 0, "%")
    }
  }), _react["default"].createElement("div", {
    className: "project-scope-bar__segment project-scope-bar__segment--replace",
    style: {
      width: "".concat(replace || 0, "%")
    }
  }));
};

var _default = ProjectScopeBar;
exports["default"] = _default;