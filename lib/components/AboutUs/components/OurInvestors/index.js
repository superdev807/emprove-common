'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Investor = require('./Investor');

var _Investor2 = _interopRequireDefault(_Investor);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var investors = [{
  id: 1,
  name: '',
  imageKey: 'ic_investor_01.svg'
}, {
  id: 2,
  name: '',
  imageKey: 'ic_investor_02.svg'
}, {
  id: 3,
  name: '',
  imageKey: 'ic_investor_01.svg'
}];

var OurInvestors = function OurInvestors(props) {
  var theInvestors = investors.map(function (investor) {
    var investorWithImageUrl = _extends({}, investor, {
      imageUrl: '/images/' + investor.imageKey
    });

    return _react2.default.createElement(
      'div',
      { key: investor.id, className: 'our-investors__investor' },
      _react2.default.createElement(_Investor2.default, { investor: investorWithImageUrl })
    );
  });

  return _react2.default.createElement(
    'section',
    { className: 'our-investors' },
    _react2.default.createElement(
      'div',
      { className: 'our-investors__title' },
      'Our ',
      _react2.default.createElement(
        'strong',
        null,
        'Investors'
      )
    ),
    _react2.default.createElement(
      'p',
      { className: 'our-investors__paragraph' },
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis, tellus non aliquam gravida, augue dui lacinia felis, nec auctor mi dui nec lacus. Ut in iaculis nulla.'
    ),
    _react2.default.createElement(
      'div',
      { className: 'our-investors__investors' },
      theInvestors
    )
  );
};

exports.default = OurInvestors;