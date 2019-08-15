'use strict';

import _extends from "@babel/runtime-corejs3/helpers/extends";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
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