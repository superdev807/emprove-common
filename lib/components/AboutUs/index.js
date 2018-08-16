'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var _PressAndMedia = require('./components/PressAndMedia');

var _PressAndMedia2 = _interopRequireDefault(_PressAndMedia);

var _TheTeam = require('./components/TheTeam');

var _TheTeam2 = _interopRequireDefault(_TheTeam);

var _TipsAndIdeas = require('./components/TipsAndIdeas');

var _TipsAndIdeas2 = _interopRequireDefault(_TipsAndIdeas);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

require('./styles.scss');

require('./partial-styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import OurProduct from './components/OurProduct';
// import OurInvestors from './components/OurInvestors';


var SectionIndex = {
  DREAM_IT: 3,
  COST_IT: 4,
  BID_IT: 5,
  FOR_PROFESSIONALS: 6
};

var AboutUs = function (_Component) {
  _inherits(AboutUs, _Component);

  function AboutUs(props) {
    _classCallCheck(this, AboutUs);

    var _this = _possibleConstructorReturn(this, (AboutUs.__proto__ || Object.getPrototypeOf(AboutUs)).call(this, props));

    _this.handleScroll = function (event) {
      var sectionIndex = -1;
      var innerHeight = window.innerHeight * 0.75;

      var dreamIt = document.getElementById('dreamIt');
      if (dreamIt && dreamIt.getBoundingClientRect().top < innerHeight) {
        sectionIndex = SectionIndex.DREAM_IT;
      }
      var costIt = document.getElementById('costIt');
      if (costIt && costIt.getBoundingClientRect().top < innerHeight) {
        sectionIndex = SectionIndex.COST_IT;
      }
      var bidIt = document.getElementById('bidIt');
      if (bidIt && bidIt.getBoundingClientRect().top < innerHeight) {
        sectionIndex = SectionIndex.BID_IT;
      }
      var forProfessionals = document.getElementById('about-us-for-professionals-section');
      if (forProfessionals && forProfessionals.getBoundingClientRect().top < innerHeight) {
        sectionIndex = SectionIndex.FOR_PROFESSIONALS;
      }

      if (_this.state.sectionIndex !== sectionIndex) {
        _this.setState({ sectionIndex: sectionIndex });
      }
    };

    _this.handleStart = function () {
      var _this$props = _this.props,
          history = _this$props.history,
          fromContractor = _this$props.fromContractor;


      if (fromContractor) {
        window.location.replace(process.env.CONSUMER_DOMAIN);
      } else {
        history.push('/browse');
      }
    };

    _this.handleProStart = function () {
      var _this$props2 = _this.props,
          history = _this$props2.history,
          fromContractor = _this$props2.fromContractor;


      if (fromContractor) {
        history.push('/');
      } else {
        history.push('/pro');
      }
    };

    _this.state = {
      sectionIndex: -1
    };
    return _this;
  }

  _createClass(AboutUs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'render',
    value: function render() {
      var domain = window.location.protocol + '//' + window.location.host + '/';
      var actionText = 'Start Now';

      return _react2.default.createElement(
        'main',
        { className: (0, _classnames2.default)(this.props.className) },
        _react2.default.createElement(_AboutUsHero2.default, { onPlayClick: this.props.onPlayClick }),
        _react2.default.createElement(
          _Container2.default,
          null,
          _react2.default.createElement(_AboutTheCompany2.default, { className: 'about-us__about-the-company' }),
          _react2.default.createElement(_DreamItPartial2.default, {
            domain: domain,
            onStep: this.state.sectionIndex >= SectionIndex.DREAM_IT,
            actionText: actionText,
            action: this.handleStart
          }),
          _react2.default.createElement('div', { id: 'tab1', style: { height: '20vh' } }),
          _react2.default.createElement(_CostItPartial2.default, {
            domain: domain,
            onStep: this.state.sectionIndex >= SectionIndex.COST_IT,
            actionText: actionText,
            action: this.handleStart
          }),
          _react2.default.createElement('div', { style: { height: '13vh' } }),
          _react2.default.createElement('div', { id: 'tab2', style: { height: '20vh' } }),
          _react2.default.createElement(_BidItPartial2.default, {
            domain: domain,
            onStep: this.state.sectionIndex >= SectionIndex.BID_IT,
            actionText: actionText,
            action: this.handleStart
          })
        ),
        _react2.default.createElement(_ForProfessionals2.default, {
          id: 'about-us-for-professionals-section',
          className: 'about-us__for-professionals',
          onStep: this.state.sectionIndex >= SectionIndex.FOR_PROFESSIONALS,
          onClick: this.handleProStart
        }),
        _react2.default.createElement(_Divider2.default, { className: 'about-us__divider' }),
        _react2.default.createElement(
          _Container2.default,
          null,
          _react2.default.createElement(
            'div',
            { id: 'tab3' },
            _react2.default.createElement(_TipsAndIdeas2.default, { className: 'about-us__tips-and-ideas', fromContractor: this.props.fromContractor })
          )
        ),
        _react2.default.createElement(_Divider2.default, { className: 'about-us__divider' }),
        _react2.default.createElement(
          _Container2.default,
          null,
          _react2.default.createElement(_TheTeam2.default, { className: 'about-us__the-team', fromContractor: this.props.fromContractor })
        ),
        _react2.default.createElement(_Divider2.default, { className: 'about-us__divider' }),
        _react2.default.createElement(
          _Container2.default,
          null,
          _react2.default.createElement(
            'div',
            { id: 'tab4' },
            _react2.default.createElement(_PressAndMedia2.default, { className: 'about-us__press-and-media', fromContractor: this.props.fromContractor })
          )
        )
      );
    }
  }]);

  return AboutUs;
}(_react.Component);

AboutUs.propTypes = {
  className: _propTypes2.default.string,
  fromContractor: _propTypes2.default.bool,
  consumerURL: _propTypes2.default.string
};

AboutUs.defaultProps = {
  fromContractor: false
};

exports.default = AboutUs;