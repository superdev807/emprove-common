'use strict';

import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _extends from "@babel/runtime-corejs3/helpers/extends";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; _forEachInstanceProperty(_context2 = ownKeys(source, true)).call(_context2, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context3; _forEachInstanceProperty(_context3 = ownKeys(source)).call(_context3, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    var _getPrototypeOf2, _context;

    var _this;

    _classCallCheck(this, TetheredDateTime);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TetheredDateTime)).call.apply(_getPrototypeOf2, _concatInstanceProperty(_context = [this]).call(_context, args)));

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