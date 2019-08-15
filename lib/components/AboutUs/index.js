'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Divider from '@material-ui/core/Divider';
import AboutUsHero from './components/AboutUsHero';
import AboutTheCompany from './components/AboutTheCompany';
import BidItPartial from './components/BidItPartial';
import CostItPartial from './components/CostItPartial';
import DreamItPartial from './components/DreamItPartial';
import ForProfessionals from './components/ForProfessionals'; // import OurProduct from './components/OurProduct';
// import OurInvestors from './components/OurInvestors';

import PressAndMedia from './components/PressAndMedia/content';
import TheTeam from './components/TheTeam';
import TipsAndIdeasContent from './components/TipsAndIdeas/content';
import Container from '../Container';
import './styles.scss';
import './partial-styles.scss';
var SectionIndex = {
  DREAM_IT: 3,
  COST_IT: 4,
  BID_IT: 5,
  FOR_PROFESSIONALS: 6
};

var AboutUs =
/*#__PURE__*/
function (_Component) {
  _inherits(AboutUs, _Component);

  function AboutUs(props) {
    var _this;

    _classCallCheck(this, AboutUs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AboutUs).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function (event) {
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
        _this.setState({
          sectionIndex: sectionIndex
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleStart", function () {
      var _this$props = _this.props,
          history = _this$props.history,
          fromContractor = _this$props.fromContractor;

      if (fromContractor) {
        window.location.replace(process.env.CONSUMER_DOMAIN);
      } else {
        history.push('/browse');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleProStart", function () {
      var _this$props2 = _this.props,
          history = _this$props2.history,
          fromContractor = _this$props2.fromContractor;

      if (fromContractor) {
        history.push('/');
      } else {
        history.push('/pro');
      }
    });

    _this.state = {
      sectionIndex: -1
    };
    return _this;
  }

  _createClass(AboutUs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var domain = window.location.protocol + '//' + window.location.host + '/';
      var actionText = 'Start Now';
      return React.createElement("main", {
        className: cx(this.props.className)
      }, React.createElement(AboutUsHero, {
        onPlayClick: this.props.onPlayClick
      }), React.createElement(Container, null, React.createElement(AboutTheCompany, {
        className: "about-us__about-the-company"
      }), React.createElement(DreamItPartial, {
        domain: domain,
        onStep: this.state.sectionIndex >= SectionIndex.DREAM_IT,
        actionText: actionText,
        action: this.handleStart
      }), React.createElement("div", {
        id: "tab1",
        style: {
          height: '20vh'
        }
      }), React.createElement(CostItPartial, {
        domain: domain,
        onStep: this.state.sectionIndex >= SectionIndex.COST_IT,
        actionText: actionText,
        action: this.handleStart
      }), React.createElement("div", {
        style: {
          height: '13vh'
        }
      }), React.createElement("div", {
        id: "tab2",
        style: {
          height: '20vh'
        }
      }), React.createElement(BidItPartial, {
        domain: domain,
        onStep: this.state.sectionIndex >= SectionIndex.BID_IT,
        actionText: actionText,
        action: this.handleStart
      })), React.createElement(ForProfessionals, {
        id: "about-us-for-professionals-section",
        className: "about-us__for-professionals",
        onStep: this.state.sectionIndex >= SectionIndex.FOR_PROFESSIONALS,
        onClick: this.handleProStart
      }), React.createElement(Divider, {
        className: "about-us__divider"
      }), React.createElement(Container, null, React.createElement("div", {
        id: "tab3"
      }, React.createElement(TipsAndIdeasContent, {
        className: "about-us__tips-and-ideas",
        fromContractor: this.props.fromContractor,
        posts: this.props.tipsAndIdeasPosts,
        postsLoading: this.props.postsLoading
      }))), React.createElement(Divider, {
        className: "about-us__divider"
      }), React.createElement(Container, null, React.createElement(TheTeam, {
        className: "about-us__the-team",
        fromContractor: this.props.fromContractor
      })), React.createElement(Divider, {
        className: "about-us__divider"
      }), React.createElement(Container, null, React.createElement("div", {
        id: "tab4"
      }, React.createElement(PressAndMedia, {
        className: "about-us__press-and-media",
        fromContractor: this.props.fromContractor,
        posts: this.props.pressAndMediaPosts,
        postsLoading: this.props.postsLoading
      }))));
    }
  }]);

  return AboutUs;
}(Component);

AboutUs.propTypes = {
  className: PropTypes.string,
  fromContractor: PropTypes.bool
};
AboutUs.defaultProps = {
  fromContractor: false
};
export default AboutUs;