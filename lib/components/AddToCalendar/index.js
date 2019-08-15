'use strict';

import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.object.assign";
import "core-js/modules/es.object.create";
import "core-js/modules/es.object.define-property";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.set-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import IconCalendarPlus from '../../icons/IconCalendarPlus';
import { downloadiCalendar, generateGoogleCalendarUrl, generateYahooCalendarUrl } from '../../utils/calendarFunctions';
import './styles.scss';
var OnlineCalendar = {
  GOOGLE: 'google',
  YAHOO: 'yahoo'
};

var AddToCalendar =
/*#__PURE__*/
function (_Component) {
  _inherits(AddToCalendar, _Component);

  function AddToCalendar(props) {
    var _this;

    _classCallCheck(this, AddToCalendar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AddToCalendar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleToggle", function () {
      _this.setState({
        open: !_this.state.open
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      _this.setState({
        open: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleiCalendarClick", function () {
      downloadiCalendar(_this.props.event);

      _this.handleClose();
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnlineCalendarClick", function (calendarType) {
      var anchor = document.createElement('a');
      var generateCalendarUrl;

      if (calendarType === OnlineCalendar.GOOGLE) {
        generateCalendarUrl = generateGoogleCalendarUrl;
      } else if (calendarType === OnlineCalendar.YAHOO) {
        generateCalendarUrl = generateYahooCalendarUrl;
      } else {
        generateCalendarUrl = null;
      }

      anchor.href = generateCalendarUrl ? generateCalendarUrl(_this.props.event) : '#';
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      anchor.click();

      _this.handleClose();
    });

    _defineProperty(_assertThisInitialized(_this), "handleGoogleCalendarClick", function () {
      _this.handleOnlineCalendarClick(OnlineCalendar.GOOGLE);
    });

    _defineProperty(_assertThisInitialized(_this), "handleYahooCalendarClick", function () {
      _this.handleOnlineCalendarClick(OnlineCalendar.YAHOO);
    });

    _defineProperty(_assertThisInitialized(_this), "getButtonRef", function (node) {
      _this.anchorEl = node;
    });

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(AddToCalendar, [{
    key: "renderTriggerButton",
    value: function renderTriggerButton() {
      var buttonProps = {
        className: 'add-to-calendar__trigger-button',
        buttonRef: this.getButtonRef,
        onClick: this.handleToggle,
        'aria-owns': this.state.open ? 'add-to-calendar-menu-list-grow' : null,
        'aria-haspopup': 'true'
      };

      if (this.props.iconAppearance) {
        buttonProps.className = cx(buttonProps.className, 'add-to-calendar__icon-button');
        return React.createElement(IconButton, buttonProps, React.createElement(IconCalendarPlus, {
          className: "add-to-calendar__icon"
        }));
      } else {
        buttonProps.color = 'primary';
        buttonProps.variant = 'contained';
      }

      return React.createElement(Button, buttonProps, "Add to Calendar");
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("div", {
        className: cx('add-to-calendar', this.props.className)
      }, this.renderTriggerButton(), React.createElement(Popper, {
        className: cx('add-to-calendar__popper', this.props.classes.popper),
        open: this.state.open,
        anchorEl: this.anchorEl,
        transition: true,
        disablePortal: this.props.disablePortal
      }, function (_ref) {
        var TransitionProps = _ref.TransitionProps,
            placement = _ref.placement;
        return React.createElement(Grow, _extends({
          id: "add-to-calendar-menu-list-grow"
        }, TransitionProps, {
          style: {
            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
          }
        }), React.createElement(Paper, null, React.createElement(ClickAwayListener, {
          onClickAway: _this2.handleClose
        }, React.createElement(MenuList, {
          className: "add-to-calendar__menu-list"
        }, React.createElement(MenuItem, {
          className: "add-to-calendar__menu-item",
          onClick: _this2.handleiCalendarClick
        }, "Download iCalendar Event"), React.createElement(MenuItem, {
          className: "add-to-calendar__menu-item",
          onClick: _this2.handleGoogleCalendarClick
        }, "Add to Google Calendar"), React.createElement(MenuItem, {
          className: "add-to-calendar__menu-item",
          onClick: _this2.handleYahooCalendarClick
        }, "Add to Yahoo Calendar")))));
      }));
    }
  }]);

  return AddToCalendar;
}(Component);

_defineProperty(AddToCalendar, "propTypes", {
  classes: PropTypes.object,
  className: PropTypes.string,
  event: PropTypes.object.isRequired,
  disablePortal: PropTypes.bool,
  iconAppearance: PropTypes.bool
});

_defineProperty(AddToCalendar, "defaultProps", {
  classes: {},
  disablePortal: false,
  iconAppearance: false
});

export default AddToCalendar;