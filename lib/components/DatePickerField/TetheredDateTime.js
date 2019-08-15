'use strict';

import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.filter";
import "core-js/modules/es.array.for-each";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.object.assign";
import "core-js/modules/es.object.create";
import "core-js/modules/es.object.define-properties";
import "core-js/modules/es.object.define-property";
import "core-js/modules/es.object.get-own-property-descriptor";
import "core-js/modules/es.object.get-own-property-descriptors";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.keys";
import "core-js/modules/es.object.set-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.for-each";
import "core-js/modules/web.dom-collections.iterator";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import cx from 'classnames';
import CalendarContainer from 'react-datetime/src/CalendarContainer';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import DateTime from 'react-datetime';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import './datetime.scss';

var TetheredDateTime =
/*#__PURE__*/
function (_DateTime) {
  _inherits(TetheredDateTime, _DateTime);

  function TetheredDateTime() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TetheredDateTime);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TetheredDateTime)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      _this.setState({
        anchorEl: event.target
      });

      if (!_this.state.open) {
        _this.openCalendar(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickAway", function (event) {
      var anchorEl = _this.state.anchorEl;

      if (anchorEl !== event.target) {
        _this.handleClickOutside();
      }
    });

    return _this;
  }

  _createClass(TetheredDateTime, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var renderInput = this.props.renderInput;
      var _this$state = this.state,
          anchorEl = _this$state.anchorEl,
          currentView = _this$state.currentView,
          open = _this$state.open;
      var className = cx('rdt', this.props.className);
      var input;

      if (this.props.input) {
        var props = _objectSpread({
          key: 'i',
          type: 'text',
          onFocus: this.handleFocus,
          onMouseDown: this.handleFocus,
          onChange: this.onInputChange,
          onKeyDown: this.onInputKey,
          value: this.state.inputValue
        }, this.props.inputProps);

        input = renderInput ? renderInput(props) : React.createElement("input", props);
      } else {
        className += ' rdtStatic';
      }

      return React.createElement("div", {
        className: className
      }, input, React.createElement(Popper, {
        open: open,
        anchorEl: anchorEl,
        placement: "bottom-start",
        transition: true,
        className: "rdtPopper"
      }, function (_ref) {
        var TransitionProps = _ref.TransitionProps;
        return React.createElement(Fade, _extends({}, TransitionProps, {
          timeout: 50
        }), React.createElement(ClickAwayListener, {
          onClickAway: _this2.handleClickAway
        }, React.createElement(Paper, {
          className: "rdtPicker",
          elevation: 3
        }, React.createElement(CalendarContainer, {
          view: currentView,
          viewProps: _this2.getComponentProps()
        }))));
      }));
    }
  }]);

  return TetheredDateTime;
}(DateTime);

export { TetheredDateTime as default };