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
  'STYLE IT'
), 'Be inspired by our PrettySmart™ photos', 'Create Styleboards', _react2.default.createElement(
  'span',
  { className: 'how-to-use-subtitle' },
  'ESTIMATE IT'
), 'Affordability assurance', 'Submit your project', _react2.default.createElement(
  'span',
  { className: 'how-to-use-subtitle' },
  'GET IT DONE'
), 'Receive a comprehensive Project Plan', 'Get preliminary pricing from qualified contractors', 'Compare proposals to make an well informed selection', 'Create a General Contractor work agreement'];

var HowToUse = function HowToUse(props) {
  return _react2.default.createElement(_FooterList2.default, { items: instructions });
};

exports.default = HowToUse;