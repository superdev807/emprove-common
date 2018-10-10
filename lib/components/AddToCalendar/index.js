'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _ClickAwayListener = require('@material-ui/core/ClickAwayListener');

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _Grow = require('@material-ui/core/Grow');

var _Grow2 = _interopRequireDefault(_Grow);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _MenuList = require('@material-ui/core/MenuList');

var _MenuList2 = _interopRequireDefault(_MenuList);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Popper = require('@material-ui/core/Popper');

var _Popper2 = _interopRequireDefault(_Popper);

var _IconCalendarPlus = require('../../icons/IconCalendarPlus');

var _IconCalendarPlus2 = _interopRequireDefault(_IconCalendarPlus);

var _calendarFunctions = require('../../utils/calendarFunctions');

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OnlineCalendar = {
  GOOGLE: 'google',
  YAHOO: 'yahoo'
};

var AddToCalendar = function (_Component) {
  _inherits(AddToCalendar, _Component);

  function AddToCalendar(props) {
    _classCallCheck(this, AddToCalendar);

    var _this = _possibleConstructorReturn(this, (AddToCalendar.__proto__ || Object.getPrototypeOf(AddToCalendar)).call(this, props));

    _this.handleToggle = function () {
      _this.setState({
        open: !_this.state.open
      });
    };

    _this.handleClose = function () {
      _this.setState({
        open: false
      });
    };

    _this.handleiCalendarClick = function () {
      (0, _calendarFunctions.downloadiCalendar)(_this.props.event);
      _this.handleClose();
    };

    _this.handleOnlineCalendarClick = function (calendarType) {
      var anchor = document.createElement('a');

      var generateCalendarUrl = void 0;
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
    };

    _this.handleGoogleCalendarClick = function () {
      _this.handleOnlineCalendarClick(OnlineCalendar.GOOGLE);
    };

    _this.handleYahooCalendarClick = function () {
      _this.handleOnlineCalendarClick(OnlineCalendar.YAHOO);
    };

    _this.getButtonRef = function (node) {
      _this.anchorEl = node;
    };

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(AddToCalendar, [{
    key: 'renderTriggerButton',
    value: function renderTriggerButton() {
      var buttonProps = {
        className: 'add-to-calendar__trigger-button',
        buttonRef: this.getButtonRef,
        onClick: this.handleToggle,
        'aria-owns': this.state.open ? 'add-to-calendar-menu-list-grow' : null,
        'aria-haspopup': 'true'
      };

      if (this.props.iconAppearance) {
        buttonProps.className = (0, _classnames2.default)(buttonProps.className, 'add-to-calendar__icon-button');
        return _react2.default.createElement(
          _IconButton2.default,
          buttonProps,
          _react2.default.createElement(_IconCalendarPlus2.default, { className: 'add-to-calendar__icon' })
        );
      } else {
        buttonProps.color = 'primary';
        buttonProps.variant = 'raised';
      }

      return _react2.default.createElement(
        _Button2.default,
        buttonProps,
        'Add to Calendar'
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('add-to-calendar', this.props.className) },
        this.renderTriggerButton(),
        _react2.default.createElement(
          _Popper2.default,
          {
            className: (0, _classnames2.default)('add-to-calendar__popper', this.props.classes.popper),
            open: this.state.open,
            anchorEl: this.anchorEl,
            transition: true,
            disablePortal: this.props.disablePortal },
          function (_ref) {
            var TransitionProps = _ref.TransitionProps,
                placement = _ref.placement;
            return _react2.default.createElement(
              _Grow2.default,
              _extends({
                id: 'add-to-calendar-menu-list-grow'
              }, TransitionProps, {
                style: { transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' } }),
              _react2.default.createElement(
                _Paper2.default,
                null,
                _react2.default.createElement(
                  _ClickAwayListener2.default,
                  { onClickAway: _this2.handleClose },
                  _react2.default.createElement(
                    _MenuList2.default,
                    { className: 'add-to-calendar__menu-list' },
                    _react2.default.createElement(
                      _MenuItem2.default,
                      { className: 'add-to-calendar__menu-item', onClick: _this2.handleiCalendarClick },
                      'Download iCalendar Event'
                    ),
                    _react2.default.createElement(
                      _MenuItem2.default,
                      { className: 'add-to-calendar__menu-item', onClick: _this2.handleGoogleCalendarClick },
                      'Add to Google Calendar'
                    ),
                    _react2.default.createElement(
                      _MenuItem2.default,
                      { className: 'add-to-calendar__menu-item', onClick: _this2.handleYahooCalendarClick },
                      'Add to Yahoo Calendar'
                    )
                  )
                )
              )
            );
          }
        )
      );
    }
  }]);

  return AddToCalendar;
}(_react.Component);

AddToCalendar.propTypes = {
  classes: _propTypes2.default.object,
  className: _propTypes2.default.string,
  event: _propTypes2.default.object.isRequired,
  disablePortal: _propTypes2.default.bool,
  iconAppearance: _propTypes2.default.bool
};
AddToCalendar.defaultProps = {
  classes: {},
  disablePortal: false,
  iconAppearance: false
};
exports.default = AddToCalendar;