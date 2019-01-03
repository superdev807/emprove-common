'use strict';

import React, { Component, Fragment } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import PropTypes from 'prop-types';
import IconArrowDropdown from '../../icons/IconArrowDropdown';
import xor from 'lodash/xor';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DropdownMenu from './components/DropdownMenu';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { withStyles } from '@material-ui/core/styles';

// import styles from './styles';

class DropdownMenuButton extends Component {
  static propTypes = {
    buttonLabel: PropTypes.string,
    menuItems: PropTypes.array,
    onClearAll: PropTypes.func,
    onSelectMenuItem: PropTypes.func.isRequired,
    selectedItems: PropTypes.array,
    shouldSelectObject: PropTypes.bool
  };

  static defaultProps = {
    buttonLabel: '',
    menuItems: [],
    selectedItems: [],
    shouldSelectObject: false
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClickButton = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({
      open: false
    });
  };

  handleSelectMenuItem = value => () => {
    const { selectedItems, onSelectMenuItem } = this.props;
    onSelectMenuItem(xor(selectedItems || [], [value]));
  };

  render() {
    const { open } = this.state;
    const { buttonLabel, menuItems, onClearAll, selectedItems, shouldSelectObject } = this.props;

    const id = open ? 'drop-down-menu-button' : null;

    return (
      <Fragment>
        <Button
          // id="drop-down-menu-button"
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-describedby={id}
          onClick={this.handleClickButton}
          aria-haspopup="true"
          className="drop-down-menu-button__button">
          {buttonLabel}
          <IconArrowDropdown />
        </Button>
        <Popper id={id} open={open} anchorEl={this.anchorEl} placement="bottom-start" className="estimate-menu">
          <Paper>
            <DropdownMenu
              menuItems={menuItems}
              onClearAll={onClearAll}
              onClose={this.handleClose}
              onSelectMenuItem={this.handleSelectMenuItem}
              selectedItems={selectedItems}
              shouldSelectObject={shouldSelectObject}
            />
          </Paper>
        </Popper>
      </Fragment>
    );
  }
}

export { DropdownMenuButton };
export default DropdownMenuButton;
