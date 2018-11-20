'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputField = undefined;

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

var _InputLabel = require('@material-ui/core/InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _OutlinedInput = require('@material-ui/core/OutlinedInput');

var _OutlinedInput2 = _interopRequireDefault(_OutlinedInput);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _mask = require('../../utils/mask');

var _styles = require('@material-ui/core/styles');

var _styles2 = require('./styles');

var _styles3 = _interopRequireDefault(_styles2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputField = exports.InputField = function (_Component) {
  _inherits(InputField, _Component);

  function InputField(props) {
    _classCallCheck(this, InputField);

    var _this = _possibleConstructorReturn(this, (InputField.__proto__ || Object.getPrototypeOf(InputField)).call(this, props));

    _this.handleFocus = function (event) {
      var input = _this.props.input;

      event.target.placeholder = '';
      input.onFocus(event);
    };

    _this.handleBlur = function (event) {
      var _this$props = _this.props,
          input = _this$props.input,
          placeholder = _this$props.placeholder;

      if (placeholder) {
        event.target.placeholder = placeholder;
      }
      input.onBlur(event);
    };

    _this.labelRef = _react2.default.createRef();
    return _this;
  }

  _createClass(InputField, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.variant === 'outlined') {
        this.labelNode = _reactDom2.default.findDOMNode(this.labelRef.current);
        this.forceUpdate();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _cx;

      var _props = this.props,
          className = _props.className,
          classes = _props.classes,
          disabled = _props.disabled,
          fullWidth = _props.fullWidth,
          helperText = _props.helperText,
          errorMessageClass = _props.errorMessageClass,
          input = _props.input,
          inputClasses = _props.inputClasses,
          inputClassName = _props.inputClassName,
          inputLabelProps = _props.inputLabelProps,
          inputProps = _props.inputProps,
          label = _props.label,
          mask = _props.mask,
          max = _props.max,
          min = _props.min,
          multiline = _props.multiline,
          placeholder = _props.placeholder,
          type = _props.type,
          hideErrorText = _props.hideErrorText,
          rightAligned = _props.rightAligned,
          rows = _props.rows,
          rowsMax = _props.rowsMax,
          startAdornment = _props.startAdornment,
          endAdornment = _props.endAdornment,
          variant = _props.variant,
          _props$meta = _props.meta,
          touched = _props$meta.touched,
          error = _props$meta.error;


      var outlined = variant === 'outlined';
      var InputComponent = outlined ? _OutlinedInput2.default : _Input2.default;
      var moreProps = {};
      if (outlined) {
        if (typeof inputLabelProps.shrink !== 'undefined') {
          moreProps.notched = inputLabelProps.shrink;
        }
        moreProps.labelWidth = this.labelNode && this.labelNode.offsetWidth || 0;
      }

      return _react2.default.createElement(
        _FormControl2.default,
        { className: className, error: touched && !!error, fullWidth: fullWidth, variant: variant },
        helperText && _react2.default.createElement(
          _FormHelperText2.default,
          { className: classes.formHelperText },
          helperText
        ),
        _react2.default.createElement(InputComponent, _extends({}, input, {
          classes: inputClasses,
          type: type,
          placeholder: placeholder,
          multiline: multiline,
          className: (0, _classnames2.default)(classes.input, inputClassName),
          disabled: disabled,
          rows: rows,
          rowsMax: rowsMax,
          inputProps: _extends({
            min: min,
            max: max
          }, inputProps, {
            className: (0, _classnames2.default)((_cx = {}, _defineProperty(_cx, (0, _get2.default)(inputProps, 'className'), Boolean((0, _get2.default)(inputProps, 'className'))), _defineProperty(_cx, 'text-right', Boolean(rightAligned)), _cx))
          }),
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          startAdornment: startAdornment,
          endAdornment: endAdornment,
          inputComponent: mask === 'plainNumber' ? _mask.NumberMask : undefined
        }, moreProps)),
        label && _react2.default.createElement(
          _InputLabel2.default
          // classeName={inputLabelClassName}
          ,
          _extends({ ref: this.labelRef
          }, inputLabelProps),
          label
        ),
        !hideErrorText && touched && error && _react2.default.createElement(
          _FormHelperText2.default,
          { className: errorMessageClass },
          error
        )
      );
    }
  }]);

  return InputField;
}(_react.Component);

InputField.propTypes = {
  className: _propTypes2.default.string,
  classes: _propTypes2.default.object.isRequired,
  disabled: _propTypes2.default.bool,
  fullWidth: _propTypes2.default.bool,
  helperText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  input: _propTypes2.default.object.isRequired,
  inputClassName: _propTypes2.default.string,
  inputProps: _propTypes2.default.object,
  label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  max: _propTypes2.default.number,
  min: _propTypes2.default.number,
  multiline: _propTypes2.default.bool,
  placeholder: _propTypes2.default.string,
  type: _propTypes2.default.string,
  hideErrorText: _propTypes2.default.bool,
  rightAligned: _propTypes2.default.bool,
  rows: _propTypes2.default.number,
  rowsMax: _propTypes2.default.number,
  startAdornment: _propTypes2.default.object,
  endAdornment: _propTypes2.default.object
};
InputField.defaultProps = {
  inputLabelProps: {}
};
exports.default = (0, _styles.withStyles)(_styles3.default)(InputField);