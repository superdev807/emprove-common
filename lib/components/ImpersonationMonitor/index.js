'use strict';

import _setInterval from "@babel/runtime-corejs3/core-js-stable/set-interval";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
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
        this.timer = _setInterval(this.handleTimer, 1000);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.impersonator && !this.timer) {
        this.timer = _setInterval(this.handleTimer, 1000);
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