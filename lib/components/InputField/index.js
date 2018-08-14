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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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

  function InputField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InputField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputField.__proto__ || Object.getPrototypeOf(InputField)).call.apply(_ref, [this].concat(args))), _this), _this.handleFocus = function (event) {
      var input = _this.props.input;

      event.target.placeholder = '';
      input.onFocus(event);
    }, _this.handleBlur = function (event) {
      var _this$props = _this.props,
          input = _this$props.input,
          placeholder = _this$props.placeholder;

      if (placeholder) {
        event.target.placeholder = placeholder;
      }
      input.onBlur(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InputField, [{
    key: 'render',
    value: function render() {
      var _cx;

      var _props = this.props,
          className = _props.className,
          classes = _props.classes,
          disabled = _props.disabled,
          fullWidth = _props.fullWidth,
          helperText = _props.helperText,
          input = _props.input,
          inputClassName = _props.inputClassName,
          inputProps = _props.inputProps,
          label = _props.label,
          max = _props.max,
          min = _props.min,
          multiline = _props.multiline,
          placeholder = _props.placeholder,
          type = _props.type,
          hideErrorText = _props.hideErrorText,
          rightAligned = _props.rightAligned,
          rows = _props.rows,
          rowsMax = _props.rowsMax,
          _props$meta = _props.meta,
          touched = _props$meta.touched,
          error = _props$meta.error;


      return _react2.default.createElement(
        _FormControl2.default,
        { className: className, error: touched && !!error, fullWidth: fullWidth },
        label && _react2.default.createElement(
          _InputLabel2.default,
          null,
          label
        ),
        helperText && _react2.default.createElement(
          _FormHelperText2.default,
          { className: classes.formHelperText },
          helperText
        ),
        _react2.default.createElement(_Input2.default, _extends({}, input, {
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
          onBlur: this.handleBlur
        })),
        !hideErrorText && touched && error && _react2.default.createElement(
          _FormHelperText2.default,
          null,
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
  label: _propTypes2.default.string,
  max: _propTypes2.default.number,
  min: _propTypes2.default.number,
  multiline: _propTypes2.default.bool,
  placeholder: _propTypes2.default.string,
  type: _propTypes2.default.string,
  hideErrorText: _propTypes2.default.bool,
  rightAligned: _propTypes2.default.bool,
  rows: _propTypes2.default.number,
  rowsMax: _propTypes2.default.number
};
exports.default = (0, _styles.withStyles)(_styles3.default)(InputField);