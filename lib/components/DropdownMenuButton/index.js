'use strict';

import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.find-index";
import "core-js/modules/es.array.from";
import "core-js/modules/es.array.is-array";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.splice";
import "core-js/modules/es.date.to-string";
import "core-js/modules/es.object.create";
import "core-js/modules/es.object.define-property";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.set-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
          var foundIndex = selectedItems.findIndex(function (item) {
            return item.id === value.id;
          });

          if (foundIndex === -1) {
            updatedSelectedItems.push(value);
          } else {
            updatedSelectedItems.splice(foundIndex, 1);
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