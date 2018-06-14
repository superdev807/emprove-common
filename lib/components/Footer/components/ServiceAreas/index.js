'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FooterList = require('../FooterList');

var _FooterList2 = _interopRequireDefault(_FooterList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var serviceAreas = ['North Las Vegas', 'Nellis AFB', 'Las Vegas', 'Sunrise Manor', 'Winchester', 'Summerlin South', 'Spring Valley', 'Whitney', 'Paradise', 'Blue Diamond', 'Enterprise', 'Henderson', 'Boulder City'];

var ServiceAreas = function ServiceAreas(props) {
  return _react2.default.createElement(_FooterList2.default, { items: serviceAreas });
};

exports.default = ServiceAreas;