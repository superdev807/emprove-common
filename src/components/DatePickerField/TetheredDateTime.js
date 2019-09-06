'use strict';

import React from 'react';
import cx from 'classnames';
import CalendarContainer from 'react-datetime/src/CalendarContainer';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import DateTime from 'react-datetime';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';

import './datetime.scss';

export default class TetheredDateTime extends DateTime {
  handleFocus = event => {
    this.setState({ anchorEl: event.target });
    if (!this.state.open) {
      this.openCalendar(event);
    }
  };

  handleClickAway = event => {
    const { anchorEl } = this.state;
    if (anchorEl !== event.target) {
      this.handleClickOutside();
    }
  };

  render() {
    const { renderInput } = this.props;
    const { anchorEl, currentView, open } = this.state;
    let className = cx('rdt', this.props.className);
    let input;

    if (this.props.input) {
      const props = {
        key: 'i',
        type: 'text',
        onFocus: this.handleFocus,
        onMouseDown: this.handleFocus,
        onChange: this.onInputChange,
        onKeyDown: this.onInputKey,
        value: this.state.inputValue,
        ...this.props.inputProps
      };
      input = renderInput ? renderInput(props) : <input {...props} />;
    } else {
      className += ' rdtStatic';
    }

    return (
      <div className={className}>
        {input}
        <Popper open={open} anchorEl={anchorEl} placement="bottom-start" transition className="rdtPopper">
          {({ TransitionProps }) => (
            <ClickAwayListener onClickAway={this.handleClickAway}>
              <Paper className="rdtPicker" elevation={3}>
                <CalendarContainer view={currentView} viewProps={this.getComponentProps()} />
              </Paper>
            </ClickAwayListener>
          )}
        </Popper>
      </div>
    );
  }
}
