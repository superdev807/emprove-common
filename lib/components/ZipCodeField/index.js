'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZipCodeField = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormHelperText = require('@material-ui/core/FormHelperText');

var _FormHelperText2 = _interopRequireDefault(_FormHelperText);

var _Input = require('@material-ui/core/Input');

var _Input2 = _interopRequireDefault(_Input);

var _InputLabel = require('@material-ui/core/InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _OutlinedInput = require('@material-ui/core/OutlinedInput');

var _OutlinedInput2 = _interopRequireDefault(_OutlinedInput);

var _reactTextMask = require('react-text-mask');

var _reactTextMask2 = _interopRequireDefault(_reactTextMask);

var _styles = require('@material-ui/core/styles');

var _styles2 = require('./styles');

var _styles3 = _interopRequireDefault(_styles2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ZipCodeMask = function ZipCodeMask(_ref) {
  var inputRef = _ref.inputRef,
      inputProps = _objectWithoutProperties(_ref, ['inputRef']);

  return _react2.default.createElement(_reactTextMask2.default, _extends({}, inputProps, { mask: [/\d/, /\d/, /\d/, /\d/, /\d/], guide: false, showMask: true }));
};

var ZipCodeField = exports.ZipCodeField = function (_Component) {
  _inherits(ZipCodeField, _Component);

  function ZipCodeField(props) {
    _classCallCheck(this, ZipCodeField);

    var _this = _possibleConstructorReturn(this, (ZipCodeField.__proto__ || Object.getPrototypeOf(ZipCodeField)).call(this, props));

    _this.labelRef = _react2.default.createRef();
    return _this;
  }

  _createClass(ZipCodeField, [{
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
      var _props = this.props,
          className = _props.className,
          classes = _props.classes,
          disabled = _props.disabled,
          fullWidth = _props.fullWidth,
          helperText = _props.helperText,
          input = _props.input,
          inputClassName = _props.inputClassName,
          inputLabelProps = _props.inputLabelProps,
          label = _props.label,
          labelClassName = _props.labelClassName,
          _props$meta = _props.meta,
          touched = _props$meta.touched,
          error = _props$meta.error,
          placeholder = _props.placeholder,
          type = _props.type,
          hideErrorText = _props.hideErrorText,
          endAdornment = _props.endAdornment,
          inputProps = _props.inputProps,
          variant = _props.variant;


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
        label && _react2.default.createElement(
          _InputLabel2.default
          // classeName={inputLabelClassName}
          ,
          _extends({ ref: this.labelRef
          }, inputLabelProps),
          label
        ),
        helperText && _react2.default.createElement(
          _FormHelperText2.default,
          null,
          helperText
        ),
        _react2.default.createElement(InputComponent, _extends({}, input, {
          type: type,
          className: (0, _classnames2.default)(classes.zipCode, inputClassName),
          placeholder: placeholder,
          disabled: disabled,
          inputComponent: ZipCodeMask,
          endAdornment: endAdornment,
          inputProps: _extends({}, inputProps)
        }, moreProps)),
        !hideErrorText && touched && error && _react2.default.createElement(
          _FormHelperText2.default,
          null,
          error
        )
      );
    }
  }]);

  return ZipCodeField;
}(_react.Component);

ZipCodeField.defaultProps = {
  inputLabelProps: {}
};
exports.default = (0, _styles.withStyles)(_styles3.default)(ZipCodeField);