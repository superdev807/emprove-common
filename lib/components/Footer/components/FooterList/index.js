'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterList = function FooterList(props) {
  return _react2.default.createElement(
    'ul',
    { className: (0, _classnames2.default)('footer-list', props.className) },
    props.items.map(function (item, index) {
      return _react2.default.createElement(
        'li',
        { key: index, className: 'footer-list__item' },
        item
      );
    })
  );
};

exports.default = FooterList;