'use strict';

import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import { formatAddress } from '../../../../utils/pureFunctions';

import './styles.scss';

class FlyerFormAddressField extends Component {
  render() {
    const { anchorEl, onClickManualEntry, onClickProperty, onClose, open, properties } = this.props;

    return (
      <Popper className="flyer-address-field-popper" open={open} anchorEl={anchorEl} disablePortal>
        <Paper>
          <MenuList className="flyer-address-field-popper__list">
            {properties.map((property, index) => {
              return (
                <MenuItem key={property.id} className="flyer-address-field-popper__item" onClick={() => onClickProperty(property)}>
                  {formatAddress({ ...property })}
                </MenuItem>
              );
            })}
            <MenuItem className="flyer-address-field-popper__item" key={0} onClick={onClickManualEntry}>
              I will manually enter
            </MenuItem>
          </MenuList>
        </Paper>
      </Popper>
    );
  }
}

export default FlyerFormAddressField;
