'use strict';

import _spliceInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/splice";
import _findIndexInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/find-index";
import _toConsumableArray from "@babel/runtime-corejs3/helpers/toConsumableArray";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import PropTypes from 'prop-types';
import cx from 'classnames';
import get from 'lodash/get';
import xor from 'lodash/xor';
import DropdownMenu from './components/DropdownMenu';
import IconArrowDropdown from '../../icons/IconArrowDropdown';
import './styles.scss';

var DropdownMenuButton =
/*#__PURE__*/
function (_Component) {
  _inherits(DropdownMenuButton, _Component);

  function DropdownMenuButton(props) {
    var _this;

    _classCallCheck(this, DropdownMenuButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropdownMenuButton).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleClickButton", function () {
      var _this$props = _this.props,
          useDrawer = _this$props.useDrawer,
          onClick = _this$props.onClick;
      onClick && onClick();
      !useDrawer && _this.setState({
        open: !_this.state.open
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function (event) {
      if (event && _this.anchorEl.contains(event.target)) {
        return;
      }

      _this.setState({
        open: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelectMenuItem", function (value) {
      return function () {
        var _this$props2 = _this.props,
            selectedItems = _this$props2.selectedItems,
            onSelectMenuItem = _this$props2.onSelectMenuItem,
            shouldSelectObject = _this$props2.shouldSelectObject;

        var updatedSelectedItems = _toConsumableArray(selectedItems);

        if (shouldSelectObject) {
          var foundIndex = _findIndexInstanceProperty(selectedItems).call(selectedItems, function (item) {
            return item.id === value.id;
          });

          if (foundIndex === -1) {
            updatedSelectedItems.push(value);
          } else {
            _spliceInstanceProperty(updatedSelectedItems).call(updatedSelectedItems, foundIndex, 1);
          }
        } else {
          updatedSelectedItems = xor(selectedItems || [], [value]);
        }

        onSelectMenuItem(updatedSelectedItems);
      };
    });

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(DropdownMenuButton, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.shouldCloseFilterMenu && prevProps.shouldCloseFilterMenu !== this.props.shouldCloseFilterMenu) {
        this.handleClose();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.state.open;
      var _this$props3 = this.props,
          buttonLabel = _this$props3.buttonLabel,
          classes = _this$props3.classes,
          highlightActive = _this$props3.highlightActive,
          ids = _this$props3.ids,
          menuItems = _this$props3.menuItems,
          onClearAll = _this$props3.onClearAll,
          selectedItems = _this$props3.selectedItems,
          showArrow = _this$props3.showArrow,
          shouldSelectObject = _this$props3.shouldSelectObject;
      var id = open ? ids.content : null;
      var active = highlightActive && selectedItems.length > 0;
      return React.createElement(Fragment, null, React.createElement(Button, {
        id: ids.button,
        buttonRef: function buttonRef(node) {
          _this2.anchorEl = node;
        },
        "aria-describedby": id,
        onClick: this.handleClickButton,
        "aria-haspopup": "true",
        className: cx('drop-down-menu-btn__btn', {
          'drop-down-menu-btn__btn--active': active
        }, get(classes, 'button')),
        variant: "outlined"
      }, React.createElement(Typography, {
        className: cx('drop-down-menu-btn__btn-label', {
          'drop-down-menu-btn__btn-label--active': active
        }, classes.buttonLabel)
      }, buttonLabel), showArrow && React.createElement(IconArrowDropdown, null)), React.createElement(Popper, {
        id: id,
        open: open,
        anchorEl: this.anchorEl,
        placement: "bottom-start",
        className: cx('drop-down-menu-btn__popper', get(classes, 'popper'))
      }, React.createElement(Paper, {
        className: cx('drop-down-menu-btn__paper', get(classes, 'paper'))
      }, React.createElement(DropdownMenu, {
        menuItems: menuItems,
        onClearAll: onClearAll,
        onClose: this.handleClose,
        onSelectMenuItem: this.handleSelectMenuItem,
        selectedItems: selectedItems,
        shouldSelectObject: shouldSelectObject,
        classes: classes
      }))));
    }
  }]);

  return DropdownMenuButton;
}(Component);

_defineProperty(DropdownMenuButton, "propTypes", {
  buttonLabel: PropTypes.string,
  classes: PropTypes.object,
  highlightActive: PropTypes.bool,
  ids: PropTypes.object,
  menuItems: PropTypes.array,
  onClearAll: PropTypes.func,
  onSelectMenuItem: PropTypes.func.isRequired,
  selectedItems: PropTypes.array,
  shouldCloseFilterMenu: PropTypes.bool,
  shouldSelectObject: PropTypes.bool,
  showArrow: PropTypes.bool
});

_defineProperty(DropdownMenuButton, "defaultProps", {
  buttonLabel: '',
  classes: {},
  highlightActive: true,
  ids: {},
  menuItems: [],
  selectedItems: [],
  shouldSelectObject: false,
  showArrow: true
});

export { DropdownMenuButton };
export default DropdownMenuButton;