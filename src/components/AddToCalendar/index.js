'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';

import IconCalendarPlus from '../../icons/IconCalendarPlus';
import { downloadiCalendar, generateGoogleCalendarUrl, generateYahooCalendarUrl } from '../../utils/calendarFunctions';

import './styles.scss';

const OnlineCalendar = {
  GOOGLE: 'google',
  YAHOO: 'yahoo'
};

class AddToCalendar extends Component {
  static propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    event: PropTypes.object.isRequired,
    disablePortal: PropTypes.bool,
    iconAppearance: PropTypes.bool,
  };

  static defaultProps = {
    classes: {},
    disablePortal: false,
    iconAppearance: false
  };

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleiCalendarClick = () => {
    downloadiCalendar(this.props.event);
    this.handleClose();
  };

  handleOnlineCalendarClick = (calendarType) => {
    const anchor = document.createElement('a');

    let generateCalendarUrl;
    if (calendarType === OnlineCalendar.GOOGLE) {
      generateCalendarUrl = generateGoogleCalendarUrl;
    }
    else if (calendarType === OnlineCalendar.YAHOO) {
      generateCalendarUrl = generateYahooCalendarUrl;
    }
    else {
      generateCalendarUrl = null;
    }
    anchor.href = generateCalendarUrl ? generateCalendarUrl(this.props.event) : '#';
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.click();

    this.handleClose();
  }

  handleGoogleCalendarClick = () => {
    this.handleOnlineCalendarClick(OnlineCalendar.GOOGLE);
  }

  handleYahooCalendarClick = () => {
    this.handleOnlineCalendarClick(OnlineCalendar.YAHOO);
  }

  getButtonRef = (node) => {
    this.anchorEl = node;
  }

  renderTriggerButton() {
    const buttonProps = {
      className: 'add-to-calendar__trigger-button',
      buttonRef: this.getButtonRef,
      onClick: this.handleToggle,
      'aria-owns': this.state.open ? 'add-to-calendar-menu-list-grow' : null,
      'aria-haspopup': 'true'
    };

    if (this.props.iconAppearance) {
      buttonProps.className = cx(buttonProps.className, 'add-to-calendar__icon-button');
      return (
        <IconButton {...buttonProps}>
          <IconCalendarPlus className="add-to-calendar__icon" />
        </IconButton>
      );
    } else {
      buttonProps.color = 'primary';
      buttonProps.variant = 'raised';
    }

    return (
      <Button {...buttonProps}>Add to Calendar</Button>
    );
  }

  render() {
    return (
      <div className={cx('add-to-calendar', this.props.className)}>
        {this.renderTriggerButton()}
        <Popper
          className={cx('add-to-calendar__popper', this.props.classes.popper)}
          open={this.state.open}
          anchorEl={this.anchorEl}
          transition
          disablePortal={this.props.disablePortal}>
          {({ TransitionProps, placement }) => (
            <Grow
              id="add-to-calendar-menu-list-grow"
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}>
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList className="add-to-calendar__menu-list">
                    <MenuItem className="add-to-calendar__menu-item" onClick={this.handleiCalendarClick}>
                      Download iCalendar Event
                    </MenuItem>
                    <MenuItem className="add-to-calendar__menu-item" onClick={this.handleGoogleCalendarClick}>
                      Add to Google Calendar
                    </MenuItem>
                    <MenuItem className="add-to-calendar__menu-item" onClick={this.handleYahooCalendarClick}>
                      Add to Yahoo Calendar
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

export default AddToCalendar;
