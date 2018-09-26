'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _CalendarContainer = require('react-datetime/src/CalendarContainer');

var _CalendarContainer2 = _interopRequireDefault(_CalendarContainer);

var _reactDatetime = require('react-datetime');

var _reactDatetime2 = _interopRequireDefault(_reactDatetime);

var _reactTether = require('react-tether');

var _reactTether2 = _interopRequireDefault(_reactTether);

require('./datetime.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TetheredDateTime = function (_DateTime) {
  _inherits(TetheredDateTime, _DateTime);

  function TetheredDateTime() {
    _classCallCheck(this, TetheredDateTime);

    return _possibleConstructorReturn(this, (TetheredDateTime.__proto__ || Object.getPrototypeOf(TetheredDateTime)).apply(this, arguments));
  }

  _createClass(TetheredDateTime, [{
    key: 'render',
    value: function render() {
      var renderInput = this.props.renderInput;

      var className = (0, _classnames2.default)('rdt', this.props.className);
      var children = void 0;

      if (this.props.input) {
        var props = _extends({
          key: 'i',
          type: 'text',
          onFocus: this.openCalendar,
          onChange: this.onInputChange,
          onKeyDown: this.onInputKey,
          value: this.state.inputValue
        }, this.props.inputProps);
        children = renderInput ? renderInput(props) : _react2.default.createElement('input', props);
      } else {
        className += ' rdtStatic';
      }

      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          _reactTether2.default,
          {
            attachment: 'top left',
            targetAttachment: 'bottom left',
            constraints: [{
              to: 'scrollParent'
            }, {
              to: 'window',
              pin: ['bottom']
            }] },
          children,
          this.state.open && _react2.default.createElement(
            'div',
            { className: 'rdtPicker' },
            _react2.default.createElement(_CalendarContainer2.default, {
              view: this.state.currentView,
              viewProps: this.getComponentProps(),
              onClickOutside: this.handleClickOutside
            })
          )
        )
      );
    }
  }]);

  return TetheredDateTime;
}(_reactDatetime2.default);

exports.default = TetheredDateTime;