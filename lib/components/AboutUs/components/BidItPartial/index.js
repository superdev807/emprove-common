'use strict';

import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
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