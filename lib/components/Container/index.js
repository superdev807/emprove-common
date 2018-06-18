'use strict';
/******************************
 * Bootstrap-container-like component
 ******************************/

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(_ref) {
  var className = _ref.className,
      fluid = _ref.fluid,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('container', { 'container--boxed': !fluid }, className) },
    children
  );
};

Container.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node
};

exports.default = Container;