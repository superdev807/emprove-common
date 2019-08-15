'use strict';

import _objectWithoutProperties from "@babel/runtime-corejs3/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
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