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

var _Close = require('@material-ui/icons/Close');

var _Close2 = _interopRequireDefault(_Close);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CloseButton = function CloseButton(props) {
  return _react2.default.createElement(
    _IconButton2.default,
    { className: (0, _classnames2.default)('catalog-photo-modal-close-button', props.className), onClick: props.onClick },
    _react2.default.createElement(_Close2.default, null)
  );
};

CloseButton.propTypes = {
  className: _propTypes2.default.string
};

exports.default = CloseButton;