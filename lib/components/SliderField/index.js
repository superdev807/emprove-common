'use strict';

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
import Slider from '@material-ui/lab/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import cx from 'classnames';
import debounce from 'lodash/debounce';
import get from 'lodash/get';
import './styles.scss';

var SliderField =
/*#__PURE__*/
function (_Component) {
  _inherits(SliderField, _Component);

  function SliderField(props) {
    var _this;

    _classCallCheck(this, SliderField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SliderField).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event, value) {
      _this.setState({
        value: value
      });
      /* 02/07/18 because handleDragEnd currently does not give you value and we shouldn't
      make a call to api mulitple times if user is just sliding past a number */


      _this.debouncedHandleChange(event, value);
    });

    _defineProperty(_assertThisInitialized(_this), "revertValue", function () {
      _this.setState({
        value: get(_this.props, 'initialValue', _this.prevValue)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "debouncedHandleChange", function (event, value) {
      var onConfirmChange = _this.props.onConfirmChange;

      if (onConfirmChange) {
        onConfirmChange(value, function () {
          return _this.props.input.onChange(value);
        }, _this.revertValue);
      } else {
        _this.props.input.onChange && _this.props.input.onChange(value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDragEnd", function (event) {
      _this.props.onDragEnd && _this.props.onDragEnd(event);
    });

    _this.state = {
      value: 0
    };
    _this.debouncedHandleChange = debounce(_this.debouncedHandleChange, 500);
    return _this;
  }

  _createClass(SliderField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        value: this.props.input.value
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.value !== this.state.value) {
        this.prevValue = prevState.value;
      }

      if (prevState.value === this.state.value && this.state.value !== this.props.input.value) {
        this.setState({
          value: this.props.input.value
        });
      }
    }
  }, {
    key: "createLabel",
    value: function createLabel(item) {
      var _this2 = this;

      return React.createElement(Typography, {
        onClick: function onClick() {
          return _this2.handleChange(event, item.id);
        },
        className: cx('slider-field__label-text', {
          'slider-field__label-text--selected': this.state.value === item.id
        }, this.props.classes.labelText)
      }, item.description);
    }
  }, {
    key: "renderSliderLabels",
    value: function renderSliderLabels() {
      var _this3 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          options = _this$props.options;
      var labelPosition = 100 / (options.length - 1);
      return React.createElement("div", {
        className: cx('slider-field__labels', classes.labels)
      }, options.map(function (item, index) {
        return React.createElement("div", {
          key: item.id,
          className: cx('slider-field__label', classes.label),
          style: {
            left: "".concat(index * labelPosition, "%")
          }
        }, _this3.props.showTooltip ? React.createElement(Tooltip, {
          title: item.tooltipText
        }, _this3.createLabel(item)) : _this3.createLabel(item));
      }));
    }
  }, {
    key: "renderTickMarks",
    value: function renderTickMarks() {
      var _this4 = this;

      var _this$props2 = this.props,
          classes = _this$props2.classes,
          options = _this$props2.options;
      var tickPosition = 100 / (options.length - 1);

      var createTick = function createTick(index, item) {
        return React.createElement("div", {
          key: item.id,
          className: cx('slider-field__tick', _this4.props.classes.tick, {
            'slider-field__tick--passed': _this4.state.value > item.id
          }),
          style: {
            left: "".concat(index * tickPosition, "%")
          }
        });
      };

      return React.createElement("div", {
        className: cx('slider-field__ticks', classes.ticks)
      }, options.map(function (item, index) {
        return _this4.props.showTooltip ? React.createElement(Tooltip, {
          key: item.id,
          title: item.tooltipText
        }, createTick(index, item)) : createTick(index, item);
      }));
    }
  }, {
    key: "getReturnValue",
    value: function getReturnValue(value) {
      var _this$props3 = this.props,
          options = _this$props3.options,
          min = _this$props3.min,
          step = _this$props3.step;
      var returnValue = value;

      if (options) {
        var index = (value - min) / step;
        returnValue = options[index];
      }

      return returnValue;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          classes = _this$props4.classes,
          className = _this$props4.className,
          disabled = _this$props4.disabled,
          helpText = _this$props4.helpText,
          input = _this$props4.input,
          max = _this$props4.max,
          min = _this$props4.min,
          onDragStart = _this$props4.onDragStart,
          showLabels = _this$props4.showLabels,
          showTicks = _this$props4.showTicks,
          sliderIcon = _this$props4.sliderIcon,
          step = _this$props4.step,
          vertical = _this$props4.vertical;
      return React.createElement("div", {
        className: cx('slider-field', className)
      }, helpText && React.createElement(Typography, {
        className: cx('slider-field__helpText', classes.helpTextClassName)
      }), React.createElement(Slider, _extends({}, input, {
        classes: {
          root: 'slider-field__root',
          track: 'slider-field__track',
          trackBefore: 'slider-field__track-before'
        },
        value: this.state.value,
        min: min,
        max: max,
        step: step,
        onChange: this.handleChange,
        onDragEnd: this.handleDragEnd,
        onDragStart: onDragStart,
        thumb: sliderIcon,
        disabled: disabled,
        vertical: vertical
      })), showTicks && this.renderTickMarks(), showLabels && this.renderSliderLabels());
    }
  }]);

  return SliderField;
}(Component);

SliderField.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.string,
  onDragEnd: PropTypes.func,
  onDragStart: PropTypes.func,
  showLabels: PropTypes.bool,
  showTicks: PropTypes.bool
};
SliderField.defaultProps = {
  classes: {},
  showLabels: true,
  showTicks: true
};
export default SliderField;