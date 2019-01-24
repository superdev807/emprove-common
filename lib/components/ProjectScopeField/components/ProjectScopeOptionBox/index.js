'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectScopeOptionBox = function (_Component) {
  _inherits(ProjectScopeOptionBox, _Component);

  function ProjectScopeOptionBox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ProjectScopeOptionBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProjectScopeOptionBox.__proto__ || Object.getPrototypeOf(ProjectScopeOptionBox)).call.apply(_ref, [this].concat(args))), _this), _this.handleClickDetail = function (event) {
      var _this$props = _this.props,
          onClickDetail = _this$props.onClickDetail,
          option = _this$props.option;

      onClickDetail && onClickDetail(event, option.value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ProjectScopeOptionBox, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onClick = _props.onClick,
          option = _props.option,
          showSelectButton = _props.showSelectButton,
          showScaleInfo = _props.showScaleInfo,
          selected = _props.selected,
          isMobile = _props.isMobile;


      return _react2.default.createElement(
        'div',
        { className: 'project-scope-option-box-wrapper' },
        _react2.default.createElement(
          'div',
          {
            id: this.props.id,
            className: (0, _classnames2.default)('project-scope-option-box', {
              'project-scope-option-box--opaque': this.props.opaque,
              'project-scope-option-box--no-cursor': !onClick,
              'project-scope-option-box--highlight-on-hover': this.props.highlightOnHover,
              'project-scope-option-box--selected': selected
            }, this.props.className),
            onClick: onClick },
          showScaleInfo && showSelectButton && _react2.default.createElement(
            'div',
            {
              className: (0, _classnames2.default)('project-scope-option-box__option-top-button', {
                'project-scope-option-box__option-top-button--mobile': isMobile
              }) },
            _react2.default.createElement(
              _Button2.default,
              {
                className: (0, _classnames2.default)('project-scope-option-box__option-button', { 'project-scope-option-box__option-button--mobile': isMobile }),
                color: 'primary',
                fullWidth: true,
                variant: 'contained' },
              'Select'
            )
          ),
          _react2.default.createElement(
            'div',
            {
              className: (0, _classnames2.default)('project-scope-option-box__option-top', {
                'project-scope-option-box__option-top--centered': !showSelectButton,
                'project-scope-option-box__option-top--mobile': isMobile
              }) },
            _react2.default.createElement(
              _Typography2.default,
              { className: 'project-scope-option-box__text project-scope-option-box__text--title', variant: 'body2' },
              option.label
            ),
            _react2.default.createElement(
              _Typography2.default,
              { className: 'project-scope-option-box__text project-scope-option-box__text--help', variant: 'body1' },
              option.text
            )
          ),
          !showScaleInfo && showSelectButton && _react2.default.createElement(
            'div',
            {
              className: (0, _classnames2.default)('project-scope-option-box__option-bottom', { 'project-scope-option-box__option-bottom--mobile': isMobile }) },
            _react2.default.createElement(
              _Button2.default,
              {
                className: (0, _classnames2.default)('project-scope-option-box__option-button', { 'project-scope-option-box__option-button--mobile': isMobile }),
                color: 'primary',
                fullWidth: true,
                variant: 'contained' },
              selected ? 'Selected' : 'Select'
            )
          )
        ),
        showScaleInfo && _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('project-scope-option-box__option-bottom', { 'project-scope-option-box__option-bottom--mobile': isMobile }) },
          _react2.default.createElement(
            _Button2.default,
            {
              className: (0, _classnames2.default)('project-scope-option-box__include-button', { 'project-scope-option-box__include-button--mobile': isMobile }),
              color: 'primary',
              fullWidth: true,
              onClick: this.handleClickDetail,
              variant: 'contained' },
            'What\'s included'
          )
        )
      );
    }
  }]);

  return ProjectScopeOptionBox;
}(_react.Component);

ProjectScopeOptionBox.propTypes = {
  className: _propTypes2.default.string,
  highlightOnHover: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  onClickScopeDetail: _propTypes2.default.func,
  opaque: _propTypes2.default.bool,
  option: _propTypes2.default.object.isRequired,
  showSelectButton: _propTypes2.default.bool
};
ProjectScopeOptionBox.defaultProps = {
  highlightOnHover: true,
  opaque: false,
  showSelectButton: true,
  showScaleInfo: false
};
exports.default = ProjectScopeOptionBox;