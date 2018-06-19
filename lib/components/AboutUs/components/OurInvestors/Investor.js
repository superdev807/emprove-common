'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./investor-styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Investor = function Investor(props) {
  return _react2.default.createElement('img', { className: 'investor-image', src: props.investor.imageUrl, alt: props.investor.name });
};

Investor.propTypes = {
  investor: _propTypes2.default.object.isRequired
};

exports.default = Investor;