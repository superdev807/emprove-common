'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormControlLabel = require('@material-ui/core/FormControlLabel');

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _FormHelperText = require('@material-ui/core/FormHelperText');

var _FormHelperText2 = _interopRequireDefault(_FormHelperText);

var _FormLabel = require('@material-ui/core/FormLabel');

var _FormLabel2 = _interopRequireDefault(_FormLabel);

var _Switch = require('@material-ui/core/Switch');

var _Switch2 = _interopRequireDefault(_Switch);

var _styles = require('@material-ui/core/styles');

var _styles2 = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ControlLabel = (0, _styles.withStyles)(_styles2.labelStyles)(_FormControlLabel2.default);
var Switch = (0, _styles.withStyles)(_styles2.switchStyles)(_Switch2.default);

var SwitchField = function SwitchField(_ref) {
  var className = _ref.className,
      disabled = _ref.disabled,
      input = _ref.input,
      label = _ref.label,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error;
  return _react2.default.createElement(
    _FormControl2.default,
    { className: className, error: touched && !!error },
    label ? _react2.default.createElement(ControlLabel, {
      control: _react2.default.createElement(Switch, {
        name: input.name,
        color: 'primary',
        checked: Boolean(input.value),
        disabled: disabled,
        onChange: input.onChange,
        onBlur: input.onBlur
      }),
      label: label
    }) : _react2.default.createElement(Switch, {
      name: input.name,
      color: 'primary',
      checked: Boolean(input.value),
      disabled: disabled,
      onChange: input.onChange,
      onBlur: input.onBlur
    }),
    touched && error && _react2.default.createElement(
      _FormHelperText2.default,
      { style: { marginTop: 0 } },
      error
    )
  );
};

exports.default = SwitchField;