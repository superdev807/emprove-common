'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownMenuButton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ClickAwayListener = require('@material-ui/core/ClickAwayListener');

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconArrowDropdown = require('../../icons/IconArrowDropdown');

var _IconArrowDropdown2 = _interopRequireDefault(_IconArrowDropdown);

var _xor = require('lodash/xor');

var _xor2 = _interopRequireDefault(_xor);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _DropdownMenu = require('./components/DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Popper = require('@material-ui/core/Popper');

var _Popper2 = _interopRequireDefault(_Popper);

var _styles = require('@material-ui/core/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import styles from './styles';

var DropdownMenuButton = function (_Component) {
  _inherits(DropdownMenuButton, _Component);

  function DropdownMenuButton(props) {
    _classCallCheck(this, DropdownMenuButton);

    var _this = _possibleConstructorReturn(this, (DropdownMenuButton.__proto__ || Object.getPrototypeOf(DropdownMenuButton)).call(this, props));

    _this.handleClickButton = function () {
      _this.setState({
        open: !_this.state.open
      });
    };

    _this.handleClose = function (event) {
      if (_this.anchorEl.contains(event.target)) {
        return;
      }

      _this.setState({
        open: false
      });
    };

    _this.handleSelectMenuItem = function (value) {
      return function () {
        var _this$props = _this.props,
            selectedItems = _this$props.selectedItems,
            onSelectMenuItem = _this$props.onSelectMenuItem;

        onSelectMenuItem((0, _xor2.default)(selectedItems || [], [value]));
      };
    };

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(DropdownMenuButton, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var open = this.state.open;
      var _props = this.props,
          buttonLabel = _props.buttonLabel,
          menuItems = _props.menuItems,
          onClearAll = _props.onClearAll,
          selectedItems = _props.selectedItems,
          shouldSelectObject = _props.shouldSelectObject;


      var id = open ? 'drop-down-menu-button' : null;

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          _Button2.default
          // id="drop-down-menu-button"
          ,
          { buttonRef: function buttonRef(node) {
              _this2.anchorEl = node;
            },
            'aria-describedby': id,
            onClick: this.handleClickButton,
            'aria-haspopup': 'true',
            className: 'drop-down-menu-button__button' },
          buttonLabel,
          _react2.default.createElement(_IconArrowDropdown2.default, null)
        ),
        _react2.default.createElement(
          _Popper2.default,
          { id: id, open: open, anchorEl: this.anchorEl, placement: 'bottom-start', className: 'estimate-menu' },
          _react2.default.createElement(
            _Paper2.default,
            null,
            _react2.default.createElement(_DropdownMenu2.default, {
              menuItems: menuItems,
              onClearAll: onClearAll,
              onClose: this.handleClose,
              onSelectMenuItem: this.handleSelectMenuItem,
              selectedItems: selectedItems,
              shouldSelectObject: shouldSelectObject
            })
          )
        )
      );
    }
  }]);

  return DropdownMenuButton;
}(_react.Component);

DropdownMenuButton.propTypes = {
  buttonLabel: _propTypes2.default.string,
  menuItems: _propTypes2.default.array,
  onClearAll: _propTypes2.default.func,
  onSelectMenuItem: _propTypes2.default.func.isRequired,
  selectedItems: _propTypes2.default.array,
  shouldSelectObject: _propTypes2.default.bool
};
DropdownMenuButton.defaultProps = {
  buttonLabel: '',
  menuItems: [],
  selectedItems: [],
  shouldSelectObject: false
};
exports.DropdownMenuButton = DropdownMenuButton;
exports.default = DropdownMenuButton;