'use strict';

import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import IconClose from '@material-ui/icons/Close';
import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import includes from 'lodash/includes';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Typography } from '@material-ui/core';

// import './styles.scss';

class DropdownMenu extends Component {
  static propTypes = {
    menuItems: PropTypes.array,
    onSelectMenuItem: PropTypes.func.isRequired,
    shouldSelectObject: PropTypes.bool,
    onClearAll: PropTypes.func
  };

  static defaultProps = {
    menuItems: [],
    shouldSelectObject: false
  };

  constructor(props) {
    super(props);

    this.state = {
      showMenu: true,
      showDesignStyleMenu: true,
      showUserLevel3Menu: true
    };
  }

  toggleMenu = menuName => () => {
    const showMenu = `show${menuName}`;

    this.setState({
      [showMenu]: !this.state[showMenu]
    });
  };

  renderDropdownMenu() {
    const { menuItems, onSelectMenuItem, selectedItems, shouldSelectObject, onClearAll, onClose } = this.props;
    return (
      <ClickAwayListener onClickAway={onClose}>
        <FormGroup>
          {menuItems.map(item => (
            <FormControlLabel
              key={item.id}
              control={
                <Checkbox
                  checked={
                    shouldSelectObject ? (selectedItems || []).some(ul3 => ul3.id === item.id) : includes(selectedItems || [], item.id)
                  }
                  onChange={shouldSelectObject ? onSelectMenuItem(item) : onSelectMenuItem(item.id)}
                  value={`${item.id}`} //Checkbox wants value to be type string
                />
              }
              label={item.label}
            />
          ))}
          <div className="wook-menu-divider" />
          <Typography className="wook-test-text" onClick={onClearAll}>
            Clear All
          </Typography>
        </FormGroup>
      </ClickAwayListener>
    );
  }

  render() {
    const { onClose } = this.props;

    return (
      <div className={cx('drop-down-menu', { 'drop-down-menu--mobile': this.props.forMobile })}>
        <div className={cx('drop-down-menu__menu', { 'drop-down-menu__menu--mobile': this.props.forMobile })}>
          {onClose && (
            <IconButton className={cx('drop-down-menu__menu-close')} onClick={onClose}>
              <IconClose className="drop-down-menu__menu-close-btn" />
            </IconButton>
          )}
          <Collapse in={this.state.showMenu} timeout="auto">
            {this.renderDropdownMenu()}
          </Collapse>
        </div>
      </div>
    );
  }
}

export default DropdownMenu;
