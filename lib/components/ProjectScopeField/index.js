'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Grid = require('@material-ui/core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _ProjectScopeBar = require('./components/ProjectScopeBar');

var _ProjectScopeBar2 = _interopRequireDefault(_ProjectScopeBar);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var options = [{
  label: _react2.default.createElement(
    _react.Fragment,
    null,
    'REPAINT',
    _react2.default.createElement('br', null),
    'ONLY'
  ),
  value: 1,
  barValues: { refinish: 40, replace: 0 },
  text: 'Freshen up by repainting major surfaces.'
}, {
  label: _react2.default.createElement(
    _react.Fragment,
    null,
    'UPGRADE',
    _react2.default.createElement('br', null),
    'FINISHES'
  ),
  value: 2,
  barValues: { refinish: 30, replace: 20 },
  text: 'Get an upgraded look w/o breaking your wallet.'
}, {
  label: _react2.default.createElement(
    _react.Fragment,
    null,
    'LIGHT',
    _react2.default.createElement('br', null),
    'RENOVATION'
  ),
  value: 3,
  barValues: { refinish: 25, replace: 60 },
  text: 'Splurge a little to get the look you want.'
}, {
  label: _react2.default.createElement(
    _react.Fragment,
    null,
    'FULL',
    _react2.default.createElement('br', null),
    'RENOVATION'
  ),
  value: 4,
  barValues: { refinish: 0, replace: 100 },
  text: 'Replace, renew for a brand new start!'
}];

var chartOptions = [{ value: 'refinish', label: 'Refinish' }, { value: 'replace', label: 'New or Replace' }, { value: 'keep', label: 'Keep Existing' }];

var ProjectScopeField = function (_Component) {
  _inherits(ProjectScopeField, _Component);

  function ProjectScopeField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ProjectScopeField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProjectScopeField.__proto__ || Object.getPrototypeOf(ProjectScopeField)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (value) {
      return function () {
        var input = _this.props.input;

        input.onChange(value);
      };
    }, _this.onSelect = function (value) {
      return function () {
        var onSelect = _this.props.onSelect;

        onSelect && onSelect(value);
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ProjectScopeField, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          input = _props.input,
          error = _props.meta.error,
          className = _props.className;


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)("project-scope-field", _defineProperty({}, className, Boolean(className))) },
        _react2.default.createElement(
          _Grid2.default,
          { container: true, spacing: 24 },
          options.map(function (option, index) {
            var isSelected = option.value === input.value;
            var isDisabled = input.value !== null && !isSelected;

            return _react2.default.createElement(
              _Grid2.default,
              { key: index, item: true, className: 'project-scope-field__option' },
              _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('project-scope-field__option-box', { selected: isSelected, disabled: isDisabled }), onClick: _this2.handleChange(option.value) },
                _react2.default.createElement(
                  'div',
                  { className: 'project-scope-field__option-top' },
                  _react2.default.createElement(
                    _Typography2.default,
                    { className: 'project-scope-field__text project-scope-field__text--title', variant: 'body2' },
                    option.label
                  ),
                  _react2.default.createElement(_ProjectScopeBar2.default, {
                    className: 'project-scope-field__option-bar',
                    refinish: option.barValues.refinish,
                    replace: option.barValues.replace
                  }),
                  _react2.default.createElement(
                    _Typography2.default,
                    { className: 'project-scope-field__text project-scope-field__text--help', variant: 'body1' },
                    option.text
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'project-scope-field__option-bottom' },
                  isSelected && _react2.default.createElement(
                    _Button2.default,
                    { className: 'project-scope-field__option-button', color: 'primary', fullWidth: true, variant: 'contained', onClick: _this2.onSelect(option.value) },
                    'Select'
                  )
                )
              )
            );
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'project-scope-field__charts' },
          chartOptions.map(function (option, index) {
            return _react2.default.createElement(
              'div',
              { key: index, className: 'project-scope-field__chart' },
              _react2.default.createElement('div', { className: 'project-scope-field__chart-box ' + option.value }),
              _react2.default.createElement(
                _Typography2.default,
                { className: 'project-scope-field__text project-scope-field__text--help', variant: 'body1' },
                option.label
              )
            );
          })
        )
      );
    }
  }]);

  return ProjectScopeField;
}(_react.Component);

exports.default = ProjectScopeField;