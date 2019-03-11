'use strict';

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import xor from 'lodash/xor';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class MultiSegmentField extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    deselectAllErrorMessage: PropTypes.string,
    disableDeselectAll: PropTypes.bool,
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      deselectAllTried: false,
      isMobile: false
    };
    this.mobileWidth = window.matchMedia('(max-width: 400px)');
  }

  componentDidMount() {
    this.mobileWidth.addListener(this.isMobile);
    this.isMobile(this.mobileWidth);
  }

  componentWillUnmount() {
    this.mobileWidth.removeListener(this.isMobile);
  }

  isMobile = mobileWidth => {
    if (mobileWidth.matches) {
      this.setState({
        isMobile: true
      });
    } else {
      this.setState({
        isMobile: false
      });
    }
  };

  handleChange = value => () => {
    const { input, disableDeselectAll } = this.props;
    const { deselectAllTried } = this.state;
    const newValue = xor(input.value, [value]);
    if (disableDeselectAll && newValue.length === 0) {
      this.setState({ deselectAllTried: true });
    } else {
      deselectAllTried && this.setState({ deselectAllTried: false });
      input.onBlur(newValue);
    }
  };

  render() {
    const {
      classes,
      deselectAllErrorMessage,
      input,
      options,
      meta: { touched, error }
    } = this.props;
    const { deselectAllTried, isMobile } = this.state;

    return (
      <Grid container spacing={0}>
        {options.map((option, index) => {
          const isSelected = input.value.indexOf(option.value) > -1;
          return (
            <Grid key={index} item xs={isMobile ? 4 : 2}>
              <Button
                fullWidth
                className={classes.segment}
                variant="contained"
                color={isSelected ? 'primary' : 'default'}
                onClick={this.handleChange(option.value)}>
                {option.label}
              </Button>
            </Grid>
          );
        })}
        {touched && error && <FormHelperText error>{error}</FormHelperText>}
        {deselectAllTried && <FormHelperText error>{deselectAllErrorMessage}</FormHelperText>}
      </Grid>
    );
  }
}

export default withStyles(styles)(MultiSegmentField);
