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

var _Divider = require('@material-ui/core/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _AboutUsHero = require('./components/AboutUsHero');

var _AboutUsHero2 = _interopRequireDefault(_AboutUsHero);

var _AboutTheCompany = require('./components/AboutTheCompany');

var _AboutTheCompany2 = _interopRequireDefault(_AboutTheCompany);

var _OurProduct = require('./components/OurProduct');

var _OurProduct2 = _interopRequireDefault(_OurProduct);

var _OurInvestors = require('./components/OurInvestors');

var _OurInvestors2 = _interopRequireDefault(_OurInvestors);

var _PressAndMedia = require('./components/PressAndMedia');

var _PressAndMedia2 = _interopRequireDefault(_PressAndMedia);

var _TheTeam = require('./components/TheTeam');

var _TheTeam2 = _interopRequireDefault(_TheTeam);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutUs = function AboutUs(props) {
  return _react2.default.createElement(
    'main',
    { className: (0, _classnames2.default)(props.className) },
    _react2.default.createElement(_AboutUsHero2.default, null),
    _react2.default.createElement(_AboutTheCompany2.default, null),
    _react2.default.createElement(_TheTeam2.default, null),
    _react2.default.createElement(_Divider2.default, null),
    _react2.default.createElement(_OurProduct2.default, null)
  );
};

AboutUs.propTypes = {
  className: _propTypes2.default.string
};

exports.default = AboutUs;