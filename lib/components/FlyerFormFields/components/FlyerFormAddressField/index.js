'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { formatAddress } from '../../../../utils/pureFunctions';
import './styles.scss';

var FlyerFormAddressField =
/*#__PURE__*/
function (_Component) {
  _inherits(FlyerFormAddressField, _Component);

  function FlyerFormAddressField() {
    _classCallCheck(this, FlyerFormAddressField);

    return _possibleConstructorReturn(this, _getPrototypeOf(FlyerFormAddressField).apply(this, arguments));
  }

  _createClass(FlyerFormAddressField, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          anchorEl = _this$props.anchorEl,
          onClickManualEntry = _this$props.onClickManualEntry,
          onClickProperty = _this$props.onClickProperty,
          open = _this$props.open,
          properties = _this$props.properties;
      return React.createElement(Popper, {
        className: "flyer-address-field-popper",
        open: open,
        anchorEl: anchorEl,
        disablePortal: true
      }, React.createElement(Paper, null, React.createElement(MenuList, {
        className: "flyer-address-field-popper__list"
      }, properties.map(function (property, index) {
        return React.createElement(MenuItem, {
          key: property.id,
          className: "flyer-address-field-popper__item",
          onClick: function onClick() {
            return onClickProperty(property);
          }
        }, formatAddress(_objectSpread({}, property)));
      }), React.createElement(MenuItem, {
        className: "flyer-address-field-popper__item",
        key: 0,
        onClick: onClickManualEntry
      }, "I will manually enter"))));
    }
  }]);

  return FlyerFormAddressField;
}(Component);

export default FlyerFormAddressField;