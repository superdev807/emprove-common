'use strict';

import React from 'react';
import cx from 'classnames';
import get from 'lodash/get';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { formatPhoneNumber } from '../../../../utils/phonenumberFunctions';

const RealtorInfo = ({ classes, realtorDetails }) => (
  <div className={classes.realtorInfo}>
    <Grid container spacing={16}>
      <Grid item xs={6}>
        <div className={cx(classes.field, classes.imageField)}>
          <Typography className={cx(classes.label, classes.imageFieldLabel)}>Logo:</Typography>
          <div className={classes.image} style={{ backgroundImage: `url(${get(realtorDetails, 'logo.url', '')})` }} />
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className={cx(classes.field, classes.imageField)}>
          <Typography className={cx(classes.label, classes.imageFieldLabel)}>Profile photo:</Typography>
          <div className={classes.image} style={{ backgroundImage: `url(${get(realtorDetails, 'profilePicture.url', '')})` }} />
        </div>
      </Grid>
    </Grid>
    <Grid container spacing={16}>
      <Grid item xs={4}>
        <Typography className={classes.label}>Realtor's Name:</Typography>
        <Typography className={classes.textLabel}>{get(realtorDetails, 'profileName', '-')}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography className={classes.label}>Phone number:</Typography>
        <Typography className={classes.textLabel}>{formatPhoneNumber(get(realtorDetails, 'phoneNumber', '-'))}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography className={classes.label}>Email:</Typography>
        <Typography className={classes.textLabel}>{get(realtorDetails, 'email', '-')}</Typography>
      </Grid>
    </Grid>
  </div>
);

export default RealtorInfo;
