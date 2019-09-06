'use strict';

import React, { Fragment } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MuiRadio from '@material-ui/core/Radio';
import RadioButtonChecked from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import { withStyles } from '@material-ui/core/styles';

import styles, { labelStyles, radioStyles } from './styles';

export const Radio = withStyles(radioStyles)(MuiRadio);
export const ControlLabel = withStyles(labelStyles)(FormControlLabel);

const OutlinedRadio = React.forwardRef((props, ref) => {
  const { checked, classes, className, disabled, label, value, ...otherProps } = props;
  return disabled ? (
    <ControlLabel className={className} control={<Fragment />} ref={ref} label={label} disabled {...otherProps} />
  ) : (
    <ControlLabel
      value={value}
      className={className}
      control={
        <Radio
          checked={checked}
          color="primary"
          icon={<RadioButtonUnchecked className={classes.checkIcon} />}
          checkedIcon={<RadioButtonChecked className={classes.checkIcon} />}
        />
      }
      ref={ref}
      label={label}
      {...otherProps}
    />
  );
});

export default withStyles(styles)(OutlinedRadio);
