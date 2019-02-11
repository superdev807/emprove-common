'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';
import cx from 'classnames';
import debounce from 'lodash/debounce';

import './styles.scss';

class SliderField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };

    this.debouncedHandleChange = debounce(this.debouncedHandleChange, 500);
  }

  componentDidUpdate(prevProps) {
    // sets the initial value
    if (prevProps.initialValue !== this.props.initialValue) {
      this.setState({
        value: this.props.initialValue
      });
    }
  }

  renderSliderLabels() {
    const { classes, options } = this.props;
    const { value } = this.state;

    const labelPosition = 100 / (options.length - 1);

    return (
      <div className={cx('slider-field__labels', classes.labelsClassName)}>
        {options.map((item, index) => {
          return (
            <div key={item.id} className={cx('slider-field__label', classes.labelClassName)} style={{ left: `${index * labelPosition}%` }}>
              <Typography className={cx('slider-field__label-text', { 'slider-field__label-text--selected': value === item.id })}>
                {item.description}
              </Typography>
            </div>
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

  debouncedHandleChange = (event, value) => {
    this.props.onChange && this.props.onChange(event, this.getReturnValue(value));
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
    const { className, classes, helpText, disabled, max, min, onDragEnd, onDragStart, step, sliderIcon, vertical } = this.props;

    return (
      <div className={cx('slider-field', className)}>
        {helpText && <Typography className={cx('slider-field__helpText', classes.helpTextClassName)} />}
        <Slider
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
        {this.renderSliderLabels()}
      </div>
    );
  }
}

SliderField.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.string,
  onDragEnd: PropTypes.func,
  onDragStart: PropTypes.func
};

SliderField.defaultProps = {
  classes: {}
};

export default SliderField;
