'use strict';

import _objectWithoutProperties from "@babel/runtime-corejs3/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconCircleQuestionMark from '../../icons/IconCircleQuestionMark';
import IconUL2BathroomAccessories from '../../icons/IconUL2BathroomAccessories';
import IconUL2Cabinets from '../../icons/IconUL2Cabinets';
import IconUL2Casework from '../../icons/IconUL2Casework';
import IconUL2CeilingFinishes from '../../icons/IconUL2CeilingFinishes';
import IconUL2CommunicationCabling from '../../icons/IconUL2CommunicationCabling';
import IconUL2Countertops from '../../icons/IconUL2Countertops';
import IconUL2DevicesAndTrims from '../../icons/IconUL2DevicesAndTrims';
import IconUL2ElectricalWiring from '../../icons/IconUL2ElectricalWiring';
import IconUL2Equipment from '../../icons/IconUL2Equipment';
import IconUL2ExteriorDoorsAndWindows from '../../icons/IconUL2ExteriorDoorsAndWindows';
import IconUL2ExteriorPaving from '../../icons/IconUL2ExteriorPaving';
import IconUL2ExteriorWalls from '../../icons/IconUL2ExteriorWalls';
import IconUL2Fireplaces from '../../icons/IconUL2Fireplaces';
import IconUL2Floor from '../../icons/IconUL2Floor';
import IconUL2FloorConstruction from '../../icons/IconUL2FloorConstruction';
import IconUL2InteriorCeilingConstruction from '../../icons/IconUL2InteriorCeilingConstruction';
import IconUL2InteriorDoorsAndHardware from '../../icons/IconUL2InteriorDoorsAndHardware';
import IconUL2InteriorWallConstruction from '../../icons/IconUL2InteriorWallConstruction';
import IconUL2KitchenAppliances from '../../icons/IconUL2KitchenAppliances';
import IconUL2Landscaping from '../../icons/IconUL2Landscaping';
import IconUL2Lighting from '../../icons/IconUL2Lighting';
import IconUL2MachanicalDucting from '../../icons/IconUL2MachanicalDucting';
import IconUL2MachanicalPiping from '../../icons/IconUL2MachanicalPiping';
import IconUL2Molding from '../../icons/IconUL2Molding';
import IconUL2PlumbingFixtures from '../../icons/IconUL2PlumbingFixtures';
import IconUL2PlumbingPiping from '../../icons/IconUL2PlumbingPiping';
import IconUL2PoolAndWaterFeatures from '../../icons/IconUL2PoolAndWaterFeatures';
import IconUL2Railings from '../../icons/IconUL2Railings';
import IconUL2Roof from '../../icons/IconUL2Roof';
import IconUL2Shelving from '../../icons/IconUL2Shelving';
import IconUL2Vanities from '../../icons/IconUL2Vanities';
import IconUL2WallBaseTrims from '../../icons/IconUL2WallBaseTrims';
import IconUL2WallFinishes from '../../icons/IconUL2WallFinishes';
import IconUL2WindowTreatments from '../../icons/IconUL2WindowTreatments';
var userLevel2 = {
  2000: IconUL2FloorConstruction,
  2005: IconUL2ExteriorWalls,
  2010: IconUL2Roof,
  2015: IconUL2InteriorWallConstruction,
  2020: IconUL2InteriorCeilingConstruction,
  2025: IconUL2Floor,
  2030: IconUL2WallFinishes,
  2035: IconUL2CeilingFinishes,
  2040: IconUL2ExteriorDoorsAndWindows,
  2045: IconUL2InteriorDoorsAndHardware,
  2050: IconUL2WallBaseTrims,
  2055: IconUL2Molding,
  2060: IconUL2Railings,
  2065: IconUL2Cabinets,
  2070: IconUL2Casework,
  2075: IconUL2Shelving,
  2080: IconUL2Vanities,
  2085: IconUL2Countertops,
  2090: IconUL2WindowTreatments,
  2095: IconUL2BathroomAccessories,
  2100: IconUL2KitchenAppliances,
  2105: IconUL2Fireplaces,
  2110: IconUL2PoolAndWaterFeatures,
  2115: IconUL2PlumbingFixtures,
  2120: IconUL2Lighting,
  2125: IconUL2DevicesAndTrims,
  2130: IconUL2PlumbingPiping,
  2135: IconUL2ElectricalWiring,
  2140: IconUL2CommunicationCabling,
  2145: IconUL2MachanicalPiping,
  2150: IconUL2MachanicalDucting,
  2155: IconUL2Equipment,
  2160: IconUL2Landscaping,
  2165: IconUL2ExteriorPaving
};

var UserLevel2Icon =
/*#__PURE__*/
function (_Component) {
  _inherits(UserLevel2Icon, _Component);

  function UserLevel2Icon() {
    _classCallCheck(this, UserLevel2Icon);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserLevel2Icon).apply(this, arguments));
  }

  _createClass(UserLevel2Icon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          ul2Id = _this$props.ul2Id,
          otherProps = _objectWithoutProperties(_this$props, ["ul2Id"]);

      var IconComponent = userLevel2[ul2Id] || IconCircleQuestionMark;
      return React.createElement(IconComponent, otherProps);
    }
  }]);

  return UserLevel2Icon;
}(Component);

UserLevel2Icon.propTypes = {
  ul2Id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};
export default UserLevel2Icon;