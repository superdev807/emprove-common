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

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormHelperText = require('@material-ui/core/FormHelperText');

var _FormHelperText2 = _interopRequireDefault(_FormHelperText);

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _Input = require('@material-ui/core/Input');

var _Input2 = _interopRequireDefault(_Input);

var _InputAdornment = require('@material-ui/core/InputAdornment');

var _InputAdornment2 = _interopRequireDefault(_InputAdornment);

var _InputLabel = require('@material-ui/core/InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

var _styles2 = require('./styles');

var _styles3 = _interopRequireDefault(_styles2);

var _pureFunctions = require('~/utils/pureFunctions');

var _numberFunctions = require('../../utils/numberFunctions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurrencyInputField = function (_Component) {
  _inherits(CurrencyInputField, _Component);

  function CurrencyInputField(props) {
    _classCallCheck(this, CurrencyInputField);

    var _this = _possibleConstructorReturn(this, (CurrencyInputField.__proto__ || Object.getPrototypeOf(CurrencyInputField)).call(this, props));

    _this.handleFocus = function () {
      var input = _this.props.input;


      _this.setState({
        focused: true
      });
      input.onFocus(input.value);
    };

    _this.handleBlur = function () {
      var input = _this.props.input;


      _this.setState({
        focused: false
      });
      input.onBlur(input.value);
    };

    _this.handleChange = function (event) {
      var input = _this.props.input;
      var value = event.target.value;

      input.onChange(value ? Number(value) : value);
    };

    _this.handleRef = function (ref) {
      _this.inputEl = ref;
    };

    _this.state = {
      focused: false
    };
    return _this;
  }

  _createClass(CurrencyInputField, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if ((0, _pureFunctions.propsChanged)(['focused'], prevState, this.state) && this.state.focused && parseInt(this.props.input.value, 10) === 0) {
        this.inputEl.select();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _cx;

      var _props = this.props,
          allowNegative = _props.allowNegative,
          classes = _props.classes,
          className = _props.className,
          disabled = _props.disabled,
          fullWidth = _props.fullWidth,
          hideErrorText = _props.hideErrorText,
          input = _props.input,
          inputClassName = _props.inputClassName,
          inputProps = _props.inputProps,
          label = _props.label,
          _props$meta = _props.meta,
          touched = _props$meta.touched,
          error = _props$meta.error,
          placeholder = _props.placeholder,
          rightAligned = _props.rightAligned,
          type = _props.type;
      var focused = this.state.focused;


      return _react2.default.createElement(
        _FormControl2.default,
        { className: className, error: touched && !!error, fullWidth: fullWidth },
        label && _react2.default.createElement(
          _InputLabel2.default,
          null,
          label
        ),
        _react2.default.createElement(_Input2.default, _extends({}, input, {
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onChange: this.handleChange,
          type: 'text',
          inputComponent: _numberFunctions.NumberFormatCustom,
          className: (0, _classnames2.default)(classes.currencyInput, inputClassName),
          placeholder: placeholder,
          disabled: disabled,
          inputProps: _extends({}, inputProps, {
            allowNegative: allowNegative || false,
            getInputRef: this.handleRef,
            className: (0, _classnames2.default)((_cx = {}, _defineProperty(_cx, (0, _get2.default)(inputProps, 'className'), Boolean((0, _get2.default)(inputProps, 'className'))), _defineProperty(_cx, 'text-right', Boolean(rightAligned)), _cx))
          }),
          startAdornment: _react2.default.createElement(
            _InputAdornment2.default,
            { position: 'start' },
            '$'
          )
        })),
        !hideErrorText && touched && error && _react2.default.createElement(
          _FormHelperText2.default,
          null,
          error
        )
      );
    }
  }]);

  return CurrencyInputField;
}(_react.Component);

CurrencyInputField.propTypes = {
  allowNegative: _propTypes2.default.bool,
  classes: _propTypes2.default.object,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  fullWidth: _propTypes2.default.bool,
  hideErrorText: _propTypes2.default.bool,
  input: _propTypes2.default.object.isRequired,
  inputProps: _propTypes2.default.object,
  inputClassName: _propTypes2.default.string,
  label: _propTypes2.default.string,
  meta: _propTypes2.default.object.isRequired,
  placeholder: _propTypes2.default.string,
  rightAligned: _propTypes2.default.bool
};
exports.default = (0, _styles.withStyles)(_styles3.default)(CurrencyInputField);