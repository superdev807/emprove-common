'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FooterList = require('../FooterList');

var _FooterList2 = _interopRequireDefault(_FooterList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var workWithUsReasons = ['We have the Most Qualified Consumers', 'You Can Bid Free and Efficently'];

var WorkWithUs = function WorkWithUs(props) {
  return _react2.default.createElement(_FooterList2.default, { items: workWithUsReasons });
};

exports.default = WorkWithUs;