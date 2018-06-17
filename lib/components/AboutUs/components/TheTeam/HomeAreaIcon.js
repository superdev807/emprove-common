'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomeAreaIcon = function HomeAreaIcon(props) {
  return _react2.default.createElement(
    'div',
    null,
    props.homeAreaId
  );
};

HomeAreaIcon.propTypes = {
  homeAreaId: _propTypes2.default.number.isRequired
};

exports.default = HomeAreaIcon;