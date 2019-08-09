'use strict';

import React from 'react';
import cx from 'classnames';
import get from 'lodash/get';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { formatPhoneNumber } from '../../../../utils/phonenumberFunctions';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

var RealtorInfo = function RealtorInfo(_ref) {
  var classes = _ref.classes,
      realtorDetails = _ref.realtorDetails;
  return React.createElement("div", {
    className: classes.realtorInfo
  }, React.createElement(Grid, {
    container: true,
    spacing: 16
  }, React.createElement(Grid, {
    item: true,
    xs: 6
  }, React.createElement("div", {
    className: cx(classes.field, classes.imageField)
  }, React.createElement(Typography, {
    className: cx(classes.label, classes.imageFieldLabel)
  }, "Logo:"), React.createElement("div", {
    className: classes.image,
    style: {
      backgroundImage: "url(".concat(get(realtorDetails, 'logo.url', ''), ")")
    }
  }))), React.createElement(Grid, {
    item: true,
    xs: 6
  }, React.createElement("div", {
    className: cx(classes.field, classes.imageField)
  }, React.createElement(Typography, {
    className: cx(classes.label, classes.imageFieldLabel)
  }, "Profile photo:"), React.createElement("div", {
    className: classes.image,
    style: {
      backgroundImage: "url(".concat(get(realtorDetails, 'profilePicture.url', ''), ")")
    }
  })))), React.createElement(Grid, {
    container: true,
    spacing: 16
  }, React.createElement(Grid, {
    item: true,
    xs: 4
  }, React.createElement(Typography, {
    className: classes.label
  }, "Realtor's Name:"), React.createElement(Typography, {
    className: classes.textLabel
  }, get(realtorDetails, 'profileName', '-'))), React.createElement(Grid, {
    item: true,
    xs: 4
  }, React.createElement(Typography, {
    className: classes.label
  }, "Phone number:"), React.createElement(Typography, {
    className: classes.textLabel
  }, formatPhoneNumber(get(realtorDetails, 'phoneNumber', '-')))), React.createElement(Grid, {
    item: true,
    xs: 4
  }, React.createElement(Typography, {
    className: classes.label
  }, "Email:"), React.createElement(Typography, {
    className: classes.textLabel
  }, get(realtorDetails, 'email', '-')))));
};

export default withStyles(styles)(RealtorInfo);