'use strict';

import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(source, true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(source)).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
      }, _mapInstanceProperty(properties).call(properties, function (property, index) {
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