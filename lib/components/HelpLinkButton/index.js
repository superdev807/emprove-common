'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _HelpOutline = require('@material-ui/icons/HelpOutline');

var _HelpOutline2 = _interopRequireDefault(_HelpOutline);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HelpLinkButton = function HelpLinkButton(props) {
  return _react2.default.createElement(
    _IconButton2.default,
    {
      className: (0, _classnames2.default)('help-link-button', { 'help-link-button--size-16': props.size === 16, 'help-link-button--left-margin': props.margin === 'left', 'help-link-button--blink': props.blink, 'help-link-button--highlighted': props.highlighted }, props.className),
      component: 'a',
      href: process.env.HELP_DOMAIN + '/' + props.path,
      target: '_blank' },
    _react2.default.createElement(_HelpOutline2.default, { className: (0, _classnames2.default)({ 'help-link-button--size-16': props.size === 16 }) })
  );
};

HelpLinkButton.propTypes = {
  blink: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  highlighted: _propTypes2.default.bool,
  margin: _propTypes2.default.oneOf(['left']),
  path: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.oneOf([16])
};

HelpLinkButton.defaultProps = {
  blink: false,
  highlighted: false
};

exports.default = HelpLinkButton;