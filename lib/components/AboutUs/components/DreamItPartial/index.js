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

var DreamItPartial =
/*#__PURE__*/
function (_Component) {
  _inherits(DreamItPartial, _Component);

  function DreamItPartial() {
    _classCallCheck(this, DreamItPartial);

    return _possibleConstructorReturn(this, _getPrototypeOf(DreamItPartial).apply(this, arguments));
  }

  _createClass(DreamItPartial, [{
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
        id: "monitor",
        className: "monitor",
        style: {
          backgroundImage: 'url(' + domain + 'images/monitor.png)'
        },
        title: "Dream up your home improvements with Emprove's interactive scope definition cost estimation tools!"
      }, React.createElement("iframe", {
        id: "monitorContent",
        className: "monitorContent",
        src: "https://player.vimeo.com/video/252014513?quality=720p&background=1",
        width: "640",
        height: "360",
        frameBorder: "0"
      })), React.createElement("div", {
        id: "dreamIt",
        className: cx('dreamIt', 'partial__description', {
          onStep: onStep
        })
      }, React.createElement("div", {
        id: "dreamItTitle",
        className: "dreamItTitle"
      }, "STYLE IT"), React.createElement("div", {
        id: "dreamItBody",
        className: "dreamItBody"
      }, "Our photos aren't just pretty... they're PrettySmart! As you select photos you like, they send costing information to our", ' ', "estimator, the most advanced budgeting tool in the residential design and construction industry."), React.createElement("div", {
        id: "dreamItButton",
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

  return DreamItPartial;
}(Component);

_defineProperty(DreamItPartial, "propTypes", {
  domain: PropTypes.string,
  onStep: PropTypes.bool,
  actionText: PropTypes.string,
  action: PropTypes.func
});

export default DreamItPartial;