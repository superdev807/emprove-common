'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FooterList = require('../FooterList');

var _FooterList2 = _interopRequireDefault(_FooterList);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instructions = [_react2.default.createElement(
  'span',
  { className: 'how-to-use-subtitle' },
  'DREAM IT'
), 'Get inspiration in our Photo Catalog', 'Create Styleboards', _react2.default.createElement(
  'span',
  { className: 'how-to-use-subtitle' },
  'COST IT'
), 'Cost Plans', 'Submit a Project', _react2.default.createElement(
  'span',
  { className: 'how-to-use-subtitle' },
  'BID IT'
), 'Receive a Comprehensive Request For Proposal (RFP)', 'Get Competitive Bids from the Most Suitable Contractors', 'Compare Bid Proposals and make an Informed Selection', 'Create a General Contractor Work Agreement'];

var HowToUse = function HowToUse(props) {
  return _react2.default.createElement(_FooterList2.default, { items: instructions });
};

exports.default = HowToUse;