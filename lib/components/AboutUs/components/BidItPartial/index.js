'use strict';

import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.object.create";
import "core-js/modules/es.object.define-property";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.set-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";

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
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '@material-ui/core/Button';
import './style.scss';

var BidItPartial =
/*#__PURE__*/
function (_Component) {
  _inherits(BidItPartial, _Component);

  function BidItPartial() {
    _classCallCheck(this, BidItPartial);

    return _possibleConstructorReturn(this, _getPrototypeOf(BidItPartial).apply(this, arguments));
  }

  _createClass(BidItPartial, [{
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
        id: "bidItImages",
        className: "bidItImages"
      }, React.createElement("div", {
        id: "bidItCircle",
        className: "bidItCircle"
      }, React.createElement("div", {
        id: "bidItStep1",
        className: cx('bidItStep1', {
          onStep: onStep
        })
      }, React.createElement("div", {
        id: "bidItStep1Inner",
        className: "bidItStep1Inner",
        style: {
          backgroundImage: 'url(' + domain + 'images/bidItStep1.png)'
        },
        title: "Turn your project dream into a comprehensive request-for-proposal package for contractors to bid!"
      }, React.createElement("div", {
        className: "bidItStepNumber"
      }, "1"))), React.createElement("div", {
        id: "bidItStep2",
        className: cx('bidItStep2', {
          onStep: onStep
        })
      }, React.createElement("div", {
        id: "bidItStep2Inner",
        className: "bidItStep2Inner",
        style: {
          backgroundImage: 'url(' + domain + 'images/bidItStep2.png)'
        },
        title: "Turn your project dream into a comprehensive request-for-proposal package for contractors to bid!"
      }, React.createElement("div", {
        className: "bidItStepNumber"
      }, "2"))), React.createElement("div", {
        id: "bidItStep3",
        className: cx('bidItStep3', {
          onStep: onStep
        })
      }, React.createElement("div", {
        id: "bidItStep3Inner",
        className: "bidItStep3Inner",
        style: {
          backgroundImage: 'url(' + domain + 'images/bidItStep3.png)'
        },
        title: "Turn your project dream into a comprehensive request-for-proposal package for contractors to bid!"
      }, React.createElement("div", {
        className: "bidItStepNumber"
      }, "3"))))), React.createElement("div", {
        id: "bidIt",
        className: cx('partial__description', 'bidIt', {
          onStep: onStep
        })
      }, React.createElement("div", {
        id: "bidItTitle",
        className: "bidItTitle"
      }, "GET IT DONE"), React.createElement("div", {
        id: "bidItBody",
        className: "bidItBody"
      }, "When you're comfortable with your project details and estimate, we'll send it to at least three qualified contractors in your area. Review their preliminary pricing and select the pros to meet. After a site visit, your contractor can nail down a price."), React.createElement("div", {
        id: "bidItButton",
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

  return BidItPartial;
}(Component);

_defineProperty(BidItPartial, "propTypes", {
  domain: PropTypes.string,
  onStep: PropTypes.bool,
  actionText: PropTypes.string,
  action: PropTypes.func
});

export default BidItPartial;