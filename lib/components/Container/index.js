'use strict';
/******************************
 * Bootstrap-container-like component
 ******************************/

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(_ref) {
  var className = _ref.className,
      fluid = _ref.fluid,
      children = _ref.children;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)('container', {
      'container--boxed': !fluid
    }, className)
  }, children);
};

Container.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node
};
var _default = Container;
exports.default = _default;