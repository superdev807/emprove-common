'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProjectScopeOptionBox =
/*#__PURE__*/
function (_Component) {
  _inherits(ProjectScopeOptionBox, _Component);

  function ProjectScopeOptionBox() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ProjectScopeOptionBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ProjectScopeOptionBox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClickDetail", function (event) {
      var _this$props = _this.props,
          onClickDetail = _this$props.onClickDetail,
          option = _this$props.option;
      onClickDetail && onClickDetail(event, option.value);
    });

    return _this;
  }

  _createClass(ProjectScopeOptionBox, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          onClick = _this$props2.onClick,
          option = _this$props2.option,
          showSelectButton = _this$props2.showSelectButton,
          showScaleInfo = _this$props2.showScaleInfo,
          selected = _this$props2.selected,
          isMobile = _this$props2.isMobile;
      return _react.default.createElement("div", {
        className: "project-scope-option-box-wrapper"
      }, _react.default.createElement("div", {
        id: this.props.id,
        className: (0, _classnames.default)('project-scope-option-box', {
          'project-scope-option-box--opaque': this.props.opaque,
          'project-scope-option-box--no-cursor': !onClick,
          'project-scope-option-box--highlight-on-hover': this.props.highlightOnHover,
          'project-scope-option-box--selected': selected
        }, this.props.className),
        onClick: onClick
      }, showScaleInfo && showSelectButton && _react.default.createElement("div", {
        className: (0, _classnames.default)('project-scope-option-box__option-top-button', {
          'project-scope-option-box__option-top-button--mobile': isMobile
        })
      }, _react.default.createElement(_Button.default, {
        className: (0, _classnames.default)('project-scope-option-box__option-button', {
          'project-scope-option-box__option-button--mobile': isMobile
        }),
        color: "primary",
        fullWidth: true,
        variant: "contained"
      }, "Select")), _react.default.createElement("div", {
        className: (0, _classnames.default)('project-scope-option-box__option-top', {
          'project-scope-option-box__option-top--centered': !showSelectButton,
          'project-scope-option-box__option-top--mobile': isMobile
        })
      }, _react.default.createElement(_Typography.default, {
        className: "project-scope-option-box__text project-scope-option-box__text--title",
        variant: "body2"
      }, option.label), _react.default.createElement(_Typography.default, {
        className: "project-scope-option-box__text project-scope-option-box__text--help",
        variant: "body1"
      }, option.text)), !showScaleInfo && showSelectButton && _react.default.createElement("div", {
        className: (0, _classnames.default)('project-scope-option-box__option-bottom', {
          'project-scope-option-box__option-bottom--mobile': isMobile
        })
      }, _react.default.createElement(_Button.default, {
        className: (0, _classnames.default)('project-scope-option-box__option-button', {
          'project-scope-option-box__option-button--mobile': isMobile
        }),
        color: "primary",
        fullWidth: true,
        variant: "contained"
      }, selected ? 'Selected' : 'Select'))), showScaleInfo && _react.default.createElement("div", {
        className: (0, _classnames.default)('project-scope-option-box__option-bottom', {
          'project-scope-option-box__option-bottom--mobile': isMobile
        })
      }, _react.default.createElement(_Button.default, {
        className: (0, _classnames.default)('project-scope-option-box__include-button', {
          'project-scope-option-box__include-button--mobile': isMobile
        }),
        color: "primary",
        fullWidth: true,
        onClick: this.handleClickDetail,
        variant: "contained",
        classes: {
          label: 'project-scope-option-box__include-button--no-capitalize'
        }
      }, "What's included")));
    }
  }]);

  return ProjectScopeOptionBox;
}(_react.Component);

_defineProperty(ProjectScopeOptionBox, "propTypes", {
  className: _propTypes.default.string,
  highlightOnHover: _propTypes.default.bool,
  id: _propTypes.default.string,
  onClick: _propTypes.default.func,
  onClickScopeDetail: _propTypes.default.func,
  opaque: _propTypes.default.bool,
  option: _propTypes.default.object.isRequired,
  showSelectButton: _propTypes.default.bool
});

_defineProperty(ProjectScopeOptionBox, "defaultProps", {
  highlightOnHover: true,
  opaque: false,
  showSelectButton: true,
  showScaleInfo: false
});

var _default = ProjectScopeOptionBox;
exports.default = _default;