'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _ClickAwayListener = _interopRequireDefault(require("@material-ui/core/ClickAwayListener"));

var _Grow = _interopRequireDefault(require("@material-ui/core/Grow"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _MenuList = _interopRequireDefault(require("@material-ui/core/MenuList"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Popper = _interopRequireDefault(require("@material-ui/core/Popper"));

var _IconCalendarPlus = _interopRequireDefault(require("../../icons/IconCalendarPlus"));

var _calendarFunctions = require("../../utils/calendarFunctions");

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OnlineCalendar = {
  GOOGLE: 'google',
  YAHOO: 'yahoo'
};

var AddToCalendar =
/*#__PURE__*/
function (_Component) {
  _inherits(AddToCalendar, _Component);

  function AddToCalendar(props) {
    var _this;

    _classCallCheck(this, AddToCalendar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AddToCalendar).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleToggle", function () {
      _this.setState({
        open: !_this.state.open
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClose", function () {
      _this.setState({
        open: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleiCalendarClick", function () {
      (0, _calendarFunctions.downloadiCalendar)(_this.props.event);

      _this.handleClose();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnlineCalendarClick", function (calendarType) {
      var anchor = document.createElement('a');
      var generateCalendarUrl;

      if (calendarType === OnlineCalendar.GOOGLE) {
        generateCalendarUrl = _calendarFunctions.generateGoogleCalendarUrl;
      } else if (calendarType === OnlineCalendar.YAHOO) {
        generateCalendarUrl = _calendarFunctions.generateYahooCalendarUrl;
      } else {
        generateCalendarUrl = null;
      }

      anchor.href = generateCalendarUrl ? generateCalendarUrl(_this.props.event) : '#';
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      anchor.click();

      _this.handleClose();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleGoogleCalendarClick", function () {
      _this.handleOnlineCalendarClick(OnlineCalendar.GOOGLE);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleYahooCalendarClick", function () {
      _this.handleOnlineCalendarClick(OnlineCalendar.YAHOO);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getButtonRef", function (node) {
      _this.anchorEl = node;
    });

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(AddToCalendar, [{
    key: "renderTriggerButton",
    value: function renderTriggerButton() {
      var buttonProps = {
        className: 'add-to-calendar__trigger-button',
        buttonRef: this.getButtonRef,
        onClick: this.handleToggle,
        'aria-owns': this.state.open ? 'add-to-calendar-menu-list-grow' : null,
        'aria-haspopup': 'true'
      };

      if (this.props.iconAppearance) {
        buttonProps.className = (0, _classnames.default)(buttonProps.className, 'add-to-calendar__icon-button');
        return _react.default.createElement(_IconButton.default, buttonProps, _react.default.createElement(_IconCalendarPlus.default, {
          className: "add-to-calendar__icon"
        }));
      } else {
        buttonProps.color = 'primary';
        buttonProps.variant = 'raised';
      }

      return _react.default.createElement(_Button.default, buttonProps, "Add to Calendar");
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        className: (0, _classnames.default)('add-to-calendar', this.props.className)
      }, this.renderTriggerButton(), _react.default.createElement(_Popper.default, {
        className: (0, _classnames.default)('add-to-calendar__popper', this.props.classes.popper),
        open: this.state.open,
        anchorEl: this.anchorEl,
        transition: true,
        disablePortal: this.props.disablePortal
      }, function (_ref) {
        var TransitionProps = _ref.TransitionProps,
            placement = _ref.placement;
        return _react.default.createElement(_Grow.default, _extends({
          id: "add-to-calendar-menu-list-grow"
        }, TransitionProps, {
          style: {
            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
          }
        }), _react.default.createElement(_Paper.default, null, _react.default.createElement(_ClickAwayListener.default, {
          onClickAway: _this2.handleClose
        }, _react.default.createElement(_MenuList.default, {
          className: "add-to-calendar__menu-list"
        }, _react.default.createElement(_MenuItem.default, {
          className: "add-to-calendar__menu-item",
          onClick: _this2.handleiCalendarClick
        }, "Download iCalendar Event"), _react.default.createElement(_MenuItem.default, {
          className: "add-to-calendar__menu-item",
          onClick: _this2.handleGoogleCalendarClick
        }, "Add to Google Calendar"), _react.default.createElement(_MenuItem.default, {
          className: "add-to-calendar__menu-item",
          onClick: _this2.handleYahooCalendarClick
        }, "Add to Yahoo Calendar")))));
      }));
    }
  }]);

  return AddToCalendar;
}(_react.Component);

_defineProperty(AddToCalendar, "propTypes", {
  classes: _propTypes.default.object,
  className: _propTypes.default.string,
  event: _propTypes.default.object.isRequired,
  disablePortal: _propTypes.default.bool,
  iconAppearance: _propTypes.default.bool
});

_defineProperty(AddToCalendar, "defaultProps", {
  classes: {},
  disablePortal: false,
  iconAppearance: false
});

var _default = AddToCalendar;
exports.default = _default;