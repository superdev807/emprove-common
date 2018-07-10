'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CircularProgress = require('@material-ui/core/CircularProgress');

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

var _styles2 = require('./styles');

var _styles3 = _interopRequireDefault(_styles2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LoadingIndicator = function LoadingIndicator(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      opacity = _ref.opacity,
      fixed = _ref.fixed;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(classes.refreshOverlay, _defineProperty({}, classes.fixedOverlay, fixed)), style: opacity !== undefined ? { backgroundColor: 'rgba(255, 255, 255, ' + opacity + ')' } : {} },
    _react2.default.createElement(_CircularProgress2.default, { size: 70, thickness: 5 })
  );
};

LoadingIndicator.propTypes = {
  className: _propTypes2.default.string,
  classes: _propTypes2.default.object.isRequired,
  opacity: _propTypes2.default.number
};

exports.default = (0, _styles.withStyles)(_styles3.default)(LoadingIndicator);