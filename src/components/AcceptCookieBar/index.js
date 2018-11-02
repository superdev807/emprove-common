'use strict';

import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

export const AcceptCookieBar = ({ acceptCookie, classes, open }) => (
  <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={open} className={classes.root}>
    <SnackbarContent
      classes={{
        root: classes.content,
        message: classes.message,
        action: classes.action
      }}
      message={
        <Fragment>
          We use cookies to enhance your user experience.{' '}
          <a href="/privacy" target="_blank" rel="noopener noreferrer" className={classes.link}>
            Learn More
          </a>
        </Fragment>
      }
      action={
        <Button variant="outlined" size="small" color="primary" className={classes.action} onClick={acceptCookie}>
          Okay
        </Button>
      }
    />
  </Snackbar>
);

export default withStyles(styles)(AcceptCookieBar);
