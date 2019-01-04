'use strict';

import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import PropTypes from 'prop-types';
import cx from 'classnames';
import xor from 'lodash/xor';

import DropdownMenu from './components/DropdownMenu';
import IconArrowDropdown from '../../icons/IconArrowDropdown';

import './styles.scss';

class DropdownMenuButton extends Component {
  static propTypes = {
    buttonLabel: PropTypes.string,
    className: PropTypes.string,
    highlightActive: PropTypes.bool,
    menuItems: PropTypes.array,
    onClearAll: PropTypes.func,
    onSelectMenuItem: PropTypes.func.isRequired,
    selectedItems: PropTypes.array,
    shouldCloseFilterMenu: PropTypes.bool,
    shouldSelectObject: PropTypes.bool,
    showArrow: PropTypes.bool
  };

  static defaultProps = {
    buttonLabel: '',
    highlightActive: true,
    menuItems: [],
    selectedItems: [],
    shouldSelectObject: false,
    showArrow: true
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.shouldCloseFilterMenu && prevProps.shouldCloseFilterMenu !== this.props.shouldCloseFilterMenu) {
      this.handleClose();
    }
  }

  handleClickButton = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleClose = event => {
    if (event && this.anchorEl.contains(event.target)) {
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
    const {
      buttonLabel,
      className,
      highlightActive,
      menuItems,
      onClearAll,
      paperClass,
      popperClass,
      selectedItems,
      showArrow,
      shouldSelectObject
    } = this.props;

    const id = open ? 'drop-down-menu-btn' : null;
    const active = highlightActive && selectedItems.length > 0;

    return (
      <Fragment>
        <Button
          // id="drop-down-menu-btn"
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-describedby={id}
          onClick={this.handleClickButton}
          aria-haspopup="true"
          className={cx('drop-down-menu-btn__btn', { 'drop-down-menu-btn__btn--active': active }, className)}
          variant="outlined">
          <Typography className={cx('drop-down-menu-btn__btn-label', { 'drop-down-menu-btn__btn-label--active': active })}>
            {buttonLabel}
          </Typography>
          {showArrow && <IconArrowDropdown />}
        </Button>
        <Popper
          id={id}
          open={open}
          anchorEl={this.anchorEl}
          placement="bottom-start"
          className={cx('drop-down-menu-btn__popper', popperClass)}>
          <Paper className={cx('drop-down-menu-btn__paper', paperClass)}>
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
