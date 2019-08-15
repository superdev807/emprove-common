'use strict';

import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.index-of";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.object.create";
import "core-js/modules/es.object.define-property";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.keys";
import "core-js/modules/es.object.set-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconHomeAreaAll from '../../icons/IconHomeAreaAll';
import IconGuestBathroom from '../../icons/IconGuestBathroom';
import IconMasterBathroom from '../../icons/IconMasterBathroom';
import IconPowderRoom from '../../icons/IconPowderRoom';
import IconGuestBedroom from '../../icons/IconGuestBedroom';
import IconMasterBedroom from '../../icons/IconMasterBedroom';
import IconKitchen from '../../icons/IconKitchen';
import IconGeneralLiving from '../../icons/IconGeneralLiving';
import IconBackyard from '../../icons/IconBackyard';
import IconDeck from '../../icons/IconDeck';
import IconDen from '../../icons/IconDen';
import IconFoyer from '../../icons/IconFoyer';
import IconKitchenette from '../../icons/IconKitchenette';
import IconLivingRoom from '../../icons/IconLivingRoom';
import IconLoft from '../../icons/IconLoft';
import IconOffice from '../../icons/IconOffice';
import IconPatio from '../../icons/IconPatio';
import { HomeArea } from '../../utils/enums';

var HomeAreaIcon =
/*#__PURE__*/
function (_Component) {
  _inherits(HomeAreaIcon, _Component);

  function HomeAreaIcon() {
    _classCallCheck(this, HomeAreaIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(HomeAreaIcon).apply(this, arguments));
  }

  _createClass(HomeAreaIcon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          homeAreaId = _this$props.homeAreaId,
          otherProps = _objectWithoutProperties(_this$props, ["homeAreaId"]);

      if (homeAreaId == HomeArea.ALL) {
        return React.createElement(IconHomeAreaAll, otherProps);
      }

      if (homeAreaId == HomeArea.BACKYARD) {
        return React.createElement(IconBackyard, otherProps);
      }

      if (homeAreaId == HomeArea.GUEST_BATHROOM) {
        return React.createElement(IconGuestBathroom, otherProps);
      }

      if (homeAreaId == HomeArea.MASTER_BATHROOM) {
        return React.createElement(IconMasterBathroom, otherProps);
      }

      if (homeAreaId == HomeArea.POWDER_ROOM) {
        return React.createElement(IconPowderRoom, otherProps);
      }

      if (homeAreaId == HomeArea.GUEST_BEDROOM) {
        return React.createElement(IconGuestBedroom, otherProps);
      }

      if (homeAreaId == HomeArea.MASTER_BEDROOM) {
        return React.createElement(IconMasterBedroom, otherProps);
      }

      if (homeAreaId == HomeArea.DECK) {
        return React.createElement(IconDeck, otherProps);
      }

      if (homeAreaId == HomeArea.DEN) {
        return React.createElement(IconDen, otherProps);
      }

      if (homeAreaId == HomeArea.FOYER) {
        return React.createElement(IconFoyer, otherProps);
      }

      if (homeAreaId == HomeArea.KITCHEN) {
        return React.createElement(IconKitchen, otherProps);
      }

      if (homeAreaId == HomeArea.KITCHENETTE) {
        return React.createElement(IconKitchenette, otherProps);
      }

      if (homeAreaId == HomeArea.LIVING_ROOM) {
        return React.createElement(IconLivingRoom, otherProps);
      }

      if (homeAreaId == HomeArea.LOFT) {
        return React.createElement(IconLoft, otherProps);
      }

      if (homeAreaId == HomeArea.OFFICE) {
        return React.createElement(IconOffice, otherProps);
      }

      if (homeAreaId == HomeArea.PATIO) {
        return React.createElement(IconPatio, otherProps);
      }

      if (homeAreaId == HomeArea.GENERAL_LIVING) {
        return React.createElement(IconGeneralLiving, otherProps);
      }

      return React.createElement("div", null, "error ", homeAreaId);
    }
  }]);

  return HomeAreaIcon;
}(Component);

HomeAreaIcon.propTypes = {
  homeAreaId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};
export default HomeAreaIcon;