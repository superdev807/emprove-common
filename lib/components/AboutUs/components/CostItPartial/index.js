'use strict';

import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
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