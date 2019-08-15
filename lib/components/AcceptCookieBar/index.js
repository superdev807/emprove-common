'use strict';

import "core-js/modules/es.string.link";
import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
export var AcceptCookieBar = function AcceptCookieBar(_ref) {
  var acceptCookie = _ref.acceptCookie,
      classes = _ref.classes,
      open = _ref.open;
  return React.createElement(Snackbar, {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    open: open,
    className: classes.root
  }, React.createElement(SnackbarContent, {
    classes: {
      root: classes.content,
      message: classes.message,
      action: classes.action
    },
    message: React.createElement(Fragment, null, "We use cookies to enhance your user experience.", ' ', React.createElement("a", {
      href: process.env.CONSUMER_DOMAIN + '/privacy',
      className: classes.link
    }, "Learn More")),
    action: React.createElement(Button, {
      variant: "outlined",
      size: "small",
      color: "primary",
      className: classes.action,
      onClick: acceptCookie
    }, "Okay")
  }));
};
export default withStyles(styles)(AcceptCookieBar);