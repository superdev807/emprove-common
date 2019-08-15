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
import "core-js/modules/web.timers";

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
import Button from '@material-ui/core/Button';
import Draggable from 'react-draggable';
import moment from 'moment';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import './style.scss';
moment.relativeTimeThreshold('s', 59);
moment.relativeTimeThreshold('ss', 0);
moment.relativeTimeThreshold('m', 40);

var getTimeLeft = function getTimeLeft(exp) {
  return moment.duration(moment(exp ? exp * 1000 : undefined).diff(moment()));
};

var ImpersonationMonitor =
/*#__PURE__*/
function (_Component) {
  _inherits(ImpersonationMonitor, _Component);

  function ImpersonationMonitor(props) {
    var _this;

    _classCallCheck(this, ImpersonationMonitor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImpersonationMonitor).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleTimer", function () {
      var onExit = _this.props.onExit;
      var timeLeft = getTimeLeft(_this.props.tokenExp);

      if (timeLeft.asSeconds() <= 0) {
        clearInterval(_this.timer);
        onExit && onExit();
      } else {
        _this.setState({
          timeLeft: timeLeft.humanize()
        });
      }
    });

    _this.state = {
      timeLeft: getTimeLeft(props.tokenExp).humanize()
    };
    return _this;
  }

  _createClass(ImpersonationMonitor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var impersonator = this.props.impersonator;

      if (impersonator) {
        this.timer = setInterval(this.handleTimer, 1000);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.impersonator && !this.timer) {
        this.timer = setInterval(this.handleTimer, 1000);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          impersonator = _this$props.impersonator,
          onExit = _this$props.onExit;
      var timeLeft = this.state.timeLeft;
      return impersonator ? React.createElement(Draggable, {
        bounds: "parent"
      }, React.createElement(Snackbar, {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right'
        },
        open: true,
        message: React.createElement("span", {
          className: "impersonation-monitor-text"
        }, "Admin Mode (", impersonator.email, ") Expires in ", timeLeft),
        action: [React.createElement(Button, {
          key: "close",
          color: "inherit",
          onClick: onExit
        }, "Exit")]
      })) : null;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      return {
        timeLeft: getTimeLeft(props.tokenExp).humanize()
      };
    }
  }]);

  return ImpersonationMonitor;
}(Component);

_defineProperty(ImpersonationMonitor, "propTypes", {
  impersonator: PropTypes.object,
  onExit: PropTypes.func,
  tokenExp: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
});

export default ImpersonationMonitor;