'use strict';

import _someInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/some";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
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
      }, _mapInstanceProperty(menuItems).call(menuItems, function (item) {
        var _context;

        var selected = shouldSelectObject ? _someInstanceProperty(_context = selectedItems || []).call(_context, function (ul3) {
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