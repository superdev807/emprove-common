'use strict';

import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

export const AcceptCookieBar = ({ acceptCookie, classes, open }) => (
  <Snackbar
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    open={open}
    className={classes.root}
    message={
      <Fragment>
        emprove uses cookies to improve our user experience.{' '}
        <a href="/privacy" target="_blank" rel="noopener noreferrer" className={classes.link}>
          Learn More
        </a>
      </Fragment>
    }
    ContentProps={{
      className: classes.content
    }}
    action={
      <Button variant="outlined" size="small" color="inherit" className={classes.action} onClick={acceptCookie}>
        Okay
      </Button>
    }
  />
);

export default withStyles(styles)(AcceptCookieBar);
