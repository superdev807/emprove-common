'use strict';

import React, { Fragment, Component } from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import IconButton from '@material-ui/core/IconButton';
import IconClose from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import cx from 'classnames';
import get from 'lodash/get';
import includes from 'lodash/includes';

import './styles.scss';

class DropdownMenu extends Component {
  static propTypes = {
    className: PropTypes.object,
    disableClickAway: PropTypes.bool,
    menuItems: PropTypes.array,
    onSelectMenuItem: PropTypes.func.isRequired,
    shouldSelectObject: PropTypes.bool,
    onClearAll: PropTypes.func
  };

  static defaultProps = {
    className: {},
    disableClickAway: false,
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

  renderDropdownMenu() {
    const { className, disableClickAway, menuItems, onSelectMenuItem, selectedItems, shouldSelectObject, onClearAll, onClose } = this.props;

    const menuContent = (
      <FormGroup>
        <div className={cx('drop-down-menu__items-container', get(className, 'itemsContainer'))}>
          {menuItems.map(item => {
            const selected = shouldSelectObject
              ? (selectedItems || []).some(ul3 => ul3.id === item.id)
              : includes(selectedItems || [], item.id);
            return (
              <FormControlLabel
                className={cx('drop-down-menu__item', get(className, 'item'))}
                classes={{ label: cx('drop-down-menu__item-label', { 'drop-down-menu__item-label--selected': selected }) }}
                key={item.id}
                control={
                  <Checkbox
                    className="drop-down-menu__checkbox"
                    checked={selected}
                    onChange={shouldSelectObject ? onSelectMenuItem(item) : onSelectMenuItem(item.id)}
                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon color="primary" fontSize="small" />}
                    value={`${item.id}`} //Checkbox wants value to be type string
                  />
                }
                label={item.label}
              />
            );
          })}
        </div>
        {onClearAll && (
          <div className="drop-down-menu__footer">
            <div className="drop-down-menu__divider" />
            <Button className="drop-down-menu__clear-btn" onClick={onClearAll}>
              Clear All
            </Button>
          </div>
        )}
      </FormGroup>
    );

    return disableClickAway ? menuContent : <ClickAwayListener onClickAway={onClose}>{menuContent}</ClickAwayListener>;
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
