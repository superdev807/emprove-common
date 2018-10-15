'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _ExpandLess = require('@material-ui/icons/ExpandLess');

var _ExpandLess2 = _interopRequireDefault(_ExpandLess);

var _ExpandMore = require('@material-ui/icons/ExpandMore');

var _ExpandMore2 = _interopRequireDefault(_ExpandMore);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CollapseButton = function CollapseButton(props) {
  return _react2.default.createElement(
    _IconButton2.default,
    { className: (0, _classnames2.default)('collapse-button', props.className), onClick: props.onClick },
    props.collapsed ? _react2.default.createElement(_ExpandMore2.default, null) : _react2.default.createElement(_ExpandLess2.default, null)
  );
};

CollapseButton.propTypes = {
  className: _propTypes2.default.string,
  collapsed: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
};

exports.default = CollapseButton;