'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutTheCompany = function AboutTheCompany(props) {
  return _react2.default.createElement(
    'section',
    { className: (0, _classnames2.default)('about-the-company', props.className) },
    _react2.default.createElement(
      'div',
      { className: 'about-the-company__title' },
      'About ',
      _react2.default.createElement(
        'strong',
        null,
        'Emprove, Inc.'
      )
    ),
    _react2.default.createElement(
      'p',
      { className: 'about-the-company__paragraph' },
      'We\u2019re a collection of construction and tech industry leaders who are passionate about creative innovation. Our ambition is to fix the deep inefficiencies of the home improvement industry.'
    ),
    _react2.default.createElement(
      'p',
      { className: 'about-the-company__paragraph' },
      'Emprove is a technology platform where home owners and contractors engage with one another on a mutually informed and transparent basis, providing clarity and market efficiency.'
    ),
    _react2.default.createElement(
      'p',
      { className: 'about-the-company__paragraph' },
      'We empower home owners with interactive scope definition tools and dynamic cost estimates to initiate their projects with confidence. We service contractors by providing a free and efficient platform to submit cost proposals for projects that are well-defined, vetted, and ready to go!'
    )
  );
};

AboutTheCompany.propTypes = {
  className: _propTypes2.default.string
};

exports.default = AboutTheCompany;