'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import IconButton from '@material-ui/core/IconButton';
import IconClose from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import cx from 'classnames';
import get from 'lodash/get';
import includes from 'lodash/includes';
import './styles.scss';

var DropdownMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(DropdownMenu, _Component);

  function DropdownMenu(props) {
    var _this;

    _classCallCheck(this, DropdownMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropdownMenu).call(this, props));
    _this.state = {
      showMenu: true,
      showDesignStyleMenu: true,
      showUserLevel3Menu: true
    };
    return _this;
  }

  _createClass(DropdownMenu, [{
    key: "renderDropdownMenu",
    value: function renderDropdownMenu() {
      var _this$props = this.props,
          classes = _this$props.classes,
          disableClickAway = _this$props.disableClickAway,
          menuItems = _this$props.menuItems,
          onSelectMenuItem = _this$props.onSelectMenuItem,
          selectedItems = _this$props.selectedItems,
          shouldSelectObject = _this$props.shouldSelectObject,
          onClearAll = _this$props.onClearAll,
          onClose = _this$props.onClose;
      var menuContent = React.createElement(FormGroup, null, React.createElement("div", {
        className: cx('drop-down-menu__items-container', get(classes, 'itemsContainer'))
      }, menuItems.map(function (item) {
        var selected = shouldSelectObject ? (selectedItems || []).some(function (ul3) {
          return ul3.id === item.id;
        }) : includes(selectedItems || [], item.id);
        return React.createElement(FormControlLabel, {
          className: cx('drop-down-menu__item', get(classes, 'item')),
          classes: {
            label: cx('drop-down-menu__item-label', {
              'drop-down-menu__item-label--selected': selected
            })
          },
          key: item.id,
          control: React.createElement(Checkbox, {
            className: "drop-down-menu__checkbox",
            checked: selected,
            onChange: shouldSelectObject ? onSelectMenuItem(item) : onSelectMenuItem(item.id),
            icon: React.createElement(CheckBoxOutlineBlankIcon, {
              fontSize: "small"
            }),
            checkedIcon: React.createElement(CheckBoxIcon, {
              color: "primary",
              fontSize: "small"
            }),
            value: "".concat(item.id) //Checkbox wants value to be type string

          }),
          label: item.label
        });
      })), onClearAll && React.createElement("div", {
        className: "drop-down-menu__footer"
      }, React.createElement("div", {
        className: "drop-down-menu__divider"
      }), React.createElement(Button, {
        className: "drop-down-menu__clear-btn",
        onClick: function onClick() {
          return onClearAll();
        }
      }, "Clear All")));
      return disableClickAway ? menuContent : React.createElement(ClickAwayListener, {
        onClickAway: onClose
      }, menuContent);
    }
  }, {
    key: "render",
    value: function render() {
      var onClose = this.props.onClose;
      return React.createElement("div", {
        className: cx('drop-down-menu', {
          'drop-down-menu--mobile': this.props.forMobile
        })
      }, React.createElement("div", {
        className: cx('drop-down-menu__menu', {
          'drop-down-menu__menu--mobile': this.props.forMobile
        })
      }, onClose && React.createElement(IconButton, {
        className: cx('drop-down-menu__menu-close'),
        onClick: onClose
      }, React.createElement(IconClose, {
        className: "drop-down-menu__menu-close-btn"
      })), React.createElement(Collapse, {
        "in": this.state.showMenu,
        timeout: "auto"
      }, this.renderDropdownMenu())));
    }
  }]);

  return DropdownMenu;
}(Component);

_defineProperty(DropdownMenu, "propTypes", {
  classes: PropTypes.object,
  disableClickAway: PropTypes.bool,
  menuItems: PropTypes.array,
  onSelectMenuItem: PropTypes.func.isRequired,
  shouldSelectObject: PropTypes.bool,
  onClearAll: PropTypes.func
});

_defineProperty(DropdownMenu, "defaultProps", {
  classes: {},
  disableClickAway: false,
  menuItems: [],
  shouldSelectObject: false
});

export default DropdownMenu;