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

var _Collapse = require('@material-ui/core/Collapse');

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Divider = require('@material-ui/core/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _MenuList = require('@material-ui/core/MenuList');

var _MenuList2 = _interopRequireDefault(_MenuList);

var _Close = require('@material-ui/icons/Close');

var _Close2 = _interopRequireDefault(_Close);

var _ExpandLess = require('@material-ui/icons/ExpandLess');

var _ExpandLess2 = _interopRequireDefault(_ExpandLess);

var _ExpandMore = require('@material-ui/icons/ExpandMore');

var _ExpandMore2 = _interopRequireDefault(_ExpandMore);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormGroup = require('@material-ui/core/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _FormControlLabel = require('@material-ui/core/FormControlLabel');

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _Checkbox = require('@material-ui/core/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _ClickAwayListener = require('@material-ui/core/ClickAwayListener');

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _core = require('@material-ui/core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import './styles.scss';

var DropdownMenu = function (_Component) {
  _inherits(DropdownMenu, _Component);

  function DropdownMenu(props) {
    _classCallCheck(this, DropdownMenu);

    var _this = _possibleConstructorReturn(this, (DropdownMenu.__proto__ || Object.getPrototypeOf(DropdownMenu)).call(this, props));

    _this.toggleMenu = function (menuName) {
      return function () {
        var showMenu = 'show' + menuName;

        _this.setState(_defineProperty({}, showMenu, !_this.state[showMenu]));
      };
    };

    _this.state = {
      showMenu: true,
      showDesignStyleMenu: true,
      showUserLevel3Menu: true
    };
    return _this;
  }

  _createClass(DropdownMenu, [{
    key: 'renderDropdownMenu',
    value: function renderDropdownMenu() {
      var _props = this.props,
          menuItems = _props.menuItems,
          onSelectMenuItem = _props.onSelectMenuItem,
          selectedItems = _props.selectedItems,
          shouldSelectObject = _props.shouldSelectObject,
          onClearAll = _props.onClearAll,
          onClose = _props.onClose;

      return _react2.default.createElement(
        _ClickAwayListener2.default,
        { onClickAway: onClose },
        _react2.default.createElement(
          _FormGroup2.default,
          null,
          menuItems.map(function (item) {
            return _react2.default.createElement(_FormControlLabel2.default, {
              key: item.id,
              control: _react2.default.createElement(_Checkbox2.default, {
                checked: shouldSelectObject ? (selectedItems || []).some(function (ul3) {
                  return ul3.id === item.id;
                }) : (0, _includes2.default)(selectedItems || [], item.id),
                onChange: shouldSelectObject ? onSelectMenuItem(item) : onSelectMenuItem(item.id),
                value: '' + item.id //Checkbox wants value to be type string
              }),
              label: item.label
            });
          }),
          _react2.default.createElement('div', { className: 'wook-menu-divider' }),
          _react2.default.createElement(
            _core.Typography,
            { className: 'wook-test-text', onClick: onClearAll },
            'Clear All'
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var onClose = this.props.onClose;


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('drop-down-menu', { 'drop-down-menu--mobile': this.props.forMobile }) },
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('drop-down-menu__menu', { 'drop-down-menu__menu--mobile': this.props.forMobile }) },
          onClose && _react2.default.createElement(
            _IconButton2.default,
            { className: (0, _classnames2.default)('drop-down-menu__menu-close'), onClick: onClose },
            _react2.default.createElement(_Close2.default, { className: 'drop-down-menu__menu-close-btn' })
          ),
          _react2.default.createElement(
            _Collapse2.default,
            { 'in': this.state.showMenu, timeout: 'auto' },
            this.renderDropdownMenu()
          )
        )
      );
    }
  }]);

  return DropdownMenu;
}(_react.Component);

DropdownMenu.propTypes = {
  menuItems: _propTypes2.default.array,
  onSelectMenuItem: _propTypes2.default.func.isRequired,
  shouldSelectObject: _propTypes2.default.bool,
  onClearAll: _propTypes2.default.func
};
DropdownMenu.defaultProps = {
  menuItems: [],
  shouldSelectObject: false
};
exports.default = DropdownMenu;