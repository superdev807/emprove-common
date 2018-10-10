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

import './styles.scss';

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
  }

  handleOpen = () => {
    this.setState({
      open: true
    });
  }

  handleClose = () => {
    this.setState({
      open: false
    });
  }

  formatText(text) {
    // .replace(/ /g, '+')
    return encodeURIComponent(text);
  }

  formatDate(date) {
    // 2018-09-28T18:44:38.000Z
    return date.replace(/-|:|\.\d\d\d/g, '');
  }

  getGoogleCalendarLink() {
    // [ ] convert ' ' to '+'
    const { event } = this.props;

    let url = 'https://calendar.google.com/calendar/r/eventedit';
    url += `?text=${this.formatText(event.title)}`;
    url += `&dates=${this.formatDate(event.start)}/${this.formatDate(event.end)}`;
    url += `&details=${this.formatText(event.details)}`;
    url += `&location=${this.formatText(event.location)}`;

    return url;
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
    }

    return (
      <Button {...buttonProps}>Add to Calendar</Button>
    );
  }

  render() {
    return (
      <div className={cx('add-to-calendar', this.props.className)}>
        {this.renderTriggerButton()}
        <Popper className={cx('add-to-calendar__popper', this.props.classes.popper)} open={this.state.open} anchorEl={this.anchorEl} transition disablePortal={this.props.disablePortal}>
          {({ TransitionProps, placement }) => (
            <Grow id="add-to-calendar-menu-list-grow" {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}>
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList className="add-to-calendar__menu-list">
                    <MenuItem className="add-to-calendar__menu-item">iCalendar</MenuItem>
                    <MenuItem className="add-to-calendar__menu-item" component="a"  href={this.getGoogleCalendarLink()} target="_blank" rel="noopener noreferrer">
                      Add to Google Calendar
                    </MenuItem>
                    <MenuItem className="add-to-calendar__menu-item">Add to Outlook Calendar</MenuItem>
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
