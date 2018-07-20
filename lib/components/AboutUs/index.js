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

var _BidItPartial = require('./components/BidItPartial');

var _BidItPartial2 = _interopRequireDefault(_BidItPartial);

var _CostItPartial = require('./components/CostItPartial');

var _CostItPartial2 = _interopRequireDefault(_CostItPartial);

var _DreamItPartial = require('./components/DreamItPartial');

var _DreamItPartial2 = _interopRequireDefault(_DreamItPartial);

var _ForProfessionals = require('./components/ForProfessionals');

var _ForProfessionals2 = _interopRequireDefault(_ForProfessionals);

var _OurInvestors = require('./components/OurInvestors');

var _OurInvestors2 = _interopRequireDefault(_OurInvestors);

var _PressAndMedia = require('./components/PressAndMedia');

var _PressAndMedia2 = _interopRequireDefault(_PressAndMedia);

var _TheTeam = require('./components/TheTeam');

var _TheTeam2 = _interopRequireDefault(_TheTeam);

var _TipsAndIdeas = require('./components/TipsAndIdeas');

var _TipsAndIdeas2 = _interopRequireDefault(_TipsAndIdeas);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import OurProduct from './components/OurProduct';
var AboutUs = function AboutUs(props) {
  var domain = window.location.protocol + '//' + window.location.host + '/';
  var actionText = 'Start Now';
  //
  // let onStep2 = '';
  // if (this.state.tabIndex >= 2) {
  //   onStep2 = 'on';
  // }
  //
  // let onStep1 = '';
  // if (this.state.tabIndex >= 1) {
  //   onStep1 = 'on';
  // }
  //
  // let onStep0 = '';
  // if (this.state.onDreamIt) {
  //   onStep0 = 'on';
  // }
  // let onStepBottom = '';
  // if (this.state.tabIndex >= 4) {
  //   onStepBottom = 'on';
  // }

  return _react2.default.createElement(
    'main',
    { className: (0, _classnames2.default)(props.className) },
    _react2.default.createElement(_AboutUsHero2.default, null),
    _react2.default.createElement(
      _Container2.default,
      null,
      _react2.default.createElement(_AboutTheCompany2.default, { className: 'about-us__about-the-company' }),
      _react2.default.createElement(_DreamItPartial2.default, { domain: domain, onStep: true || onStep0, actionText: actionText, action: function action() {
          return null || undefined.handleStart;
        } }),
      _react2.default.createElement(_CostItPartial2.default, { domain: domain, onStep: true || onStep1, actionText: actionText, action: function action() {
          return null || undefined.handleStart;
        } }),
      _react2.default.createElement(_BidItPartial2.default, { domain: domain, onStep: true || onStep2, actionText: actionText, action: function action() {
          return null || undefined.handleStart;
        } })
    ),
    _react2.default.createElement(
      'div',
      { id: 'tab5' },
      _react2.default.createElement(_ForProfessionals2.default, { onStep: 'on' || true || onStepBottom, onClick: function onClick() {
          return null || undefined.goPro;
        } })
    ),
    _react2.default.createElement(_Divider2.default, { className: 'about-us__divider' }),
    _react2.default.createElement(
      _Container2.default,
      null,
      _react2.default.createElement(
        'div',
        { id: 'tab3' },
        _react2.default.createElement(_TipsAndIdeas2.default, null)
      )
    ),
    _react2.default.createElement(_Divider2.default, { className: 'about-us__divider' }),
    _react2.default.createElement(
      _Container2.default,
      null,
      _react2.default.createElement(_TheTeam2.default, { className: 'about-us__the-team', fromContractor: props.fromContractor })
    ),
    _react2.default.createElement(_Divider2.default, { className: 'about-us__divider' }),
    _react2.default.createElement(
      _Container2.default,
      null,
      _react2.default.createElement(
        'div',
        { id: 'tab4' },
        _react2.default.createElement(_PressAndMedia2.default, null)
      )
    )
  );
};

AboutUs.propTypes = {
  className: _propTypes2.default.string,
  fromContractor: _propTypes2.default.bool
};

AboutUs.defaultProps = {
  fromContractor: false
};

exports.default = AboutUs;