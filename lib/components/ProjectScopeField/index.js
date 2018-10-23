'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Grid = require('@material-ui/core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _mobileDetect = require('mobile-detect');

var _mobileDetect2 = _interopRequireDefault(_mobileDetect);

var _ProjectScopeOptionBox = require('./components/ProjectScopeOptionBox');

var _ProjectScopeOptionBox2 = _interopRequireDefault(_ProjectScopeOptionBox);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _projectScopeOptions = require('./projectScopeOptions');

var _projectScopeOptions2 = _interopRequireDefault(_projectScopeOptions);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var chartOptions = [{ value: 'refinish', label: 'Refinish' }, { value: 'replace', label: 'New / Replace' }, { value: 'keep', label: 'Keep Existing' }];

var ProjectScopeField = function (_Component) {
  _inherits(ProjectScopeField, _Component);

  function ProjectScopeField(props) {
    _classCallCheck(this, ProjectScopeField);

    var _this = _possibleConstructorReturn(this, (ProjectScopeField.__proto__ || Object.getPrototypeOf(ProjectScopeField)).call(this, props));

    _this.handleChange = function (value) {
      return function () {
        var onSelect = _this.props.onSelect;

        onSelect && onSelect(value);
      };
    };

    var md = new _mobileDetect2.default(window.navigator.userAgent);
    _this.state = {
      isMobile: Boolean(md.phone())
    };
    return _this;
  }

  _createClass(ProjectScopeField, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          error = _props.meta.error,
          className = _props.className,
          showFreeFormOption = _props.showFreeFormOption;


      console.log({ showFreeFormOption: showFreeFormOption });
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('project-scope-field', _defineProperty({}, className, Boolean(className))) },
        _react2.default.createElement(
          _Grid2.default,
          { container: true, spacing: 24 },
          _projectScopeOptions2.default.map(function (option, index) {
            return _react2.default.createElement(
              _Grid2.default,
              { key: index, item: true, className: 'project-scope-field__option' },
              _react2.default.createElement(_ProjectScopeOptionBox2.default, { onClick: _this2.handleChange(option.value), option: option, isMobile: _this2.state.isMobile })
            );
          })
        ),
        showFreeFormOption && _react2.default.createElement(
          'div',
          { className: 'projet-scope-field__free-form' },
          _react2.default.createElement(
            _Typography2.default,
            { className: 'project-scope-field__free-form-text', variant: 'body1', onClick: this.handleChange(6) },
            'Or, describe a simple project yourself'
          )
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