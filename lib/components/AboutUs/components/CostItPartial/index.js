'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './style.scss';

var CostItPartial =
/*#__PURE__*/
function (_Component) {
  _inherits(CostItPartial, _Component);

  function CostItPartial() {
    _classCallCheck(this, CostItPartial);

    return _possibleConstructorReturn(this, _getPrototypeOf(CostItPartial).apply(this, arguments));
  }

  _createClass(CostItPartial, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          domain = _this$props.domain,
          onStep = _this$props.onStep,
          actionText = _this$props.actionText,
          action = _this$props.action;
      return React.createElement("div", {
        className: "partial__container"
      }, React.createElement("div", {
        id: "laptop",
        className: "laptop"
      }, React.createElement("div", {
        id: "laptopScreen",
        className: cx('laptopScreen', {
          onStep: onStep
        }),
        style: {
          backgroundImage: 'url(' + domain + 'images/laptopScreen.png)'
        }
      }, React.createElement("div", {
        style: {
          paddingTop: '66%',
          height: 0,
          width: 0
        }
      }), React.createElement("img", {
        id: "laptopContent",
        className: "laptopContent",
        src: domain + 'images/laptopContent.png',
        alt: "Get instant and comprehensive project cost estimates for your home renovation project!"
      })), React.createElement("img", {
        src: domain + 'images/laptopBottom.png',
        style: {
          width: '100%'
        }
      })), React.createElement("div", {
        id: "costIt",
        className: cx('partial__description', 'costIt', {
          onStep: onStep
        })
      }, React.createElement("div", {
        id: "costItTitle",
        className: "costItTitle"
      }, "ESTIMATE IT"), React.createElement("div", {
        id: "costItBody",
        className: "costItBody"
      }, "Don't believe it? Our estimator has real time pricing on virtually everything that goes into a home renovation... by zip code. If your first estimate isn't what you expected, you can just adjust materials and scope and watch the numbers change."), React.createElement("div", {
        id: "costItButton",
        className: "partial__button"
      }, actionText && React.createElement(Button, {
        className: "partial__button-start-now",
        variant: "contained",
        color: "primary",
        onClick: action,
        style: {
          display: 'block',
          marginTop: '5vh'
        }
      }, actionText))));
    }
  }]);

  return CostItPartial;
}(Component);

_defineProperty(CostItPartial, "propTypes", {
  domain: PropTypes.string,
  onStep: PropTypes.bool,
  actionText: PropTypes.string,
  action: PropTypes.func
});

export default CostItPartial;