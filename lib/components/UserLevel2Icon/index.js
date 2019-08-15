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