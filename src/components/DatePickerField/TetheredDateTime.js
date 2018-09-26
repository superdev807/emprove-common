import React from 'react';
import cx from 'classnames';
import CalendarContainer from 'react-datetime/src/CalendarContainer';
import DateTime from 'react-datetime';
import TetherComponent from 'react-tether';

import './datetime.scss';

export default class TetheredDateTime extends DateTime {
  render() {
    const { renderInput } = this.props;
    let className = cx('rdt', this.props.className);
    let children;

    if (this.props.input) {
      const props = {
        key: 'i',
        type: 'text',
        onFocus: this.openCalendar,
        onChange: this.onInputChange,
        onKeyDown: this.onInputKey,
        value: this.state.inputValue,
        ...this.props.inputProps
      };
      children = renderInput ? renderInput(props) : <input {...props} />;
    } else {
      className += ' rdtStatic';
    }

    return (
      <div className={className}>
        <TetherComponent
          attachment="top left"
          targetAttachment="bottom left"
          constraints={[
            {
              to: 'scrollParent'
            },
            {
              to: 'window',
              pin: ['bottom']
            }
          ]}>
          {children}
          {this.state.open && (
            <div className="rdtPicker">
              <CalendarContainer
                view={this.state.currentView}
                viewProps={this.getComponentProps()}
                onClickOutside={this.handleClickOutside}
              />
            </div>
          )}
        </TetherComponent>
      </div>
    );
  }
}
