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

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorMessage = function ErrorMessage(props) {
  if (props.error) {
    return _react2.default.createElement(
      _Paper2.default,
      { className: (0, _classnames2.default)('error-message', { 'error-message--floating': props.floating }, props.className), elevation: 1 },
      _react2.default.createElement(
        'div',
        null,
        props.error
      ),
      props.tryAgain && _react2.default.createElement(
        _Button2.default,
        { className: 'error-message__try-again-button', variant: 'contained', onClick: props.onTryAgainClick },
        'Try Again'
      )
    );
  }

  return null;
};

ErrorMessage.propTypes = {
  className: _propTypes2.default.string,
  error: _propTypes2.default.string,
  floating: _propTypes2.default.bool,
  onTryAgainClick: _propTypes2.default.func,
  tryAgain: _propTypes2.default.bool
};

ErrorMessage.defaultProps = {
  floating: false,
  tryAgain: false
};

exports.default = ErrorMessage;