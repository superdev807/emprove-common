'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Checkbox = require('@material-ui/core/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _CheckBox = require('@material-ui/icons/CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _CheckBoxOutlineBlank = require('@material-ui/icons/CheckBoxOutlineBlank');

var _CheckBoxOutlineBlank2 = _interopRequireDefault(_CheckBoxOutlineBlank);

var _ClickAwayListener = require('@material-ui/core/ClickAwayListener');

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _Collapse = require('@material-ui/core/Collapse');

var _Collapse2 = _interopRequireDefault(_Collapse);

var _FormControlLabel = require('@material-ui/core/FormControlLabel');

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _FormGroup = require('@material-ui/core/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Close = require('@material-ui/icons/Close');

var _Close2 = _interopRequireDefault(_Close);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownMenu = function (_Component) {
  _inherits(DropdownMenu, _Component);

  function DropdownMenu(props) {
    _classCallCheck(this, DropdownMenu);

    var _this = _possibleConstructorReturn(this, (DropdownMenu.__proto__ || Object.getPrototypeOf(DropdownMenu)).call(this, props));

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
          classes = _props.classes,
          disableClickAway = _props.disableClickAway,
          menuItems = _props.menuItems,
          onSelectMenuItem = _props.onSelectMenuItem,
          selectedItems = _props.selectedItems,
          shouldSelectObject = _props.shouldSelectObject,
          onClearAll = _props.onClearAll,
          onClose = _props.onClose;


      var menuContent = _react2.default.createElement(
        _FormGroup2.default,
        null,
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('drop-down-menu__items-container', (0, _get2.default)(classes, 'itemsContainer')) },
          menuItems.map(function (item) {
            var selected = shouldSelectObject ? (selectedItems || []).some(function (ul3) {
              return ul3.id === item.id;
            }) : (0, _includes2.default)(selectedItems || [], item.id);
            return _react2.default.createElement(_FormControlLabel2.default, {
              className: (0, _classnames2.default)('drop-down-menu__item', (0, _get2.default)(classes, 'item')),
              classes: { label: (0, _classnames2.default)('drop-down-menu__item-label', { 'drop-down-menu__item-label--selected': selected }) },
              key: item.id,
              control: _react2.default.createElement(_Checkbox2.default, {
                className: 'drop-down-menu__checkbox',
                checked: selected,
                onChange: shouldSelectObject ? onSelectMenuItem(item) : onSelectMenuItem(item.id),
                icon: _react2.default.createElement(_CheckBoxOutlineBlank2.default, { fontSize: 'small' }),
                checkedIcon: _react2.default.createElement(_CheckBox2.default, { color: 'primary', fontSize: 'small' }),
                value: '' + item.id //Checkbox wants value to be type string
              }),
              label: item.label
            });
          })
        ),
        onClearAll && _react2.default.createElement(
          'div',
          { className: 'drop-down-menu__footer' },
          _react2.default.createElement('div', { className: 'drop-down-menu__divider' }),
          _react2.default.createElement(
            _Button2.default,
            { className: 'drop-down-menu__clear-btn', onClick: onClearAll },
            'Clear All'
          )
        )
      );

      return disableClickAway ? menuContent : _react2.default.createElement(
        _ClickAwayListener2.default,
        { onClickAway: onClose },
        menuContent
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
  classes: _propTypes2.default.object,
  disableClickAway: _propTypes2.default.bool,
  menuItems: _propTypes2.default.array,
  onSelectMenuItem: _propTypes2.default.func.isRequired,
  shouldSelectObject: _propTypes2.default.bool,
  onClearAll: _propTypes2.default.func
};
DropdownMenu.defaultProps = {
  classes: {},
  disableClickAway: false,
  menuItems: [],
  shouldSelectObject: false
};
exports.default = DropdownMenu;