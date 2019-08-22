'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import cx from 'classnames';
import debounce from 'lodash/debounce';
import get from 'lodash/get';

import './styles.scss';

class SliderField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };

    this.debouncedHandleChange = debounce(this.debouncedHandleChange, 500);
  }

  componentDidMount() {
    this.setState({
      value: this.props.input.value
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.prevValue = prevState.value;
    }
    if (prevState.value === this.state.value && this.state.value !== this.props.input.value) {
      this.setState({
        value: this.props.input.value
      });
    }
  }

  createLabel(item) {
    return (
      <Typography
        onClick={() => this.handleChange(event, item.id)}
        className={cx(
          'slider-field__label-text',
          { 'slider-field__label-text--selected': this.state.value === item.id },
          this.props.classes.labelText
        )}>
        {item.description}
      </Typography>
    );
  }

  renderSliderLabels() {
    const { classes, options } = this.props;
    const labelPosition = 100 / (options.length - 1);

    return (
      <div className={cx('slider-field__labels', classes.labels)}>
        {options.map((item, index) => {
          return (
            <div key={item.id} className={cx('slider-field__label', classes.label)} style={{ left: `${index * labelPosition}%` }}>
              {this.props.showTooltip ? <Tooltip title={item.tooltipText}>{this.createLabel(item)}</Tooltip> : this.createLabel(item)}
            </div>
          );
        })}
      </div>
    );
  }

  renderTickMarks() {
    const { classes, options } = this.props;
    const tickPosition = 100 / (options.length - 1);

    const createTick = (index, item) => {
      return (
        <div
          key={item.id}
          className={cx('slider-field__tick', this.props.classes.tick, { 'slider-field__tick--passed': this.state.value > item.id })}
          style={{ left: `${index * tickPosition}%` }}
        />
      );
    };

    return (
      <div className={cx('slider-field__ticks', classes.ticks)}>
        {options.map((item, index) => {
          return this.props.showTooltip ? (
            <Tooltip key={item.id} title={item.tooltipText}>
              {createTick(index, item)}
            </Tooltip>
          ) : (
            createTick(index, item)
          );
        })}
      </div>
    );
  }

  handleChange = (event, value) => {
    this.setState({ value });
    /* 02/07/18 because handleDragEnd currently does not give you value and we shouldn't
    make a call to api mulitple times if user is just sliding past a number */
    this.debouncedHandleChange(event, value);
  };

  revertValue = () => {
    this.setState({ value: get(this.props, 'initialValue', this.prevValue) });
  };

  debouncedHandleChange = (event, value) => {
    const { onConfirmChange } = this.props;
    if (onConfirmChange) {
      onConfirmChange(value, () => this.props.input.onChange(value), this.revertValue);
    } else {
      this.props.input.onChange && this.props.input.onChange(value);
    }
  };

  handleDragEnd = event => {
    this.props.onDragEnd && this.props.onDragEnd(event);
  };

  getReturnValue(value) {
    const { options, min, step } = this.props;

    let returnValue = value;
    if (options) {
      const index = (value - min) / step;
      returnValue = options[index];
    }

    return returnValue;
  }

  render() {
    const {
      classes,
      className,
      disabled,
      helpText,
      input,
      max,
      min,
      onDragStart,
      showLabels,
      showTicks,
      sliderIcon,
      step,
      vertical
    } = this.props;

    return (
      <div className={cx('slider-field', className)}>
        {helpText && <Typography className={cx('slider-field__helpText', classes.helpTextClassName)} />}
        <Slider
          {...input}
          classes={{ root: 'slider-field__root', rail: 'slider-field__track', track: 'slider-field__track-before' }}
          value={this.state.value}
          min={min}
          max={max}
          step={step}
          onChange={this.handleChange}
          onDragEnd={this.handleDragEnd}
          onDragStart={onDragStart}
          thumb={sliderIcon}
          disabled={disabled}
          vertical={vertical}
        />
        {showTicks && this.renderTickMarks()}
        {showLabels && this.renderSliderLabels()}
      </div>
    );
  }
}

SliderField.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.string,
  onDragEnd: PropTypes.func,
  onDragStart: PropTypes.func,
  showLabels: PropTypes.bool,
  showTicks: PropTypes.bool
};

SliderField.defaultProps = {
  classes: {},
  showLabels: true,
  showTicks: true
};

export default SliderField;
