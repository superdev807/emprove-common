'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProjectScopeBar = function ProjectScopeBar(_ref) {
  var className = _ref.className,
      refinish = _ref.refinish,
      replace = _ref.replace;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('project-scope-bar', _defineProperty({}, className, Boolean(className))) },
    _react2.default.createElement('div', { className: 'project-scope-bar__segment project-scope-bar__segment--refinish', style: { width: (refinish || 0) + '%' } }),
    _react2.default.createElement('div', { className: 'project-scope-bar__segment project-scope-bar__segment--replace', style: { width: (replace || 0) + '%' } })
  );
};

exports.default = ProjectScopeBar;