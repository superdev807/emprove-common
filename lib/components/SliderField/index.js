'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Slider = require('@material-ui/lab/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderField = function (_Component) {
  _inherits(SliderField, _Component);

  function SliderField(props) {
    _classCallCheck(this, SliderField);

    var _this = _possibleConstructorReturn(this, (SliderField.__proto__ || Object.getPrototypeOf(SliderField)).call(this, props));

    _this.handleChange = function (event, value) {
      _this.setState({ value: value });
      /* 02/07/18 because handleDragEnd currently does not give you value and we shouldn't
      make a call to api mulitple times if user is just sliding past a number */
      _this.debouncedHandleChange(event, value);
    };

    _this.debouncedHandleChange = function (event, value) {
      _this.props.onChange && _this.props.onChange(event, _this.getReturnValue(value));
    };

    _this.handleDragEnd = function (event) {
      _this.props.onDragEnd && _this.props.onDragEnd(event);
    };

    _this.state = {
      value: 0
    };

    _this.debouncedHandleChange = (0, _debounce2.default)(_this.debouncedHandleChange, 500);
    return _this;
  }

  _createClass(SliderField, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      // sets the initial value
      if (prevProps.initialValue !== this.props.initialValue) {
        this.setState({
          value: this.props.initialValue
        });
      }
    }
  }, {
    key: 'renderSliderLabels',
    value: function renderSliderLabels() {
      var _props = this.props,
          classes = _props.classes,
          options = _props.options;
      var value = this.state.value;


      var labelPosition = 100 / (options.length - 1);

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('slider-field__labels', classes.labelsClassName) },
        options.map(function (item, index) {
          return _react2.default.createElement(
            'div',
            { key: item.id, className: (0, _classnames2.default)('slider-field__label', classes.labelClassName), style: { left: index * labelPosition + '%' } },
            _react2.default.createElement(
              _Typography2.default,
              { className: (0, _classnames2.default)('slider-field__label-text', { 'slider-field__label-text--selected': value === item.id }) },
              item.description
            )
          );
        })
      );
    }
  }, {
    key: 'getReturnValue',
    value: function getReturnValue(value) {
      var _props2 = this.props,
          options = _props2.options,
          min = _props2.min,
          step = _props2.step;


      var returnValue = value;
      if (options) {
        var index = (value - min) / step;
        returnValue = options[index];
      }

      return returnValue;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          className = _props3.className,
          classes = _props3.classes,
          helpText = _props3.helpText,
          disabled = _props3.disabled,
          max = _props3.max,
          min = _props3.min,
          onDragEnd = _props3.onDragEnd,
          onDragStart = _props3.onDragStart,
          step = _props3.step,
          sliderIcon = _props3.sliderIcon,
          vertical = _props3.vertical;


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('slider-field', className) },
        helpText && _react2.default.createElement(_Typography2.default, { className: (0, _classnames2.default)('slider-field__helpText', classes.helpTextClassName) }),
        _react2.default.createElement(_Slider2.default, {
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
        }),
        this.renderSliderLabels()
      );
    }
  }]);

  return SliderField;
}(_react.Component);

SliderField.propTypes = {
  classes: _propTypes2.default.object,
  label: _propTypes2.default.string,
  onDragEnd: _propTypes2.default.func,
  onDragStart: _propTypes2.default.func
};

SliderField.defaultProps = {
  classes: {}
};

exports.default = SliderField;