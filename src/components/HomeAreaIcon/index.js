'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    const { homeAreaId } = this.props;

    if (homeAreaId == HomeArea.BACKYARD) {
      return <IconBackyard />;
    }
    if (homeAreaId == HomeArea.GUEST_BATHROOM) {
      return <IconGuestBathroom />;
    }
    if (homeAreaId == HomeArea.MASTER_BATHROOM) {
      return <IconMasterBathroom />;
    }
    if (homeAreaId == HomeArea.POWDER_ROOM) {
      return <IconPowderRoom />;
    }
    if (homeAreaId == HomeArea.GUEST_BEDROOM) {
      return <IconGuestBedroom />;
    }
    if (homeAreaId == HomeArea.MASTER_BEDROOM) {
      return <IconMasterBedroom />;
    }
    if (homeAreaId == HomeArea.DECK) {
      return <IconDeck />;
    }
    if (homeAreaId == HomeArea.DEN) {
      return <IconDen />;
    }
    if (homeAreaId == HomeArea.FOYER) {
      return <IconFoyer />;
    }
    if (homeAreaId == HomeArea.KITCHEN) {
      return <IconKitchen />;
    }
    if (homeAreaId == HomeArea.KITCHENETTE) {
      return <IconKitchenette />;
    }
    if (homeAreaId == HomeArea.LIVING_ROOM) {
      return <IconLivingRoom />;
    }
    if (homeAreaId == HomeArea.LOFT) {
      return <IconLoft />;
    }
    if (homeAreaId == HomeArea.OFFICE) {
      return <IconOffice />;
    }
    if (homeAreaId == HomeArea.PATIO) {
      return <IconPatio />;
    }
    if (homeAreaId == HomeArea.GENERAL_LIVING) {
      return <IconGeneralLiving />;
    }

    return <div>error {homeAreaId}</div>;
  }
}

HomeAreaIcon.propTypes = {
  homeAreaId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired
};

export default HomeAreaIcon;
