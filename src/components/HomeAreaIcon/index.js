'use strict';

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

class HomeAreaIcon extends Component {
  render() {
    const { homeAreaId, ...otherProps } = this.props;

    if (homeAreaId == HomeArea.ALL) {
      return <IconHomeAreaAll {...otherProps} />;
    }
    if (homeAreaId == HomeArea.BACKYARD) {
      return <IconBackyard {...otherProps} />;
    }
    if (homeAreaId == HomeArea.GUEST_BATHROOM) {
      return <IconGuestBathroom {...otherProps} />;
    }
    if (homeAreaId == HomeArea.MASTER_BATHROOM) {
      return <IconMasterBathroom {...otherProps} />;
    }
    if (homeAreaId == HomeArea.POWDER_ROOM) {
      return <IconPowderRoom {...otherProps} />;
    }
    if (homeAreaId == HomeArea.GUEST_BEDROOM) {
      return <IconGuestBedroom {...otherProps} />;
    }
    if (homeAreaId == HomeArea.MASTER_BEDROOM) {
      return <IconMasterBedroom {...otherProps} />;
    }
    if (homeAreaId == HomeArea.DECK) {
      return <IconDeck {...otherProps} />;
    }
    if (homeAreaId == HomeArea.DEN) {
      return <IconDen {...otherProps} />;
    }
    if (homeAreaId == HomeArea.FOYER) {
      return <IconFoyer {...otherProps} />;
    }
    if (homeAreaId == HomeArea.KITCHEN) {
      return <IconKitchen {...otherProps} />;
    }
    if (homeAreaId == HomeArea.KITCHENETTE) {
      return <IconKitchenette {...otherProps} />;
    }
    if (homeAreaId == HomeArea.LIVING_ROOM) {
      return <IconLivingRoom {...otherProps} />;
    }
    if (homeAreaId == HomeArea.LOFT) {
      return <IconLoft {...otherProps} />;
    }
    if (homeAreaId == HomeArea.OFFICE) {
      return <IconOffice {...otherProps} />;
    }
    if (homeAreaId == HomeArea.PATIO) {
      return <IconPatio {...otherProps} />;
    }
    if (homeAreaId == HomeArea.GENERAL_LIVING) {
      return <IconGeneralLiving {...otherProps} />;
    }

    return <div>error {homeAreaId}</div>;
  }
}

HomeAreaIcon.propTypes = {
  homeAreaId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

export default HomeAreaIcon;
