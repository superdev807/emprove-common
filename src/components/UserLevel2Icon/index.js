'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IconFeatureBathroomAccessories from '../../icons/IconFeatureBathroomAccessories';
import IconFeatureCabinets from '../../icons/IconFeatureCabinets';
import IconFeatureCasework from '../../icons/IconFeatureCasework';
import IconFeatureCeilingFinishes from '../../icons/IconFeatureCeilingFinishes';
import IconFeatureCommunicationCabling from '../../icons/IconFeatureCommunicationCabling';
import IconFeatureCountertops from '../../icons/IconFeatureCountertops';
import IconFeatureDevicesAndTrims from '../../icons/IconFeatureDevicesAndTrims';
import IconFeatureElectricalWiring from '../../icons/IconFeatureElectricalWiring';
import IconFeatureEquipment from '../../icons/IconFeatureEquipment';
import IconFeatureExteriorDoorsAndWindows from '../../icons/IconFeatureExteriorDoorsAndWindows';
import IconFeatureExteriorPaving from '../../icons/IconFeatureExteriorPaving';
import IconFeatureExteriorWalls from '../../icons/IconFeatureExteriorWalls';
import IconFeatureFireplaces from '../../icons/IconFeatureFireplaces';
import IconFeatureFloor from '../../icons/IconFeatureFloor';
import IconFeatureFloorConstruction from '../../icons/IconFeatureFloorConstruction';
import IconFeatureInteriorCeilingConstruction from '../../icons/IconFeatureInteriorCeilingConstruction';
import IconFeatureInteriorDoorsAndHardware from '../../icons/IconFeatureInteriorDoorsAndHardware';
import IconFeatureInteriorWallConstruction from '../../icons/IconFeatureInteriorWallConstruction';
import IconFeatureKitchenAppliances from '../../icons/IconFeatureKitchenAppliances';
import IconFeatureLandscaping from '../../icons/IconFeatureLandscaping';
import IconFeatureLighting from '../../icons/IconFeatureLighting';
import IconFeatureMachanicalDucting from '../../icons/IconFeatureMachanicalDucting';
import IconFeatureMachanicalPiping from '../../icons/IconFeatureMachanicalPiping';
import IconFeatureMolding from '../../icons/IconFeatureMolding';
import IconFeaturePlumbingFixtures from '../../icons/IconFeaturePlumbingFixtures';
import IconFeaturePlumbingPiping from '../../icons/IconFeaturePlumbingPiping';
import IconFeaturePoolAndWaterFeatures from '../../icons/IconFeaturePoolAndWaterFeatures';
import IconFeatureRailings from '../../icons/IconFeatureRailings';
import IconFeatureRoof from '../../icons/IconFeatureRoof';
import IconFeatureShelving from '../../icons/IconFeatureShelving';
import IconFeatureVanities from '../../icons/IconFeatureVanities';
import IconFeatureWallBaseTrims from '../../icons/IconFeatureWallBaseTrims';
import IconFeatureWallFinishes from '../../icons/IconFeatureWallFinishes';
import IconFeatureWindowTreatments from '../../icons/IconFeatureWindowTreatments';
import { UserLevel2 } from '../../utils/enums';

class UserLevel2Icon extends Component {
  render() {
    const { ul2Id, ...otherProps } = this.props;

    switch (ul2Id) {
      case UserLevel2.FLOOR_CONSTRUCTION:
        return <IconFeatureFloorConstruction {...otherProps} />;
      case UserLevel2.EXTERIOR_WALLS:
        return <IconFeatureExteriorWalls {...otherProps} />;
      case UserLevel2.ROOF:
        return <IconFeatureRoof {...otherProps} />;
      case UserLevel2.INTERIOR_WALL_CONSTRUCTION:
        return <IconFeatureInteriorWallConstruction {...otherProps} />;
      case UserLevel2.INTERIOR_CEILING_CONSTRUCTION:
        return <IconFeatureInteriorCeilingConstruction {...otherProps} />;
      case UserLevel2.FLOORING:
        return <IconFeatureFloor {...otherProps} />;
      case UserLevel2.WALL_FINISHES:
        return <IconFeatureWallFinishes {...otherProps} />;
      case UserLevel2.CEILING_FINISHES:
        return <IconFeatureCeilingFinishes {...otherProps} />;
      case UserLevel2.EXTERIOR_DOORS_AND_WINDOWS:
        return <IconFeatureExteriorDoorsAndWindows {...otherProps} />;
      case UserLevel2.INTERIOR_DOORS_AND_HARDWARE:
        return <IconFeatureInteriorDoorsAndHardware {...otherProps} />;
      case UserLevel2.WALL_BASE_TRIM:
        return <IconFeatureWallBaseTrims {...otherProps} />;
      case UserLevel2.MOLDINGS:
        return <IconFeatureMolding {...otherProps} />;
      case UserLevel2.RAILINGS:
        return <IconFeatureRailings {...otherProps} />;
      case UserLevel2.CABINETS:
        return <IconFeatureCabinets {...otherProps} />;
      case UserLevel2.CASEWORK:
        return <IconFeatureCasework {...otherProps} />;
      case UserLevel2.SHELVING:
        return <IconFeatureShelving {...otherProps} />;
      case UserLevel2.VANITIES:
        return <IconFeatureVanities {...otherProps} />;
      case UserLevel2.COUNTERTOPS:
        return <IconFeatureCountertops {...otherProps} />;
      case UserLevel2.WINDOW_TREATMENTS:
        return <IconFeatureWindowTreatments {...otherProps} />;
      case UserLevel2.BATH_ACCESSORIES:
        return <IconFeatureBathroomAccessories {...otherProps} />;
      case UserLevel2.KITCHEN_APPLIANCES:
        return <IconFeatureKitchenAppliances {...otherProps} />;
      case UserLevel2.FIREPLACES:
        return <IconFeatureFireplaces {...otherProps} />;
      case UserLevel2.POOLS_AND_WATER_FEATURES:
        return <IconFeaturePoolAndWaterFeatures {...otherProps} />;
      case UserLevel2.PLUMBING_FIXTURES:
        return <IconFeaturePlumbingFixtures {...otherProps} />;
      case UserLevel2.LIGHTING:
        return <IconFeatureLighting {...otherProps} />;
      case UserLevel2.DEVICES_AND_TRIMS:
        return <IconFeatureDevicesAndTrims {...otherProps} />;
      case UserLevel2.PLUMBING_PIPING:
        return <IconFeaturePlumbingPiping {...otherProps} />;
      case UserLevel2.ELECTRICAL_WIRING:
        return <IconFeatureElectricalWiring {...otherProps} />;
      case UserLevel2.COMMUNICATIONS_CABLING:
        return <IconFeatureCommunicationCabling {...otherProps} />;
      case UserLevel2.MECHANICAL_PIPING:
        return <IconFeatureMachanicalPiping {...otherProps} />;
      case UserLevel2.MECHANICAL_DUCTING:
        return <IconFeatureMachanicalDucting {...otherProps} />;
      case UserLevel2.EQUIPMENT:
        return <IconFeatureEquipment {...otherProps} />;
      case UserLevel2.LANDSCAPING:
        return <IconFeatureLandscaping {...otherProps} />;
      case UserLevel2.EXTERIOR_PAVING:
        return <IconFeatureExteriorPaving {...otherProps} />;
      default:
        return <div>N/A</div>;
    }
  }
}

UserLevel2Icon.propTypes = {
  ul2Id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

export default UserLevel2Icon;
