'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FooterList = require('../FooterList');

var _FooterList2 = _interopRequireDefault(_FooterList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var growWithUsReasons = ['Build Your Professional Brand', 'Lower Your Overhead Costs'];

var GrowWithUs = function GrowWithUs(props) {
  return _react2.default.createElement(_FooterList2.default, { items: growWithUsReasons });
};

exports.default = GrowWithUs;